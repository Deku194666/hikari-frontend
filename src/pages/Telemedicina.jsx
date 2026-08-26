


import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./Telemedicina.css";
import { Link } from "react-router-dom";
import imagen7 from "../assets/imagen7.jpg";
function Telemedicina() {
  

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  
  const benefits = [
    { icon: "📹", title: "Videollamada en Tiempo Real", desc: "Consulta directa con el veterinario desde tu celular o computador" },
    { icon: "🕐", title: "Sin Desplazamientos", desc: "Resuelve dudas y controles sin salir de casa" },
    { icon: "🔄", title: "Ideal para Seguimientos", desc: "Perfecto para revisar la evolución de un tratamiento" },
    { icon: "⏰", title: "Disponible Cuando la Necesites", desc: "Agenda en el horario que más te acomode" },
    { icon: "💬", title: "Resuelve Dudas Rápidas", desc: "Antes de decidir si necesitas una visita presencial" },
    { icon: "💳", title: "Pago Justo", desc: "Si deriva a domicilio, se descuenta lo ya pagado" },
  ];

  const includes = [
    "Consultas generales por videollamada",
    "Control de tratamientos en curso",
    "Seguimiento de la evolución de tu mascota",
  ];

  const process = [
    { step: 1, title: "Agenda tu Hora", desc: "Elige el horario que más te acomode" },
    { step: 2, title: "Confirmación", desc: "Te confirmamos la hora y el enlace de la videollamada" },
    { step: 3, title: "Consulta por Video", desc: "Conversas con el veterinario y muestras a tu mascota" },
    { step: 4, title: "Diagnóstico Preliminar", desc: "El veterinario evalúa si es necesaria una visita a domicilio" },
    { step: 5, title: "Recomendaciones", desc: "Recibes indicaciones o derivación según corresponda" },
  ];

  const vets = [
    { name: "Dra. Sofia Pirul Hernández", specialty: "Medico Veterinario dedicado a Especies Menores (Perros y Gatos)     Asesor de Tenencia Responsable en Animales Exoticos",  img: "👩‍⚕️" },
    { name: "Dr. Nils Meyer Galindo", specialty: "Medico Veterinario dedicado a Especies Menores (Perros y Gatos)", img: "👨‍⚕️" },
  ];

  const faqs = [
    { q: "¿Qué se puede resolver por telemedicina?", a: "Consultas generales, dudas rápidas, control de tratamientos y seguimientos. Si el veterinario determina que se requiere examen físico, te derivamos a una visita a domicilio." },
    { q: "¿Qué pasa con el pago si necesito una visita a domicilio después?", a: "El monto que ya pagaste por la telemedicina se descuenta del valor de la consulta a domicilio. Solo pagas la diferencia, no se cobran ambos servicios por separado." },
    { q: "¿Qué necesito para la videollamada?", a: "Un celular o computador con cámara, buena conexión a internet, y tener a tu mascota cerca para mostrarla al veterinario." },
    { q: "¿Cuánto dura una consulta de telemedicina?", a: "Generalmente entre 15 y 20 minutos, dependiendo de la complejidad del caso." },
    { q: "¿Sirve para urgencias?", a: "Para una primera evaluación sí, pero ante una urgencia real te recomendaremos atención presencial de inmediato." },
    { q: "¿Puedo hacer seguimiento de un tratamiento por telemedicina?", a: "Sí, es uno de los usos más comunes: revisar cómo va evolucionando tu mascota sin necesidad de traslado." },
  ];

  const testimonios = [
    { name: "Valentina R.", mascota: "Coco (Perro)", text: "Resolvimos una duda urgente sin tener que salir de casa. Muy práctico y rápido." },
    { name: "Ignacio P.", mascota: "Michi (Gato)", text: "Usamos telemedicina para el seguimiento post-tratamiento. Excelente atención." },
    { name: "Camila F.", mascota: "Rex (Perro)", text: "Nos derivaron a atención a domicilio y nos descontaron lo pagado en la videollamada, tal como prometieron." },
  ];

  return (
    <div className="tele-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="tele-hero">
        <div className="tele-hero-content">
          <span className="tele-badge">📹 Consulta Online</span>
          <h1 className="tele-h1">Telemedicina Hikari</h1>
          <p className="tele-p">
            Consultas, control y seguimientos con nuestro equipo veterinario, sin salir de casa.
          </p>
          <div className="tele-hero-cta">
            <Link to="/login" className="tele-btn-primary">📹 Agendar Telemedicina</Link>
            <button className="tele-btn-secondary">Llamar: +56 9 8765 4321</button>
          </div>
        </div>
        <div className="tele-hero-image"> <img src={imagen7} alt="Telemedicina Hikari" className="tele-hero-img-full" /> </div>
      </section>

      {/* ===== AVISO IMPORTANTE ===== */}
      <section className="tele-notice">
        <div className="tele-container-small">
          <div className="tele-notice-box">
            <span className="tele-notice-icon">📌</span>
            <div>
              <h3>Importante sobre el pago de la telemedicina</h3>
              <p>
                Si durante la consulta por telemedicina se determina que es necesaria una visita veterinaria a domicilio, el monto que ya pagaste por la telemedicina se descontará del valor de la consulta presencial.
              </p>
              <p>
                En ese caso, solo deberás pagar la diferencia correspondiente a la visita a domicilio. No se cobrarán ambos servicios por separado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="tele-description">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">¿Qué es la Telemedicina Hikari?</h2>
          <p className="tele-description-text">
            Con una videollamada resuelves dudas rápidas, haces seguimiento a un tratamiento o simplemente preguntas antes de decidir si necesitas una visita presencial. Todo desde tu cuenta, cuando lo necesites.
          </p>
          <div className="tele-description-grid">
            <div className="tele-desc-card">
              <span className="tele-desc-icon">🎯</span>
              <h3>Objetivo</h3>
              <p>Dar una primera orientación rápida y accesible, sin necesidad de traslado.</p>
            </div>
            <div className="tele-desc-card">
              <span className="tele-desc-icon">✨</span>
              <h3>Valor Agregado</h3>
              <p>Comodidad total y continuidad en el seguimiento de tratamientos.</p>
            </div>
            <div className="tele-desc-card">
              <span className="tele-desc-icon">🔍</span>
              <h3>Alcance</h3>
              <p>Desde consultas generales hasta control y seguimiento de casos en curso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="tele-benefits">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">Beneficios Principales</h2>
          <div className="tele-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="tele-benefit-card">
                <span className="tele-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUÉ INCLUYE ===== */}
      <section className="tele-includes">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">¿Qué Incluye el Servicio?</h2>
          <ul className="tele-includes-list">
            {includes.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="tele-process">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">¿Cómo Funciona?</h2>
          <div className="tele-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="tele-process-item">
                <div className="tele-process-number">{item.step}</div>
                <div className="tele-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EQUIPO ===== */}
      <section className="tele-vets">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">Nuestro Equipo</h2>
          <div className="tele-vets-grid">
            {vets.map((vet, idx) => (
              <div key={idx} className="tele-vet-card">
                <div className="tele-vet-avatar">{vet.img}</div>
                <h3>{vet.name}</h3>
                <p className="tele-vet-specialty">{vet.specialty}</p>
                <p className="tele-vet-exp">Experiencia: {vet.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRECIO ===== */}
      <section className="tele-prices">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">Valor de la Consulta</h2>
          <div className="tele-price-card">
            <h3>Telemedicina</h3>
            <div className="tele-price-amount">$15.000</div>
            <p className="tele-price-time">Consulta por videollamada</p>
            <ul className="tele-price-services">
              <li>✓ Consultas, control y seguimientos</li>
              <li>✓ Si deriva a visita a domicilio, se descuenta este monto del valor de la consulta presencial</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="tele-faq">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">Preguntas Frecuentes</h2>
          <div className="tele-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="tele-faq-item">
                <button
                  className="tele-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="tele-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="tele-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="tele-testimonios">
        <div className="tele-container-small">
          <h2 className="tele-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="tele-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="tele-testimonio-card">
                <div className="tele-testimonio-header">
                  <span className="tele-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="tele-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="tele-testimonio-text">"{test.text}"</p>
                <div className="tele-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       

      {/* ===== CTA FINAL ===== */}
      <section className="tele-cta-final">
        <div className="tele-container-small">
          <h2>¿Tienes una duda rápida sobre tu mascota?</h2>
          <p>Agenda una videollamada hoy y conversa con nuestro equipo</p>
          <button className="tele-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default Telemedicina;