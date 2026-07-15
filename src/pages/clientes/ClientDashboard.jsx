import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./ClientDashboard.css";
import { useAuth } from "../../context/AuthContext";
import ClientOverview from "./sections/ClientOverview";
import ClientPets from "./sections/ClientPets";
import ClientSchedule from "./sections/ClientSchedule";
import ClientAppointments from "./sections/ClientAppointments";
import ClientShop from "./sections/ClientShop";
import ClientOrders from "./sections/ClientOrders";
import ClientHistory from "./sections/ClientHistory";
import ClientTips from "./sections/ClientTips";
import ClientTelemedicine from "./sections/ClientTelemedicine";
import ClientExams from "./sections/ClientExams";
import UserProfile from "../../components/UserProfile";
import { getPhotoUrl } from "../../utils/getFileUrl";
import UserSettings from "../../components/UserSettings";

function ClientDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, setUser } = useAuth();  
  const navigate = useNavigate();  

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/login");
  };

  const menuItems = [
    { id: "overview", label: "General", icon: "📊" },
    { id: "pets", label: "Mis mascotas", icon: "🐾" },
    { id: "schedule", label: "Agendar", icon: "📅" },
    { id: "appointments", label: "Mis citas", icon: "🕐" },
    { id: "exams", label: "Exámenes", icon: "🧪" },
    { id: "telemedicine", label: "Telemedicina", icon: "📹" },
    { id: "shop", label: "Tienda", icon: "🛒" },
    { id: "orders", label: "Mis compras", icon: "📦" },
    { id: "history", label: "Historial", icon: "📋" },
    { id: "tips", label: "Tips", icon: "💡" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <ClientOverview />;
      case "pets":
        return <ClientPets />;
      case "schedule":
        return <ClientSchedule setActiveSection={setActiveSection} />;
      case "appointments":
        return <ClientAppointments />;
        case "exams":
          return <ClientExams />;
      case "telemedicine":
        return <ClientTelemedicine />;
      case "shop":
        return <ClientShop />;
      case "orders":
        return <ClientOrders />;
      case "history":
        return <ClientHistory />;
      case "tips":
        return <ClientTips />;
      case "profile":
        return <UserProfile />;
      case "settings":
      return <UserSettings />;
      default:
        return <ClientOverview />;
    }
  };

  return (
    <div className="client-dashboard">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button
            className="sidebar-logo sidebar-logo-btn"
            onClick={() => setActiveSection("overview")}
            title="Ir al inicio"
          >
            <span className="logo-icon">🏥</span>
            {sidebarOpen && <span className="logo-text">Hikari</span>}
          </button>

          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "←" : "→"}
          </button>

          {/* Botón compacto de logout, solo visible en mobile portrait (ver CSS) */}
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
            <span className="user-avatar-circle">
              {user?.photo ? (
                <img src={getPhotoUrl(user.photo)} alt="Foto de perfil" className="user-avatar-img" />
              ) : (
                getInitials(user?.name)
              )}
            </span>
            {sidebarOpen && (
              <div className="user-text">
                <p className="user-name">
                  {user ? user.name : "Usuario"}
                </p>
                <p className="user-email">
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
          <h1>🐾 Mi Centro de Control</h1>
          <p>Gestiona las citas y salud de tus mascotas</p>
          <div className="header-actions">
            <span className="user-badge">
              👋 Bienvenido, {user ? user.name : "Usuario"}
            </span>
            <button className="btn-export" onClick={() => setActiveSection("settings")}>⚙️ Configuración</button>
          </div>
        </div>

        {renderSection()}
      </main>
    </div>
  );
}

export default ClientDashboard;