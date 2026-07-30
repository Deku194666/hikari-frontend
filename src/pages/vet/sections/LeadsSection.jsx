



import React, { useState, useEffect } from "react";
import { getLeadsRequest, updateLeadStatusRequest } from "../../../services/leadService";
import "./LeadsSection.css";

const leadStatusClass = {
  Nuevo: "lead-nuevo",
  Contactado: "lead-contactado",
  Cerrado: "lead-cerrado",
};

const LeadsSection = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const fetchLeads = async (silent = false) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      const data = await getLeadsRequest();
      setLeads(data);
    } catch (err) {
      if (!silent) setError(err.message || "No se pudieron cargar los leads");
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Revisa solo, cada 8 segundos, si llegaron leads nuevos — sin mostrar "Cargando..." cada vez
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLeads(true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id);
    try {
      const updated = await updateLeadStatusRequest(id, status);
      setLeads((prev) => prev.map((l) => (l._id === id ? updated : l)));
    } catch (err) {
      setError(err.message || "No se pudo actualizar el estado");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="admin-section">
      <h1 className="admin-title">Leads</h1>
      <p className="admin-subtitle">Mensajes recibidos desde el formulario de contacto.</p>

      {loading && <p className="admin-empty">Cargando leads...</p>}
      {error && <p className="admin-empty" style={{ color: "#c94f4f" }}>⚠️ {error}</p>}

      {!loading && !error && leads.length === 0 && (
        <p className="admin-empty">Todavía no has recibido ningún mensaje de contacto.</p>
      )}

      <div className="admin-leads-list">
        {leads.map((l) => (
          <div className="admin-lead-card" key={l._id}>
            <div className="lead-avatar">{l.name.charAt(0)}</div>
            <div className="lead-body">
              <div className="lead-top">
                <h4>{l.name}</h4>
                <select
                  className={`lead-status-select ${leadStatusClass[l.status]}`}
                  value={l.status}
                  onChange={(e) => handleStatusChange(l._id, e.target.value)}
                  disabled={updatingId === l._id}
                >
                  <option value="Nuevo">Nuevo</option>
                  <option value="Contactado">Contactado</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </div>
              <p className="lead-email">{l.email}</p>
              {l.phone && <p className="lead-email">{l.phone}</p>}
              <p className="lead-message">{l.message}</p>
              <span className="lead-date">
                {new Date(l.createdAt).toLocaleString("es-CL", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsSection;