import { useState } from "react";
import { loginRequest } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import NavBar2 from "../components/NavBar2";


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

  return (
    <div className="login-container">
      <NavBar2 />
      <div className="login-wrapper">
        
        {/* CARD PRINCIPAL */}
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

        {/* SIDE IMAGE (OPCIONAL PARA DESKTOP) */}
 <div className="login-side">
  <div className="side-content">
    <img 
      src="/images/logovet1.png" 
      alt="Logo Hikari" 
      className="side-logo"
    />
    <h2>Hikari</h2>
    <h4 style={{ marginBottom: 18,  }} >Cuidado veterinario profesional a domicilio</h4>
            <div className="side-benefits">
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17,  }}>Atención veterinaria en tu hogar</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17,  }}  >Profesionales capacitados y certificados</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p style={{ fontSize: 17,  }}  >Productos premium para tu mascota</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;