import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";
import imagen3 from "../assets/imagen3.png";
import imagen4 from "../assets/Imagen4.png"; 
import Imagen5 from "../assets/imagen5.jpeg"; 
import imagen6 from "../assets/imagen6.jpg"; 
import images7 from "../assets/images7.jpg";
import imagen8 from "../assets/imagen8.webp";
import imagen9 from "../assets/imagen9.jpg"; 
import imagen10 from "../assets/imagen10.jpg"; 
import imagen11 from "../assets/imagen11.webp";  
import imagen12 from "../assets/imagen12.webp";  
import imagen13 from "../assets/imagen13.webp";  
import imagen14 from "../assets/imagen14.webp";
import imagen15 from "../assets/imagen15.jpg";
import imagen16 from "../assets/imagen16.avif";

function Home() {
  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop",
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
    <div className="home">
      <NavBar2 />
      <WhatsAppButton />

      {/* ===== HERO / PORTADA ===== */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🐾 Veterinaria Premium a Domicilio</span>
          <h1>El cuidado  que tu mascota merece, en la comodidad de tu hogar.</h1>
          <p>
            Brindamos servicios veterinarios completos: controles, farmacos, vacunas, exámenes
            de laboratorio y una tienda con productos premium para perros, gatos y animales exoticos.
          </p>
          <h2>
            Tu mascota es familia, nosotros la cuidamos como tal.
          </h2>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">📱 Agenda una visita</Link>
          </div>
        </div>
        <div className="hero-image1">
          <div className="hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Veterinaria a domicilio ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="hero-carousel-btn hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="hero-carousel-btn hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`hero-carousel-dot ${
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

      {/* ===== SERVICIOS ===== */}
      <section className="services-section">
        <div className="section-header">
          <h2>🏥 Servicios Veterinarios Completos</h2>
          <h3>Atención profesional y personalizada para tus mascotas</h3>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src={imagen3} alt="Atención a Domicilio" className="service-img" />
            </div>
            <h3>Atención a Domicilio</h3>
            <p>Visitamos tu hogar con todo lo necesario para evaluaciones veterinarias en un ambiente cómodo.</p>
            <ul className="service-list">
              <li>✓ Revisión general</li>
              <li>✓ Control de peso</li>
              <li>✓ Evaluación dental</li>
              <li>✓ Auscultación</li>
            </ul>
            <a href="/atencion-domicilio">Más información</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={imagen4} alt="Vacunación y Prevención" className="service-img" />
            </div>
            <h3>Vacunación y Prevención</h3>
            <p>Aplicación de todas las vacunas necesarias para perros y gatos.</p>
            <ul className="service-list">
              <li>✓ Vacunas de rutina</li>
              <li>✓ Refuerzos anuales</li>
              <li>✓ Asesoramiento</li>
              <li>✓ Certificados</li>
            </ul>
            <a href="/vacunacion">Más información</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={Imagen5} alt="Exámenes de Laboratorio" className="service-img" />
            </div>
            <h3>Exámenes de Laboratorio</h3>
            <p>Toma de muestras profesional con coordinación directa con laboratorios.</p>
            <ul className="service-list">
              <li>✓ Análisis de sangre</li>
              <li>✓ Urianalisis</li>
              <li>✓ Coprologías</li>
              <li>✓ Cultivos</li>
            </ul>
            <a href="/laboratorio">Más información</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={imagen6} alt="Diagnóstico Profesional" className="service-img" />
            </div>
            <h3>Diagnóstico Profesional</h3>
            <p>Evaluaciones clínicas completas para identificar problemas de salud.</p>
            <ul className="service-list">
              <li>✓ Desparasitación</li>
              <li>✓ Control de pulgas</li>
              <li>✓ Tratamientos</li>
              <li>✓ Asesoramiento</li>
            </ul>
            <a href="/evaluacion-general">Más información</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={images7} alt="Medicamentos" className="service-img" />
            </div>
            <h3>Medicamentos</h3>
            <p>Medicamentos veterinarios de calidad para tratar diferentes condiciones.</p>
            <ul className="service-list">
              <li>✓ Antibióticos</li>
              <li>✓ Analgésicos</li>
              <li>✓ Antiinflamatorios</li>
              <li>✓ Especializadas</li>
            </ul>
            <a href="/seguimiento-medico">Más información</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={imagen8} alt="Seguimiento Continuo" className="service-img" />
            </div>
            <h3>Seguimiento Continuo</h3>
            <p>Historial completo con recordatorios y plan personalizado de cuidados.</p>
            <ul className="service-list">
              <li>✓ Historial médico</li>
              <li>✓ Recordatorios</li>
              <li>✓ Planes de salud</li>
              <li>✓ Nutrición</li>
            </ul>
            <a href="/cuidado-preventivo">Más información</a>
          </div>
        </div>
      </section>


      {/* ===== TELEMEDICINA ===== */}
<section className="telemedicine-section">
  <div className="section-header">
    <h2>📹 Telemedicina Hikari</h2>
    <h3>Consulta a nuestro equipo veterinario sin salir de casa</h3>
  </div>

  <div className="telemedicine-card">
    <div className="telemedicine-icon">📹</div>
    <p>
      Con una videollamada resuelves dudas rápidas, haces seguimiento a un
      tratamiento o simplemente preguntas antes de decidir si necesitas una
      visita presencial. Todo desde tu cuenta, cuando lo necesites.
    </p>
    <div className="telemedicine-features">
      <span>✓ Videollamada en tiempo real</span>
      <span>✓ Ideal para seguimientos</span>
      <span>✓ Sin desplazamientos</span>
      <span>✓ Disponible cuando la necesites</span>
    </div>
    <Link to="/login" className="btn-primary">📹 Probar telemedicina</Link>
  </div>
</section>

      {/* ===== TIENDA ===== */}
      <section className="shop-section">
        <div className="section-header">
          <h2>🛍️ Tienda Especializada</h2>
          <p>Productos premium para el bienestar de tu mascota</p>
        </div>

        <div className="products-grid">
          <div className="product-category">
            <div className="product-icon">
              <img src={imagen9} alt="Alimentos Premium" className="service-img" />
            </div>
            <h3>Alimentos Premium</h3>
            <p>Comidas balanceadas según edad y condición.</p>
            <ul>
              <li>Alimentos secos</li>
              <li>Alimentos húmedos</li>
              <li>Snacks naturales</li>
              <li>Terapéuticas</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen10} alt="Collares y Correas" className="service-img" />
            </div>
            <h3>Collares y Correas</h3>
            <p>Accesorios ergonómicos para paseos seguros.</p>
            <ul>
              <li>Collares</li>
              <li>Arneses</li>
              <li>Correas</li>
              <li>Antipulgas</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen11} alt="Juguetes Interactivos" className="service-img" />
            </div>
            <h3>Juguetes Interactivos</h3>
            <p>Estimulan el juego y la inteligencia.</p>
            <ul>
              <li>Juguetes de goma</li>
              <li>Interactivos</li>
              <li>Pelotas</li>
              <li>Masticables</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen12} alt="Ropa y Accesorios" className="service-img" />
            </div>
            <h3>Ropa y Accesorios</h3>
            <p>Prendas cómodas para diferentes climas.</p>
            <ul>
              <li>Suéteres</li>
              <li>Impermeables</li>
              <li>Zapatos</li>
              <li>Accesorios</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen13} alt="Camas y Cojines" className="service-img" />
            </div>
            <h3>Camas y Cojines</h3>
            <p>Espacios cómodos y ergonómicos.</p>
            <ul>
              <li>Camas ortopédicas</li>
              <li>Cojines</li>
              <li>Mantas</li>
              <li>Casetas</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen14} alt="Higiene y Cuidado" className="service-img" />
            </div>
            <h3>Higiene y Cuidado</h3>
            <p>Productos para la higiene integral.</p>
            <ul>
              <li>Champús</li>
              <li>Antipulgas</li>
              <li>Cepillos</li>
              <li>Toallitas</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen15} alt="Medicamentos" className="service-img" />
            </div>
            <h3>Medicamentos</h3>
            <p>Productos para salud integral de tu mascota.</p>
            <ul>
              <li>Antibioticos</li>
              <li>Desparasitantes</li>
              <li>Vitaminas</li>
              <li>Vacunas</li>
              <li>Analgesicos</li>
            </ul>
          </div>

          <div className="product-category">
            <div className="product-icon">
              <img src={imagen16} alt="Animales Exoticos" className="service-img" />
            </div>
            <h3>Animales Exoticos</h3>
            <p>Productos para la higiene integral.</p>
            <ul>
              <li>Conejos</li>
              <li>Tortugas</li>
              <li>Urones</li>
              <li>Erizos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="why-us-section">
        <div className="section-header">
          <h2>💚 ¿Por qué elegirnos?</h2>
          <p>Somos más que una veterinaria, somos el cuidado que tu familia necesita</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">🚗</div>
            <h3>Comodidad a Domicilio</h3>
            <p>Evita traslados estresantes. Vamos a tu hogar con equipamiento completo.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">❤️</div>
            <h3>Atención Personalizada</h3>
            <p>Brindamos planes de salud personalizados para cada mascota.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🎓</div>
            <h3>Profesionales Capacitados</h3>
            <p>Veterinarios con experiencia y pasión por el bienestar animal.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🔬</div>
            <h3>Diagnóstico Preciso</h3>
            <p>Coordinación directa con laboratorios para resultados rápidos.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">⏰</div>
            <h3>Horarios Flexibles</h3>
            <p>Agendas disponibles según tu conveniencia.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">💰</div>
            <h3>Precios Justos</h3>
            <p>Servicios premium con valores accesibles. Sin sorpresas.</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>⭐ Lo que dicen nuestros clientes</h2>
          <p>Miles de mascotas y familias confían en Hikari</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Excelente servicio. Los veterinarios fueron muy profesionales y mi perro quedó tranquilo."
            </p>
            <p className="testimonial-author">- María González</p>
          </div>
          <div className="testimonial">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Poder tener al veterinario en casa es increíble. Mi gato muy calmo. Muy recomendado."
            </p>
            <p className="testimonial-author">- Carlos Mendez</p>
          </div>
          <div className="testimonial">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Los productos de la tienda son de muy buena calidad. Mi perro mejoró notablemente."
            </p>
            <p className="testimonial-author">- Andrea Silva</p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final-cta">
        <h2>¿Tu mascota necesita atención?</h2>
        <p>Agenda una visita hoy y conoce nuestro servicio premium</p>
        <div className="cta-buttons">
           
          <Link to="/login" className="btn-primary">📱 Agenda Cita </Link>
          <button className="btn-secondary">📞 +56 9 2831 2359</button>
        </div>
      </section>
    </div>
  );
}

export default Home;