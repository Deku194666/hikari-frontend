


import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./Vacunación.css";
import { Link } from "react-router-dom";

function Vacunación() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
    tipo: "",
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
    alert("¡Solicitud de vacunación enviada! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mascota: "", tipo: "", fecha: "", mensaje: "" });
  };

  const benefits = [
    { icon: "💪", title: "Inmunidad Completa", desc: "Protección contra las principales enfermedades" },
    { icon: "📋", title: "Certificados Oficiales", desc: "Documentación válida para viajes y registros" },
    { icon: "📅", title: "Esquema Personalizado", desc: "Plan adaptado a la edad y necesidades de tu mascota" },
    { icon: "🔄", title: "Refuerzos Anuales", desc: "Recordatorios automáticos para mantener protección" },
    { icon: "🏥", title: "Evaluación Previa", desc: "Revisión de salud antes de vacunar" },
    { icon: "📱", title: "Registro Digital", desc: "Historial de vacunas accesible en cualquier momento" },
  ];

  const vaccines = [
    { name: "Séxtuple (DHPPI + Leptospirosis)", for: "Perros", age: "6-8 semanas", price: "$25,000" },
    { name: "Rabia", for: "Perros y Gatos", age: "12 semanas", price: "$18,000" },
    { name: "Triple Felina (FVRCP)", for: "Gatos", age: "8-12 semanas", price: "$22,000" },
    { name: "Leucemia Felina", for: "Gatos", age: "8-12 semanas", price: "$20,000" },
    { name: "Refuerzo Anual", for: "Todos", age: "Anual", price: "$30,000" },
    { name: "Bordetella", for: "Perros", age: "6 semanas", price: "$16,000" },
  ];

  const process = [
    { step: 1, title: "Consulta Previa", desc: "Evaluación de salud y revisión del historial" },
    { step: 2, title: "Plan Personalizado", desc: "Diseñamos el esquema según edad y riesgo" },
    { step: 3, title: "Primera Vacuna", desc: "Aplicamos la primera dosis del esquema" },
    { step: 4, title: "Seguimiento", desc: "Recordatorios para próximas dosis" },
    { step: 5, title: "Certificado", desc: "Emitimos certificado oficial de vacunación" },
    { step: 6, title: "Protección Completa", desc: "Tu mascota está protegida durante el año" },
  ];

  const faqs = [
    { q: "¿A qué edad debo vacunar a mi mascota?", a: "Lo ideal es comenzar desde las 6-8 semanas. Te indicaremos el esquema completo en la primera consulta." },
    { q: "¿Cuántas dosis necesita?", a: "Varía según la vacuna. Generalmente son 3 dosis iniciales y luego refuerzo anual." },
    { q: "¿Es seguro vacunar?", a: "Sí, las vacunas son seguras y efectivas. Cualquier reacción es mínima y temporal." },
    { q: "¿Puedo vacunar si está enfermo?", a: "No recomendamos. Debe estar en buen estado de salud. Podemos reprogramar." },
    { q: "¿Cuánto cuesta el esquema completo?", a: "Depende del esquema. Desde $60,000 para perros y $65,000 para gatos." },
    { q: "¿El certificado es válido para viajes?", a: "Sí, nuestros certificados son válidos internacionalmente." },
  ];

  const testimonios = [
    { name: "Francisca R.", mascota: "Rocky (Perro)", text: "Excelente servicio, el equipo muy profesional. Ahora Rocky está protegido." },
    { name: "Jorge M.", mascota: "Mishi (Gato)", text: "Me dieron todo el esquema explicado. Muy claros y confiables." },
    { name: "Daniela K.", mascota: "Luna y Max (Perros)", text: "El certificado llegó rápido y el trámite fue muy fácil. Recomendado." },
  ];

  return (
    <div className="vac-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="vac-hero">
        <div className="vac-hero-content">
          <span className="vac-badge">💉 Protección Completa</span>
          <h1 className="vac-h1">Vacunación Integral</h1>
          <p className="vac-p">
            Esquemas vacunales completos y actualizados para mantener protegida a tu mascota contra las principales enfermedades.
          </p>
          <div className="vac-hero-cta">
            <Link to="/login" className="vac-btn-primary"> 📱 Agendar Vacunación</Link>
             <button className="vac-btn-secondary">📞 Consultar</button>
          </div>
        </div>
        <div className="vac-hero-image">
  <img 
    src="/images/Imagen4.png" 
    alt="Vacunación Integral" 
    className="vac-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="vac-description">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">¿Qué es la Vacunación Integral?</h2>
          <p className="vac-description-text">
            Es un programa completo de inmunización diseñado para proteger a tu mascota contra las enfermedades más comunes y peligrosas. Incluye todas las vacunas de rutina, refuerzos anuales y certificación oficial.
          </p>
          <div className="vac-description-grid">
            <div className="vac-desc-card">
              <span className="vac-desc-icon">🛡️</span>
              <h3>Protección Total</h3>
              <p>Cobertura contra DHPPI, rabia, leucemia felina y más.</p>
            </div>
            <div className="vac-desc-card">
              <span className="vac-desc-icon">📜</span>
              <h3>Certificación Oficial</h3>
              <p>Documentos válidos para viajes nacionales e internacionales.</p>
            </div>
            <div className="vac-desc-card">
              <span className="vac-desc-icon">⏰</span>
              <h3>Seguimiento Continuo</h3>
              <p>Recordatorios automáticos para refuerzos y vacunas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="vac-benefits">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Beneficios de Vacunar</h2>
          <div className="vac-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="vac-benefit-card">
                <span className="vac-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VACUNAS ===== */}
      <section className="vac-vaccines">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Vacunas Disponibles</h2>
          <div className="vac-vaccines-table">
            <div className="vac-table-header">
              <div className="vac-col-vaccine">Vacuna</div>
              <div className="vac-col">Para</div>
              <div className="vac-col">Edad</div>
              <div className="vac-col-price">Precio</div>
            </div>
            {vaccines.map((vaccine, idx) => (
              <div key={idx} className="vac-table-row">
                <div className="vac-col-vaccine">
                  <strong>{vaccine.name}</strong>
                </div>
                <div className="vac-col">{vaccine.for}</div>
                <div className="vac-col">{vaccine.age}</div>
                <div className="vac-col-price">{vaccine.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="vac-process">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Proceso de Vacunación</h2>
          <div className="vac-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="vac-process-item">
                <div className="vac-process-number">{item.step}</div>
                <div className="vac-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="vac-faq">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Preguntas Frecuentes</h2>
          <div className="vac-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="vac-faq-item">
                <button
                  className="vac-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="vac-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="vac-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="vac-testimonios">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="vac-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="vac-testimonio-card">
                <div className="vac-testimonio-header">
                  <span className="vac-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="vac-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="vac-testimonio-text">"{test.text}"</p>
                <div className="vac-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO ===== */}
      <section className="vac-contact">
        <div className="vac-container-small">
          <h2 className="vac-section-h2">Agenda Vacunación Ahora</h2>
          <form className="vac-form" onSubmit={handleFormSubmit}>
            <div className="vac-form-group">
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

            <div className="vac-form-row">
              <div className="vac-form-group">
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
              <div className="vac-form-group">
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

            <div className="vac-form-row">
              <div className="vac-form-group">
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
              <div className="vac-form-group">
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

            <div className="vac-form-group">
              <label>Fecha Preferida *</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="vac-form-group">
              <label>Mensaje Adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                placeholder="Alguna información adicional..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="vac-btn-submit">
              ✓ Agendar Vacunación
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="vac-cta-final">
        <div className="vac-container-small">
          <h2>Protege a tu mascota hoy</h2>
          <p>No esperes, la vacunación es la mejor inversión en su salud</p>
          <button className="vac-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default Vacunación;