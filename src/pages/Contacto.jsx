import { useState } from "react";
import "./Contacto.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";


function Contacto() {
  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="contact-page">
      <NavBar2 />
      <WhatsAppButton />

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="eyebrow">Atención a domicilio · Perros, gatos y exóticos</span>
          <h1>Hablemos de tu mascota</h1>
          <p>
            Agenda una visita, consulta por productos o pregunta lo que
            necesites. Te contestamos directo, sin vueltas.
          </p>
          <div className="hero-actions">
            <a href="tel:+56987654321" className="btn-primary">
              📱 Llamar ahora
            </a>
            <a href="#form" className="btn-ghost">
              Agendar visita
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="contacto-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Perro feliz esperando una visita veterinaria ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="contacto-hero-carousel-btn contacto-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="contacto-hero-carousel-btn contacto-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="contacto-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`contacto-hero-carousel-dot ${
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
          <div className="hero-badge">
            <strong>+200</strong>
            <span>visitas a domicilio realizadas</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="contact-content">

        <div className="contact-info">
          <h2>Información de contacto</h2>

          <ul className="info-list">
            <li>
              <span className="info-icon">📱</span>
              <div>
                <strong>Teléfono / WhatsApp</strong>
                <p>+56 9 XXXX XXXX</p>
              </div>
            </li>
            <li>
              <span className="info-icon">📧</span>
              <div>
                <strong>Correo</strong>
                <p>contacto@hikari.cl</p>
              </div>
            </li>
            <li>
              <span className="info-icon">🏠</span>
              <div>
                <strong>Cobertura</strong>
                <p>Atención veterinaria a domicilio</p>
              </div>
            </li>
            <li>
              <span className="info-icon">🐾</span>
              <div>
                <strong>Pacientes</strong>
                <p>Perros, gatos y animales exóticos</p>
              </div>
            </li>
          </ul>

          <div className="hours-card">
            <strong>Horario de atención</strong>
            <p>Lunes a sábado, 9:00 – 19:00 hrs</p>
          </div>
        </div>

        {/* FORM ESTILO TICKET */}
        <form className="contact-form" id="form">
          <div className="ticket-header">
            <span>Hikari</span>
            <span>Orden de visita</span>
          </div>

          <h2>Solicitar atención</h2>

          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" />
          </label>

          <label>
            Correo
            <input type="email" placeholder="tucorreo@mail.com" />
          </label>

          <label>
            Nombre de tu mascota
            <input type="text" placeholder="Ej: Toby" />
          </label>

          <label>
            Motivo de consulta
            <select defaultValue="">
              <option value="" disabled>
                Selecciona un motivo
              </option>
              <option>Vacuna</option>
              <option>Evaluación general</option>
              <option>Toma de muestra / examen</option>
              <option>Consulta a domicilio</option>
              <option>Animales exóticos</option>
            </select>
          </label>

          <label>
            Cuéntanos sobre tu mascota
            <textarea placeholder="Edad, síntomas, dirección aproximada, etc." />
          </label>

          <button type="submit">Enviar solicitud 🐾</button>

          <div className="ticket-footer">
            Te confirmamos por WhatsApp en menos de 24 hrs
          </div>
        </form>

      </section>

      {/* ===== NOSOTROS - EQUIPO ===== */}
      <section className="nosotros-section">
        <div className="nosotros-header">
          <span className="eyebrow">Conoce al equipo</span>
          <h2>Nosotros</h2>
          <p>
            Somos un equipo de veterinarios apasionados por el bienestar animal.
            Atendemos a tu mascota con dedicación, profesionalismo y mucho cariño.
          </p>
        </div>

        <div className="equipo-grid">
          {/* PERFIL 1 - DOCTORA */}
          <div className="perfil-card">
            <div className="perfil-image">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                alt="Dra. Veterinaria"
              />
            </div>
            <div className="perfil-info">
              <span className="perfil-rol">Médico Veterinario</span>
              <h3>Dra. Sofia Pirul Hernández</h3>
              <p className="perfil-especialidad">
                🦎 Especialista en animales exóticos
              </p>
              <p className="perfil-descripcion">
                Veterinaria con experiencia en atención de perros, gatos y animales
                exóticos. Actualmente preparándose para su especialización en
                <strong> Laboratorio Clínico Veterinario</strong>, ampliando su
                expertise en diagnóstico de precisión.
              </p>
              <div className="perfil-skills">
                <span>🐾 Atención domiciliaria</span>
                <span>🔬 Diagnóstico</span>
                <span>💊 Tratamientos</span>
              </div>
            </div>
          </div>

          {/* PERFIL 2 - DOCTOR */}
          <div className="perfil-card">
            <div className="perfil-image">
              <img
                src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&h=400&fit=crop"
                alt="Dr. Veterinario"
              />
            </div>
            <div className="perfil-info">
              <span className="perfil-rol">Médico Veterinario</span>
              <h3>Dr. Nils Meyer Galindo </h3>
              <p className="perfil-especialidad">
                🦎 Especialista en animales exóticos
              </p>
              <p className="perfil-descripcion">
                Veterinario con vocación por el cuidado integral de las mascotas.
                Actualmente preparándose para su especialización en
                <strong> Cirugía Veterinaria</strong>, expandiendo los servicios
                que ofrecemos a la comunidad.
              </p>
              <div className="perfil-skills">
                <span>🏠 Visitas a domicilio</span>
                <span>💉 Vacunación</span>
                <span>🛍️ Tienda especializada</span>
              </div>
            </div>
          </div>
        </div>

        {/* INFO ADICIONAL */}
        <div className="nosotros-info">
          <div className="info-card">
            <span className="info-icon-big">🏠</span>
            <h4>Atención a domicilio</h4>
            <p>Llevamos el cuidado veterinario hasta la comodidad de tu hogar</p>
          </div>
          <div className="info-card">
            <span className="info-icon-big">💊</span>
            <h4>Medicamentos</h4>
            <p>Recetamos y aplicamos medicamentos veterinarios de calidad</p>
          </div>
          <div className="info-card">
            <span className="info-icon-big">🛍️</span>
            <h4>Tienda especializada</h4>
            <p>Vendemos productos para perros, gatos y animales exóticos</p>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="contact-bottom">
        <h2>Estamos para ayudarte</h2>
        <p>
          Nuestro objetivo es entregar atención cercana, prevenir problemas
          de salud y acompañar a tus mascotas en cada etapa.
        </p>
        <p className="warning">
          ⚠️ No realizamos cirugías ni atendemos urgencias.
        </p>
      </section>

    </div>
  );
}

export default Contacto;