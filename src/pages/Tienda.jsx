import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tienda.css";
import NavBar2 from "../components/NavBar2";
import WhatsAppButton from "../components/WhatsAppButton";


function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const products = [
    {
      id: 1,
      name: "Alimento Premium Perros",
      category: "alimentos",
      price: 28900,
      originalPrice: 35000,
      image: "/images/imagen9.jpg",
      rating: 4.8,
      reviews: 124,
      description: "Comida balanceada con proteína premium",
      inStock: true,
    },
    {
      id: 2,
      name: "Collar Ajustable Básico",
      category: "accesorios",
      price: 8900,
      originalPrice: 12000,
      image: "/images/imagen10.jpg",
      rating: 4.6,
      reviews: 89,
      description: "Collar cómodo y seguro",
      inStock: true,
    },
    {
      id: 3,
      name: "Juguete Interactivo",
      category: "juguetes",
      price: 12900,
      originalPrice: 18000,
      image: "/images/imagen19.jpg",
      rating: 4.9,
      reviews: 156,
      description: "Juguete que estimula y entretiene",
      inStock: true,
    },
    {
      id: 4,
      name: "Suéter para Perros",
      category: "ropa",
      price: 19900,
      originalPrice: 25000,
      image: "/images/imagen20.webp",
      rating: 4.7,
      reviews: 92,
      description: "Abrigador cómodo y elegante",
      inStock: true,
    },
    {
      id: 5,
      name: "Cama Ortopédica",
      category: "accesorios",
      price: 49900,
      originalPrice: 65000,
      image: "/images/imagen21.jpg",
      rating: 4.9,
      reviews: 203,
      description: "Cama con soporte ergonómico",
      inStock: true,
    },
    {
      id: 6,
      name: "Alimento Gatos Premium",
      category: "alimentos",
      price: 24900,
      originalPrice: 32000,
      image: "/images/imagen22.jpg",
      rating: 4.8,
      reviews: 178,
      description: "Nutrición completa para gatos",
      inStock: true,
    },
    {
      id: 7,
      name: "Set Pelotas Juego",
      category: "juguetes",
      price: 6900,
      originalPrice: 9900,
      image: "/images/imagen23.png",
       rating: 4.5,
      reviews: 67,
      description: "Pack de 3 pelotas coloridas",
      inStock: true,
    },
    {
      id: 8,
      name: "Correa Extensible",
      category: "accesorios",
      price: 15900,
      originalPrice: 22000,
      image: "/images/imagen24.jpg",
      rating: 4.7,
      reviews: 145,
      description: "Correa retráctil de 5 metros",
      inStock: true,
    },
    {
      id: 9,
      name: "Champú Especializado",
      category: "cuidado",
      price: 11900,
      originalPrice: 16000,
      image: "/images/imagen25.jpg",
      rating: 4.6,
      reviews: 98,
      description: "Limpiador suave para mascotas",
      inStock: true,
    },
    {
      id: 10,
      name: "Antipulgas Natural",
      category: "cuidado",
      price: 14900,
      originalPrice: 19900,
      image: "/images/imagen26.avif",
      rating: 4.8,
      reviews: 134,
      description: "Protección antipulgas y garrapatas",
      inStock: true,
    },
    {
      id: 11,
      name: "Snacks Naturales Mix",
      category: "alimentos",
      price: 7900,
      originalPrice: 11000,
      image: "/images/imagen27.webp",
      rating: 4.9,
      reviews: 256,
      description: "Bocadillos saludables variados",
      inStock: true,
    },
    {
      id: 12,
      name: "Arenero para Gatos",
      category: "accesorios",
      price: 34900,
      originalPrice: 45000,
      image: "/images/imagen28.webp",
      rating: 4.7,
      reviews: 110,
      description: "Arenero con bandeja extraíble",
      inStock: false,
    },
  ];

  const categories = [
    { id: "todos", name: "Todos", icon: "🛒" },
    { id: "alimentos", name: "Alimentos", icon: "🥩" },
    { id: "accesorios", name: "Accesorios", icon: "🐕" },
    { id: "juguetes", name: "Juguetes", icon: "🧸" },
    { id: "ropa", name: "Ropa", icon: "👕" },
    { id: "cuidado", name: "Cuidado", icon: "🧴" },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    const existente = cart.find((item) => item.id === product.id);
    if (existente) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: Math.max(1, item.cantidad + change) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const totalCart = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  const calculateDiscount = (price, originalPrice) =>
    Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="tienda-page">
            <NavBar2 />
            <WhatsAppButton />


      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Tienda Hikari</span>
          <h1>Todo lo que tu mascota necesita, en un solo lugar</h1>
          <p>
            Alimento, accesorios, juguetes y artículos de cuidado seleccionados
            por nuestro equipo veterinario. Lo mismo que recomendamos en las
            visitas a domicilio, ahora también puedes comprarlo aquí.
          </p>
          <div className="hero-stats">
            <div><span className="stat-number">300+</span><p1>Productos</p1></div>
             <div><span className="stat-number">100+</span><p1>Clientes</p1></div>
          </div>
        </div>
        <div className="hero-image">
          <div className="tienda-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Productos para mascotas ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="tienda-hero-carousel-btn tienda-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="tienda-hero-carousel-btn tienda-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="tienda-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`tienda-hero-carousel-dot ${
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

      {/* ===== CATEGORÍAS ===== */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Categorías</h2>
          <p>Filtra por lo que tu perro o gato necesita ahora</p>
        </div>

        <div className="categories-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="cat-icon">{category.icon}</span>
              <span className="cat-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ===== PRODUCTOS ===== */}
      <section className="products-section" id="tienda-anchor">
        <div className="products-header">
          <h2>
            {selectedCategory === "todos"
              ? "Todos nuestros productos"
              : categories.find((c) => c.id === selectedCategory)?.name}
          </h2>
          <p>{filteredProducts.length} productos disponibles</p>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product-card ${!product.inStock ? "out-of-stock" : ""}`}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.originalPrice > product.price && (
                  <div className="discount-badge">
                    -{calculateDiscount(product.price, product.originalPrice)}%
                  </div>
                )}
                {!product.inStock && <div className="out-of-stock-overlay">Agotado</div>}
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-rating">
                  <span className="stars">★ {product.rating}</span>
                  <span className="reviews">({product.reviews})</span>
                </div>

                <div className="product-price">
                  <span className="current-price">
                    ${product.price.toLocaleString("es-CL")}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">
                      ${product.originalPrice.toLocaleString("es-CL")}
                    </span>
                  )}
                </div>

                <button
                  className="btn-add-cart"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Agregar al carrito" : "No disponible"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="benefits-section">
        <div className="section-header">
          <h2>Comprar en Hikari</h2>
          <h3>Lo mismo que cuidamos en cada visita, también en tus compras</h3>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>
            <h3>Envío rápido</h3>
            <p>Entregas en tu hogar dentro de 24-48 horas en Santiago</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💯</div>
            <h3>Productos verificados</h3>
            <p>Marcas premium revisadas por nuestro equipo veterinario</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔄</div>
            <h3>Garantía de satisfacción</h3>
            <p>Devuelve el producto si no quedas satisfecho</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💳</div>
            <h3>Múltiples medios de pago</h3>
            <p>Tarjeta de crédito, débito, transferencia y más</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📞</div>
            <h3>Atención al cliente</h3>
            <p>Soporte disponible para resolver tus dudas</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎁</div>
            <h3>Ofertas especiales</h3>
            <p>Descuentos exclusivos para clientes frecuentes</p>
          </div>
        </div>
      </section>

      {/* ===== DESTACADOS ===== */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Lo más recomendado</h2>
          <p>Los productos que más piden nuestros clientes</p>
        </div>

        <div className="featured-grid">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="featured-card">
              <div className="featured-image">
                <img src={product.image} alt={product.name} />
                <div className="featured-badge">Bestseller</div>
              </div>
              <div className="featured-info">
                <h3>{product.name}</h3>
                <div className="featured-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.round(product.rating) ? "filled" : ""}>
                      ★
                    </span>
                  ))}
                  <span className="featured-reviews">{product.reviews} reseñas</span>
                </div>
                <div className="featured-price">
                  ${product.price.toLocaleString("es-CL")}
                </div>
                <button className="btn-featured" onClick={() => addToCart(product)}>
                  Comprar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Preguntas frecuentes</h2>
          <p>Resuelve tus dudas sobre nuestros productos</p>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Cómo realizo una compra?</h3>
            <p>
              Selecciona los productos que deseas, agrégalos al carrito y procede
              al checkout. Estamos terminando de habilitar esta función.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuál es el tiempo de envío?</h3>
            <p>
              Los envíos en Santiago toman entre 24 a 48 horas hábiles después
              de confirmar el pedido.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué pasa si el producto llega dañado?</h3>
            <p>
              Contacta a nuestro equipo y realizaremos un cambio o reembolso
              sin inconvenientes.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puedo devolver un producto?</h3>
            <p>
              Sí, tienes 14 días desde la compra para devolver productos.
              Consulta nuestros términos de devolución.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Envían a otras regiones?</h3>
            <p>
              Por ahora solo enviamos a Santiago. Pronto expandiremos a otras
              regiones del país.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo sé si un producto es seguro?</h3>
            <p>
              Todos nuestros productos son revisados por nuestro equipo y
              cumplen con normativas de seguridad para mascotas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Recibe tips y ofertas en tu correo</h2>
          <p>Consejos de cuidado, recordatorios de vacunas y descuentos exclusivos.</p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="newsletter-input"
            />
            <button type="submit" className="btn-subscribe">
              Suscribirme
            </button>
          </form>

          <p className="newsletter-note">
            Nada de spam. Solo contenido útil para tu mascota.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final-cta">
        <h2>¿Necesitas asesoría?</h2>
        <p>Nuestro equipo veterinario puede recomendarte los mejores productos</p>
        <div className="cta-buttons">
          <Link to="/servicios" className="btn-primary btn-large">
            Ver servicios
          </Link>
          <a href="tel:+56912345678" className="btn-secondary btn-large">
            Contactar
          </a>
        </div>
      </section>

      {/* ===== CARRITO FLOTANTE ===== */}
      {cart.length > 0 && (
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="cart-panel">
          <div className="cart-header">
            <h3>🛒 Tu carrito</h3>
            <button className="close-cart" onClick={() => setShowCart(false)}>
              ✕
            </button>
          </div>

          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-imagen">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <p className="item-nombre">{item.name}</p>
                  <p className="item-precio">
                    ${item.price.toLocaleString("es-CL")}
                  </p>
                  <div className="item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button
                  className="btn-eliminar"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
  <div className="cart-total">
    <strong>Total:</strong>
    <span>${totalCart.toLocaleString("es-CL")}</span>
  </div>
  <button
    className="btn-checkout"
    onClick={() => navigate("/login")}
  >
    💳 Ir al pago
  </button>
</div>
        </aside>
      )}

    </div>
  );
}

export default Tienda;