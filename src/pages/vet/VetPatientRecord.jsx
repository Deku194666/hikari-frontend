import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllPatientsRequest, updatePetRequest } from "../../services/petService";
import {
  getRecordsByPetRequest,
  createRecordRequest,
  updateRecordRequest,
} from "../../services/clinicalRecordService";
import "./VetPatientRecord.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const emptyRecordForm = {
  date: new Date().toISOString().slice(0, 10),
  anamnesisRemota: "",
  enfermedadesPrevias: "",
  tratamientosPrevios: "",
  alimentacion: "",
  motivoConsulta: "",
  anamnesisActual: "",
  temperature: "",
  weight: "",
  respiratoryRate: "",
  capillaryRefillTime: "",
  heartRate: "",
  mucousMembranes: "",
  bloodPressure: "",
  physicalExam: "",
  presumptiveDiagnosis: "",
  diagnosis: "",
  requestedExams: "",
  treatment: "",
  notes: "",
  prescriptionFiles: [], // array de strings base64
};

function VetPatientRecord() {
  const { id } = useParams();

  const [pet, setPet] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --- datos del paciente ---
  const [editingPet, setEditingPet] = useState(false);
  const [petForm, setPetForm] = useState({
    name: "", type: "", breed: "", age: "", weight: "", sex: "",
  });
  const [savingPet, setSavingPet] = useState(false);

  // --- formulario de consulta ---
  const [showRecordForm, setShowRecordForm] = useState(false);
  const [editingRecordId, setEditingRecordId] = useState(null);
  const [recordForm, setRecordForm] = useState(emptyRecordForm);
  const [savingRecord, setSavingRecord] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  // --- vista previa de recetas ---
  const [previewFile, setPreviewFile] = useState(null);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [patients, recordsData] = await Promise.all([
        getAllPatientsRequest(),
        getRecordsByPetRequest(id),
      ]);

      const foundPet = patients.find((p) => p._id === id);
      if (!foundPet) {
        setError("Paciente no encontrado");
      } else {
        setPet(foundPet);
        setPetForm({
          name: foundPet.name || "",
          type: foundPet.type || "",
          breed: foundPet.breed || "",
          age: foundPet.age ?? "",
          weight: foundPet.weight ?? "",
          sex: foundPet.sex || "",
        });
      }
      setRecords(recordsData);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo cargar la ficha clínica");
    } finally {
      setLoading(false);
    }
  };

  // --- datos del paciente ---
  const handlePetFormChange = (e) => {
    setPetForm({ ...petForm, [e.target.name]: e.target.value });
  };

  const handleSavePet = async (e) => {
    e.preventDefault();
    setSavingPet(true);
    try {
      const updated = await updatePetRequest(id, {
        ...petForm,
        age: Number(petForm.age),
        weight: Number(petForm.weight),
      });
      setPet({ ...pet, ...updated });
      setEditingPet(false);
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo actualizar el paciente");
    } finally {
      setSavingPet(false);
    }
  };

  // --- formulario de consulta ---
  const handleRecordFormChange = (e) => {
    setRecordForm({ ...recordForm, [e.target.name]: e.target.value });
  };

  const handleNewRecordClick = () => {
    setRecordForm({ ...emptyRecordForm, date: new Date().toISOString().slice(0, 10) });
    setEditingRecordId(null);
    setShowRecordForm(true);
  };

  const handleEditRecordClick = (record) => {
    setRecordForm({
      date: record.date ? record.date.slice(0, 10) : new Date().toISOString().slice(0, 10),
      anamnesisRemota: record.anamnesisRemota || "",
      enfermedadesPrevias: record.enfermedadesPrevias || "",
      tratamientosPrevios: record.tratamientosPrevios || "",
      alimentacion: record.alimentacion || "",
      motivoConsulta: record.motivoConsulta || "",
      anamnesisActual: record.anamnesisActual || "",
      temperature: record.temperature || "",
      weight: record.weight ?? "",
      respiratoryRate: record.respiratoryRate || "",
      capillaryRefillTime: record.capillaryRefillTime || "",
      heartRate: record.heartRate || "",
      mucousMembranes: record.mucousMembranes || "",
      bloodPressure: record.bloodPressure || "",
      physicalExam: record.physicalExam || "",
      presumptiveDiagnosis: record.presumptiveDiagnosis || "",
      diagnosis: record.diagnosis || "",
      requestedExams: record.requestedExams || "",
      treatment: record.treatment || "",
      notes: record.notes || "",
      prescriptionFiles: record.prescriptionFiles || [],
    });
    setEditingRecordId(record._id);
    setShowRecordForm(true);
  };

  const handleCancelRecordForm = () => {
    setShowRecordForm(false);
    setEditingRecordId(null);
    setRecordForm(emptyRecordForm);
  };

  // --- recetas: subir archivos ---
  const handlePrescriptionFilesChange = (e) => {
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
        setRecordForm((prev) => ({
          ...prev,
          prescriptionFiles: [...prev.prescriptionFiles, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    });

    e.target.value = "";
  };

  const removePrescriptionFile = (index) => {
    setRecordForm((prev) => ({
      ...prev,
      prescriptionFiles: prev.prescriptionFiles.filter((_, i) => i !== index),
    }));
  };

  const handleSaveRecord = async (e) => {
    e.preventDefault();
    setSavingRecord(true);
    try {
      const payload = {
        ...recordForm,
        weight: recordForm.weight === "" ? undefined : Number(recordForm.weight),
      };

      if (editingRecordId) {
        const updated = await updateRecordRequest(editingRecordId, payload);
        setRecords((prev) =>
          prev.map((r) => (r._id === editingRecordId ? updated : r))
        );
      } else {
        const created = await createRecordRequest({ ...payload, pet: id });
        setRecords((prev) => [created, ...prev]);
      }

      handleCancelRecordForm();
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo guardar la consulta");
    } finally {
      setSavingRecord(false);
    }
  };

  const toggleExpand = (recordId) => {
    setExpandedId(expandedId === recordId ? null : recordId);
  };

  if (loading) {
    return (
      <section className="vpr-page">
        <p>Cargando ficha clínica...</p>
      </section>
    );
  }

  if (error && !pet) {
    return (
      <section className="vpr-page">
        <p className="vpr-error">{error}</p>
        <Link to="/dashboard-vet" className="vpr-back-link">← Volver</Link>
      </section>
    );
  }

  return (
    <section className="vpr-page">
      <Link to="/dashboard-vet" className="vpr-back-link">← Volver a pacientes</Link>

      <div className="vpr-header">
        <h1>
          {pet.type === "Perro" ? "🐕" : "🐱"} {pet.name}
        </h1>
        <p className="vpr-owner">Propietario: {pet.owner?.name || "—"}</p>
      </div>

      {error && <p className="vpr-error">{error}</p>}

      {/* DATOS DEL PACIENTE */}
      <div className="vpr-card">
        <div className="vpr-card-header">
          <h2>📋 Datos del paciente</h2>
          {!editingPet && (
            <button className="vpr-edit-btn" onClick={() => setEditingPet(true)}>
              Editar
            </button>
          )}
        </div>

        {!editingPet ? (
          <div className="vpr-pet-grid">
            <div><span>Tipo</span><strong>{pet.type}</strong></div>
            <div><span>Raza</span><strong>{pet.breed}</strong></div>
            <div><span>Edad</span><strong>{pet.age} años</strong></div>
            <div><span>Sexo</span><strong>{pet.sex || "—"}</strong></div>
            <div><span>Peso</span><strong>{pet.weight} kg</strong></div>
          </div>
        ) : (
          <form className="vpr-pet-form" onSubmit={handleSavePet}>
            <div className="vpr-form-grid">
              <label>
                Nombre
                <input name="name" value={petForm.name} onChange={handlePetFormChange} required />
              </label>
              <label>
                Tipo
                <input name="type" value={petForm.type} onChange={handlePetFormChange} required />
              </label>
              <label>
                Raza
                <input name="breed" value={petForm.breed} onChange={handlePetFormChange} required />
              </label>
              <label>
                Edad (años)
                <input type="number" name="age" value={petForm.age} onChange={handlePetFormChange} required min="0" />
              </label>
              <label>
                Sexo
                <select name="sex" value={petForm.sex} onChange={handlePetFormChange} required>
                  <option value="">Seleccionar</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
              </label>
              <label>
                Peso (kg)
                <input type="number" step="0.1" name="weight" value={petForm.weight} onChange={handlePetFormChange} required min="0" />
              </label>
            </div>
            <div className="vpr-form-actions">
              <button type="button" className="vpr-cancel-btn" onClick={() => setEditingPet(false)}>
                Cancelar
              </button>
              <button type="submit" className="vpr-save-btn" disabled={savingPet}>
                {savingPet ? "Guardando..." : "Guardar cambios"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* HISTORIAL */}
      <div className="vpr-history-header">
        <h2>🩺 Historial de consultas</h2>
        {!showRecordForm && (
          <button className="vpr-new-btn" onClick={handleNewRecordClick}>
            + Nueva consulta
          </button>
        )}
      </div>

      {/* FORMULARIO NUEVA/EDITAR CONSULTA */}
      {showRecordForm && (
        <form className="vpr-card vpr-record-form" onSubmit={handleSaveRecord}>
          <h3>{editingRecordId ? "Editar consulta" : "Nueva consulta"}</h3>

          <label className="vpr-field-full">
            Fecha
            <input type="date" name="date" value={recordForm.date} onChange={handleRecordFormChange} required />
          </label>

          <label className="vpr-field-full">
            Anamnesis Remota
            <textarea name="anamnesisRemota" rows={3} value={recordForm.anamnesisRemota} onChange={handleRecordFormChange} />
          </label>

          <div className="vpr-form-grid">
            <label>
              Enfermedades Previas
              <textarea name="enfermedadesPrevias" rows={2} value={recordForm.enfermedadesPrevias} onChange={handleRecordFormChange} />
            </label>
            <label>
              Tratamiento Previos
              <textarea name="tratamientosPrevios" rows={2} value={recordForm.tratamientosPrevios} onChange={handleRecordFormChange} />
            </label>
            <label>
              Alimentación
              <textarea name="alimentacion" rows={2} value={recordForm.alimentacion} onChange={handleRecordFormChange} />
            </label>
          </div>

          <label className="vpr-field-full">
            Motivo Consulta
            <textarea name="motivoConsulta" rows={3} value={recordForm.motivoConsulta} onChange={handleRecordFormChange} />
          </label>

          <label className="vpr-field-full">
            Anamnesis Actual
            <textarea name="anamnesisActual" rows={3} value={recordForm.anamnesisActual} onChange={handleRecordFormChange} />
          </label>

          <div className="vpr-form-grid-6">
            <label>
              T°
              <input name="temperature" value={recordForm.temperature} onChange={handleRecordFormChange} />
            </label>
            <label>
              Peso
              <input type="number" step="0.1" name="weight" value={recordForm.weight} onChange={handleRecordFormChange} />
            </label>
            <label>
              FR
              <input name="respiratoryRate" value={recordForm.respiratoryRate} onChange={handleRecordFormChange} />
            </label>
            <label>
              TLLC
              <input name="capillaryRefillTime" value={recordForm.capillaryRefillTime} onChange={handleRecordFormChange} />
            </label>
            <label>
              FC
              <input name="heartRate" value={recordForm.heartRate} onChange={handleRecordFormChange} />
            </label>
            <label>
              Mucosas
              <input name="mucousMembranes" value={recordForm.mucousMembranes} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-form-grid-6">
            <label>
              Presión arterial
              <input name="bloodPressure" value={recordForm.bloodPressure} onChange={handleRecordFormChange} />
            </label>
          </div>

          <label className="vpr-field-full">
            Examen Físico
            <textarea name="physicalExam" rows={3} value={recordForm.physicalExam} onChange={handleRecordFormChange} />
          </label>

          <label className="vpr-field-full">
            Prediagnósticos
            <input name="presumptiveDiagnosis" value={recordForm.presumptiveDiagnosis} onChange={handleRecordFormChange} />
          </label>

          <label className="vpr-field-full">
            Diagnóstico
            <input name="diagnosis" value={recordForm.diagnosis} onChange={handleRecordFormChange} />
          </label>

          <div className="vpr-form-grid-2">
            <label>
              Exámenes solicitados
              <textarea name="requestedExams" rows={2} value={recordForm.requestedExams} onChange={handleRecordFormChange} />
            </label>
            <label>
              Tratamiento
              <textarea name="treatment" rows={2} value={recordForm.treatment} onChange={handleRecordFormChange} />
            </label>
          </div>

          <label className="vpr-field-full">
            Observaciones
            <textarea name="notes" rows={3} value={recordForm.notes} onChange={handleRecordFormChange} />
          </label>

          {/* RECUADRO DE RECETAS */}
          <div className="vpr-section vpr-prescription-section">
            <h4>💊 Recetas</h4>
            <div className="vpr-upload-box">
              <input
                type="file"
                accept="image/*,application/pdf"
                multiple
                onChange={handlePrescriptionFilesChange}
                id="vpr-prescription-files"
                className="vpr-upload-input"
              />
              <label htmlFor="vpr-prescription-files" className="vpr-upload-label">
                📎 Subir foto o PDF de la receta (puedes subir varias, o hacerlo después editando la consulta)
              </label>
            </div>

            {recordForm.prescriptionFiles.length > 0 && (
              <div className="vpr-files-preview">
                {recordForm.prescriptionFiles.map((file, idx) => (
                  <div key={idx} className="vpr-file-item">
                    {file.startsWith("data:application/pdf") ? (
                      <div className="vpr-file-pdf">📄</div>
                    ) : (
                      <img src={file} alt={`Receta ${idx + 1}`} className="vpr-file-thumb" />
                    )}
                    <span className="vpr-file-name">Receta {idx + 1}</span>
                    <button
                      type="button"
                      className="vpr-file-remove"
                      onClick={() => removePrescriptionFile(idx)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="vpr-form-actions">
            <button type="button" className="vpr-cancel-btn" onClick={handleCancelRecordForm}>
              Cancelar
            </button>
            <button type="submit" className="vpr-save-btn" disabled={savingRecord}>
              {savingRecord ? "Guardando..." : "Guardar consulta"}
            </button>
          </div>
        </form>
      )}

      {/* LISTA DE CONSULTAS */}
      <div className="vpr-record-list">
        {records.length === 0 && !showRecordForm && (
          <p className="vpr-empty">Aún no hay consultas registradas para este paciente.</p>
        )}

        {records.map((record) => {
          const isExpanded = expandedId === record._id;
          return (
            <div key={record._id} className="vpr-record-card">
              <div className="vpr-record-summary" onClick={() => toggleExpand(record._id)}>
                <div>
                  <strong>{new Date(record.date).toLocaleDateString("es-CL")}</strong>
                  <span className="vpr-record-vet">Dr(a). {record.vet?.name || "—"}</span>
                </div>
                <span className="vpr-expand-icon">{isExpanded ? "▲" : "▼"}</span>
              </div>

              {isExpanded && (
                <div className="vpr-record-detail">
                  <DetailRow label="Anamnesis Remota" value={record.anamnesisRemota} />
                  <DetailRow label="Enfermedades Previas" value={record.enfermedadesPrevias} />
                  <DetailRow label="Tratamiento Previos" value={record.tratamientosPrevios} />
                  <DetailRow label="Alimentación" value={record.alimentacion} />
                  <DetailRow label="Motivo Consulta" value={record.motivoConsulta} />
                  <DetailRow label="Anamnesis Actual" value={record.anamnesisActual} />
                  <DetailRow label="T°" value={record.temperature} />
                  <DetailRow label="Peso" value={record.weight ? `${record.weight} kg` : ""} />
                  <DetailRow label="FR" value={record.respiratoryRate} />
                  <DetailRow label="TLLC" value={record.capillaryRefillTime} />
                  <DetailRow label="FC" value={record.heartRate} />
                  <DetailRow label="Mucosas" value={record.mucousMembranes} />
                  <DetailRow label="Presión arterial" value={record.bloodPressure} />
                  <DetailRow label="Examen Físico" value={record.physicalExam} />
                  <DetailRow label="Prediagnósticos" value={record.presumptiveDiagnosis} />
                  <DetailRow label="Diagnóstico" value={record.diagnosis} />
                  <DetailRow label="Exámenes solicitados" value={record.requestedExams} />
                  <DetailRow label="Tratamiento" value={record.treatment} />
                  <DetailRow label="Observaciones" value={record.notes} />

                  {record.prescriptionFiles && record.prescriptionFiles.length > 0 && (
                    <div className="vpr-detail-row">
                      <span className="vpr-detail-label">💊 Recetas</span>
                      <div className="vpr-prescription-list">
                        {record.prescriptionFiles.map((file, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className="vpr-prescription-btn"
                            onClick={() => setPreviewFile(file)}
                          >
                            Ver receta {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="vpr-edit-btn" onClick={() => handleEditRecordClick(record)}>
                    Editar esta consulta
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {previewFile && (
        <div className="vpr-preview-overlay" onClick={() => setPreviewFile(null)}>
          <div className="vpr-preview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="vpr-preview-close" onClick={() => setPreviewFile(null)}>
              ✕
            </button>
            {previewFile.startsWith("data:application/pdf") ? (
              <iframe src={previewFile} title="Receta" className="vpr-preview-pdf" />
            ) : (
              <img src={previewFile} alt="Receta" className="vpr-preview-image" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="vpr-detail-row">
      <span className="vpr-detail-label">{label}</span>
      <p className="vpr-detail-value">{value}</p>
    </div>
  );
}

export default VetPatientRecord;