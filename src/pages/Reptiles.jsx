import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Reptiles.css";
import WhatsAppButton from "../components/WhatsAppButton";



function Reptiles() {
  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen72.png",
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=600&h=500&fit=crop",
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
      icono: "🌡️",
      titulo: "Ectotermos",
      texto: "No generan su propio calor: dependen de fuentes externas (lámparas UV y calefacción) para regular su temperatura corporal.",
    },
    {
      icono: "🦎",
      titulo: "Piel con escamas",
      texto: "Su piel está cubierta de escamas que los protegen y ayudan a retener la humedad interna.",
    },
    {
      icono: "🥚",
      titulo: "Ovíparos",
      texto: "La gran mayoría se reproduce mediante huevos, y necesitan condiciones específicas de temperatura para incubar.",
    },
    {
      icono: "🏠",
      titulo: "Hábitat controlado",
      texto: "Requieren un terrario con temperatura, humedad e iluminación UV cuidadosamente reguladas para estar sanos.",
    },
    {
      icono: "🔄",
      titulo: "Muda de piel",
      texto: "Renuevan periódicamente su piel a medida que crecen; una muda incompleta puede ser señal de baja humedad.",
    },
    {
      icono: "👁️",
      titulo: "Sentidos especiales",
      texto: "Muchos detectan el mundo con la lengua (órgano de Jacobson) además de la vista y el oído.",
    },
    {
      icono: "⏳",
      titulo: "Larga vida útil",
      texto: "Tortugas e iguanas pueden vivir décadas si reciben los cuidados adecuados, por lo que son un compromiso a largo plazo.",
    },
    {
      icono: "🥬",
      titulo: "Dieta especializada",
      texto: "Cada especie tiene requerimientos nutricionales propios: desde dietas herbívoras estrictas hasta omnívoras.",
    },
  ];

  const datosCuriosos = [
    "Algunas tortugas pueden vivir más de 80 años en cautiverio con buenos cuidados.",
    "Las iguanas verdes pueden desprender la cola como mecanismo de defensa y regenerarla parcialmente con el tiempo.",
    "Los reptiles no tienen párpados móviles en muchas especies; algunas usan una membrana transparente para proteger el ojo.",
    "La temperatura de incubación de los huevos puede determinar el sexo de las crías en varias especies de reptiles.",
    "Un terrario mal calibrado en temperatura es la causa más común de enfermedades en reptiles domésticos.",
  ];

  return (
    <div className="rep-page">
      <NavBar2 />
      <WhatsAppButton />


      <section className="rep-hero">
        <div className="rep-hero-content">
          <span className="rep-badge">🦎 Mundo Reptil</span>
          <h1 className="rep-h1">Conoce a nuestros reptiles</h1>
          <p className="rep-p">
            Los reptiles son mascotas fascinantes que requieren cuidados
            especiales. En Hikari trabajamos con dos tipos principales:
            tortugas e iguanas, cada una con necesidades propias de
            alimentación, hábitat y salud.
          </p>
          <div className="rep-hero-stats">
            <div className="rep-stat">
              <strong>2</strong>
              <span>Especies</span>
            </div>
            <div className="rep-stat">
              <strong>100%</strong>
              <span>Cuidado especializado</span>
            </div>
          </div>
        </div>
        <div className="rep-hero-image">
          <div className="rep-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Reptiles ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="rep-hero-carousel-btn rep-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="rep-hero-carousel-btn rep-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="rep-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`rep-hero-carousel-dot ${
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

      <section className="rep-info-section">
        <h2 className="rep-info-h2">Características principales</h2>
        <p className="rep-info-p">
          Antes de elegir un reptil como mascota, es importante entender lo
          que todos tienen en común.
        </p>

        <div className="rep-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="rep-feature-card">
              <span className="rep-feature-icono">{c.icono}</span>
              <h3 className="rep-feature-titulo">{c.titulo}</h3>
              <p className="rep-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rep-precio-section">
        <div className="rep-precio-card">
          <span className="rep-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="rep-precio-h2">Consulta para tortugas e iguanas</h2>
          <p className="rep-precio-texto">
            Los reptiles requieren manejo, equipo y conocimiento especializado,
            por lo que la evaluación tiene un valor distinto al de perros y gatos.
          </p>

          <div className="rep-precio-comparacion">
            <div className="rep-precio-item">
              <span className="rep-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="rep-precio-valor rep-precio-valor-normal">$15.000</span>
            </div>
            <div className="rep-precio-item rep-precio-destacado">
              <span className="rep-precio-label">Evaluación reptiles (tortugas e iguanas)</span>
              <span className="rep-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="rep-precio-nota">
            Incluye revisión general, chequeo de caparazón/piel, hidratación y
            recomendaciones de hábitat y dieta según la especie.
          </p>
        </div>
      </section>

      <section className="rep-curiosos-section">
        <h2 className="rep-curiosos-h2">¿Sabías que...?</h2>
        <div className="rep-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="rep-curioso-item">
              <span className="rep-curioso-icono">💡</span>
              <p className="rep-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rep-tipos-section">
        <h2 className="rep-tipos-h2">Elige la especie</h2>
        <p className="rep-tipos-p">
          Explora productos y cuidados específicos para cada tipo de reptil.
        </p>

        <div className="rep-tipos-grid">
          <Link to="/tortugas" className="rep-tipo-card">
            <div className="rep-tipo-imagen">
              <img src="/images/imagen101.jpg" alt="Tortugas" />
            </div>
            <div className="rep-tipo-info">
              <h3 className="rep-tipo-h3">🐢 Tortugas</h3>
              <p className="rep-tipo-texto">
                Ideales para quienes buscan una mascota tranquila. Requieren
                acuario o terrario según la especie, alimentación variada y
                buena iluminación UV.
              </p>
              <span className="rep-tipo-btn">Ver tienda de Tortugas →</span>
            </div>
          </Link>

          <Link to="/iguanas" className="rep-tipo-card">
            <div className="rep-tipo-imagen">
              <img src="/images/imagen72.png" alt="Iguanas" />
            </div>
            <div className="rep-tipo-info">
              <h3 className="rep-tipo-h3">🦎 Iguanas</h3>
              <p className="rep-tipo-texto">
                Reptiles activos y herbívoros que necesitan terrarios
                amplios, alta temperatura y una dieta rica en vegetales
                frescos.
              </p>
              <span className="rep-tipo-btn">Ver tienda de Iguanas →</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Reptiles;