


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllPatientsRequest, updatePetRequest } from "../../services/petService";
import {
  getRecordsByPetRequest,
  createRecordRequest,
  updateRecordRequest,
} from "../../services/clinicalRecordService";
import "./VetPatientRecord.css";


const emptyRecordForm = {
  date: new Date().toISOString().slice(0, 10),
  anamnesis: "",
  weight: "",
  temperature: "",
  heartRate: "",
  respiratoryRate: "",
  mucousMembranes: "",
  capillaryRefillTime: "",
  bodyCondition: "",
  auscultation: "",
  physicalExam: "",
  symptoms: "",
  presumptiveDiagnosis: "",
  examResults: "",
  diagnosis: "",
  treatment: "",
  medications: "",
  surgery: "",
  rehabilitation: "",
  notes: "",
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
      anamnesis: record.anamnesis || "",
      weight: record.weight ?? "",
      temperature: record.temperature || "",
      heartRate: record.heartRate || "",
      respiratoryRate: record.respiratoryRate || "",
      mucousMembranes: record.mucousMembranes || "",
      capillaryRefillTime: record.capillaryRefillTime || "",
      bodyCondition: record.bodyCondition || "",
      auscultation: record.auscultation || "",
      physicalExam: record.physicalExam || "",
      symptoms: record.symptoms || "",
      presumptiveDiagnosis: record.presumptiveDiagnosis || "",
      examResults: record.examResults || "",
      diagnosis: record.diagnosis || "",
      treatment: record.treatment || "",
      medications: record.medications || "",
      surgery: record.surgery || "",
      rehabilitation: record.rehabilitation || "",
      notes: record.notes || "",
    });
    setEditingRecordId(record._id);
    setShowRecordForm(true);
  };

  const handleCancelRecordForm = () => {
    setShowRecordForm(false);
    setEditingRecordId(null);
    setRecordForm(emptyRecordForm);
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

          <div className="vpr-section">
            <h4>Anamnesis</h4>
            <label className="vpr-field-full">
              Motivo de consulta / historia
              <textarea name="anamnesis" rows={3} value={recordForm.anamnesis} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-section">
            <h4>Examen físico / Signos vitales</h4>
            <div className="vpr-form-grid">
              <label>
                Peso (kg)
                <input type="number" step="0.1" name="weight" value={recordForm.weight} onChange={handleRecordFormChange} />
              </label>
              <label>
                Temperatura
                <input name="temperature" placeholder="Ej: 38.5°C" value={recordForm.temperature} onChange={handleRecordFormChange} />
              </label>
              <label>
                Frecuencia cardíaca
                <input name="heartRate" placeholder="Ej: 120 lpm" value={recordForm.heartRate} onChange={handleRecordFormChange} />
              </label>
              <label>
                Frecuencia respiratoria
                <input name="respiratoryRate" placeholder="Ej: 24 rpm" value={recordForm.respiratoryRate} onChange={handleRecordFormChange} />
              </label>
              <label>
                Mucosas
                <input name="mucousMembranes" placeholder="Ej: rosadas, húmedas" value={recordForm.mucousMembranes} onChange={handleRecordFormChange} />
              </label>
              <label>
                Tiempo de llenado capilar
                <input name="capillaryRefillTime" placeholder="Ej: < 2 seg" value={recordForm.capillaryRefillTime} onChange={handleRecordFormChange} />
              </label>
              <label>
                Condición corporal
                <input name="bodyCondition" placeholder="Ej: 3/5" value={recordForm.bodyCondition} onChange={handleRecordFormChange} />
              </label>
            </div>
            <label className="vpr-field-full">
              Auscultación cardiopulmonar
              <textarea name="auscultation" rows={2} value={recordForm.auscultation} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Observaciones del examen físico
              <textarea name="physicalExam" rows={2} value={recordForm.physicalExam} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-section">
            <h4>Síntomas</h4>
            <label className="vpr-field-full">
              <textarea name="symptoms" rows={2} value={recordForm.symptoms} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-section">
            <h4>Diagnóstico</h4>
            <label className="vpr-field-full">
              Diagnóstico presuntivo
              <textarea name="presumptiveDiagnosis" rows={2} value={recordForm.presumptiveDiagnosis} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Resultados de exámenes
              <textarea name="examResults" rows={2} value={recordForm.examResults} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Diagnóstico definitivo
              <textarea name="diagnosis" rows={2} value={recordForm.diagnosis} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-section">
            <h4>Tratamiento</h4>
            <label className="vpr-field-full">
              Tratamiento indicado
              <textarea name="treatment" rows={2} value={recordForm.treatment} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Medicamentos
              <textarea name="medications" rows={2} value={recordForm.medications} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Cirugía (si aplica)
              <textarea name="surgery" rows={2} value={recordForm.surgery} onChange={handleRecordFormChange} />
            </label>
            <label className="vpr-field-full">
              Rehabilitación / indicaciones
              <textarea name="rehabilitation" rows={2} value={recordForm.rehabilitation} onChange={handleRecordFormChange} />
            </label>
          </div>

          <div className="vpr-section">
            <h4>Notas adicionales</h4>
            <label className="vpr-field-full">
              <textarea name="notes" rows={2} value={recordForm.notes} onChange={handleRecordFormChange} />
            </label>
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
                  <DetailRow label="Anamnesis" value={record.anamnesis} />
                  <DetailRow label="Peso" value={record.weight ? `${record.weight} kg` : ""} />
                  <DetailRow label="Temperatura" value={record.temperature} />
                  <DetailRow label="Frecuencia cardíaca" value={record.heartRate} />
                  <DetailRow label="Frecuencia respiratoria" value={record.respiratoryRate} />
                  <DetailRow label="Mucosas" value={record.mucousMembranes} />
                  <DetailRow label="Tiempo de llenado capilar" value={record.capillaryRefillTime} />
                  <DetailRow label="Condición corporal" value={record.bodyCondition} />
                  <DetailRow label="Auscultación" value={record.auscultation} />
                  <DetailRow label="Examen físico" value={record.physicalExam} />
                  <DetailRow label="Síntomas" value={record.symptoms} />
                  <DetailRow label="Diagnóstico presuntivo" value={record.presumptiveDiagnosis} />
                  <DetailRow label="Resultados de exámenes" value={record.examResults} />
                  <DetailRow label="Diagnóstico" value={record.diagnosis} />
                  <DetailRow label="Tratamiento" value={record.treatment} />
                  <DetailRow label="Medicamentos" value={record.medications} />
                  <DetailRow label="Cirugía" value={record.surgery} />
                  <DetailRow label="Rehabilitación" value={record.rehabilitation} />
                  <DetailRow label="Notas" value={record.notes} />

                  <button className="vpr-edit-btn" onClick={() => handleEditRecordClick(record)}>
                    Editar esta consulta
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
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