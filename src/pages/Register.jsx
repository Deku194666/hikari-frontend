import { useState } from "react";
import { registerRequest } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";


function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Ingresa un correo válido";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (form.phone.trim().length < 9) {
      newErrors.phone = "El teléfono debe tener al menos 9 dígitos";
    }

    if (!form.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (form.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password = "Debe contener al menos una mayúscula";
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Debe contener al menos un número";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (!agreeTerms) {
      newErrors.terms = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await registerRequest({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      setSuccessMessage("¡Cuenta creada exitosamente! 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      setErrors({
        ...errors,
        submit:
          error.response?.data?.message ||
          "Error al crear la cuenta. Intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <NavBar2 />
      <WhatsAppButton />
      <div className="register-wrapper">
        
        {/* SIDE INFO (IZQUIERDA) */}
        <div className="register-side">
          <div className="side-content">
            <div className="login-icon">🐾</div>
            <h2>Hikari</h2>
            <h4 style={{ marginBottom: 18,  }}  >Únete a la comunidad veterinaria</h4>
            
            <div className="side-benefits">
              <div className="benefit-item">
                <span>🐶</span>
                <p style={{ fontSize: 17,  }} >Registra tus mascotas</p>
              </div>
              <div className="benefit-item">
                <span>📅</span>
                <p style={{ fontSize: 17,  }} >Agenda citas fácilmente</p>
              </div>
              <div className="benefit-item">
                <span>🧪</span>
                <p  style={{ fontSize: 17,  }}>Accede a resultados</p>
              </div>
              <div className="benefit-item">
                <span>💉</span>
                <p  style={{ fontSize: 17,  }}>  Controla vacunas</p>
              </div>
              <div className="benefit-item">
                <span>📊</span>
                <p  style={{ fontSize: 17,  }}>Historial completo</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO (DERECHA) */}
        <div className="register-card">
          
          {/* HEADER MEJORADO */}
          <div className="register-header">
            <div className="register-icon">
              <img src="/images/logovet1.png" alt="Hikari Logo" />
            </div>
            <h1>Crea tu cuenta</h1>
            <p style={{ fontSize: 17,  }} >Regístrate y comienza a cuidar mejor a tus mascotas</p>
          </div>

         

          {/* MENSAJE DE ERROR GENERAL */}
          {errors.submit && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span>{errors.submit}</span>
            </div>
          )}

          {/* MENSAJE DE ÉXITO */}
          {successMessage && (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            
            {/* NOMBRE */}
            <div className="form-group">
              <label htmlFor="name">👤 Nombre Completo</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">📧 Correo Electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* TELÉFONO */}
            <div className="form-group">
              <label htmlFor="phone">📱 Teléfono</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+56 9 XXXX XXXX"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">🔐 Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.password ? "error" : ""}
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
              {errors.password && <span className="field-error">{errors.password}</span>}
              <div className="password-strength">
                <div className={`strength-bar ${form.password.length > 0 ? "active" : ""}`}></div>
                <span className="strength-text">
                  {form.password.length === 0 ? "" : 
                   form.password.length < 6 ? "Débil" : 
                   form.password.length < 10 ? "Medio" : "Fuerte"}
                </span>
              </div>
            </div>

            {/* CONFIRMAR PASSWORD */}
            <div className="form-group">
              <label htmlFor="confirmPassword">🔐 Confirmar Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.confirmPassword ? "error" : ""}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex="-1"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
            </div>

            {/* TÉRMINOS Y CONDICIONES */}
            <div className="terms-checkbox">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  if (e.target.checked && errors.terms) {
                    setErrors({ ...errors, terms: "" });
                  }
                }}
                disabled={loading}
              />
              <label htmlFor="terms">
                Acepto los <a href="#terms">términos y condiciones</a> y la <a href="#privacy">política de privacidad</a>
              </label>
            </div>
            {errors.terms && <span className="field-error">{errors.terms}</span>}

            {/* BOTÓN SUBMIT */}
            <button 
              type="submit" 
              className="btn-register"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creando cuenta...
                </>
              ) : (
                <>🚀 Crear Cuenta</>
              )}
            </button>

          </form>

          {/* DIVIDER */}
          <div className="form-divider">
            <span>¿Ya tienes cuenta?</span>
          </div>

          {/* LINK A LOGIN */}
          <Link to="/login" className="btn-login-link">
            🔑 Inicia sesión aquí
          </Link>

          {/* FOOTER */}
          <div className="register-footer">
            <p>🔒 Tu información está protegida con encriptación</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;