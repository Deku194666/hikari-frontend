import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Cuy.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Cuy() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen96.jpg",
    "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("categoria");
    if (cat) {
      const cleanCat = cat.replace("-cuy", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🐹",
      titulo: "Necesitan vitamina C",
      texto: "Al igual que los humanos, no pueden sintetizar vitamina C, así que debe estar presente en su dieta diaria.",
    },
    {
      icono: "🦷",
      titulo: "Dientes de crecimiento continuo",
      texto: "Necesitan masticar heno y fibra constantemente para desgastar sus dientes de forma natural.",
    },
    {
      icono: "👥",
      titulo: "Animales muy sociales",
      texto: "Se recomienda tenerlos en pareja o grupo; el aislamiento puede afectar su bienestar emocional.",
    },
    {
      icono: "🎶",
      titulo: "Comunicación por sonidos",
      texto: "Usan una gran variedad de chillidos y ronroneos, cada uno con un significado distinto.",
    },
    {
      icono: "🥬",
      titulo: "Dieta basada en heno",
      texto: "El heno debe ser la base de su alimentación, junto con verduras frescas y una porción de pellets.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Problemas dentales y respiratorios son comunes; el control veterinario periódico es clave.",
    },
  ];

  const datosCuriosos = [
    "Los cuyes no pueden sintetizar vitamina C por sí mismos, igual que los humanos, así que la necesitan en su dieta.",
    "Pueden hacer sonidos como el 'wheeking', un chillido característico cuando anticipan comida.",
    "Los cuyes saltan de alegría en un movimiento llamado 'popcorning'.",
    "Son originarios de la región andina de Sudamérica.",
    "Su visión abarca casi 340 grados, lo que les ayuda a detectar depredadores.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Heno Timothy Premium 1kg",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen150.webp",
      descripcion: "Base diaria de fibra para una buena digestión",
      stock: 40,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Pellets con Vitamina C",
      categoria: "alimento",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen151.webp",
      descripcion: "Fórmula esencial, los cuyes no producen su propia vitamina C",
      stock: 35,
      rating: 4.9,
    },
     
    {
      id: 4,
      nombre: "Snacks Naturales de Fruta",
      categoria: "alimento",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen152.webp",
      descripcion: "Premio ocasional bajo en azúcar",
      stock: 38,
      rating: 4.6,
    },
    {
      id: 5,
      nombre: "Jaula Amplia 100x60x45",
      categoria: "espacios",
      precio: 59900,
      precioOriginal: 78000,
      imagen: "/images/imagen153.jpg",
      descripcion: "Espacio suficiente para uno o dos cuyes",
      stock: 10,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Corral Modulable Interior",
      categoria: "espacios",
      precio: 39900,
      precioOriginal: 52000,
      imagen: "/images/imagen154.jpg",
      descripcion: "Ideal para tiempo de exploración diaria",
      stock: 14,
      rating: 4.8,
    },
    {
      id: 7,
      nombre: "Casa Refugio de Madera",
      categoria: "espacios",
      precio: 15900,
      precioOriginal: 21000,
      imagen: "/images/imagen155.jpg",
      descripcion: "Lugar seguro para descansar y esconderse",
      stock: 20,
      rating: 4.8,
    },
    
    {
      id: 9,
      nombre: "Túnel de Juego Felpa",
      categoria: "accesorios",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen156.webp",
      descripcion: "Estimulación y diversión diaria",
      stock: 25,
      rating: 4.8,
    },
     
    {
      id: 11,
      nombre: "Bebedero Botella 500ml",
      categoria: "accesorios",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen157.jpg",
      descripcion: "Sistema antigoteo de fácil instalación",
      stock: 40,
      rating: 4.9,
    },
    
    {
      id: 13,
      nombre: "Cepillo Suave para Pelaje",
      categoria: "cuidado",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen158.jpg",
      descripcion: "Ideal para cuyes de pelo largo",
      stock: 26,
      rating: 4.8,
    },
    {
      id: 14,
      nombre: "Cortauñas de Precisión",
      categoria: "cuidado",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen159.webp",
      descripcion: "Corte seguro y sin estrés",
      stock: 20,
      rating: 4.9,
    },
    
 
    {
      id: 17,
      nombre: "Desinfectante Seguro 500ml",
      categoria: "higiene",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen160.jpg",
      descripcion: "No tóxico, seguro para jaulas",
      stock: 30,
      rating: 4.7,
    },
   
    
    {
      id: 20,
      nombre: "Mochila de Transporte Cómoda",
      categoria: "transportes",
      precio: 18900,
      precioOriginal: 24000,
      imagen: "/images/imagen161.webp",
      descripcion: "Ventilación y visibilidad para el cuy",
      stock: 12,
      rating: 4.9,
    },
  ];

  const categorias = [
    { id: "todos", label: "🐹 Todos", count: productos.length },
    { id: "alimento", label: "🥬 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "espacios", label: "🏠 Espacios", count: productos.filter(p => p.categoria === "espacios").length },
    { id: "accesorios", label: "🧸 Accesorios", count: productos.filter(p => p.categoria === "accesorios").length },
    { id: "cuidado", label: "✨ Cuidado", count: productos.filter(p => p.categoria === "cuidado").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
    { id: "transportes", label: "🚗 Transportes", count: productos.filter(p => p.categoria === "transportes").length },
  ];

  const productosFiltrados =
    selectedCategory === "todos"
      ? productos
      : productos.filter((p) => p.categoria === selectedCategory);

  const addToCart = (producto) => {
    const existente = cart.find((item) => item.id === producto.id);
    if (existente) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
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

  const totalCart = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="cuy-page">
      <NavBar2 />
      <WhatsAppButton />



      <section className="cuy-hero">
        <div className="cuy-hero-content">
          <span className="cuy-badge">🐹 Mundo Cuyi</span>
          <h1 className="cuy-h1">Todo para tu cuyi</h1>
          <p className="cuy-p">
            Descubre nuestra colección completa de alimentos ricos en
            vitamina C, espacios cómodos y accesorios para mantener a tu cuy
            feliz y saludable.
          </p>
          <div className="cuy-hero-stats">
            <div className="cuy-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="cuy-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="cuy-hero-image">
          <div className="cuy-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Cuy ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="cuy-hero-carousel-btn cuy-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="cuy-hero-carousel-btn cuy-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="cuy-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`cuy-hero-carousel-dot ${
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

      <section className="cuy-precio-section">
        <div className="cuy-precio-card">
          <span className="cuy-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="cuy-precio-h2">Consulta para cuyes</h2>
          <p className="cuy-precio-texto">
            Los cuyes requieren manejo delicado y conocimiento específico de
            su especie, por lo que la evaluación tiene un valor distinto al
            de perros y gatos.
          </p>

          <div className="cuy-precio-comparacion">
            <div className="cuy-precio-item">
              <span className="cuy-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="cuy-precio-valor cuy-precio-valor-normal">$15.000</span>
            </div>
            <div className="cuy-precio-item cuy-precio-destacado">
              <span className="cuy-precio-label">Evaluación cuyes</span>
              <span className="cuy-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="cuy-precio-nota">
            Incluye revisión general, chequeo dental y digestivo, y
            recomendaciones de alimentación y hábitat.
          </p>
        </div>
      </section>

      <section className="cuy-info-section">
        <h2 className="cuy-info-h2">Características principales</h2>
        <p className="cuy-info-p">
          Antes de tener un cuy como mascota, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="cuy-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="cuy-feature-card">
              <span className="cuy-feature-icono">{c.icono}</span>
              <h3 className="cuy-feature-titulo">{c.titulo}</h3>
              <p className="cuy-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cuy-curiosos-section">
        <h2 className="cuy-curiosos-h2">¿Sabías que...?</h2>
        <div className="cuy-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="cuy-curioso-item">
              <span className="cuy-curioso-icono">💡</span>
              <p className="cuy-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cuy-container">
        <aside className="cuy-sidebar">
          <h3 className="cuy-sidebar-h3">Categorías</h3>
          <div className="cuy-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`cuy-categoria-btn ${selectedCategory === cat.id ? "cuy-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="cuy-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="cuy-main">
          <div className="cuy-main-header">
            <h2 className="cuy-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="cuy-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="cuy-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="cuy-producto-card">
                <div className="cuy-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="cuy-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="cuy-producto-info">
                  <h3 className="cuy-producto-h3">{producto.nombre}</h3>
                  <p className="cuy-descripcion">{producto.descripcion}</p>

                  <div className="cuy-rating">
                    ⭐ {producto.rating}
                    <span className="cuy-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="cuy-precios">
                    <span className="cuy-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="cuy-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="cuy-btn-agregar"
                    onClick={() => addToCart(producto)}
                    disabled={producto.stock === 0}
                  >
                    🛒 Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {cart.length > 0 && (
        <button className="cuy-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="cuy-cart-panel">
          <div className="cuy-cart-header">
            <h3 className="cuy-cart-h3">🛒 Tu carrito</h3>
            <button className="cuy-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="cuy-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cuy-cart-item">
                <div className="cuy-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="cuy-item-info">
                  <p className="cuy-item-nombre">{item.nombre}</p>
                  <p className="cuy-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="cuy-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cuy-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="cuy-cart-footer">
            <div className="cuy-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="cuy-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Cuy;