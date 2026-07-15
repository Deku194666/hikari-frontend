import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Conejos.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Conejos() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen74.jpg",
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?w=600&h=500&fit=crop",
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
      const cleanCat = cat.replace("-conejos", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🐰",
      titulo: "Herbívoros estrictos",
      texto: "Su dieta debe basarse en heno fresco (80%), complementado con vegetales y una porción controlada de pellets.",
    },
    {
      icono: "🦷",
      titulo: "Dientes de crecimiento continuo",
      texto: "Necesitan masticar heno y juguetes duros constantemente para desgastar sus dientes de forma natural.",
    },
    {
      icono: "👂",
      titulo: "Animales sociales",
      texto: "Son muy sensibles al estrés y el aislamiento; agradecen compañía, espacio y rutinas estables.",
    },
    {
      icono: "🏃",
      titulo: "Necesitan ejercicio diario",
      texto: "Requieren tiempo fuera de la jaula para saltar y explorar; el sedentarismo afecta su salud digestiva.",
    },
    {
      icono: "🌡️",
      titulo: "Sensibles al calor",
      texto: "No toleran bien las altas temperaturas; un golpe de calor puede ser mortal si no se controla el ambiente.",
    },
    {
      icono: "⏳",
      titulo: "Vida de 8 a 12 años",
      texto: "Con buena alimentación y cuidados veterinarios, un conejo doméstico puede vivir más de una década.",
    },
  ];

  const datosCuriosos = [
    "Los conejos no pueden vomitar, por lo que una obstrucción digestiva es una urgencia veterinaria real.",
    "Practican la cecotrofia: comen directamente sus propias heces blandas (cecotrofos) para reabsorber nutrientes.",
    "Un conejo estresado o asustado puede sufrir un paro cardíaco; el manejo suave es fundamental.",
    "Sus orejas ayudan a regular la temperatura corporal, además de ser clave para su audición.",
    "Pueden saltar más de un metro de altura si el espacio se lo permite.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Heno Timothy Premium 1kg",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen134.jpg",
      descripcion: "Heno de máxima calidad para conejos",
      stock: 40,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Pellets Nutrición Completa",
      categoria: "alimento",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen135.jpg",
      descripcion: "Fórmula balanceada veterinaria",
      stock: 35,
      rating: 4.8,
    },
    {
      id: 3,
      nombre: "Verduras Deshidratadas Mix",
      categoria: "alimento",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen136.webp",
      descripcion: "Zanahoria, manzana, brócoli",
      stock: 30,
      rating: 4.7,
    },
    {
      id: 4,
      nombre: "Snacks Naturales Ramitas",
      categoria: "alimento",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen137.webp",
      descripcion: "Ramas de frutas secas",
      stock: 45,
      rating: 4.8,
    },
    {
      id: 5,
      nombre: "Corral Modulable 6 Paneles",
      categoria: "espacios",
      precio: 34900,
      precioOriginal: 45000,
      imagen: "/images/imagen138.webp",
      descripcion: "Espacio ajustable para explorar",
      stock: 12,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Jaula de Interior 120x60x60",
      categoria: "espacios",
      precio: 49900,
      precioOriginal: 65000,
      imagen: "/images/imagen139.jpg",
      descripcion: "Jaula grande y segura",
      stock: 10,
      rating: 4.8,
    },
    {
      id: 7,
      nombre: "Casa de Madera Natural",
      categoria: "espacios",
      precio: 19900,
      precioOriginal: 26000,
      imagen: "/images/imagen140.jpg",
      descripcion: "Refugio cómodo y seguro",
      stock: 18,
      rating: 4.9,
    },
 
 
    {
      id: 10,
      nombre: "Comederos y Bebederos Set",
      categoria: "accesorios",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen141.jpg",
      descripcion: "Cerámica antirrotura",
      stock: 35,
      rating: 4.9,
    },
    {
      id: 11,
      nombre: "Túnel de Juego Felpa",
      categoria: "accesorios",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen142.jpg",
      descripcion: "Diversión y ejercicio",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 12,
      nombre: "Pasto Artificial Seguro",
      categoria: "accesorios",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen143.jpg",
      descripcion: "Fácil de limpiar y reutilizable",
      stock: 40,
      rating: 4.8,
    },
    {
      id: 13,
      nombre: "Arena Absorbente 5kg",
      categoria: "higiene",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen144.jpg",
      descripcion: "Biodegradable y segura",
      stock: 35,
      rating: 4.8,
    },
    {
      id: 14,
      nombre: "Bandeja Sanitaria con Rejilla",
      categoria: "higiene",
      precio: 11900,
      precioOriginal: 15000,
      imagen: "/images/imagen145.jpg",
      descripcion: "Fácil de limpiar",
      stock: 25,
      rating: 4.9,
    },
    {
      id: 15,
      nombre: "Desinfectante Seguro 500ml",
      categoria: "higiene",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen146.png",
      descripcion: "No tóxico para conejos",
      stock: 30,
      rating: 4.7,
    },
    {
      id: 16,
      nombre: "Cepillo Desenredante Premium",
      categoria: "cuidado",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen147.jpg",
      descripcion: "Para pelaje largo",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 17,
      nombre: "Cortauñas de Precisión",
      categoria: "cuidado",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen148.jpg",
      descripcion: "Corte seguro y preciso",
      stock: 20,
      rating: 4.9,
    },
     
    
    {
      id: 20,
      nombre: "Mochila Transporte Cómoda",
      categoria: "transportes",
      precio: 19900,
      precioOriginal: 26000,
      imagen: "/images/imagen149.jpg",
      descripcion: "Para llevar al conejo seguro",
      stock: 18,
      rating: 4.9,
    },
  ];

  const categorias = [
    { id: "todos", label: "🐰 Todos", count: productos.length },
    { id: "alimento", label: "🌾 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "espacios", label: "🏠 Espacios", count: productos.filter(p => p.categoria === "espacios").length },
    { id: "accesorios", label: "🎀 Accesorios", count: productos.filter(p => p.categoria === "accesorios").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
    { id: "cuidado", label: "✨ Cuidado", count: productos.filter(p => p.categoria === "cuidado").length },
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
    <div className="con-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="con-hero">
        <div className="con-hero-content">
          <span className="con-badge">🐰 Mundo Conejo</span>
          <h1 className="con-h1">Todo para tu conejo adorable</h1>
          <p className="con-p">
            Descubre nuestra colección completa de espacios, alimentos naturales,
            accesorios de juego y cuidado para mantener a tu conejo feliz y saludable.
          </p>
          <div className="con-hero-stats">
            <div className="con-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="con-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="con-hero-image">
          <div className="con-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Conejos ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="con-hero-carousel-btn con-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="con-hero-carousel-btn con-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="con-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`con-hero-carousel-dot ${
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

      <section className="con-precio-section">
        <div className="con-precio-card">
          <span className="con-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="con-precio-h2">Consulta para conejos</h2>
          <p className="con-precio-texto">
            Los conejos requieren manejo delicado y conocimiento específico de
            su fisiología digestiva, por lo que la evaluación tiene un valor
            distinto al de perros y gatos.
          </p>

          <div className="con-precio-comparacion">
            <div className="con-precio-item">
              <span className="con-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="con-precio-valor con-precio-valor-normal">$15.000</span>
            </div>
            <div className="con-precio-item con-precio-destacado">
              <span className="con-precio-label">Evaluación conejos</span>
              <span className="con-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="con-precio-nota">
            Incluye revisión general, chequeo dental, digestivo y
            recomendaciones de alimentación y hábitat.
          </p>
        </div>
      </section>

      <section className="con-info-section">
        <h2 className="con-info-h2">Características principales</h2>
        <p className="con-info-p">
          Antes de traer un conejo a casa, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="con-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="con-feature-card">
              <span className="con-feature-icono">{c.icono}</span>
              <h3 className="con-feature-titulo">{c.titulo}</h3>
              <p className="con-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

     

      <div className="con-container">
        <aside className="con-sidebar">
          <h3 className="con-sidebar-h3">Categorías</h3>
          <div className="con-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`con-categoria-btn ${selectedCategory === cat.id ? "con-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="con-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="con-main">
          <div className="con-main-header">
            <h2 className="con-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="con-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="con-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="con-producto-card">
                <div className="con-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="con-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="con-producto-info">
                  <h3 className="con-producto-h3">{producto.nombre}</h3>
                  <p className="con-descripcion">{producto.descripcion}</p>

                  <div className="con-rating">
                    ⭐ {producto.rating}
                    <span className="con-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="con-precios">
                    <span className="con-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="con-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="con-btn-agregar"
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


       <section className="con-curiosos-section">
        <h2 className="con-curiosos-h2">¿Sabías que...?</h2>
        <div className="con-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="con-curioso-item">
              <span className="con-curioso-icono">💡</span>
              <p className="con-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <button className="con-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="con-cart-panel">
          <div className="con-cart-header">
            <h3 className="con-cart-h3">🛒 Tu carrito</h3>
            <button className="con-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="con-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="con-cart-item">
                <div className="con-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="con-item-info">
                  <p className="con-item-nombre">{item.nombre}</p>
                  <p className="con-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="con-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="con-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="con-cart-footer">
            <div className="con-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="con-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Conejos;