



import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./Petshop.css";
import { Link } from "react-router-dom";
import imagen8 from "../assets/imagen8.jpg";

function Petshop() {
  const categories = [
    { icon: "🍖", title: "Alimentos", desc: "Comida balanceada para perros, gatos y otras especies" },
    { icon: "🧸", title: "Juguetes", desc: "Juguetes interactivos y de entretenimiento" },
    { icon: "🦴", title: "Snacks", desc: "Premios y golosinas saludables" },
    { icon: "🐕", title: "Arnés", desc: "Arneses cómodos y seguros para paseos" },
    { icon: "🥤", title: "Bebederos", desc: "Bebederos y comederos para el día a día" },
  ];

  const includes = [
    "Alimentos",
    "Juguetes",
    "Snacks",
    "Arnés",
    "Bebederos",
    "Próximamente farmacia",
    "Y más",
  ];

  const benefits = [
    { icon: "🛒", title: "Compra Fácil", desc: "Explora y compra productos directamente desde tu cuenta" },
    { icon: "🚚", title: "Todo en un Solo Lugar", desc: "Alimentos, accesorios y snacks para tu mascota" },
    { icon: "✅", title: "Productos de Calidad", desc: "Selección pensada en el bienestar de tu mascota" },
    { icon: "📦", title: "Stock Actualizado", desc: "Disponibilidad real, sin sorpresas al comprar" },
  ];

  const faqs = [
    { q: "¿Necesito una cuenta para comprar?", a: "Sí, la tienda está disponible dentro de tu cuenta de cliente. Inicia sesión para ver el catálogo completo y comprar." },
    { q: "¿Venden medicamentos?", a: "Por el momento no. La farmacia está próximamente disponible. Mientras tanto, nuestros veterinarios pueden emitir la receta correspondiente para que la compres donde prefieras." },
    { q: "¿Los productos son solo para perros y gatos?", a: "Tenemos una selección pensada principalmente en perros y gatos, y estamos ampliando el catálogo para otras especies." },
    { q: "¿Cómo sé si un producto tiene stock?", a: "El catálogo muestra la disponibilidad real de cada producto al momento de comprar." },
    { q: "¿Puedo devolver un producto?", a: "Contáctanos directamente si tienes un problema con tu compra y te ayudamos a resolverlo." },
    { q: "¿Se hacen envios a regiones?", a: "Se hacen envíos a regiones a través de Blue Express o empresa de envios a conveniencia del cliente." },

  ];

  return (
    <div className="pet-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="pet-hero">
        <div className="pet-hero-content">
          <span className="pet-badge">🛍️ Tienda Especializada</span>
          <h1 className="pet-h1">Petshop Hikari</h1>
          <p className="pet-p">
            Alimentos, juguetes, snacks, arnés, bebederos, próximamente farmacia y más. Todo lo que tu mascota necesita, a un clic de distancia.
          </p>
          <div className="pet-hero-cta">
            <Link to="/login" className="pet-btn-primary">🛍️ Ir a la Tienda</Link>
          </div>
        </div>
        <div className="pet-hero-image">
  <img 
    src={imagen8} 
    alt="Petshop Hikari" 
    className="pet-hero-img-full"
  />
</div>
      </section>

      {/* ===== AVISO FARMACIA ===== */}
      <section className="pet-notice">
        <div className="pet-container-small">
          <div className="pet-notice-box">
            <span className="pet-notice-icon">📌</span>
            <div>
              <h3>Farmacia próximamente</h3>
              <p>
                Aún no contamos con venta directa de medicamentos en la tienda. Mientras tanto, nuestros veterinarios pueden evaluar a tu mascota y emitir la receta correspondiente para que la adquieras donde prefieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="pet-description">
        <div className="pet-container-small">
          <h2 className="pet-section-h2">¿Qué es el Petshop Hikari?</h2>
          <p className="pet-description-text">
            Es nuestra tienda de productos para mascotas, disponible directamente desde tu cuenta. Alimentos, juguetes, snacks y accesorios seleccionados pensando en el bienestar de tu mascota.
          </p>
        </div>
      </section>

      {/* ===== CATEGORÍAS ===== */}
      <section className="pet-categories">
        <div className="pet-container-small">
          <h2 className="pet-section-h2">Categorías Disponibles</h2>
          <div className="pet-categories-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="pet-category-card">
                <span className="pet-category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUÉ INCLUYE ===== */}
      <section className="pet-includes">
        <div className="pet-container-small">
          <h2 className="pet-section-h2">¿Qué Encuentras en la Tienda?</h2>
          <ul className="pet-includes-list">
            {includes.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="pet-benefits">
        <div className="pet-container-small">
          <h2 className="pet-section-h2">¿Por Qué Comprar Aquí?</h2>
          <div className="pet-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="pet-benefit-card">
                <span className="pet-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pet-faq">
        <div className="pet-container-small">
          <h2 className="pet-section-h2">Preguntas Frecuentes</h2>
          <div className="pet-faq-list">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="pet-cta-final">
        <div className="pet-container-small">
          <h2>Todo lo que tu mascota necesita, en un solo lugar</h2>
          <p>Ingresa a tu cuenta y explora el catálogo completo</p>
          <Link to="/login" className="pet-btn-large">🛍️ Ir a la Tienda</Link>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pet-faq-item">
      <button className="pet-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="pet-faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pet-faq-answer">{a}</div>}
    </div>
  );
}

export default Petshop;