import { useState, useEffect, useMemo } from "react";
import { getAllPatientsRequest } from "../../../services/petService";
import {
  getAllAppointmentsRequest,
  updateAppointmentStatusRequest,
} from "../../../services/appointmentService";
import "./VetPatients.css";
import { Link } from "react-router-dom";

const RECENT_DAYS = 7;

function VetPatients() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("resumen"); // resumen | calendario

  // calendario
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-11
  const [selectedDate, setSelectedDate] = useState(
    today.toISOString().slice(0, 10)
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [patientsData, appointmentsData] = await Promise.all([
        getAllPatientsRequest(),
        getAllAppointmentsRequest(),
      ]);
      setPatients(patientsData);
      setAppointments(appointmentsData);
    } catch (err) {
      setError(
        err.response?.data?.msg || "No se pudieron cargar los pacientes"
      );
    } finally {
      setLoading(false);
    }
  };

  const isRecentlyRegistered = (createdAt) => {
    if (!createdAt) return false;
    const diffMs = Date.now() - new Date(createdAt).getTime();
    return diffMs <= RECENT_DAYS * 24 * 60 * 60 * 1000;
  };

  const getPatientStatus = (petId) => {
    const petAppointments = appointments.filter((a) => a.pet && a.pet._id === petId);
    const hasPending = petAppointments.some((a) => a.status === "pendiente");
    const hasAttended = petAppointments.some((a) => a.status === "atendida");
    if (hasPending) return "pending";
    if (hasAttended) return "attended";
    return "none";
  };

  const getLastAttendedDate = (petId) => {
    const attended = appointments
      .filter((a) => a.pet && a.pet._id === petId && a.status === "atendida")
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    return attended.length > 0 ? attended[0].date : null;
  };

  // --- resumen ---
  const recentCount = useMemo(
    () => patients.filter((p) => isRecentlyRegistered(p.createdAt)).length,
    [patients]
  );

  const pendingPatientsCount = useMemo(
    () => patients.filter((p) => getPatientStatus(p._id) === "pending").length,
    [patients, appointments]
  );

  const attendedPatientsCount = useMemo(
    () => patients.filter((p) => getPatientStatus(p._id) === "attended").length,
    [patients, appointments]
  );

  const statusInfo = {
    pending: { label: "Por atender", className: "vp-status-pending" },
    attended: { label: "Atendido", className: "vp-status-attended" },
    none: { label: "Sin citas", className: "vp-status-none" },
  };

  // --- calendario ---
  const appointmentsByDate = useMemo(() => {
    const map = {};
    appointments.forEach((a) => {
      if (!map[a.date]) map[a.date] = [];
      map[a.date].push(a);
    });
    return map;
  }, [appointments]);

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];

  const buildCalendarDays = () => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startOffset = firstDay.getDay(); // 0=domingo
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  };

  const formatDateStr = (day) => {
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${viewYear}-${mm}-${dd}`;
  };

  const goToPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleMarkAttended = async (id) => {
    try {
      await updateAppointmentStatusRequest(id, "atendida");
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status: "atendida" } : a))
      );
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo actualizar la cita");
    }
  };

  const selectedDayAppointments = appointmentsByDate[selectedDate] || [];
  const todayStr = today.toISOString().slice(0, 10);

  if (loading) {
    return (
      <section className="section-content vp-section">
        <div className="section-title">
          <h2><span className="title-icon">🐾</span> Pacientes</h2>
        </div>
        <p>Cargando pacientes...</p>
      </section>
    );
  }

  return (
    <section className="section-content vp-section">
      <div className="section-title">
        <h2>🐾 Pacientes</h2>
        <p>{patients.length} mascotas registradas en el sistema</p>
      </div>

      {error && <p className="vp-error">{error}</p>}

      {/* RESUMEN */}
      <div className="vp-summary">
        <div className="vp-summary-card vp-summary-total">
          <span className="vp-summary-number">{patients.length}</span>
          <span className="vp-summary-label">Total pacientes</span>
        </div>
        <div className="vp-summary-card vp-summary-new">
          <span className="vp-summary-number">{recentCount}</span>
          <span className="vp-summary-label">🆕 Recién registrados</span>
        </div>
        <div className="vp-summary-card vp-summary-pending">
          <span className="vp-summary-number">{pendingPatientsCount}</span>
          <span className="vp-summary-label">⏳ Por atender</span>
        </div>
        <div className="vp-summary-card vp-summary-attended">
          <span className="vp-summary-number">{attendedPatientsCount}</span>
          <span className="vp-summary-label">✅ Atendidos</span>
        </div>
      </div>

      {/* TABS */}
      <div className="vp-tabs">
        <button
          className={`vp-tab ${activeTab === "resumen" ? "active" : ""}`}
          onClick={() => setActiveTab("resumen")}
        >
          📋 Tabla de pacientes
        </button>
        <button
          className={`vp-tab ${activeTab === "calendario" ? "active" : ""}`}
          onClick={() => setActiveTab("calendario")}
        >
          📅 Calendario de citas
        </button>
      </div>

      {/* TABLA */}
      {activeTab === "resumen" && (
        <div className="table-responsive vp-table-wrap">
          <table className="patients-table">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Propietario</th>
                <th>Raza</th>
                <th>Ficha Clínica</th>
                <th>Registrado</th>
                <th>Última atención</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => {
                const status = getPatientStatus(patient._id);
                const lastAttended = getLastAttendedDate(patient._id);
                const info = statusInfo[status];
                return (
                  <tr key={patient._id} className="patient-row">
                    <td className="patient-name">
                      {patient.type === "Perro" ? "🐕" : "🐱"} {patient.name}
                      {isRecentlyRegistered(patient.createdAt) && (
                        <span className="vp-new-badge">Nuevo</span>
                      )}
                    </td>
                    <td>{patient.owner?.name || "—"}</td>
                    <td className="breed">{patient.breed}</td>
                     <td>
                      <Link to={`/vet/paciente/${patient._id}`} className="vp-ficha-link">
                      📋 Ver ficha
                      </Link>
                    </td>
                    <td>{new Date(patient.createdAt).toLocaleDateString("es-CL")}</td>
                    <td>{lastAttended ? new Date(lastAttended).toLocaleDateString("es-CL") : "—"}</td>
                    <td>
                      <span className={`status-label ${info.className}`}>
                        {info.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {patients.length === 0 && (
                <tr>
                  <td colSpan={7} className="vp-empty-row">
                    Aún no hay pacientes registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* CALENDARIO */}
      {activeTab === "calendario" && (
        <div className="vp-calendar-layout">
          <div className="vp-calendar-card">
            <div className="vp-calendar-header">
              <button onClick={goToPrevMonth} className="vp-cal-nav">←</button>
              <h3>{monthNames[viewMonth]} {viewYear}</h3>
              <button onClick={goToNextMonth} className="vp-cal-nav">→</button>
            </div>

            <div className="vp-calendar-weekdays">
              {["D", "L", "M", "M", "J", "V", "S"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>

            <div className="vp-calendar-grid">
              {buildCalendarDays().map((day, idx) => {
                if (day === null) {
                  return <div key={idx} className="vp-cal-cell vp-cal-empty" />;
                }
                const dateStr = formatDateStr(day);
                const dayAppointments = appointmentsByDate[dateStr] || [];
                const isSelected = dateStr === selectedDate;
                const isToday = dateStr === todayStr;

                return (
                  <button
                    key={idx}
                    className={`vp-cal-cell ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
                    onClick={() => setSelectedDate(dateStr)}
                  >
                    <span className="vp-cal-day-number">{day}</span>
                    {dayAppointments.length > 0 && (
                      <span className="vp-cal-dot-wrap">
                        <span className="vp-cal-dot" />
                        {dayAppointments.length > 1 && (
                          <span className="vp-cal-count">{dayAppointments.length}</span>
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="vp-day-panel">
            <h3>
              Citas del {new Date(selectedDate + "T00:00:00").toLocaleDateString("es-CL", {
                weekday: "long", day: "numeric", month: "long",
              })}
            </h3>

            {selectedDayAppointments.length === 0 ? (
              <p className="vp-day-empty">No hay citas agendadas este día.</p>
            ) : (
              <div className="vp-day-list">
                {selectedDayAppointments
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((apt) => (
                    <div key={apt._id} className={`vp-apt-item vp-apt-${apt.status}`}>
                      <div className="vp-apt-time">{apt.time}</div>
                      <div className="vp-apt-info">
                        <strong>{apt.pet?.name || "Mascota"}</strong>
                        <span>{apt.owner?.name || "—"}</span>
                        <span className="vp-apt-reason">{apt.reason}</span>
                      </div>
                      <div className="vp-apt-actions">
                        <span className={`status-label ${statusInfo[apt.status === "atendida" ? "attended" : apt.status === "pendiente" ? "pending" : "none"]?.className}`}>
                          {apt.status === "pendiente" ? "Pendiente" : apt.status === "atendida" ? "Atendida" : "Cancelada"}
                        </span>
                        {apt.status === "pendiente" && (
                          <button
                            className="vp-attend-btn"
                            onClick={() => handleMarkAttended(apt._id)}
                          >
                            Marcar atendida
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default VetPatients;