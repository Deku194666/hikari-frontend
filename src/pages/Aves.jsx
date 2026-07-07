import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Aves.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Aves() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen75.webp",
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=500&fit=crop",
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
      const cleanCat = cat.replace("-aves", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🦜",
      titulo: "Muy inteligentes",
      texto: "Muchas especies, como loros y guacamayos, pueden resolver problemas, aprender palabras y reconocer personas.",
    },
    {
      icono: "🎶",
      titulo: "Comunicación vocal",
      texto: "Cantan o vocalizan para comunicarse; el silencio prolongado o los cambios de canto pueden indicar estrés o enfermedad.",
    },
    {
      icono: "🪶",
      titulo: "Cuidado del plumaje",
      texto: "Se acicalan constantemente; un plumaje opaco o desordenado suele ser señal de que algo no está bien.",
    },
    {
      icono: "🏠",
      titulo: "Necesitan espacio para volar",
      texto: "Incluso en jaula, requieren tiempo diario fuera para estirar las alas y hacer ejercicio.",
    },
    {
      icono: "👥",
      titulo: "Animales sociales",
      texto: "Muchas especies viven en bandadas en la naturaleza; la soledad prolongada puede afectar su bienestar emocional.",
    },
    {
      icono: "⏳",
      titulo: "Longevidad variable",
      texto: "Un canario puede vivir 8-10 años, mientras que un loro grande puede vivir más de 40 años: es un compromiso serio.",
    },
  ];

  const datosCuriosos = [
    "Algunos loros grises africanos pueden aprender más de 100 palabras y usarlas en contexto.",
    "Las aves no tienen dientes: usan la molleja para triturar el alimento con ayuda de pequeñas piedras.",
    "Los colibríes pueden batir sus alas más de 50 veces por segundo.",
    "Muchas aves tienen huesos huecos, lo que reduce su peso corporal para poder volar.",
    "El estrés en aves puede manifestarse como arrancarse las plumas, una conducta llamada picaje.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Mezcla de Semillas Premium",
      categoria: "alimento",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen107.jpg",
      descripcion: "Mezcla balanceada para loros y aves",
      stock: 40,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Pellets Nutrición Completa",
      categoria: "alimento",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen108.jpg",
      descripcion: "Alimento formulado veterinariamente",
      stock: 30,
      rating: 4.8,
    },
    {
      id: 3,
      nombre: "Frutas Deshidratadas Mix",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen109.jpg",
      descripcion: "Manzana, plátano, naranja y más",
      stock: 25,
      rating: 4.7,
    },
    {
      id: 4,
      nombre: "Néctar Concentrado Colibríes",
      categoria: "alimento",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen110.jpg",
      descripcion: "Alimento especializado para colibríes",
      stock: 35,
      rating: 4.9,
    },
    {
      id: 5,
      nombre: "Jaula Lujo 90x60x90cm",
      categoria: "jaulas",
      precio: 89900,
      precioOriginal: 120000,
      imagen: "/images/imagen111.jpg",
      descripcion: "Jaula amplia con múltiples accesorios",
      stock: 8,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Jaula Mediana 60x40x60cm",
      categoria: "jaulas",
      precio: 49900,
      precioOriginal: 65000,
      imagen: "/images/imagen112.jpg",
      descripcion: "Ideal para canarios y periquitos",
      stock: 12,
      rating: 4.8,
    },
    {
      id: 7,
      nombre: "Voladora de Vuelo Libre",
      categoria: "jaulas",
      precio: 129900,
      precioOriginal: 170000,
      imagen: "/images/imagen113.jpg",
      descripcion: "Espacio amplio para loros grandes",
      stock: 5,
      rating: 4.9,
    },
    {
      id: 8,
      nombre: "Perchas Naturales Pack 5",
      categoria: "accesorios",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen114.jpg",
      descripcion: "Madera natural para aferrarse",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 9,
      nombre: "Nidos para Canarios",
      categoria: "accesorios",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen115.jpg",
      descripcion: "Nido seguro para reproducción",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 10,
      nombre: "Comederos y Bebederos Set",
      categoria: "accesorios",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen116.jpg",
      descripcion: "Set de 3 comederos automáticos",
      stock: 35,
      rating: 4.8,
    },
    {
      id: 11,
      nombre: "Juguetes Interactivos Pack",
      categoria: "accesorios",
      precio: 14900,
      precioOriginal: 19000,
      imagen: "/images/imagen117.webp",
      descripcion: "Estimulación mental y diversión",
      stock: 25,
      rating: 4.9,
    },
    {
      id: 12,
      nombre: "Bombilla LED Espectro Completo",
      categoria: "iluminacion",
      precio: 16900,
      precioOriginal: 22000,
      imagen: "/images/imagen118.webp",
      descripcion: "Simula luz natural para ciclo diario",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 13,
      nombre: "Lámpara de Clip Regulable",
      categoria: "iluminacion",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen119.jpg",
      descripcion: "Instalación fácil en jaulas",
      stock: 22,
      rating: 4.7,
    },
    {
      id: 14,
      nombre: "Calcio para Aves",
      categoria: "suplementos",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen120.jpg",
      descripcion: "Fortalece huesos y plumaje",
      stock: 40,
      rating: 4.8,
    },
    {
      id: 15,
      nombre: "Multivitamínico para Aves",
      categoria: "suplementos",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen121.jpg",
      descripcion: "Nutrientes completos en agua",
      stock: 35,
      rating: 4.9,
    },
    {
      id: 16,
      nombre: "Pasta de Cría Seasonal",
      categoria: "suplementos",
      precio: 11900,
      precioOriginal: 15000,
      imagen: "/images/imagen122.jpg",
      descripcion: "Especial para época de reproducción",
      stock: 18,
      rating: 4.8,
    },
    {
      id: 17,
      nombre: "Arena Baño Aves 2kg",
      categoria: "higiene",
      precio: 4900,
      precioOriginal: 7000,
      imagen: "/images/imagen123.jpg",
      descripcion: "Para mantener plumaje limpio",
      stock: 50,
      rating: 4.7,
    },
    {
      id: 18,
      nombre: "Spray Desinfectante Seguro",
      categoria: "higiene",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen124.jpg",
      descripcion: "Elimina bacterias sin dañar",
      stock: 30,
      rating: 4.8,
    },
    {
      id: 19,
      nombre: "Papel Toalla Biodegradable",
      categoria: "higiene",
      precio: 3900,
      precioOriginal: 5500,
      imagen: "/images/imagen125.jpg",
      descripcion: "Recubrimiento seguro para jaulas",
      stock: 60,
      rating: 4.6,
    },
    {
      id: 20,
      nombre: "Transportín Viaje Seguro",
      categoria: "transportes",
      precio: 19900,
      precioOriginal: 26000,
      imagen: "/images/imagen126.jpg",
      descripcion: "Seguro y ventilado para viajes",
      stock: 15,
      rating: 4.8,
    },
  ];

  const categorias = [
    { id: "todos", label: "🦜 Todos", count: productos.length },
    { id: "alimento", label: "🌾 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "jaulas", label: "🏠 Jaulas", count: productos.filter(p => p.categoria === "jaulas").length },
    { id: "accesorios", label: "⚙️ Accesorios", count: productos.filter(p => p.categoria === "accesorios").length },
    { id: "iluminacion", label: "💡 Iluminación", count: productos.filter(p => p.categoria === "iluminacion").length },
    { id: "suplementos", label: "💊 Suplementos", count: productos.filter(p => p.categoria === "suplementos").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
    { id: "transportes", label: "🚗 Transportín", count: productos.filter(p => p.categoria === "transportes").length },
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
    <div className="ave-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="ave-hero">
        <div className="ave-hero-content">
          <span className="ave-badge">🦜 Mundo de Aves</span>
          <h1 className="ave-h1">Todo para tus aves exóticas</h1>
          <p className="ave-p">
            Descubre nuestra colección completa de jaulas, alimentos premium,
            accesorios y suplementos para mantener a tus aves felices y saludables.
          </p>
          <div className="ave-hero-stats">
            <div className="ave-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="ave-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="ave-hero-image">
          <div className="ave-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Aves ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="ave-hero-carousel-btn ave-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="ave-hero-carousel-btn ave-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="ave-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`ave-hero-carousel-dot ${
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

      <section className="ave-precio-section">
        <div className="ave-precio-card">
          <span className="ave-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="ave-precio-h2">Consulta para aves</h2>
          <p className="ave-precio-texto">
            Las aves requieren manejo delicado y equipo especializado para su
            revisión, por lo que la evaluación tiene un valor distinto al de
            perros y gatos.
          </p>

          <div className="ave-precio-comparacion">
            <div className="ave-precio-item">
              <span className="ave-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="ave-precio-valor ave-precio-valor-normal">$15.000</span>
            </div>
            <div className="ave-precio-item ave-precio-destacado">
              <span className="ave-precio-label">Evaluación aves</span>
              <span className="ave-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="ave-precio-nota">
            Incluye revisión general, chequeo de plumaje y peso, y
            recomendaciones de alimentación y hábitat según la especie.
          </p>
        </div>
      </section>

      <section className="ave-info-section">
        <h2 className="ave-info-h2">Características principales</h2>
        <p className="ave-info-p">
          Antes de traer un ave a casa, es importante conocer sus necesidades
          básicas.
        </p>

        <div className="ave-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="ave-feature-card">
              <span className="ave-feature-icono">{c.icono}</span>
              <h3 className="ave-feature-titulo">{c.titulo}</h3>
              <p className="ave-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ave-curiosos-section">
        <h2 className="ave-curiosos-h2">¿Sabías que...?</h2>
        <div className="ave-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="ave-curioso-item">
              <span className="ave-curioso-icono">💡</span>
              <p className="ave-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ave-container">
        <aside className="ave-sidebar">
          <h3 className="ave-sidebar-h3">Categorías</h3>
          <div className="ave-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`ave-categoria-btn ${selectedCategory === cat.id ? "ave-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="ave-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="ave-main">
          <div className="ave-main-header">
            <h2 className="ave-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="ave-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="ave-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="ave-producto-card">
                <div className="ave-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="ave-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="ave-producto-info">
                  <h3 className="ave-producto-h3">{producto.nombre}</h3>
                  <p className="ave-descripcion">{producto.descripcion}</p>

                  <div className="ave-rating">
                    ⭐ {producto.rating}
                    <span className="ave-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="ave-precios">
                    <span className="ave-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="ave-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="ave-btn-agregar"
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
        <button className="ave-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="ave-cart-panel">
          <div className="ave-cart-header">
            <h3 className="ave-cart-h3">🛒 Tu carrito</h3>
            <button className="ave-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="ave-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="ave-cart-item">
                <div className="ave-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="ave-item-info">
                  <p className="ave-item-nombre">{item.nombre}</p>
                  <p className="ave-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="ave-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="ave-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="ave-cart-footer">
            <div className="ave-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="ave-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Aves;