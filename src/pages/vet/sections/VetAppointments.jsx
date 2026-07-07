import { useState, useEffect } from "react";
import "./VetAppointments.css";
import { getAllPatientsRequest } from "../../../services/petService";
import {
  getAllAppointmentsRequest,
  createAppointmentRequest,
  updateAppointmentStatusRequest,
  rescheduleAppointmentRequest,
  deleteAppointmentRequest,
} from "../../../services/appointmentService";

const STATUS_LABEL = {
  pendiente: "⏳ Pendiente",
  atendida: "✔️ Atendida",
  cancelada: "❌ Cancelada",
};

const STATUS_CLASS = {
  pendiente: "pending",
  atendida: "completed",
  cancelada: "cancelled",
};

function VetAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // MODALES Y ESTADO
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleTime, setRescheduleTime] = useState("");
  const [completeNotes, setCompleteNotes] = useState("");

  // FORMULARIO PARA AGREGAR CITA
  const [newAppointment, setNewAppointment] = useState({
    petId: "",
    time: "",
    reason: "",
    notes: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [appts, pets] = await Promise.all([
        getAllAppointmentsRequest(),
        getAllPatientsRequest(),
      ]);
      setAppointments(appts);
      setPatients(pets);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar las citas");
    } finally {
      setLoading(false);
    }
  };

  // FUNCIONES CALENDARIO
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const getTodayAppointments = () => {
    const dateStr = formatDate(selectedDate);
    return appointments.filter((apt) => apt.date === dateStr);
  };

  // FUNCIONES DE ACCIONES
  const openDetailModal = (apt) => {
    setSelectedAppointment(apt);
    setShowDetailModal(true);
  };

  const openCompleteModal = (apt) => {
    setSelectedAppointment(apt);
    setCompleteNotes(apt.notes || "");
    setShowCompleteModal(true);
  };

  const openRescheduleModal = (apt) => {
    setSelectedAppointment(apt);
    setRescheduleDate(apt.date);
    setRescheduleTime(apt.time);
    setShowRescheduleModal(true);
  };

  const handleCompleteAppointment = async () => {
    try {
      const updated = await updateAppointmentStatusRequest(
        selectedAppointment._id,
        "atendida",
        completeNotes
      );
      setAppointments((prev) =>
        prev.map((a) => (a._id === updated._id ? { ...a, ...updated, pet: a.pet, owner: a.owner } : a))
      );
      setShowCompleteModal(false);
      alert("✅ Cita marcada como atendida");
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo completar la cita");
    }
  };

  const handleRescheduleAppointment = async () => {
    if (!rescheduleDate || !rescheduleTime) {
      alert("⚠️ Por favor completa la fecha y hora");
      return;
    }
    try {
      const updated = await rescheduleAppointmentRequest(selectedAppointment._id, {
        date: rescheduleDate,
        time: rescheduleTime,
      });
      setAppointments((prev) =>
        prev.map((a) => (a._id === updated._id ? { ...a, ...updated, pet: a.pet, owner: a.owner } : a))
      );
      setShowRescheduleModal(false);
      alert("✅ Cita reprogramada correctamente");
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo reprogramar la cita");
    }
  };

  const handleDeleteAppointment = async (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar esta cita? Esta acción no se puede deshacer.")) {
      return;
    }
    try {
      await deleteAppointmentRequest(id);
      setAppointments((prev) => prev.filter((a) => a._id !== id));
      alert("🗑️ Cita eliminada");
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo eliminar la cita");
    }
  };

  const openAddModal = () => {
    setNewAppointment({ petId: "", time: "", reason: "", notes: "" });
    setShowAddModal(true);
  };

  const handleAddAppointment = async () => {
    if (!newAppointment.petId) {
      alert("⚠️ Por favor selecciona una mascota");
      return;
    }
    if (!newAppointment.time) {
      alert("⚠️ Por favor selecciona una hora");
      return;
    }
    if (!newAppointment.reason) {
      alert("⚠️ Por favor selecciona un servicio");
      return;
    }

    try {
      const created = await createAppointmentRequest({
        petId: newAppointment.petId,
        date: formatDate(selectedDate),
        time: newAppointment.time,
        reason: newAppointment.reason,
      });

      // si mandaste notas, las guardamos aparte (creación no las acepta directamente)
      let finalAppt = created;
      if (newAppointment.notes) {
        finalAppt = await updateAppointmentStatusRequest(created._id, "pendiente", newAppointment.notes);
        finalAppt = { ...created, notes: newAppointment.notes };
      }

      setAppointments((prev) => [...prev, finalAppt]);
      setShowAddModal(false);
      alert("✅ Cita agregada correctamente");
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo crear la cita");
    }
  };

  const handleNewAppointmentChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  // DATOS
  const daysInMonth = getDaysInMonth(selectedDate);
  const firstDay = getFirstDayOfMonth(selectedDate);
  const monthName = selectedDate.toLocaleDateString("es-CL", { month: "long", year: "numeric" });
  const todayAppointments = getTodayAppointments();

  const calendarDays = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  const selectedPatient = patients.find((p) => p._id === newAppointment.petId);

  if (loading) {
    return (
      <section className="section-content appointments-section">
        <div className="section-title">
          <h2>📅 Agendas y Calendario</h2>
          <p>Gestiona todas las citas veterinarias</p>
        </div>
        <p>Cargando citas...</p>
      </section>
    );
  }

  return (
    <section className="section-content appointments-section">
      <div className="section-title">
        <h2><span className="title-icon">📅</span> Agendas y Calendario</h2>
        <p>Gestiona todas las citas veterinarias</p>
      </div>

      {error && (
        <div className="alert-warning" style={{ marginBottom: "20px" }}>
          <p>⚠️ {error}</p>
        </div>
      )}

      <div className="appointments-container">
        
        {/* CALENDARIO */}
        <div className="calendar-panel">
          <div className="calendar-header">
            <button className="month-nav" onClick={handlePrevMonth}>←</button>
            <h3>{monthName.charAt(0).toUpperCase() + monthName.slice(1)}</h3>
            <button className="month-nav" onClick={handleNextMonth}>→</button>
          </div>

          <div className="calendar-weekdays">
            <div className="weekday">Lun</div>
            <div className="weekday">Mar</div>
            <div className="weekday">Mié</div>
            <div className="weekday">Jue</div>
            <div className="weekday">Vie</div>
            <div className="weekday">Sab</div>
            <div className="weekday">Dom</div>
          </div>

          <div className="calendar-grid">
            {calendarDays.map((day, idx) => {
              if (!day) return <div key={`empty-${idx}`} className="calendar-empty"></div>;

              const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
              const dateStr = formatDate(date);
              const dayAppointments = appointments.filter((apt) => apt.date === dateStr);
              const isSelected = selectedDate.getDate() === day;

              return (
                <button
                  key={day}
                  className={`calendar-day ${isSelected ? "selected" : ""} ${dayAppointments.length > 0 ? "has-appointments" : ""}`}
                  onClick={() => handleDateClick(day)}
                  title={`${dayAppointments.length} citas`}
                >
                  <span className="day-number">{day}</span>
                  {dayAppointments.length > 0 && (
                    <span className="appointments-count">{dayAppointments.length}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="calendar-legend">
            <div className="legend-item">
              <div className="legend-color selected"></div>
              <p>Día seleccionado</p>
            </div>
            <div className="legend-item">
              <div className="legend-color has-appointments"></div>
              <p>Con citas</p>
            </div>
          </div>
        </div>

        {/* CITAS DEL DÍA */}
        <div className="appointments-panel">
          <div className="appointments-header">
            <h3>
              📅 {selectedDate.toLocaleDateString("es-CL", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h3>
            <div className="header-actions">
              <span className="count-badge">{todayAppointments.length} citas</span>
              <button className="btn-add-appointment" onClick={openAddModal}>
                ➕ Agregar cita
              </button>
            </div>
          </div>

          {todayAppointments.length === 0 ? (
            <div className="no-appointments">
              <p>✓ Sin citas programadas para este día</p>
            </div>
          ) : (
            <div className="appointments-list">
              {todayAppointments.map((apt) => {
                const statusClass = STATUS_CLASS[apt.status] || "pending";
                const petIcon = apt.pet?.type === "Gato" ? "🐱" : "🐕";
                return (
                  <div key={apt._id} className={`appointment-card ${statusClass}`}>
                    <div className="apt-time">
                      <span className="time">{apt.time}</span>
                      <span className={`status-badge ${statusClass}`}>
                        {STATUS_LABEL[apt.status]}
                      </span>
                    </div>

                    <div className="apt-details">
                      <h3>{petIcon} {apt.pet?.name || "Mascota"}</h3>
                      <p className="service">{apt.reason}</p>
                      <p className="owner">👤 {apt.owner?.name || "—"}</p>
                      <p className="phone">📱 {apt.owner?.phone || "—"}</p>
                      <p className="notes">📝 {apt.notes || "Sin notas"}</p>
                    </div>

                   <div className="apt-actions">
  <button className="vap-btn vap-btn-info" onClick={() => openDetailModal(apt)}>
    Detalles
  </button>
  {apt.status !== "atendida" && (
    <>
      <button className="vap-btn vap-btn-success" onClick={() => openCompleteModal(apt)}>
        Completar
      </button>
      <button className="vap-btn vap-btn-warning" onClick={() => openRescheduleModal(apt)}>
        Reprogramar
      </button>
    </>
  )}
  <button className="vap-btn vap-btn-danger" onClick={() => handleDeleteAppointment(apt._id)}>
    🗑️ Eliminar cita
  </button>
</div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="daily-stats">
            <h4>📊 Estadísticas del día</h4>
            <div className="stats-mini">
              <div className="stat">
                <span className="value">{todayAppointments.filter((a) => a.status === "pendiente").length}</span>
                <p>Pendientes</p>
              </div>
              <div className="stat">
                <span className="value">{todayAppointments.filter((a) => a.status === "atendida").length}</span>
                <p>Atendidas</p>
              </div>
              <div className="stat">
                <span className="value">{todayAppointments.filter((a) => a.status === "cancelada").length}</span>
                <p>Canceladas</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===== MODAL DETALLES ===== */}
      {showDetailModal && selectedAppointment && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📋 Detalles de la cita</h2>
              <button className="modal-close" onClick={() => setShowDetailModal(false)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="detail-group">
                <label>Mascota</label>
                <p>🐾 {selectedAppointment.pet?.name}</p>
              </div>

              <div className="detail-group">
                <label>Propietario</label>
                <p>👤 {selectedAppointment.owner?.name}</p>
              </div>

              <div className="detail-group">
                <label>Teléfono</label>
                <p>📱 {selectedAppointment.owner?.phone}</p>
              </div>

              <div className="detail-group">
                <label>Fecha y Hora</label>
                <p>📅 {selectedAppointment.date} - {selectedAppointment.time}</p>
              </div>

              <div className="detail-group">
                <label>Servicio</label>
                <p>💉 {selectedAppointment.reason}</p>
              </div>

              <div className="detail-group">
                <label>Estado</label>
                <p>{STATUS_LABEL[selectedAppointment.status]}</p>
              </div>

              <div className="detail-group">
                <label>Notas</label>
                <p>📝 {selectedAppointment.notes || "Sin notas"}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal btn-secondary" onClick={() => setShowDetailModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL COMPLETAR CITA ===== */}
      {showCompleteModal && selectedAppointment && (
        <div className="modal-overlay" onClick={() => setShowCompleteModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>✅ Completar cita</h2>
              <button className="modal-close" onClick={() => setShowCompleteModal(false)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="detail-group">
                <label>Mascota</label>
                <p>🐾 {selectedAppointment.pet?.name}</p>
              </div>

              <div className="detail-group">
                <label>Servicio</label>
                <p>💉 {selectedAppointment.reason}</p>
              </div>

              <div className="detail-group">
                <label>Notas de la atención (opcional)</label>
                <textarea
                  placeholder="Describe lo realizado en la cita..."
                  value={completeNotes}
                  onChange={(e) => setCompleteNotes(e.target.value)}
                  className="modal-textarea"
                />
              </div>

              <div className="alert-info">
                <p>⚠️ Esta acción marcará la cita como atendida</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal btn-secondary" onClick={() => setShowCompleteModal(false)}>
                Cancelar
              </button>
              <button className="btn-modal btn-success" onClick={handleCompleteAppointment}>
                ✅ Marcar como atendida
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL REPROGRAMAR CITA ===== */}
      {showRescheduleModal && selectedAppointment && (
        <div className="modal-overlay" onClick={() => setShowRescheduleModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📅 Reprogramar cita</h2>
              <button className="modal-close" onClick={() => setShowRescheduleModal(false)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="detail-group">
                <label>Mascota</label>
                <p>🐾 {selectedAppointment.pet?.name}</p>
              </div>

              <div className="detail-group">
                <label>Nueva fecha</label>
                <input
                  type="date"
                  value={rescheduleDate}
                  onChange={(e) => setRescheduleDate(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="detail-group">
                <label>Nueva hora</label>
                <input
                  type="time"
                  value={rescheduleTime}
                  onChange={(e) => setRescheduleTime(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="alert-warning">
                <p>⚠️ Cita anterior: {selectedAppointment.date} a las {selectedAppointment.time}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal btn-secondary" onClick={() => setShowRescheduleModal(false)}>
                Cancelar
              </button>
              <button className="btn-modal btn-primary" onClick={handleRescheduleAppointment}>
                📅 Reprogramar cita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL AGREGAR CITA ===== */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>➕ Agregar nueva cita</h2>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="detail-group">
                <label>📅 Fecha seleccionada</label>
                <p>
                  {selectedDate.toLocaleDateString("es-CL", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="detail-group">
                <label>🐾 Mascota *</label>
                <select
                  name="petId"
                  value={newAppointment.petId}
                  onChange={handleNewAppointmentChange}
                  className="modal-input"
                >
                  <option value="">-- Selecciona una mascota --</option>
                  {patients.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.name} — dueño: {p.owner?.name || "—"}
                    </option>
                  ))}
                </select>
              </div>

              {selectedPatient && (
                <div className="alert-info">
                  <p>📱 Contacto: {selectedPatient.owner?.phone || "sin teléfono"}</p>
                </div>
              )}

              <div className="detail-group">
                <label>⏰ Hora de la cita *</label>
                <input
                  type="time"
                  name="time"
                  value={newAppointment.time}
                  onChange={handleNewAppointmentChange}
                  className="modal-input"
                />
              </div>

              <div className="detail-group">
                <label>💉 Tipo de servicio *</label>
                <select
                  name="reason"
                  value={newAppointment.reason}
                  onChange={handleNewAppointmentChange}
                  className="modal-input"
                >
                  <option value="">-- Selecciona un servicio --</option>
                  <option value="Vacunación">Vacunación</option>
                  <option value="Control general">Control general</option>
                  <option value="Examen sangre">Examen sangre</option>
                  <option value="Desparasitación">Desparasitación</option>
                  <option value="Limpieza dental">Limpieza dental</option>
                  <option value="Cirugía">Cirugía</option>
                  <option value="Consulta">Consulta</option>
                </select>
              </div>

              <div className="detail-group">
                <label>📝 Notas adicionales</label>
                <textarea
                  name="notes"
                  placeholder="Información relevante sobre la cita..."
                  value={newAppointment.notes}
                  onChange={handleNewAppointmentChange}
                  className="modal-textarea"
                />
              </div>

              <div className="alert-info">
                <p>✓ Los campos marcados con * son obligatorios</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal btn-secondary" onClick={() => setShowAddModal(false)}>
                Cancelar
              </button>
              <button className="btn-modal btn-primary" onClick={handleAddAppointment}>
                ➕ Crear cita
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VetAppointments;