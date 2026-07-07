import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 agregar
import "./VetDashboard.css";
import { useAuth } from "../../context/AuthContext";
import VetOverview from "./sections/VetOverview";
import VetAppointments from "./sections/VetAppointments";
import VetPatients from "./sections/VetPatients";
import VetPayments from "./sections/VetPayments";
import VetInventory from "./sections/VetInventory";
import VetAlerts from "./sections/VetAlerts";

function VetDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, setUser } = useAuth(); // 👈 asumo que tu AuthContext expone setUser; si no, avisame
  const navigate = useNavigate();

  const menuItems = [
    { id: "overview", label: "General", icon: "📊" },
    { id: "appointments", label: "Agendas", icon: "📅" },
    { id: "patients", label: "Pacientes", icon: "🐾" },
    { id: "payments", label: "Pagos", icon: "💳" },
    { id: "inventory", label: "Stock", icon: "📦" },
    { id: "alerts", label: "Alertas", icon: "⚠️" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/login");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <VetOverview />;
      case "appointments":
        return <VetAppointments />;
      case "patients":
        return <VetPatients />;
      case "payments":
        return <VetPayments />;
      case "inventory":
        return <VetInventory />;
      case "alerts":
        return <VetAlerts />;
      default:
        return <VetOverview />;
    }
  };

  return (
    <div className="vet-dashboard">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">🏥</span>
            {sidebarOpen && <span className="logo-text">Hikari</span>}
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Contraer menú" : "Expandir menú"}
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => setActiveSection(item.id)}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <span className="user-avatar">👨‍⚕️</span>
            {sidebarOpen && (
              <div className="user-text">
                <p className="user-name">
                  {user ? `Dr/Dra. ${user.name}` : "Usuario"}
                </p>
                <p className="user-status">
                  {user ? user.email : "No logueado"}
                </p>
              </div>
            )}
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
            title="Cerrar sesión"
          >
            <span className="logout-icon">🚪</span>
            {sidebarOpen && <span className="logout-label">Cerrar sesión</span>}
          </button>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        <div className="dashboard-header">
          <h1>🩺 Dashboard Veterinario</h1>
          <p>Panel de control de Hikari</p>
          <div className="header-actions">
            <span className="vet-badge">
              <span className="status-dot"></span>
              Profesional activo
            </span>
            <button className="btn-export">📥 Reporte</button>
          </div>
        </div>

        {renderSection()}
      </main>
    </div>
  );
}

export default VetDashboard;