import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./VetDashboard.css";
import { useAuth } from "../../context/AuthContext";
import VetOverview from "./sections/VetOverview";
import VetAppointments from "./sections/VetAppointments";
import VetPatients from "./sections/VetPatients";
import VetPayments from "./sections/VetPayments";
import VetInventory from "./sections/VetInventory";
import VetAlerts from "./sections/VetAlerts";
import VetTelemedicine from "./sections/VetTelemedicine";
import VetExams from "./sections/VetExams";
import UserProfile from "../../components/UserProfile";
import { getPhotoUrl } from "../../utils/getFileUrl";
import UserSettings from "../../components/UserSettings";

function VetDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, setUser } = useAuth();  
  const navigate = useNavigate();

  const menuItems = [
    { id: "overview", label: "General", icon: "📊" },
    { id: "appointments", label: "Agendas", icon: "📅" },
    { id: "patients", label: "Pacientes", icon: "🐾" },
    { id: "exams", label: "Exámenes", icon: "🧪" },
    { id: "telemedicine", label: "Telemedicina", icon: "📹" },
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
        case "exams":
        return <VetExams />;
      case "telemedicine":
        return <VetTelemedicine />;
      case "payments":
        return <VetPayments />;
      case "inventory":
        return <VetInventory />;
      case "alerts":
        return <VetAlerts />;
      case "profile":
        return <UserProfile />;
      case "settings":
        return <UserSettings />;
      default:
        return <VetOverview />;
    }
  };

  return (
    <div className="vet-dashboard">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button
          className="sidebar-logo sidebar-logo-btn"
          onClick={() => setActiveSection("overview")}
          title="Ir al inicio">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">Hikari</span>
          </button>

          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Contraer menú" : "Expandir menú"}
          >
            {sidebarOpen ? "←" : "→"}
          </button>

          <button
            className="mobile-logout-btn"
            onClick={handleLogout}
            title="Cerrar sesión"
          >
            🚪
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
          <button
  className="user-info user-info-btn"
  onClick={() => setActiveSection("profile")}
  title="Ver mi perfil"
>
  <span className="user-avatar">
    {user?.photo ? (
      <img src={getPhotoUrl(user.photo)} alt="Foto de perfil" className="user-avatar-img" />
    ) : (
      "👨‍⚕️"
    )}
  </span>
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
</button>
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
            <button className="btn-export" onClick={() => setActiveSection("settings")}>⚙️ Configuración</button>
          </div>
        </div>

        {renderSection()}
      </main>
    </div>
  );
}

export default VetDashboard;