import { useState, useEffect } from "react";
import { getPetsRequest } from "../../../services/petService";
import { getMyAppointmentsRequest } from "../../../services/appointmentService";
import { getMyOrdersRequest } from "../../../services/orderService";

function ClientOverview() {
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    setLoading(true);
    setError("");
    try {
      const [petsData, apptData, ordersData] = await Promise.all([
        getPetsRequest(),
        getMyAppointmentsRequest(),
        getMyOrdersRequest(),
      ]);
      setPets(petsData);
      setAppointments(apptData);
      setOrders(ordersData);
    } catch (err) {
      setError("No se pudieron cargar todos tus datos");
    } finally {
      setLoading(false);
    }
  };

  const todayStr = new Date().toISOString().slice(0, 10);

  const pendingAppointments = appointments.filter((a) => a.status === "pendiente");
  const upcomingAppointments = pendingAppointments
    .filter((a) => a.date >= todayStr)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  const attendedAppointments = appointments.filter((a) => a.status === "atendida");

  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
  const nextAppointment = upcomingAppointments[0];

  const formatDate = (dateStr) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("es-CL", {
      day: "numeric", month: "short",
    });
  };

  const stats = [
    {
      label: "Mascotas",
      value: loading ? "..." : String(pets.length),
      icon: "🐾", color: "blue",
      change: "registradas",
    },
    {
      label: "Citas próximas",
      value: loading ? "..." : String(upcomingAppointments.length),
      icon: "📅", color: "green",
      change: "pendientes",
    },
    {
      label: "Gastos totales",
      value: loading ? "..." : `$${totalSpent.toLocaleString("es-CL")}`,
      icon: "💰", color: "orange",
      change: `${orders.length} pedidos`,
    },
    {
      label: "Citas atendidas",
      value: loading ? "..." : String(attendedAppointments.length),
      icon: "✅", color: "purple",
      change: "en total",
    },
  ];

  return (
    <section className="section-content overview-section">
      <div className="section-title">
        <h2>📊 Resumen de tu cuenta</h2>
        <p>Información importante de un vistazo</p>
      </div>

      {error && <p style={{ color: "#791f1f", marginBottom: "1rem" }}>{error}</p>}

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.label}</h3>
              <p className="stat-value">{stat.value}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="overview-grid">
        <div className="overview-card">
          <h3>🐾 Mascotas registradas</h3>
          <p className="big-number">{loading ? "..." : pets.length}</p>
        </div>
        <div className="overview-card">
          <h3>📅 Próxima cita</h3>
          <p className="big-number" style={{ fontSize: nextAppointment ? "1.6rem" : "2.5rem" }}>
            {loading
              ? "..."
              : nextAppointment
              ? `${formatDate(nextAppointment.date)} · ${nextAppointment.time}`
              : "—"}
          </p>
        </div>
        <div className="overview-card">
          <h3>📦 Pedidos realizados</h3>
          <p className="big-number">{loading ? "..." : orders.length}</p>
        </div>
        <div className="overview-card">
          <h3>💰 Gastos totales</h3>
          <p className="big-number" style={{ fontSize: "1.9rem" }}>
            {loading ? "..." : `$${totalSpent.toLocaleString("es-CL")}`}
          </p>
        </div>
      </div>

      <div className="alerts-preview">
        <h3>⚠️ Recordatorios</h3>
        <div className="alert-items">
          {loading ? (
            <p style={{ fontSize: "13px", color: "#888780" }}>Cargando recordatorios...</p>
          ) : (
            <>
              {nextAppointment && (
                <div className="alert-small info">
                  <span>📅</span>
                  <p>
                    Tienes una cita el {formatDate(nextAppointment.date)} a las {nextAppointment.time}
                  </p>
                </div>
              )}
              {pets.length === 0 && (
                <div className="alert-small warning">
                  <span>🐾</span>
                  <p>Aún no has registrado ninguna mascota</p>
                </div>
              )}
              {orders.length > 0 && (
                <div className="alert-small success">
                  <span>📦</span>
                  <p>
                    Tu última compra fue por ${orders[0].total.toLocaleString("es-CL")}
                  </p>
                </div>
              )}
              {!nextAppointment && pets.length > 0 && orders.length === 0 && (
                <p style={{ fontSize: "13px", color: "#888780" }}>
                  No tienes recordatorios por ahora.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClientOverview;