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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const emptyForm = {
  pet: "",
  examTypes: [],
  otherDescription: "",
  paymentMethod: "",
  address: "",
  notes: "",
  orderFiles: [], // [{ name, type, data }]
};

function ClientExams() {
  const [pets, setPets] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

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

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`⚠️ "${file.name}" pesa más de 5MB, elige un archivo más liviano`);
        return;
      }

      const isImage = file.type.startsWith("image/");
      const isPdf = file.type === "application/pdf";

      if (!isImage && !isPdf) {
        alert(`⚠️ "${file.name}" no es una imagen ni un PDF`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({
          ...prev,
          orderFiles: [
            ...prev.orderFiles,
            { name: file.name, type: file.type, data: reader.result },
          ],
        }));
      };
      reader.readAsDataURL(file);
    });

    // permite volver a seleccionar el mismo archivo si lo quita y lo quiere subir de nuevo
    e.target.value = "";
  };

  const removeFile = (index) => {
    setForm((prev) => ({
      ...prev,
      orderFiles: prev.orderFiles.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.examTypes.length === 0) {
      alert("Selecciona al menos un tipo de examen");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        orderFiles: form.orderFiles.map((f) => f.data),
      };
      const created = await createExamRequestRequest(payload);
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

          <div className="ce-field-full">
            <span className="ce-label">Orden médica del examen (opcional)</span>
            <div className="ce-upload-box">
              <input
                type="file"
                accept="image/*,application/pdf"
                multiple
                onChange={handleFilesChange}
                id="ce-order-files"
                className="ce-upload-input"
              />
              <label htmlFor="ce-order-files" className="ce-upload-label">
                📎 Subir foto o PDF de la orden (puedes subir varios)
              </label>
            </div>

            {form.orderFiles.length > 0 && (
              <div className="ce-files-preview">
                {form.orderFiles.map((file, idx) => (
                  <div key={idx} className="ce-file-item">
                    {file.type.startsWith("image/") ? (
                      <img src={file.data} alt={file.name} className="ce-file-thumb" />
                    ) : (
                      <div className="ce-file-pdf">📄</div>
                    )}
                    <span className="ce-file-name">{file.name}</span>
                    <button
                      type="button"
                      className="ce-file-remove"
                      onClick={() => removeFile(idx)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

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
            {r.orderFiles && r.orderFiles.length > 0 && (
              <div className="ce-request-files">
                {r.orderFiles.map((file, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="ce-request-file-link"
                    onClick={() => setPreviewFile(file)}
                  >
                    📎 Ver orden {idx + 1}
                  </button>
                ))}
              </div>
            )}
            {r.resultsNotes && (
              <p className="ce-request-results">📋 {r.resultsNotes}</p>
            )}
          </div>
        ))}
      </div>

      {previewFile && (
        <div className="ce-preview-overlay" onClick={() => setPreviewFile(null)}>
          <div className="ce-preview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ce-preview-close" onClick={() => setPreviewFile(null)}>
              ✕
            </button>
            {previewFile.startsWith("data:application/pdf") ? (
              <iframe src={previewFile} title="Orden médica" className="ce-preview-pdf" />
            ) : (
              <img src={previewFile} alt="Orden médica" className="ce-preview-image" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ClientExams;