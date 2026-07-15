



import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./SeguimientoMédico.css";
import { Link } from "react-router-dom";

function SeguimientoMédico() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
    tipo: "",
    condicion: "",
    fecha: "",
    mensaje: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Solicitud de seguimiento médico enviada! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mascota: "", tipo: "", condicion: "", fecha: "", mensaje: "" });
  };

  const benefits = [
    { icon: "📋", title: "Historial Completo", desc: "Registro centralizado de toda la historia médica" },
    { icon: "🔔", title: "Recordatorios Automáticos", desc: "Notificaciones de medicinas y controles" },
    { icon: "💊", title: "Control de Medicinas", desc: "Seguimiento de dosis, efectos y cambios" },
    { icon: "📊", title: "Plan Personalizado", desc: "Estrategia de salud adaptada a tu mascota" },
    { icon: "🔗", title: "Coordinación", desc: "Comunicación con laboratorios y especialistas" },
    { icon: "📱", title: "Acceso Digital", desc: "Consulta tu información desde cualquier lugar" },
  ];

  const services = [
    { name: "Seguimiento Básico", desc: "Control de medicinas y estado general", price: "$15,000/mes" },
    { name: "Seguimiento Plus", desc: "Incluye recordatorios y reportes mensuales", price: "$25,000/mes" },
    { name: "Seguimiento Premium", desc: "Coordinación con laboratorios y especialistas", price: "$40,000/mes" },
    { name: "Seguimiento Post-Cirugía", desc: "Monitoreo específico post-operatorio", price: "$30,000/mes" },
  ];

  const process = [
    { step: 1, title: "Consulta Inicial", desc: "Evaluamos el caso y necesidades específicas" },
    { step: 2, title: "Plan de Seguimiento", desc: "Diseñamos estrategia personalizada" },
    { step: 3, title: "Configuración Digital", desc: "Configuramos historial y recordatorios" },
    { step: 4, title: "Monitoreo Continuo", desc: "Seguimiento regular según plan" },
    { step: 5, title: "Coordinación", desc: "Comunicamos con laboratorios y veterinarios" },
    { step: 6, title: "Revisión Periódica", desc: "Evaluamos progreso y ajustamos plan" },
  ];

  const faqs = [
    { q: "¿Cuánto tiempo dura un seguimiento médico?", a: "Depende del caso. Puede ser desde 1 mes hasta años. Se revisa periódicamente." },
    { q: "¿Cómo recibo los recordatorios?", a: "Por WhatsApp, email o SMS según prefieras. Personalizados según plan de medicinas." },
    { q: "¿Puedo cambiar el plan en cualquier momento?", a: "Sí, puedes cambiar o cancelar tu seguimiento cuando lo necesites." },
    { q: "¿Qué pasa si hay una urgencia?", a: "Tienes acceso prioritario a consultas. Contacta directamente y te atendemos." },
    { q: "¿Se coordina con otros veterinarios?", a: "Sí, coordinamos información con especialistas si tu mascota lo requiere." },
    { q: "¿Qué incluye exactamente cada plan?", a: "Histórico, recordatorios, reportes mensuales y coordinación según el plan elegido." },
  ];

  const testimonios = [
    { name: "Alejandra M.", mascota: "Rocco (Perro)", text: "Excelente seguimiento. Los recordatorios me ayudan mucho con sus medicinas. Muy recomendado." },
    { name: "Fernando T.", mascota: "Luna (Gata)", text: "Post cirugía fue perfecto. El monitoreo muy detallado y el equipo siempre disponible." },
    { name: "Marcela L.", mascota: "Bruno (Perro)", text: "La coordinación con laboratorios fue impecable. Muy profesional todo." },
  ];

  return (
    <div className="seg-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="seg-hero">
        <div className="seg-hero-content">
          <span className="seg-badge">📊 Cuidado Continuo</span>
          <h1 className="seg-h1">Seguimiento Médico</h1>
          <p className="seg-p">
            Monitoreo continuo de la salud de tu mascota. Control de medicinas, coordinación con laboratorios y recordatorios automáticos en un solo lugar.
          </p>
          <div className="seg-hero-cta">
            <Link to="/login" className="seg-btn-primary">Iniciar Seguimiento</Link>
             <button className="seg-btn-secondary">📞 Consultar</button>
          </div>
        </div>
        
<div className="seg-hero-image">
  <img 
    src="/images/imagen89.avif" 
    alt="Seguimiento Médico" 
    className="seg-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="seg-description">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">¿Qué es el Seguimiento Médico?</h2>
          <p className="seg-description-text">
            Es un programa de monitoreo continuo que mantiene el control de la salud de tu mascota. Coordinamos resultados de laboratorios, controlamos medicinas, y brindamos recordatorios para que no olvides nada importante.
          </p>
          <div className="seg-description-grid">
            <div className="seg-desc-card">
              <span className="seg-desc-icon">🎯</span>
              <h3>Control Integral</h3>
              <p>Manejamos todos los aspectos de su tratamiento.</p>
            </div>
            <div className="seg-desc-card">
              <span className="seg-desc-icon">⏰</span>
              <h3>Recordatorios Precisos</h3>
              <p>Nunca olvides una medicina o control.</p>
            </div>
            <div className="seg-desc-card">
              <span className="seg-desc-icon">🤝</span>
              <h3>Coordinación Experta</h3>
              <p>Conectamos con laboratorios y especialistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="seg-benefits">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Beneficios del Seguimiento</h2>
          <div className="seg-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="seg-benefit-card">
                <span className="seg-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANES ===== */}
      <section className="seg-services">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Planes de Seguimiento</h2>
          <div className="seg-services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="seg-service-card">
                <h3>{service.name}</h3>
                <p className="seg-service-desc">{service.desc}</p>
                <div className="seg-service-price">{service.price}</div>
                <button className="seg-service-btn">Elegir Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COORDINACIÓN ===== */}
      <section className="seg-coordination">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">¿Cómo Coordinamos?</h2>
          <div className="seg-coordination-grid">
            <div className="seg-coord-card">
              <span className="seg-coord-icon">📞</span>
              <h3>Contacto Directo</h3>
              <p>Te llamamos con resultados y avances importantes de inmediato.</p>
            </div>
            <div className="seg-coord-card">
              <span className="seg-coord-icon">📧</span>
              <h3>Reportes Periódicos</h3>
              <p>Enviamos reportes mensuales o según lo acordado.</p>
            </div>
            <div className="seg-coord-card">
              <span className="seg-coord-icon">🔬</span>
              <h3>Integración Laboratorios</h3>
              <p>Coordinamos análisis y compartimos resultados.</p>
            </div>
            <div className="seg-coord-card">
              <span className="seg-coord-icon">👨‍⚕️</span>
              <h3>Especialistas</h3>
              <p>Derivamos a especialistas cuando sea necesario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="seg-process">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Proceso de Seguimiento</h2>
          <div className="seg-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="seg-process-item">
                <div className="seg-process-number">{item.step}</div>
                <div className="seg-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="seg-faq">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Preguntas Frecuentes</h2>
          <div className="seg-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="seg-faq-item">
                <button
                  className="seg-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="seg-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="seg-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="seg-testimonios">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="seg-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="seg-testimonio-card">
                <div className="seg-testimonio-header">
                  <span className="seg-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="seg-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="seg-testimonio-text">"{test.text}"</p>
                <div className="seg-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO ===== */}
      <section className="seg-contact">
        <div className="seg-container-small">
          <h2 className="seg-section-h2">Inicia tu Seguimiento Médico</h2>
          <form className="seg-form" onSubmit={handleFormSubmit}>
            <div className="seg-form-group">
              <label>Nombre Completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleFormChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="seg-form-row">
              <div className="seg-form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              <div className="seg-form-group">
                <label>Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleFormChange}
                  required
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>
            </div>

            <div className="seg-form-row">
              <div className="seg-form-group">
                <label>Mascota *</label>
                <input
                  type="text"
                  name="mascota"
                  value={formData.mascota}
                  onChange={handleFormChange}
                  required
                  placeholder="Nombre de tu mascota"
                />
              </div>
              <div className="seg-form-group">
                <label>Tipo de Mascota *</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Selecciona...</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="seg-form-row">
              <div className="seg-form-group">
                <label>Condición a Seguir *</label>
                <input
                  type="text"
                  name="condicion"
                  value={formData.condicion}
                  onChange={handleFormChange}
                  required
                  placeholder="Ej: Diabetes, Post-cirugía, etc"
                />
              </div>
              <div className="seg-form-group">
                <label>Fecha de Inicio *</label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>

            <div className="seg-form-group">
              <label>Mensaje Adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                placeholder="Información relevante del caso..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="seg-btn-submit">
              ✓ Iniciar Seguimiento
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="seg-cta-final">
        <div className="seg-container-small">
          <h2>Mantén la salud de tu mascota bajo control</h2>
          <p>Seguimiento médico profesional y coordinado</p>
          <button className="seg-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default SeguimientoMédico;