import { useState } from "react";
import { Link } from "react-router-dom";
import "./Servicios.css";
import NavBar2 from "../components/NavBar2";
import imagen3 from "../assets/imagen3.png";
import imagen4 from "../assets/Imagen4.png";
import imagen6 from "../assets/imagen6.jpg";
import imagen8 from "../assets/imagen8.webp";
import imagen5 from "../assets/imagen5.jpeg"; 
import WhatsAppButton from "../components/WhatsAppButton";
 
function Servicios() {
  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen17.jpg",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const gatitosImages = [
  "/images/cliente-gato-1.jpg",
  "/images/cliente-gato-2.jpg",
  "/images/cliente-gato-3.jpg",
  "/images/cliente-gato-4.jpg",
  "/images/cliente-gato-5.jpg",
  "/images/cliente-gato-6.jpg",
];

const [gatitosIndex, setGatitosIndex] = useState(0);

const prevGatitosImage = () => {
  setGatitosIndex((prev) => (prev === 0 ? gatitosImages.length - 1 : prev - 1));
};

const nextGatitosImage = () => {
  setGatitosIndex((prev) => (prev === gatitosImages.length - 1 ? 0 : prev + 1));
};


const perritosImages = [
  "/images/cliente-perro-1.jpg",
  "/images/cliente-perro-2.jpg",
  "/images/cliente-perro-3.jpg",
  "/images/cliente-perro-4.jpg",
  "/images/cliente-perro-5.jpg",
  "/images/cliente-perro-6.jpg",
  "/images/cliente-perro-7.jpg",
  "/images/cliente-perro-8.jpg",
  "/images/cliente-perro-9.jpg",
  "/images/cliente-perro-10.jpg",
];

const [perritosIndex, setPerritosIndex] = useState(0);

const prevPerritosImage = () => {
  setPerritosIndex((prev) => (prev === 0 ? perritosImages.length - 1 : prev - 1));
};

const nextPerritosImage = () => {
  setPerritosIndex((prev) => (prev === perritosImages.length - 1 ? 0 : prev + 1));
};

  const services = [
    {
      id: 1,
      image: imagen3,
      title: "Atención a Domicilio",
      description: "Visitamos tu hogar con equipamiento completo para evaluar a tu mascota sin estrés.",
      details: [
        "Comodidad para tu mascota",
        "Sin traslados estresantes",
        "Ambiente familiar",
        "Atención dedicada",
      ],
      link: "/atencion-domicilio" 
    },
    {
      id: 2,
      image: imagen4,
      title: "Vacunación Integral",
      description: "Esquemas vacunales completos y actualizados para perros y gatos.",
      details: [
        "Vacunas de rutina",
        "Refuerzos anuales",
        "Certificados oficiales",
        "Registro de vacunas",
      ],
      link: "/vacunacion"
    },
    {
      id: 3,
      image: imagen5,
      title: "Exámenes de Laboratorio",
      description: "Toma de muestras profesional con análisis en laboratorios especializados.",
      details: [
        "Análisis de sangre",
        "Análisis de orina",
        "Coprologías",
        "Resultados rápidos",
      ],
      link: "/laboratorio"
    },
    {
      id: 4,
      image: imagen6,
      title: "Evaluación General",
      description: "Revisión completa del estado de salud de tu mascota.",
      details: [
        "Examen físico completo",
        "Evaluación de signos vitales",
        "Revisión dentaria",
        "Recomendaciones personalizadas",
      ],
      link: "/evaluacion-general"
    },
    {
      id: 5,
      image: imagen8,
      title: "Seguimiento Médico",
      description: "Monitoreo continuo y coordinación de resultados con laboratorios.",
      details: [
        "Historial completo",
        "Recordatorios automáticos",
        "Plan de salud personalizado",
        "Seguimiento de medicinas",
      ],
      link: "/seguimiento-medico"
    },
    {
  id: 6,
  image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
  title: "Cuidado Preventivo",
  description: "Prevención y mantenimiento de la salud antes de que surjan problemas.",
  details: [
    "Desparasitación",
    "Control de pulgas",
    "Asesoramiento nutricional",
    "Consejos de bienestar",
  ],
    link: "/cuidado-preventivo"
},
  ];

  const process = [
    { step: 1, icon: "📞", title: "Contacto", description: "Llama o agenda tu cita en línea" },
    { step: 2, icon: "📅", title: "Agenda", description: "Elige fecha y hora que te convenga" },
    { step: 3, icon: "🚗", title: "Visitamos", description: "Vamos a tu hogar con equipamiento" },
    { step: 4, icon: "✅", title: "Atención", description: "Evaluamos y damos tratamiento a tu mascota" },
    { step: 5, icon: "📊", title: "Resultados", description: "Entregamos reporte y recomendaciones" },
  ];

  return (
    <div className="servicios-page">
      <NavBar2 />
      <WhatsAppButton />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-contentservicios">
           <h1>Cuidado profesional para tus mascotas</h1>
          <p>
            Servicios veterinarios completos directamente en tu hogar.
            Atención personalizada, sin estrés, con profesionales certificados.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">📱 Agenda una cita</Link>
            <a href="#contacto" className="btn-secondary">📞 Llamar ahora</a>
          </div>
        </div>
        <div className="hero-imageservicio">
          <div className="servicios-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Consulta Veterinaria ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="servicios-hero-carousel-btn servicios-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="servicios-hero-carousel-btn servicios-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="servicios-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`servicios-hero-carousel-dot ${
                        idx === heroIndex ? "active" : ""
                      }`}
                      onClick={() => setHeroIndex(idx)}
                      aria-label={`Ir a la imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS GRID ===== */}
      <section className="services-section">
        <div className="section-header1">
          <p className="section-header1-h2" >🐾 Nuestros Servicios</p>
          <p className="section-header1-p">Servicios especializados para la salud integral de tu mascota</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <img src={service.image} alt={service.title} className="service-img" />
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}>✓ {detail}</li>
                ))}
              </ul>
              <a href={service.link}>Más información</a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="process-section">
        <div className="section-header">
          <h2>📋 ¿Cómo funciona?</h2>
          <p>5 pasos simples para cuidar a tu mascota</p>
        </div>

        <div className="process-container">
          {process.map((item, idx) => (
            <div key={item.step} className="process-step">
              <div className="step-number">{item.step}</div>
              <div className="step-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {idx < process.length - 1 && <div className="step-connector">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ===== CARACTERÍSTICAS ===== */}
      <section className="features-section">
        <div className="section-header">
          <h2>✨ ¿Por qué elegir Hikari?</h2>
          <p>Servicios veterinarios pensados en tu comodidad</p>
        </div>

        <div className="features-grid">
         <div className="feature-card">
  <div className="feature-number">01</div>
  <h3>A Domicilio</h3>
  <p>Sin necesidad de trasladarte. Vamos a tu hogar con equipo profesional completo.</p>
</div>
          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>Profesionales Certificados</h3>
            <p>Veterinarios con experiencia y formación continua en últimas prácticas.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>Horarios Flexibles</h3>
            <p>Agendas disponibles según tu conveniencia. Incluso fines de semana.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">04</div>
            <h3>Seguimiento Personalizado</h3>
            <p>Historial completo de tu mascota con reminders automáticos de vacunas.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">05</div>
            <h3>Precio Justo</h3>
            <p>Servicios de calidad sin sorpresas. Presupuesto transparente desde el inicio.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">06</div>
            <h3>Coordinación Laboratorio</h3>
            <p>Conexión directa con laboratorios para resultados rápidos y precisos.</p>
          </div>
        </div>
      </section>

     {/* ===== GALERÍA SERVICIOS ===== */}
<section className="gallery-section">
  <div className="section-header">
    <h2>📸 Nuestro Trabajo</h2>
    <p>Galería de servicios realizados</p>
  </div>

  <div className="gallery-grid">

    <div className="gallery-item gallery-carousel-wrap">
  <img src={perritosImages[perritosIndex]} alt={`Perrit@s ${perritosIndex + 1}`} />
  <p>Perrit@s</p>

  <button
    className="gallery-carousel-btn gallery-carousel-prev"
    onClick={(e) => { e.stopPropagation(); prevPerritosImage(); }}
    aria-label="Foto anterior"
  >
    ‹
  </button>
  <button
    className="gallery-carousel-btn gallery-carousel-next"
    onClick={(e) => { e.stopPropagation(); nextPerritosImage(); }}
    aria-label="Foto siguiente"
  >
    ›
  </button>

  <div className="gallery-carousel-dots">
    {perritosImages.map((_, idx) => (
      <button
        key={idx}
        className={`gallery-carousel-dot ${idx === perritosIndex ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation(); setPerritosIndex(idx); }}
        aria-label={`Ir a la foto ${idx + 1}`}
      />
    ))}
  </div>
</div>

    <div className="gallery-item gallery-carousel-wrap">
      <img src={gatitosImages[gatitosIndex]} alt={`Gatit@s ${gatitosIndex + 1}`} />
      <p>Gatit@s</p>

      <button
        className="gallery-carousel-btn gallery-carousel-prev"
        onClick={(e) => { e.stopPropagation(); prevGatitosImage(); }}
        aria-label="Foto anterior"
      >
        ‹
      </button>
      <button
        className="gallery-carousel-btn gallery-carousel-next"
        onClick={(e) => { e.stopPropagation(); nextGatitosImage(); }}
        aria-label="Foto siguiente"
      >
        ›
      </button>

      <div className="gallery-carousel-dots">
        {gatitosImages.map((_, idx) => (
          <button
            key={idx}
            className={`gallery-carousel-dot ${idx === gatitosIndex ? "active" : ""}`}
            onClick={(e) => { e.stopPropagation(); setGatitosIndex(idx); }}
            aria-label={`Ir a la foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ===== IMPORTANTES ===== */}
      <section className="important-section">
        <div className="section-header">
          <h2>⚠️ Información Importante</h2>
          <p>Lo que debes saber sobre nuestros servicios</p>
        </div>

        <div className="important-grid">
          <div className="important-card available">
            <h3>✅ Servicios Disponibles</h3>
            <ul>
              <li>✓ Evaluaciones veterinarias</li>
              <li>✓ Vacunación</li>
              <li>✓ Toma de exámenes</li>
              <li>✓ Desparasitación</li>
              <li>✓ Asesoramiento nutricional</li>
              <li>✓ Seguimiento médico</li>
            </ul>
          </div>
          <div className="important-card unavailable">
            <h3>❌ Servicios No Disponibles</h3>
            <ul>
              <li>✗ Cirugías</li>
              <li>✗ Urgencias 24/7</li>
              <li>✗ Internación hospitalaria</li>
              <li>✗ Radiografías o ultrasonidos</li>
              <li>✗ Procedimientos quirúrgicos</li>
            </ul>
          </div>
        </div>

        <div className="emergency-alert">
          <span className="alert-icon">🚨</span>
          <div className="alert-content">
            <h4>Emergencias</h4>
            <p>
              Para casos de urgencia, contacta con una clínica veterinaria 24/7.
              <br />
              <strong>Hikari Vet es un servicio de prevención y control, no de urgencias.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final-cta">
        <h2>¿Tu mascota necesita atención?</h2>
        <p>Agenda una visita hoy y conoce nuestro servicio premium a domicilio</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn-primary btn-large">📱 Agendar Cita Ahora</Link>
          <a href="tel:+56912345678" className="btn-secondary btn-large">📞 +56 9 2831 2359</a>
        </div>
      </section>

    </div>
  );
}

export default Servicios;