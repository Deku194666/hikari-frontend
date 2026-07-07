import { useState, useEffect } from "react";
import { getMyAppointmentsRequest } from "../../../services/appointmentService";
import "./ClientHistory.css";

function ClientHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMyAppointmentsRequest();
      const attended = data
        .filter((apt) => apt.status === "atendida")
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      setHistory(attended);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo cargar el historial");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("es-CL", {
      day: "numeric", month: "long", year: "numeric",
    });
  };

  return (
    <section className="section-content history-section">
      <div className="section-title">
        <h2>📋 Historial</h2>
        <p>Registro de todas las visitas y servicios atendidos</p>
      </div>

      {error && <p className="chist-error">{error}</p>}

      {loading ? (
        <p>Cargando historial...</p>
      ) : history.length === 0 ? (
        <div className="chist-empty">
          <div className="chist-empty-icon">📋</div>
          <h3>Aún no tienes visitas registradas</h3>
          <p>Cuando el veterinario marque una cita como atendida, va a aparecer aquí.</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((record) => (
            <div key={record._id} className="history-item">
              <div className="history-date">
                <span>{formatDate(record.date)}</span>
              </div>
              <div className="history-content">
                <h4>🐾 {record.pet?.name || "Mascota"}</h4>
                <p className="service">{record.reason}</p>
                <p className="notes">{record.notes || "Sin notas registradas"}</p>
                <p className="vet">
                  👨‍⚕️ {record.vet?.name ? `Dr(a). ${record.vet.name}` : "Veterinario no especificado"}
                </p>
              </div>
              <button className="btn-small btn-info" onClick={() => setSelectedRecord(record)}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      )}

      {/* MODAL DETALLE */}
      {selectedRecord && (
        <div className="chist-modal-overlay" onClick={() => setSelectedRecord(null)}>
          <div className="chist-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chist-modal-header">
              <h3>📋 Detalle de la visita</h3>
              <button className="chist-modal-close" onClick={() => setSelectedRecord(null)}>✕</button>
            </div>
            <div className="chist-modal-body">
              <p><strong>Mascota:</strong> 🐾 {selectedRecord.pet?.name}</p>
              <p><strong>Servicio:</strong> 💉 {selectedRecord.reason}</p>
              <p><strong>Fecha:</strong> 📅 {formatDate(selectedRecord.date)} - {selectedRecord.time}</p>
              <p>
                <strong>Veterinario:</strong> 👨‍⚕️{" "}
                {selectedRecord.vet?.name ? `Dr(a). ${selectedRecord.vet.name}` : "No especificado"}
              </p>
              <p><strong>Notas de la atención:</strong> 📝 {selectedRecord.notes || "Sin notas"}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ClientHistory;