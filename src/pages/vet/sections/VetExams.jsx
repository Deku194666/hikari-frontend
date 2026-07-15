



import { useState, useEffect } from "react";
import { getAllExamRequestsRequest, updateExamRequestRequest } from "../../../services/examService";
import "./VetExams.css";

const statusInfo = {
  pendiente: { label: "Pendiente", className: "ve-status-pendiente" },
  agendado: { label: "Agendado", className: "ve-status-agendado" },
  realizado: { label: "Realizado", className: "ve-status-realizado" },
  resultados_listos: { label: "Resultados listos", className: "ve-status-resultados" },
};

function VetExams() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllExamRequestsRequest();
      setRequests(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar las solicitudes");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id, updated) => {
    setRequests((prev) => prev.map((r) => (r._id === id ? updated : r)));
  };

  if (loading) {
    return (
      <section className="section-content ve-section">
        <div className="section-title">
          <h2>🧪 Exámenes solicitados</h2>
        </div>
        <p>Cargando...</p>
      </section>
    );
  }

  return (
    <section className="section-content ve-section">
      <div className="section-title">
        <h2>🧪 Exámenes solicitados</h2>
        <p>{requests.length} solicitudes en total</p>
      </div>

      {error && <p className="ve-error">{error}</p>}

      <div className="ve-list">
        {requests.length === 0 && (
          <p className="ve-empty">No hay solicitudes de examen todavía.</p>
        )}

        {requests.map((r) => (
          <ExamCard key={r._id} record={r} onUpdated={handleUpdate} />
        ))}
      </div>
    </section>
  );
}

function ExamCard({ record, onUpdated }) {
  const [status, setStatus] = useState(record.status);
  const [scheduledDate, setScheduledDate] = useState(
    record.scheduledDate ? record.scheduledDate.slice(0, 10) : ""
  );
  const [resultsNotes, setResultsNotes] = useState(record.resultsNotes || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const updated = await updateExamRequestRequest(record._id, {
        status,
        scheduledDate: scheduledDate || undefined,
        resultsNotes,
      });
      onUpdated(record._id, updated);
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo actualizar la solicitud");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="ve-card">
      <div className="ve-card-header">
        <div>
          <strong>{record.pet?.name || "Mascota"}</strong>
          <span className="ve-owner">{record.owner?.name || "—"}</span>
        </div>
        <span className={`status-label ${statusInfo[record.status]?.className}`}>
          {statusInfo[record.status]?.label}
        </span>
      </div>

      <p className="ve-detail"><b>Exámenes:</b> {record.examTypes.join(", ")}</p>
      {record.otherDescription && (
        <p className="ve-detail"><b>Detalle:</b> {record.otherDescription}</p>
      )}
      <p className="ve-detail"><b>Pago:</b> {record.paymentMethod}</p>
      <p className="ve-detail"><b>Dirección:</b> {record.address}</p>
      {record.notes && <p className="ve-detail"><b>Notas del cliente:</b> {record.notes}</p>}

      <div className="ve-edit-grid">
        <label>
          Estado
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pendiente">Pendiente</option>
            <option value="agendado">Agendado</option>
            <option value="realizado">Realizado</option>
            <option value="resultados_listos">Resultados listos</option>
          </select>
        </label>
        <label>
          Fecha agendada
          <input
            type="date"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
          />
        </label>
      </div>

      <label className="ve-results-label">
        Resultados
        <textarea
          rows={3}
          value={resultsNotes}
          onChange={(e) => setResultsNotes(e.target.value)}
          placeholder="Escribe aquí los resultados del examen..."
        />
      </label>

      <button className="ve-save-btn" onClick={handleSave} disabled={saving}>
        {saving ? "Guardando..." : "Guardar cambios"}
      </button>
    </div>
  );
}

export default VetExams;