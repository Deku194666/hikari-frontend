


import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { changePasswordRequest } from "../services/userService";
import "./UserSettings.css";

function UserSettings() {
  const { user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("security");

  // --- Seguridad (funcional) ---
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  // --- Notificaciones (visual) ---
  const [notifications, setNotifications] = useState({
    appointments: true,
    reminders: true,
    promotions: false,
    news: true,
  });

  // --- Apariencia (visual) ---
  const [theme, setTheme] = useState("light");

  // --- Idioma (visual) ---
  const [language, setLanguage] = useState("es-CL");

  const tabs = [
    { id: "security", label: "Seguridad", icon: "🔒" },
    { id: "notifications", label: "Notificaciones", icon: "🔔" },
    { id: "appearance", label: "Apariencia", icon: "🎨" },
    { id: "language", label: "Idioma y región", icon: "🌎" },
    { id: "account", label: "Cuenta", icon: "⚙️" },
  ];

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("Las contraseñas nuevas no coinciden");
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordError("La nueva contraseña debe tener al menos 6 caracteres");
      return;
    }

    setSavingPassword(true);
    try {
      await changePasswordRequest({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      setPasswordSuccess("Contraseña actualizada correctamente");
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setPasswordError(err.response?.data?.msg || "No se pudo actualizar la contraseña");
    } finally {
      setSavingPassword(false);
    }
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="section-content us-section">
      <div className="section-title">
        <h2>⚙️ Configuración</h2>
        <p>Administra tu cuenta y preferencias</p>
      </div>

      <div className="us-layout">
        {/* TABS LATERALES */}
        <div className="us-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`us-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="us-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENIDO */}
        <div className="us-content">

          {/* SEGURIDAD */}
          {activeTab === "security" && (
            <div className="us-panel">
              <h3>🔒 Seguridad</h3>
              <p className="us-panel-desc">Cambia tu contraseña regularmente para mantener tu cuenta protegida</p>

              {passwordError && <p className="us-error">{passwordError}</p>}
              {passwordSuccess && <p className="us-success">{passwordSuccess}</p>}

              <form className="us-form" onSubmit={handlePasswordSubmit}>
                <label className="us-field">
                  Contraseña actual
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </label>
                <label className="us-field">
                  Nueva contraseña
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength={6}
                  />
                </label>
                <label className="us-field">
                  Confirmar nueva contraseña
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength={6}
                  />
                </label>
                <button type="submit" className="us-save-btn" disabled={savingPassword}>
                  {savingPassword ? "Guardando..." : "Actualizar contraseña"}
                </button>
              </form>

              <div className="us-divider" />

              <div className="us-danger-zone">
                <div>
                  <h4>Cerrar todas las sesiones</h4>
                  <p>Cierra tu sesión en este dispositivo</p>
                </div>
                <button className="us-outline-btn" onClick={logout}>Cerrar sesión</button>
              </div>
            </div>
          )}

          {/* NOTIFICACIONES */}
          {activeTab === "notifications" && (
            <div className="us-panel">
              <h3>🔔 Notificaciones</h3>
              <p className="us-panel-desc">Elige qué notificaciones quieres recibir</p>

              <div className="us-toggle-list">
                <div className="us-toggle-item">
                  <div>
                    <h4>Citas y recordatorios</h4>
                    <p>Avisos sobre próximas citas agendadas</p>
                  </div>
                  <Toggle checked={notifications.appointments} onChange={() => toggleNotification("appointments")} />
                </div>
                <div className="us-toggle-item">
                  <div>
                    <h4>Recordatorios de salud</h4>
                    <p>Vacunas, controles y seguimientos pendientes</p>
                  </div>
                  <Toggle checked={notifications.reminders} onChange={() => toggleNotification("reminders")} />
                </div>
                <div className="us-toggle-item">
                  <div>
                    <h4>Promociones y ofertas</h4>
                    <p>Descuentos en tienda y productos destacados</p>
                  </div>
                  <Toggle checked={notifications.promotions} onChange={() => toggleNotification("promotions")} />
                </div>
                <div className="us-toggle-item">
                  <div>
                    <h4>Novedades de Hikari</h4>
                    <p>Nuevas funciones y actualizaciones de la plataforma</p>
                  </div>
                  <Toggle checked={notifications.news} onChange={() => toggleNotification("news")} />
                </div>
              </div>
            </div>
          )}

          {/* APARIENCIA */}
          {activeTab === "appearance" && (
            <div className="us-panel">
              <h3>🎨 Apariencia</h3>
              <p className="us-panel-desc">Personaliza cómo se ve tu panel</p>

              <div className="us-theme-grid">
                <button
                  className={`us-theme-option ${theme === "light" ? "selected" : ""}`}
                  onClick={() => setTheme("light")}
                >
                  <div className="us-theme-preview us-theme-light" />
                  <span>Claro</span>
                </button>
                <button
                  className={`us-theme-option ${theme === "dark" ? "selected" : ""}`}
                  onClick={() => setTheme("dark")}
                >
                  <div className="us-theme-preview us-theme-dark" />
                  <span>Oscuro</span>
                </button>
                <button
                  className={`us-theme-option ${theme === "auto" ? "selected" : ""}`}
                  onClick={() => setTheme("auto")}
                >
                  <div className="us-theme-preview us-theme-auto" />
                  <span>Automático</span>
                </button>
              </div>
              <p className="us-coming-soon">🚧 Próximamente disponible</p>
            </div>
          )}

          {/* IDIOMA */}
          {activeTab === "language" && (
            <div className="us-panel">
              <h3>🌎 Idioma y región</h3>
              <p className="us-panel-desc">Elige el idioma y formato de fecha que prefieras</p>

              <label className="us-field">
                Idioma
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="es-CL">Español (Chile)</option>
                  <option value="es-MX">Español (México)</option>
                  <option value="en-US">English (US)</option>
                </select>
              </label>

              <label className="us-field">
                Zona horaria
                <select defaultValue="santiago">
                  <option value="santiago">América/Santiago (GMT-4)</option>
                </select>
              </label>

              <p className="us-coming-soon">🚧 Próximamente disponible</p>
            </div>
          )}

          {/* CUENTA */}
          {activeTab === "account" && (
            <div className="us-panel">
              <h3>⚙️ Cuenta</h3>
              <p className="us-panel-desc">Información general de tu cuenta</p>

              <div className="us-info-list">
                <div className="us-info-row">
                  <span>Correo electrónico</span>
                  <strong>{user?.email}</strong>
                </div>
                <div className="us-info-row">
                  <span>Tipo de cuenta</span>
                  <strong>{user?.role === "vet" ? "Veterinario" : "Cliente"}</strong>
                </div>
              </div>

              <div className="us-divider" />

              <div className="us-danger-zone">
                <div>
                  <h4>Eliminar cuenta</h4>
                  <p>Esta acción es permanente y no se puede deshacer</p>
                </div>
                <button className="us-danger-btn" disabled>Eliminar cuenta</button>
              </div>
              <p className="us-coming-soon">🚧 Próximamente disponible</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`us-toggle ${checked ? "on" : ""}`}
      onClick={onChange}
    >
      <span className="us-toggle-dot" />
    </button>
  );
}

export default UserSettings;