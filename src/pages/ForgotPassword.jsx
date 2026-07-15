



import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPasswordRequest } from "../services/authService";
import "./Login.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Por favor ingresa un correo válido");
      return;
    }

    setLoading(true);
    try {
      await forgotPasswordRequest(email);
      setSent(true);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo procesar tu solicitud, intenta de nuevo");
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
            <div className="login-icon">🔑</div>
            <h1>Recupera tu contraseña</h1>
            <p>Ingresa tu correo y te enviaremos un link para restablecerla</p>
          </div>

          {sent ? (
            <div className="login-form">
              <div className="error-message" style={{ background: "#eaf3de", color: "#27500a" }}>
                <span className="error-icon">✅</span>
                <span>
                  Si el correo existe en nuestro sistema, te enviamos un link para recuperar tu contraseña.
                  Revisa tu bandeja de entrada (y la carpeta de spam, por si acaso).
                </span>
              </div>
              <Link to="/login" className="btn-login" style={{ textAlign: "center", textDecoration: "none", display: "block" }}>
                ← Volver a iniciar sesión
              </Link>
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
                <label htmlFor="email">📧 Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                />
              </div>

              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>📧 Enviar link de recuperación</>
                )}
              </button>
            </form>
          )}

          <div className="form-divider">
            <span>¿Recordaste tu contraseña?</span>
          </div>

          <Link to="/login" className="btn-register">
            🔑 Volver a iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;