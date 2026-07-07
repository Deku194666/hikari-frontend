import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Roedores.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Roedores() {
  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen92.webp",
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const caracteristicas = [
    {
      icono: "🦷",
      titulo: "Dientes de crecimiento continuo",
      texto: "Todos los roedores necesitan roer constantemente para desgastar sus incisivos, que crecen durante toda su vida.",
    },
    {
      icono: "🐾",
      titulo: "Tamaños y necesidades distintas",
      texto: "Aunque comparten el grupo, cuyes, furones y erizos tienen dietas, jaulas y cuidados muy diferentes entre sí.",
    },
    {
      icono: "🌙",
      titulo: "Hábitos variables",
      texto: "Algunos son diurnos y sociales, otros nocturnos y solitarios; conocer su ritmo natural es clave para su bienestar.",
    },
    {
      icono: "🏠",
      titulo: "Espacio adecuado",
      texto: "Cada especie requiere un tipo de jaula o hábitat distinto, con espacio suficiente para moverse y explorar.",
    },
    {
      icono: "🥕",
      titulo: "Dietas especializadas",
      texto: "Desde herbívoros estrictos hasta carnívoros, la alimentación correcta es fundamental para evitar enfermedades.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Por su tamaño pequeño, los problemas de salud avanzan rápido; el control veterinario periódico es esencial.",
    },
  ];

  const datosCuriosos = [
    "Los cuyes no pueden sintetizar vitamina C por sí mismos, igual que los humanos, así que la necesitan en su dieta.",
    "Los furones duermen entre 14 y 18 horas al día.",
    "Los erizos se enroscan en una bola como mecanismo de defensa, protegidos por sus púas.",
    "Los cuyes se comunican mediante una gran variedad de sonidos, cada uno con un significado distinto.",
    "Los hurones tienen un olfato tan desarrollado que en algunos países se usan para detectar plagas.",
  ];

  const tipos = [
    {
      path: "/cuy",
      emoji: "🐹",
      nombre: "Cuyi",
      imagen: "/images/imagen93.jpg",
      texto:
        "Roedores herbívoros, sociables y activos durante el día. Necesitan una dieta rica en vitamina C y espacio para moverse.",
    },
    {
      path: "/furon",
      emoji: "🦡",
      nombre: "Hurón",
      imagen: "/images/imagen94.jpg",
      texto:
        "Carnívoros curiosos y juguetones. Requieren una dieta alta en proteína y mucho tiempo de juego fuera de la jaula.",
    },
    {
      path: "/erizo",
      emoji: "🦔",
      nombre: "Erizo",
      imagen: "/images/imagen95.jpg",
      texto:
        "Pequeños y nocturnos, con púas como defensa natural. Necesitan calor constante y una dieta insectívora balanceada.",
    },
  ];

  return (
    <div className="roe-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="roe-hero">
        <div className="roe-hero-content">
          <span className="roe-badge">🐹 Mundo Roedor</span>
          <h1 className="roe-h1">Conoce a nuestros roedores</h1>
          <p className="roe-p">
            En Hikari trabajamos con tres tipos de roedores exóticos: cuyis,
            hurones y erizos. Cada uno tiene una personalidad y necesidades
            de cuidado muy distintas.
          </p>
          <div className="roe-hero-stats">
            <div className="roe-stat">
              <strong>3</strong>
              <span>Especies</span>
            </div>
            <div className="roe-stat">
              <strong>100%</strong>
              <span>Cuidado especializado</span>
            </div>
          </div>
        </div>
        <div className="roe-hero-image">
          <div className="roe-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Roedores ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="roe-hero-carousel-btn roe-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="roe-hero-carousel-btn roe-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="roe-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`roe-hero-carousel-dot ${
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

      <section className="roe-precio-section">
        <div className="roe-precio-card">
          <span className="roe-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="roe-precio-h2">Consulta para cuyis, hurones y erizos</h2>
          <p className="roe-precio-texto">
            Los roedores exóticos requieren manejo delicado y conocimiento
            específico de su especie, por lo que la evaluación tiene un valor
            distinto al de perros y gatos.
          </p>

          <div className="roe-precio-comparacion">
            <div className="roe-precio-item">
              <span className="roe-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="roe-precio-valor roe-precio-valor-normal">$15.000</span>
            </div>
            <div className="roe-precio-item roe-precio-destacado">
              <span className="roe-precio-label">Evaluación roedores (cuy, hurón, erizo)</span>
              <span className="roe-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="roe-precio-nota">
            Incluye revisión general, chequeo dental o de piel según la
            especie, y recomendaciones de alimentación y hábitat.
          </p>
        </div>
      </section>

      <section className="roe-info-section">
        <h2 className="roe-info-h2">Características principales</h2>
        <p className="roe-info-p">
          Antes de elegir un roedor como mascota, es importante entender qué
          tienen en común y en qué se diferencian.
        </p>

        <div className="roe-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="roe-feature-card">
              <span className="roe-feature-icono">{c.icono}</span>
              <h3 className="roe-feature-titulo">{c.titulo}</h3>
              <p className="roe-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="roe-curiosos-section">
        <h2 className="roe-curiosos-h2">¿Sabías que...?</h2>
        <div className="roe-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="roe-curioso-item">
              <span className="roe-curioso-icono">💡</span>
              <p className="roe-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="roe-tipos-section">
        <h2 className="roe-tipos-h2">Elige la especie</h2>
        <p className="roe-tipos-p">
          Explora productos y cuidados específicos para cada tipo de roedor.
        </p>

        <div className="roe-tipos-grid">
          {tipos.map((tipo, idx) => (
            <Link key={idx} to={tipo.path} className="roe-tipo-card">
              <div className="roe-tipo-imagen">
                <img src={tipo.imagen} alt={tipo.nombre} />
              </div>
              <div className="roe-tipo-info">
                <h3 className="roe-tipo-h3">
                  {tipo.emoji} {tipo.nombre}
                </h3>
                <p className="roe-tipo-texto">{tipo.texto}</p>
                <span className="roe-tipo-btn">Ver tienda de {tipo.nombre} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Roedores;