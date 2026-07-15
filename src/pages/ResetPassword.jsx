


import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { resetPasswordRequest } from "../services/authService";
import "./Login.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      await resetPasswordRequest(token, newPassword);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      setError(err.response?.data?.msg || "El link es inválido o ya venció, solicita uno nuevo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <NavBar2 />
      <WhatsAppButton />
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">🔐</div>
            <h1>Nueva contraseña</h1>
            <p>Ingresa y confirma tu nueva contraseña</p>
          </div>

          {success ? (
            <div className="login-form">
              <div className="error-message" style={{ background: "#eaf3de", color: "#27500a" }}>
                <span className="error-icon">✅</span>
                <span>Contraseña actualizada correctamente. Te llevamos al login...</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="newPassword">🔐 Nueva contraseña</label>
                <div className="password-input-wrapper">
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setError("");
                    }}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">🔐 Confirmar contraseña</label>
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Repite tu nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                />
              </div>

              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Actualizando...
                  </>
                ) : (
                  <>✅ Cambiar contraseña</>
                )}
              </button>
            </form>
          )}

          <div className="form-divider">
            <span>¿Ya la recordaste?</span>
          </div>

          <Link to="/login" className="btn-register">
            🔑 Volver a iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;