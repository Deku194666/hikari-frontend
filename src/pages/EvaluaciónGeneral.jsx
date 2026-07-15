

import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./EvaluaciónGeneral.css";

function EvaluaciónGeneral() {
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
    alert("¡Cita de evaluación general agendada! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mascota: "", tipo: "", fecha: "", mensaje: "" });
  };

  const benefits = [
    { icon: "🔍", title: "Diagnóstico Completo", desc: "Evaluación exhaustiva de todos los sistemas" },
    { icon: "❤️", title: "Signos Vitales", desc: "Control de presión, frecuencia cardíaca y respiratoria" },
    { icon: "😁", title: "Revisión Dentaria", desc: "Inspección completa de dientes y encías" },
    { icon: "👁️", title: "Control Visual", desc: "Ojos, oídos, nariz y piel bajo evaluación" },
    { icon: "📊", title: "Reporte Detallado", desc: "Documentación completa del estado de salud" },
    { icon: "💊", title: "Recomendaciones", desc: "Plan personalizado de cuidado y prevención" },
  ];

  const checks = [
    { area: "Examen Físico", items: ["Palpación general", "Evaluación de peso", "Estado del pelaje y piel"] },
    { area: "Signos Vitales", items: ["Temperatura", "Frecuencia cardíaca", "Frecuencia respiratoria"] },
    { area: "Sistema Digestivo", items: ["Palpación abdominal", "Evaluación de hígado", "Revisión rectal"] },
    { area: "Sistema Respiratorio", items: ["Auscultación pulmonar", "Evaluación nasal", "Inspección bucal"] },
    { area: "Dentición", items: ["Inspección de dientes", "Evaluación de encías", "Detección de sarro o enfermedad"] },
    { area: "Otros Sistemas", items: ["Reflejos neurológicos", "Movilidad articular", "Ganglios linfáticos"] },
  ];

  const process = [
    { step: 1, title: "Agendar Cita", desc: "Elige fecha y hora conveniente" },
    { step: 2, title: "Bienvenida", desc: "Recepcionamos a tu mascota en ambiente tranquilo" },
    { step: 3, title: "Historia Médica", desc: "Revisamos antecedentes y estado actual" },
    { step: 4, title: "Evaluación Física", desc: "Examen completo por el veterinario" },
    { step: 5, title: "Reporte y Plan", desc: "Explicamos hallazgos y recomendaciones" },
    { step: 6, title: "Seguimiento", desc: "Documentamos todo en historia clínica" },
  ];

  const faqs = [
    { q: "¿Cuánto tiempo dura una evaluación general?", a: "Aproximadamente 30-45 minutos, dependiendo de la necesidad de exámenes adicionales." },
    { q: "¿Necesita ayuno mi mascota?", a: "No es necesario, pero si puede tener el estómago vacío mejor para evitar náuseas si necesita exámenes." },
    { q: "¿Con qué frecuencia debo hacer una evaluación?", a: "Se recomienda mínimo 1 vez al año. En mascotas senior (mayores de 7 años) cada 6 meses." },
    { q: "¿Qué pasa si encuentran algo anormal?", a: "Te lo explicamos detalladamente y te damos opciones de tratamiento o seguimiento." },
    { q: "¿Puedo estar presente durante la evaluación?", a: "Sí, puedes acompañar a tu mascota durante el examen." },
    { q: "¿Qué llevo para la cita?", a: "Trae su historia médica anterior si la tienes, y algún dato de comportamiento que hayas notado." },
  ];

  const testimonios = [
    { name: "Elena G.", mascota: "Simba (Perro)", text: "Muy profesional y detallado. Me explicó cada punto del examen. Simba se sintió seguro." },
    { name: "Carlos M.", mascota: "Mittens (Gato)", text: "La evaluación fue completa y sin estrés para Mittens. Muy recomendado." },
    { name: "Lorena P.", mascota: "Bella (Perro)", text: "Me permitieron estar presente. El reporte fue muy claro y las recomendaciones muy útiles." },
  ];

  return (
    <div className="eval-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="eval-hero">
        <div className="eval-hero-content">
          <span className="eval-badge">🏥 Salud Integral</span>
          <h1 className="eval-h1">Evaluación General</h1>
          <p className="eval-p">
            Revisión completa del estado de salud de tu mascota. Detección temprana de problemas y recomendaciones personalizadas para su bienestar.
          </p>
          <div className="eval-hero-cta">
            
          </div>
        </div>
        
<div className="eval-hero-image">
  <img 
    src="/images/imagen88.webp" 
    alt="Evaluación General" 
    className="eval-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="eval-description">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">¿Qué es una Evaluación General?</h2>
          <p className="eval-description-text">
            Es un examen completo y detallado del estado de salud de tu mascota. El veterinario revisa todos los sistemas corporales, signos vitales y dentición para detectar problemas a tiempo y establecer un plan preventivo.
          </p>
          <div className="eval-description-grid">
            <div className="eval-desc-card">
              <span className="eval-desc-icon">🎯</span>
              <h3>Prevención</h3>
              <p>Detectamos problemas antes de que se vuelvan graves.</p>
            </div>
            <div className="eval-desc-card">
              <span className="eval-desc-icon">📈</span>
              <h3>Seguimiento</h3>
              <p>Documentamos el estado de salud en el tiempo.</p>
            </div>
            <div className="eval-desc-card">
              <span className="eval-desc-icon">🤝</span>
              <h3>Relación</h3>
              <p>Conocemos a tu mascota para mejor atención futura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="eval-benefits">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">Beneficios de la Evaluación</h2>
          <div className="eval-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="eval-benefit-card">
                <span className="eval-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUÉ SE REVISA ===== */}
      <section className="eval-checks">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">¿Qué se Evalúa?</h2>
          <div className="eval-checks-grid">
            {checks.map((check, idx) => (
              <div key={idx} className="eval-check-card">
                <h3 className="eval-check-title">{check.area}</h3>
                <ul className="eval-check-list">
                  {check.items.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="eval-process">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">Proceso de Evaluación</h2>
          <div className="eval-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="eval-process-item">
                <div className="eval-process-number">{item.step}</div>
                <div className="eval-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="eval-faq">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">Preguntas Frecuentes</h2>
          <div className="eval-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="eval-faq-item">
                <button
                  className="eval-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="eval-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="eval-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="eval-testimonios">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="eval-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="eval-testimonio-card">
                <div className="eval-testimonio-header">
                  <span className="eval-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="eval-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="eval-testimonio-text">"{test.text}"</p>
                <div className="eval-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO ===== */}
      <section className="eval-contact">
        <div className="eval-container-small">
          <h2 className="eval-section-h2">Agenda tu Evaluación</h2>
          <form className="eval-form" onSubmit={handleFormSubmit}>
            <div className="eval-form-group">
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

            <div className="eval-form-row">
              <div className="eval-form-group">
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
              <div className="eval-form-group">
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

            <div className="eval-form-row">
              <div className="eval-form-group">
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
              <div className="eval-form-group">
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

            <div className="eval-form-group">
              <label>Fecha Preferida *</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="eval-form-group">
              <label>Mensaje Adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                placeholder="Algún problema o síntoma que hayas notado..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="eval-btn-submit">
              ✓ Agendar Evaluación
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="eval-cta-final">
        <div className="eval-container-small">
          <h2>Cuida la salud de tu mascota</h2>
          <p>Una evaluación completa es la mejor inversión en su bienestar</p>
          <button className="eval-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default EvaluaciónGeneral;