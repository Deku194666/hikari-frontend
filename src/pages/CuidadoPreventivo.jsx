


import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./CuidadoPreventivo.css";

function CuidadoPreventivo() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
    tipo: "",
    edad: "",
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
    alert("¡Solicitud de cuidado preventivo enviada! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mascota: "", tipo: "", edad: "", fecha: "", mensaje: "" });
  };

  const benefits = [
    { icon: "🛡️", title: "Prevención Total", desc: "Evita enfermedades antes de que ocurran" },
    { icon: "💰", title: "Ahorro Económico", desc: "Prevenir es más barato que tratar" },
    { icon: "😊", title: "Mascota Saludable", desc: "Tu mascota vive más años de calidad" },
    { icon: "🧠", title: "Asesoramiento Experto", desc: "Consejos personalizados para su bienestar" },
    { icon: "📅", title: "Plan Personalizado", desc: "Programa adaptado a edad y necesidades" },
    { icon: "⚡", title: "Energía Constante", desc: "Mascota activa y feliz siempre" },
  ];

  const services = [
    { name: "Desparasitación Interna", desc: "Control de parásitos gastrointestinales", freq: "Cada 3 meses", price: "$12,000" },
    { name: "Control de Pulgas y Garrapatas", desc: "Prevención de ectoparásitos y enfermedades", freq: "Mensual", price: "$8,000" },
    { name: "Asesoramiento Nutricional", desc: "Dieta balanceada según edad y condición", freq: "Anual", price: "$25,000" },
    { name: "Revisión Dental", desc: "Limpieza y prevención de enfermedades bucales", freq: "Anual", price: "$35,000" },
    { name: "Plan Bienestar Completo", desc: "Todo lo anterior combinado", freq: "Anual", price: "$65,000" },
    { name: "Consulta de Prevención", desc: "Asesoramiento general de salud preventiva", freq: "Según necesidad", price: "$30,000" },
  ];

  const process = [
    { step: 1, title: "Evaluación Inicial", desc: "Revisamos edad, estilo de vida y riesgos" },
    { step: 2, title: "Plan Personalizado", desc: "Diseñamos estrategia preventiva específica" },
    { step: 3, title: "Tratamientos", desc: "Aplicamos desparasitantes y preventivos" },
    { step: 4, title: "Asesoramiento", desc: "Brindamos consejos de nutrición y bienestar" },
    { step: 5, title: "Recordatorios", desc: "Te avisamos cuándo aplicar próximos tratamientos" },
    { step: 6, title: "Seguimiento Continuo", desc: "Monitoreamos la salud preventiva" },
  ];

  const faqs = [
    { q: "¿A partir de qué edad debo iniciar cuidado preventivo?", a: "Desde cachorros/gatitos. Es ideal comenzar desde el inicio con desparasitación y control de pulgas." },
    { q: "¿Cuántas veces al año necesita desparasitación?", a: "Cachorros cada 2 semanas hasta 12 semanas, luego cada mes hasta 6 meses. Adultos cada 3-6 meses." },
    { q: "¿Es seguro usar productos preventivos?", a: "Totalmente. Son productos veterinarios aprobados y ajustamos dosis según peso y edad." },
    { q: "¿Qué es mejor para pulgas: pipeta o pastilla?", a: "Ambas funcionan bien. Recomendamos según el caso. Consulta cuál es mejor para tu mascota." },
    { q: "¿La nutrición afecta la prevención?", a: "Mucho. Una buena dieta fortalece inmunidad y previene muchas enfermedades." },
    { q: "¿Cuál es el costo total anual de prevención?", a: "Depende del plan. Desde $60,000 básico hasta $120,000 con todos los servicios." },
  ];

  const testimonios = [
    { name: "Sandra V.", mascota: "Max (Perro)", text: "Desde que sigo el plan preventivo, Max nunca ha enfermado. Excelente inversión." },
    { name: "Miguel L.", mascota: "Pelusa (Gata)", text: "Los consejos nutricionales mejoraron la salud de Pelusa notablemente. Muy recomendado." },
    { name: "Catalina M.", mascota: "Toby (Perro)", text: "La prevención me ahorró mucho dinero en enfermedades. Ahora es mi rutina." },
  ];

  return (
    <div className="prev-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="prev-hero">
        <div className="prev-hero-content">
          <span className="prev-badge">🛡️ Salud Preventiva</span>
          <h1 className="prev-h1">Cuidado Preventivo</h1>
          <p className="prev-p">
            Prevención integral de enfermedades. Desparasitación, control de pulgas, asesoramiento nutricional y consejos de bienestar para una mascota saludable.
          </p>
          <div className="prev-hero-cta">
    
          </div>
        </div>
      
<div className="prev-hero-image">
  <img 
    src="/images/imagen90.jpg" 
    alt="Cuidado Preventivo" 
    className="prev-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="prev-description">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">¿Qué es Cuidado Preventivo?</h2>
          <p className="prev-description-text">
            Es un programa integral de prevención de enfermedades. Incluye desparasitación, control de pulgas, asesoramiento nutricional y consejos de bienestar para mantener a tu mascota sana y fuerte desde el inicio.
          </p>
          <div className="prev-description-grid">
            <div className="prev-desc-card">
              <span className="prev-desc-icon">🎯</span>
              <h3>Prevención Completa</h3>
              <p>Cubrimos todos los aspectos de la salud preventiva.</p>
            </div>
            <div className="prev-desc-card">
              <span className="prev-desc-icon">📚</span>
              <h3>Educación Continua</h3>
              <p>Te enseñamos cómo cuidar a tu mascota en casa.</p>
            </div>
            <div className="prev-desc-card">
              <span className="prev-desc-icon">✨</span>
              <h3>Bienestar Integral</h3>
              <p>Salud física, mental y nutricional completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="prev-benefits">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Beneficios del Cuidado Preventivo</h2>
          <div className="prev-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="prev-benefit-card">
                <span className="prev-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="prev-services">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Servicios Preventivos</h2>
          <div className="prev-services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="prev-service-card">
                <h3>{service.name}</h3>
                <p className="prev-service-desc">{service.desc}</p>
                <div className="prev-service-footer">
                  <div className="prev-service-freq">📅 {service.freq}</div>
                  <div className="prev-service-price">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="prev-process">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Proceso de Prevención</h2>
          <div className="prev-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="prev-process-item">
                <div className="prev-process-number">{item.step}</div>
                <div className="prev-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="prev-faq">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Preguntas Frecuentes</h2>
          <div className="prev-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="prev-faq-item">
                <button
                  className="prev-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="prev-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="prev-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="prev-testimonios">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="prev-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="prev-testimonio-card">
                <div className="prev-testimonio-header">
                  <span className="prev-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="prev-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="prev-testimonio-text">"{test.text}"</p>
                <div className="prev-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO ===== */}
      <section className="prev-contact">
        <div className="prev-container-small">
          <h2 className="prev-section-h2">Inicia tu Plan Preventivo</h2>
          <form className="prev-form" onSubmit={handleFormSubmit}>
            <div className="prev-form-group">
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

            <div className="prev-form-row">
              <div className="prev-form-group">
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
              <div className="prev-form-group">
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

            <div className="prev-form-row">
              <div className="prev-form-group">
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
              <div className="prev-form-group">
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

            <div className="prev-form-row">
              <div className="prev-form-group">
                <label>Edad Aproximada *</label>
                <input
                  type="text"
                  name="edad"
                  value={formData.edad}
                  onChange={handleFormChange}
                  required
                  placeholder="Ej: 2 años, 6 meses"
                />
              </div>
              <div className="prev-form-group">
                <label>Fecha Preferida *</label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>

            <div className="prev-form-group">
              <label>Mensaje Adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                placeholder="Información sobre alergias o condiciones especiales..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="prev-btn-submit">
              ✓ Iniciar Plan Preventivo
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="prev-cta-final">
        <div className="prev-container-small">
          <h2>Invierte en la salud de tu mascota hoy</h2>
          <p>Prevención es siempre mejor que curación</p>
          <button className="prev-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default CuidadoPreventivo;