import { useState } from "react";
import { loginRequest } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Obtener función login del contexto

  const validateForm = () => {
    if (!email) {
      setError("Por favor ingresa tu correo electrónico");
      return false;
    }
    if (!email.includes("@")) {
      setError("Por favor ingresa un correo válido");
      return false;
    }
    if (!password) {
      setError("Por favor ingresa tu contraseña");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const data = await loginRequest(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Guardar usuario en el contexto
      login(data.user);

      // redirección por rol
      if (data.user.role === "cliente") {
        navigate("/dashboard-cliente");
      } else {
        navigate("/dashboard-vet");
      }

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Error al iniciar sesión. Verifica tus credenciales"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: conectar con el flujo real de OAuth de Google (redirect a tu backend
    // o a Google Identity Services). Por ahora solo deja el botón listo en UI.
    console.log("Iniciar sesión con Google");
  };

  return (
    <div className="login-container">
      <NavBar2 />
      <WhatsAppButton />
      <div className="login-wrapper">

        {/* CARD PRINCIPAL (FORMULARIO) */}
        <div className="login-card">

          {/* HEADER */}
          <div className="login-header">
            <div className="login-icon">🐾</div>
            <h1>Bienvenido de vuelta</h1>
            <p>Inicia sesión en tu cuenta para acceder a tus servicios</p>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="login-form">

            {/* MENSAJE DE ERROR */}
            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* INPUT EMAIL */}
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

            {/* INPUT PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">🔐 Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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

            {/* RECORDAR Y RECUPERAR */}
            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* BOTÓN SUBMIT */}
            <button
              type="submit"
              className="btn-login"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                <>🚀 Iniciar Sesión</>
              )}
            </button>

          </form>

          {/* DIVIDER "O" PARA LOGIN SOCIAL */}
          <div className="form-divider">
            <span>o continúa con</span>
          </div>

          {/* BOTÓN GOOGLE */}
          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            Entrar con Google
          </button>

          {/* DIVIDER */}
          <div className="form-divider">
            <span>¿No tienes cuenta?</span>
          </div>

          {/* LINK A REGISTRO */}
          <Link to="/register" className="btn-register">
            📝 Crear una cuenta nueva
          </Link>

          {/* FOOTER CON INFO */}
          <div className="login-footer">
            <p>🔒 Tu información está protegida y segura</p>
          </div>

        </div>

        {/* SIDE IMAGE (LOGO) */}
        <div className="login-side">
          <div className="side-content">
            <img
              src="/images/logovet1.png"
              alt="Logo Hikari"
              className="side-logo"
            />
            <h2>Hikari</h2>
            <h4 style={{ marginBottom: 18 }}>Cuidado veterinario profesional a domicilio</h4>
            <div className="side-benefits">
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17 }}>Atención veterinaria en tu hogar</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17 }}>Profesionales capacitados y certificados</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17 }}>Productos premium para tu mascota</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;