


import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./AtenciónDomicilio.css";
import { Link } from "react-router-dom";

function AtenciónDomicilio() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
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
    alert("¡Solicitud enviada! Nos contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mascota: "", fecha: "", mensaje: "" });
  };

  const benefits = [
    { icon: "🏠", title: "Comodidad en Casa", desc: "Tu mascota se atiende en su ambiente familiar" },
    { icon: "🚗", title: "Sin Traslados", desc: "Evita el estrés de viajar en auto" },
    { icon: "⏰", title: "Flexible", desc: "Horarios que se ajustan a tu disponibilidad" },
    { icon: "👨‍⚕️", title: "Atención Personalizada", desc: "Veterinario dedicado solo a tu mascota" },
    { icon: "🛠️", title: "Equipo Completo", desc: "Llevamos todo lo necesario para diagnósticos" },
    { icon: "📊", title: "Seguimiento", desc: "Reporte detallado y recomendaciones por escrito" },
  ];

  const process = [
    { step: 1, title: "Solicita el Servicio", desc: "Llena el formulario o llámanos para agendar" },
    { step: 2, title: "Confirmación", desc: "Te confirmamos fecha, hora y veterinario" },
    { step: 3, title: "Preparación", desc: "Preparamos todo el equipo necesario" },
    { step: 4, title: "Visita", desc: "El veterinario llega a tu hogar puntualmente" },
    { step: 5, title: "Atención", desc: "Examen completo y diagnóstico en casa" },
    { step: 6, title: "Seguimiento", desc: "Reporte escrito y asesoramiento post-visita" },
  ];

  const vets = [
    { name: "Dra. Sofia Pirul", specialty: "Medicina General", exp: "12 años", img: "👩‍⚕️" },
    { name: "Dr. Nils Meyer Galindo", specialty: "Cirugía", exp: "15 años", img: "👨‍⚕️" },
  ];

  const prices = [
    { name: "Consulta General", price: "$45,000", time: "30 min", services: ["Examen general", "Diagnóstico básico", "Recomendaciones"] },
    { name: "Consulta Completa", price: "$65,000", time: "45 min", services: ["Examen exhaustivo", "Análisis laborales", "Plan de tratamiento", "Seguimiento 1 mes"] },
    { name: "Urgencia 24h", price: "$80,000", time: "1 hora", services: ["Atención inmediata", "Estabilización", "Derivación si es necesario", "Reporte detallado"] },
  ];

  const faqs = [
    { q: "¿Qué mascota puedo llevar?", a: "Atendemos perros, gatos, conejos, aves y pequeños roedores. Consulta por mascotas exóticas." },
    { q: "¿Qué equipo llevan?", a: "Llevamos estetoscopio, termómetro, báscula, otoscopio, y todo lo necesario para diagnósticos básicos." },
    { q: "¿Hay costo de traslado?", a: "No, el valor incluye traslado dentro de Santiago. Consulta por zonas alejadas." },
    { q: "¿Qué pasa si necesita análisis?", a: "Toman muestras en tu hogar y las procesamos en nuestro laboratorio." },
    { q: "¿Puedo agendar urgencias?", a: "Sí, tenemos servicio 24/7. Hay recargo por atención fuera de horario." },
    { q: "¿Qué debo preparar?", a: "Un lugar cómodo, historiales médicos si tiene, y datos de tu mascota." },
  ];

  const testimonios = [
    { name: "Patricia L.", mascota: "Luna (Gato)", text: "Excelente servicio, Luna no tuvo que salir de casa. ¡Muy profesionales!" },
    { name: "Roberto M.", mascota: "Max (Perro)", text: "El veterinario fue muy dedicado, revisó todo detalladamente. Lo recomiendo." },
    { name: "Carla S.", mascota: "Tweety (Ave)", text: "Sorprendida por la calidad de atención en domicilio. Perfecta para aves." },
  ];

  return (
    <div className="dom-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="dom-hero">
        <div className="dom-hero-content">
          <span className="dom-badge">🏥 Servicio Premium</span>
          <h1 className="dom-h1">Atención Veterinaria a Domicilio</h1>
          <p className="dom-p">
            Llevamos la mejor atención veterinaria directamente a tu hogar. Sin estrés, con comodidad y la máxima calidad profesional.
          </p>
          <div className="dom-hero-cta">
             <Link to="/login" className="dom-btn-primary">📱 Agendar Ahora</Link>
            <button className="dom-btn-secondary">Llamar: +56 9 8765 4321</button>
          </div>
        </div>
        <div className="dom-hero-image">
  <img 
    src="/images/imagen3.png" 
    alt="Atención a Domicilio" 
    className="dom-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="dom-description">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">¿Qué es Atención a Domicilio?</h2>
          <p className="dom-description-text">
            Es un servicio veterinario profesional que llega a tu hogar con todo el equipo necesario para atender a tu mascota sin que tenga que salir de casa. Ideal para mascotas nerviosas, ancianas, con movilidad limitada o simplemente para tu comodidad.
          </p>
          <div className="dom-description-grid">
            <div className="dom-desc-card">
              <span className="dom-desc-icon">🎯</span>
              <h3>Objetivo</h3>
              <p>Ofrecer atención veterinaria de calidad en un ambiente familiar y seguro.</p>
            </div>
            <div className="dom-desc-card">
              <span className="dom-desc-icon">✨</span>
              <h3>Valor Agregado</h3>
              <p>Comodidad, personalización y atención dedicada 100% a tu mascota.</p>
            </div>
            <div className="dom-desc-card">
              <span className="dom-desc-icon">🔍</span>
              <h3>Alcance</h3>
              <p>Desde consultas generales hasta procedimientos diagnósticos avanzados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="dom-benefits">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Beneficios Principales</h2>
          <div className="dom-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="dom-benefit-card">
                <span className="dom-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="dom-process">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">¿Cómo Funciona?</h2>
          <div className="dom-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="dom-process-item">
                <div className="dom-process-number">{item.step}</div>
                <div className="dom-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EQUIPO ===== */}
      <section className="dom-vets">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Nuestro Equipo</h2>
          <div className="dom-vets-grid">
            {vets.map((vet, idx) => (
              <div key={idx} className="dom-vet-card">
                <div className="dom-vet-avatar">{vet.img}</div>
                <h3>{vet.name}</h3>
                <p className="dom-vet-specialty">{vet.specialty}</p>
                <p className="dom-vet-exp">Experiencia: {vet.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRECIOS ===== */}
      <section className="dom-prices">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Paquetes y Precios</h2>
          <div className="dom-prices-grid">
            {prices.map((price, idx) => (
              <div key={idx} className="dom-price-card">
                <h3>{price.name}</h3>
                <div className="dom-price-amount">{price.price}</div>
                <p className="dom-price-time">⏱️ {price.time}</p>
                <ul className="dom-price-services">
                  {price.services.map((service, i) => (
                    <li key={i}>✓ {service}</li>
                  ))}
                </ul>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="dom-faq">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Preguntas Frecuentes</h2>
          <div className="dom-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="dom-faq-item">
                <button
                  className="dom-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="dom-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="dom-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="dom-testimonios">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="dom-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="dom-testimonio-card">
                <div className="dom-testimonio-header">
                  <span className="dom-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="dom-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="dom-testimonio-text">"{test.text}"</p>
                <div className="dom-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO ===== */}
      <section className="dom-contact">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">Agenda tu Cita</h2>
          <form className="dom-form" onSubmit={handleFormSubmit}>
            <div className="dom-form-group">
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

            <div className="dom-form-row">
              <div className="dom-form-group">
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
              <div className="dom-form-group">
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

            <div className="dom-form-row">
              <div className="dom-form-group">
                <label>Mascota *</label>
                <input
                  type="text"
                  name="mascota"
                  value={formData.mascota}
                  onChange={handleFormChange}
                  required
                  placeholder="Nombre y tipo de mascota"
                />
              </div>
              <div className="dom-form-group">
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

            <div className="dom-form-group">
              <label>Mensaje / Síntomas</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                placeholder="Cuéntanos qué motiva la consulta..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="dom-btn-submit">
              ✓ Solicitar Cita
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="dom-cta-final">
        <div className="dom-container-small">
          <h2>¿Listo para que tu mascota reciba atención en casa?</h2>
          <p>Contáctanos hoy y agenda tu primera visita</p>
          <button className="dom-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default AtenciónDomicilio;