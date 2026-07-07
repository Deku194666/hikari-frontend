import { useState, useEffect, useMemo } from "react";
import { getPetsRequest } from "../../../services/petService";
import {
  getAvailabilityRequest,
  getMonthSummaryRequest,
  createAppointmentRequest,
} from "../../../services/appointmentService";
import "./ClientSchedule.css";

const SERVICES = [
  "Vacunación",
  "Control general",
  "Examen sangre",
  "Desparasitación",
  "Limpieza dental",
  "Consulta",
];

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00",
];

function ClientSchedule({ setActiveSection }) {
  const [pets, setPets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(true);

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-11
  const [monthSummary, setMonthSummary] = useState({});

  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [bookedTimes, setBookedTimes] = useState([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);

  const [selectedPet, setSelectedPet] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  useEffect(() => {
    loadPets();
  }, []);

  useEffect(() => {
    loadMonthSummary();
  }, [viewYear, viewMonth]);

  useEffect(() => {
    loadAvailability(selectedDate);
    setSelectedTime("");
  }, [selectedDate]);

  const loadPets = async () => {
    setLoadingPets(true);
    try {
      const data = await getPetsRequest();
      setPets(data);
    } catch (err) {
      setPets([]);
    } finally {
      setLoadingPets(false);
    }
  };

  const loadMonthSummary = async () => {
    try {
      const data = await getMonthSummaryRequest(viewYear, viewMonth + 1);
      setMonthSummary(data);
    } catch (err) {
      setMonthSummary({});
    }
  };

  const loadAvailability = async (date) => {
    setLoadingAvailability(true);
    try {
      const data = await getAvailabilityRequest(date);
      setBookedTimes(data.bookedTimes || []);
    } catch (err) {
      setBookedTimes([]);
    } finally {
      setLoadingAvailability(false);
    }
  };

  const todayStr = formatDate(today);

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];

  const buildCalendarDays = () => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  };

  const dateStrForDay = (day) => {
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

  const isPastDate = (dateStr) => dateStr < todayStr;

  const handleSelectDay = (day) => {
    const dateStr = dateStrForDay(day);
    if (isPastDate(dateStr)) return;
    setSelectedDate(dateStr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPet || !selectedService || !selectedDate || !selectedTime) {
      alert("⚠️ Por favor completa todos los campos obligatorios");
      return;
    }

    setSubmitting(true);
    try {
      await createAppointmentRequest({
        petId: selectedPet,
        date: selectedDate,
        time: selectedTime,
        reason: selectedService,
        notes,
      });

      alert("✅ Cita agendada correctamente. Espera confirmación del veterinario.");
      setSelectedPet("");
      setSelectedService("");
      setSelectedTime("");
      setNotes("");
      setActiveSection("appointments");
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo agendar la cita, intenta con otro horario");
      loadAvailability(selectedDate);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedDateLabel = useMemo(() => {
    const [y, m, d] = selectedDate.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("es-CL", {
      weekday: "long", day: "numeric", month: "long",
    });
  }, [selectedDate]);

  return (
    <section className="section-content csch-section">
      <div className="section-title">
        <h2>📅 Agendar Cita</h2>
        <p>Revisa la disponibilidad del veterinario y elige tu horario</p>
      </div>

      <div className="csch-layout">

        {/* CALENDARIO */}
        <div className="csch-calendar-card">
          <div className="csch-calendar-header">
            <button onClick={goToPrevMonth} className="csch-cal-nav">←</button>
            <h3>{monthNames[viewMonth]} {viewYear}</h3>
            <button onClick={goToNextMonth} className="csch-cal-nav">→</button>
          </div>

          <div className="csch-calendar-weekdays">
            {["D", "L", "M", "M", "J", "V", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          <div className="csch-calendar-grid">
            {buildCalendarDays().map((day, idx) => {
              if (day === null) {
                return <div key={idx} className="csch-cal-cell csch-cal-empty" />;
              }
              const dateStr = dateStrForDay(day);
              const isSelected = dateStr === selectedDate;
              const isToday = dateStr === todayStr;
              const isPast = isPastDate(dateStr);
              const hasAppointments = (monthSummary[dateStr] || 0) > 0;

              return (
                <button
                  key={idx}
                  disabled={isPast}
                  className={`csch-cal-cell ${isSelected ? "selected" : ""} ${isToday ? "today" : ""} ${isPast ? "past" : ""}`}
                  onClick={() => handleSelectDay(day)}
                >
                  <span className="csch-cal-day-number">{day}</span>
                  {hasAppointments && !isPast && <span className="csch-cal-dot" />}
                </button>
              );
            })}
          </div>

          <div className="csch-legend">
            <div className="csch-legend-item">
              <span className="csch-legend-dot selected"></span>
              <p>Día seleccionado</p>
            </div>
            <div className="csch-legend-item">
              <span className="csch-legend-dot busy"></span>
              <p>Con citas agendadas</p>
            </div>
          </div>
        </div>

        {/* FORMULARIO + HORARIOS */}
        <div className="csch-form-card">
          <h3>{selectedDateLabel.charAt(0).toUpperCase() + selectedDateLabel.slice(1)}</h3>

          <form onSubmit={handleSubmit} className="csch-form">

            <div className="csch-field">
              <label>🐾 Selecciona tu mascota *</label>
              {loadingPets ? (
                <p className="csch-hint">Cargando tus mascotas...</p>
              ) : pets.length === 0 ? (
                <p className="csch-hint">
                  No tienes mascotas registradas todavía. Ve a "Mis mascotas" para agregar una.
                </p>
              ) : (
                <select
                  value={selectedPet}
                  onChange={(e) => setSelectedPet(e.target.value)}
                  required
                >
                  <option value="">-- Elige mascota --</option>
                  {pets.map((pet) => (
                    <option key={pet._id} value={pet._id}>
                      {pet.name} ({pet.type})
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="csch-field">
              <label>💉 Servicio deseado *</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">-- Elige servicio --</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="csch-field">
              <label>⏰ Horarios disponibles para este día *</label>
              {loadingAvailability ? (
                <p className="csch-hint">Cargando horarios...</p>
              ) : (
                <div className="csch-slots-grid">
                  {TIME_SLOTS.map((slot) => {
                    const isTaken = bookedTimes.includes(slot);
                    const isChosen = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        disabled={isTaken}
                        className={`csch-slot ${isChosen ? "chosen" : ""} ${isTaken ? "taken" : ""}`}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="csch-field">
              <label>📝 Notas adicionales</label>
              <textarea
                placeholder="Ej: Mi mascota tiene alergia a..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="csch-submit-btn"
              disabled={submitting || pets.length === 0}
            >
              {submitting ? "Agendando..." : "✅ Confirmar cita"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ClientSchedule;