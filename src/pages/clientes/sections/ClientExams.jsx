



import { useState, useEffect } from "react";
import { getPetsRequest } from "../../../services/petService";
import { createExamRequestRequest, getMyExamRequestsRequest } from "../../../services/examService";
import "./ClientExams.css";

const EXAM_OPTIONS = ["Análisis de sangre", "Urianálisis", "Coprológico", "Cultivo", "Otro"];

const statusInfo = {
  pendiente: { label: "Pendiente", className: "ce-status-pendiente" },
  agendado: { label: "Agendado", className: "ce-status-agendado" },
  realizado: { label: "Realizado", className: "ce-status-realizado" },
  resultados_listos: { label: "Resultados listos", className: "ce-status-resultados" },
};

const emptyForm = {
  pet: "",
  examTypes: [],
  otherDescription: "",
  paymentMethod: "",
  address: "",
  notes: "",
};

function ClientExams() {
  const [pets, setPets] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [petsData, requestsData] = await Promise.all([
        getPetsRequest(),
        getMyExamRequestsRequest(),
      ]);
      setPets(petsData);
      setRequests(requestsData);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo cargar la información");
    } finally {
      setLoading(false);
    }
  };

  const toggleExamType = (type) => {
    setForm((prev) => ({
      ...prev,
      examTypes: prev.examTypes.includes(type)
        ? prev.examTypes.filter((t) => t !== type)
        : [...prev.examTypes, type],
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.examTypes.length === 0) {
      alert("Selecciona al menos un tipo de examen");
      return;
    }
    setSaving(true);
    try {
      const created = await createExamRequestRequest(form);
      setRequests((prev) => [created, ...prev]);
      setForm(emptyForm);
      setShowForm(false);
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo enviar la solicitud");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="section-content ce-section">
        <div className="section-title">
          <h2>🧪 Exámenes</h2>
        </div>
        <p>Cargando...</p>
      </section>
    );
  }

  return (
    <section className="section-content ce-section">
      <div className="section-title">
        <h2>🧪 Exámenes</h2>
        <p>Solicita exámenes de laboratorio a domicilio</p>
      </div>

      {error && <p className="ce-error">{error}</p>}

      {!showForm && (
        <button className="ce-new-btn" onClick={() => setShowForm(true)}>
          + Solicitar examen
        </button>
      )}

      {showForm && (
        <form className="ce-card ce-form" onSubmit={handleSubmit}>
          <h3>Nueva solicitud</h3>

          <label className="ce-field-full">
            Mascota
            <select name="pet" value={form.pet} onChange={handleChange} required>
              <option value="">Selecciona una mascota</option>
              {pets.map((p) => (
                <option key={p._id} value={p._id}>{p.name}</option>
              ))}
            </select>
          </label>

          <div className="ce-field-full">
            <span className="ce-label">Tipo de examen</span>
            <div className="ce-checkbox-group">
              {EXAM_OPTIONS.map((type) => (
                <label key={type} className="ce-checkbox">
                  <input
                    type="checkbox"
                    checked={form.examTypes.includes(type)}
                    onChange={() => toggleExamType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {form.examTypes.includes("Otro") && (
            <label className="ce-field-full">
              Describe el examen
              <input
                name="otherDescription"
                value={form.otherDescription}
                onChange={handleChange}
                placeholder="Ej: Perfil hepático"
              />
            </label>
          )}

          <label className="ce-field-full">
            Método de pago
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
              <option value="">Selecciona un método</option>
              <option value="Transferencia">Transferencia</option>
              <option value="Efectivo">Efectivo (presencial)</option>
              <option value="Tarjeta">Tarjeta débito/crédito (presencial)</option>
            </select>
          </label>

          <label className="ce-field-full">
            Dirección para la visita
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Calle, número, comuna"
              required
            />
          </label>

          <label className="ce-field-full">
            Notas adicionales (opcional)
            <textarea name="notes" rows={2} value={form.notes} onChange={handleChange} />
          </label>

          <div className="ce-form-actions">
            <button type="button" className="ce-cancel-btn" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
            <button type="submit" className="ce-save-btn" disabled={saving}>
              {saving ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </form>
      )}

      <div className="ce-list">
        {requests.length === 0 && !showForm && (
          <p className="ce-empty">Aún no has solicitado exámenes.</p>
        )}

        {requests.map((r) => (
          <div key={r._id} className="ce-request-card">
            <div className="ce-request-header">
              <strong>{r.pet?.name || "Mascota"}</strong>
              <span className={`status-label ${statusInfo[r.status]?.className}`}>
                {statusInfo[r.status]?.label}
              </span>
            </div>
            <p className="ce-request-types">{r.examTypes.join(", ")}</p>
            <p className="ce-request-detail">Pago: {r.paymentMethod}</p>
            <p className="ce-request-detail">Dirección: {r.address}</p>
            {r.scheduledDate && (
              <p className="ce-request-detail">
                Agendado: {new Date(r.scheduledDate).toLocaleDateString("es-CL")}
              </p>
            )}
            {r.resultsNotes && (
              <p className="ce-request-results">📋 {r.resultsNotes}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientExams;