import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./AtenciónDomicilio.css";
import { Link } from "react-router-dom";

function AtenciónDomicilio() {
  

  const [expandedFAQ, setExpandedFAQ] = useState(null);

 
  const benefits = [
    { icon: "🏠", title: "Comodidad en Casa", desc: "Tu mascota se atiende en su ambiente familiar" },
    { icon: "🚗", title: "Sin Traslados", desc: "Evita el estrés de viajar en auto" },
    { icon: "👨‍⚕️", title: "Atención Personalizada", desc: "Veterinario dedicado solo a tu mascota" },
    { icon: "🛠️", title: "Equipo Completo", desc: "Llevamos todo lo necesario para diagnósticos y tratamientos" },
    { icon: "🛡️", title: "Prevención y Cuidado", desc: "Desparasitación, vacunación y asesoramiento en cada visita" },
    { icon: "📋", title: "Recetas Médicas", desc: "Emitimos la receta correspondiente según evaluación clínica" },
  ];

  const includes = [
    "Consulta de medicina general",
    "Plan de vacunación",
    "Desparasitación",
    "Curaciones",
    "Retiro de puntos",
    "Eutanasia",
    "Certificados de viaje",
    "Y mucho más",
  ];

  const process = [
    { step: 1, title: "Solicita el Servicio", desc: "Llena el formulario o llámanos para agendar" },
    { step: 2, title: "Confirmación", desc: "Te confirmamos fecha, hora y veterinario" },
    { step: 3, title: "Preparación", desc: "Preparamos todo el equipo necesario" },
    { step: 4, title: "Visita", desc: "El veterinario llega a tu hogar puntualmente" },
    { step: 5, title: "Atención", desc: "Examen completo, diagnóstico y tratamiento en casa" },
    { step: 6, title: "Seguimiento", desc: "Reporte escrito y asesoramiento post-visita" },
  ];

  const vets = [
    { name: "Dra. Sofia Pirul Hernández", specialty: "Medico Veterinario dedicado a Especies Menores (Perros y Gatos)     Asesor de Tenencia Responsable en Animales Exoticos",  img: "👩‍⚕️" },
    { name: "Dr. Nils Meyer Galindo", specialty: "Medico Veterinario dedicado a Especies Menores (Perros y Gatos)", img: "👨‍⚕️" },
  ];

  const prices = [
    {
      name: "Consulta a Domicilio",
      price: "$25.000",
      time: "Incluye diagnóstico, tratamiento y receta",
      services: [
        "Examen general",
        "Diagnóstico",
        "Tratamiento",
        "Receta médica (fármacos no incluidos)",
      ],
    },
    {
      name: "Telemedicina",
      price: "$15.000",
      time: "Consulta por videollamada",
      services: [
        "Consulta, control o seguimiento",
        "Si deriva a visita a domicilio, este monto se descuenta del valor de la consulta presencial",
        "No se cobran ambos servicios por separado",
      ],
    },
    {
      name: "Promoción: Vacuna Triple + Domicilio",
      price: "$32.000",
      time: "Aplicación de vacuna incluida",
      services: [
        "Vacuna triple felina/canina según corresponda",
        "Consulta a domicilio incluida",
        "Evaluación general de salud",
      ],
    },
  ];

  const faqs = [
    { q: "¿Qué mascota puedo llevar?", a: "Atendemos perros, gatos, conejos, aves y pequeños roedores. Consulta por mascotas exóticas." },
    { q: "¿Qué equipo llevan?", a: "Llevamos estetoscopio, termómetro, báscula, otoscopio, y todo lo necesario para diagnósticos y tratamientos básicos." },
    { q: "¿El servicio incluye los medicamentos?", a: "El valor de la consulta incluye diagnóstico, tratamiento y receta médica. Por el momento no realizamos venta directa de medicamentos; el veterinario emite la receta correspondiente para que la adquieras donde prefieras." },
    { q: "¿Qué pasa si tuve una sesión de telemedicina y necesito visita a domicilio?", a: "El monto que ya pagaste por la telemedicina se descuenta del valor de la consulta a domicilio. Solo pagas la diferencia, no se cobran ambos servicios por separado." },
    { q: "¿Qué pasa si necesita análisis?", a: "Tomamos muestras en tu hogar y las procesamos con nuestro laboratorio asociado." },
    { q: "¿Qué debo preparar?", a: "Un lugar cómodo, historiales médicos si tiene, y datos de tu mascota." },
    { q: "¿Se hacen envios a regiones?", a: "Se hacen envíos a regiones a través de Blue Express o empresa de envios a conveniencia del cliente." },
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
              <p>Desde consultas generales hasta diagnóstico, tratamiento y emisión de recetas.</p>
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

      {/* ===== QUÉ INCLUYE ===== */}
      <section className="dom-includes">
        <div className="dom-container-small">
          <h2 className="dom-section-h2">¿Qué Incluye el Servicio?</h2>
          <ul className="dom-includes-list">
            {includes.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
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
                <p className="dom-price-time">{price.time}</p>
                <ul className="dom-price-services">
                  {price.services.map((service, i) => (
                    <li key={i}>✓ {service}</li>
                  ))}
                </ul>
               </div>
            ))}
          </div>
          <p className="dom-price-note">
            📌 Los medicamentos no están incluidos en el valor de la consulta. Por el momento no realizamos venta directa de fármacos; el médico veterinario evalúa el caso y emite la receta correspondiente.
          </p>
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