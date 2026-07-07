import { useState, useEffect } from "react";
import { getMyAppointmentsRequest } from "../../../services/appointmentService";
import "./ClientAppointments.css";

const STATUS_INFO = {
  pendiente: { label: "⏳ Pendiente", className: "capt-pending" },
  atendida: { label: "✅ Atendida", className: "capt-attended" },
  cancelada: { label: "❌ Cancelada", className: "capt-cancelled" },
};

function ClientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMyAppointmentsRequest();
      setAppointments(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar tus citas");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("es-CL", {
      weekday: "short", day: "numeric", month: "short",
    });
  };

  return (
    <section className="section-content appointments-section">
      <div className="section-title">
        <h2>🕐 Mis Citas</h2>
        <p>{appointments.length} citas programadas</p>
      </div>

      {error && <p className="capt-error">{error}</p>}

      {loading ? (
        <p>Cargando tus citas...</p>
      ) : appointments.length === 0 ? (
        <div className="capt-empty">
          <div className="capt-empty-icon">📅</div>
          <h3>Aún no tienes citas agendadas</h3>
          <p>Ve a "Agendar" para reservar un horario con el veterinario.</p>
        </div>
      ) : (
        <div className="appointments-list">
          {appointments.map((apt) => {
            const info = STATUS_INFO[apt.status] || STATUS_INFO.pendiente;
            return (
              <div key={apt._id} className={`appointment-card ${info.className}`}>
                <div className="apt-date">
                  <span className="date">{formatDate(apt.date)}</span>
                  <span className="time">{apt.time}</span>
                </div>
                <div className="apt-info">
                  <h4>🐾 {apt.pet?.name || "Mascota"}</h4>
                  <p className="service">{apt.reason}</p>
                  <p className="vet">
                    👨‍⚕️ {apt.vet?.name ? `Dr(a). ${apt.vet.name}` : "Veterinario por asignar"}
                  </p>
                </div>
                <div className="apt-status">
                  <span className={`status-badge ${info.className}`}>{info.label}</span>
                  <button
                    className="btn-small btn-info"
                    onClick={() => setSelectedAppointment(apt)}
                  >
                    Detalles
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL DETALLES */}
      {selectedAppointment && (
        <div className="capt-modal-overlay" onClick={() => setSelectedAppointment(null)}>
          <div className="capt-modal" onClick={(e) => e.stopPropagation()}>
            <div className="capt-modal-header">
              <h3>📋 Detalles de la cita</h3>
              <button className="capt-modal-close" onClick={() => setSelectedAppointment(null)}>✕</button>
            </div>
            <div className="capt-modal-body">
              <p><strong>Mascota:</strong> 🐾 {selectedAppointment.pet?.name}</p>
              <p><strong>Servicio:</strong> 💉 {selectedAppointment.reason}</p>
              <p><strong>Fecha:</strong> 📅 {selectedAppointment.date} - {selectedAppointment.time}</p>
              <p>
                <strong>Veterinario:</strong> 👨‍⚕️{" "}
                {selectedAppointment.vet?.name ? `Dr(a). ${selectedAppointment.vet.name}` : "Por asignar"}
              </p>
              <p><strong>Estado:</strong> {STATUS_INFO[selectedAppointment.status]?.label}</p>
              <p><strong>Notas:</strong> 📝 {selectedAppointment.notes || "Sin notas"}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ClientAppointments;