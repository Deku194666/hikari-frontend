import { useState, useEffect } from "react";
import { getAlertsRequest } from "../../../services/alertService"; // 👈 ajustá la ruta según dónde esté tu componente, mismo nivel que ClientPets
import "./VetAlerts.css";

function VetAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAlertsRequest();
      setAlerts(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar las alertas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-content alerts-section">
      <div className="section-title">
        <h2><span className="title-icon">⚠️</span> Alertas y Notificaciones</h2>
        <p>Información importante para ti</p>
      </div>

      {error && <p className="alerts-error">{error}</p>}

      {loading ? (
        <div className="alerts-list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="alert-item alert-skeleton" />
          ))}
        </div>
      ) : alerts.length === 0 ? (
        <div className="alerts-empty">
          <div className="alerts-empty-icon">✅</div>
          <h3>Todo en orden</h3>
          <p>No hay alertas pendientes por ahora</p>
        </div>
      ) : (
        <div className="alerts-list">
          {alerts.map((alert) => (
            <div key={alert.id} className={`alert-item ${alert.type}`}>
              <span className="alert-icon">{alert.icon}</span>
              <div className="alert-body">
                <h3>{alert.title}</h3>
                <p>{alert.message}</p>
                <span className="time">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default VetAlerts;