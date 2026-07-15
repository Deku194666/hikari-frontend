import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Huron.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Huron() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen97.jpg",
    "/images/imagen197.webp",
    "/images/imagen200.jpg",
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
      const cleanCat = cat.replace("-huron", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🦡",
      titulo: "Carnívoros estrictos",
      texto: "A diferencia de otros pequeños mamíferos, necesitan una dieta alta en proteína animal, no vegetal.",
    },
    {
      icono: "😴",
      titulo: "Duermen mucho",
      texto: "Pueden dormir entre 14 y 18 horas al día, alternando con períodos de mucha energía y juego.",
    },
    {
      icono: "🌡️",
      titulo: "Sensibles al calor",
      texto: "No toleran bien las temperaturas altas; el golpe de calor es un riesgo real en días calurosos.",
    },
    {
      icono: "🏃",
      titulo: "Muy curiosos y activos",
      texto: "Exploran cada rincón disponible; requieren un espacio seguro y a prueba de escapes.",
    },
    {
      icono: "💉",
      titulo: "Esterilización recomendada",
      texto: "Ayuda a prevenir problemas de salud comunes y a controlar el olor característico de la especie.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Son propensos a ciertas enfermedades; el control veterinario periódico es fundamental.",
    },
  ];

  const datosCuriosos = [
    "Los hurones fueron domesticados hace más de 2.000 años, principalmente para cazar roedores.",
    "Tienen una danza característica llamada 'war dance' cuando están emocionados o jugando.",
    "Pueden retorcerse por espacios sorprendentemente pequeños gracias a su cuerpo flexible.",
    "Emiten un sonido llamado 'dooking' cuando están felices o jugando.",
    "En algunos países se usan para detectar plagas gracias a su gran olfato.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Alimento Alto en Proteína",
      categoria: "alimento",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen169.jpg",
      descripcion: "Fórmula carnívora especial para hurones",
      stock: 30,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Snacks de Carne Deshidratada",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen170.webp",
      descripcion: "Premio natural sin cereales",
      stock: 35,
      rating: 4.8,
    },
     
    {
      id: 4,
      nombre: "Aceite de Salmón para Pelaje",
      categoria: "alimento",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen171.jpg",
      descripcion: "Favorece un pelaje brillante y saludable",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 5,
      nombre: "Jaula Multinivel 100x70x150",
      categoria: "jaulas",
      precio: 139900,
      precioOriginal: 180000,
      imagen: "/images/imagen172.jpg",
      descripcion: "Varios pisos para trepar y explorar",
      stock: 6,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Hamaca Colgante Suave",
      categoria: "jaulas",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen173.jpg",
      descripcion: "Lugar favorito para dormir de los hurones",
      stock: 30,
      rating: 4.9,
    },
    {
      id: 7,
      nombre: "Túnel de Tela Extra Largo",
      categoria: "jaulas",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen174.jpg",
      descripcion: "Ideal para su instinto explorador",
      stock: 22,
      rating: 4.8,
    },
    
    {
      id: 9,
      nombre: "Juguetes Interactivos Pack",
      categoria: "accesorios",
      precio: 10900,
      precioOriginal: 14000,
      imagen: "/images/imagen175.png",
      descripcion: "Estimulación mental para su alta energía",
      stock: 26,
      rating: 4.8,
    },
    {
      id: 10,
      nombre: "Arnés y Correa Ajustable",
      categoria: "accesorios",
      precio: 13900,
      precioOriginal: 18000,
      imagen: "/images/imagen176.jpg",
      descripcion: "Para paseos seguros y supervisados",
      stock: 20,
      rating: 4.8,
    },
    
    {
      id: 12,
      nombre: "Bandeja Sanitaria Esquinera",
      categoria: "higiene",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen177.webp",
      descripcion: "Aprovecha el hábito de entrenar rincones",
      stock: 24,
      rating: 4.8,
    },
     
    {
      id: 14,
      nombre: "Desinfectante Seguro 500ml",
      categoria: "higiene",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen178.jpg",
      descripcion: "No tóxico para hurones",
      stock: 30,
      rating: 4.7,
    },
    {
      id: 15,
      nombre: "Shampoo Especial para Hurones",
      categoria: "cuidado",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen179.jpg",
      descripcion: "Controla el olor natural de su piel",
      stock: 25,
      rating: 4.8,
    },
    {
      id: 16,
      nombre: "Cortauñas de Precisión",
      categoria: "cuidado",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen180.jpg",
      descripcion: "Corte seguro y sin estrés",
      stock: 20,
      rating: 4.9,
    },
    
    {
      id: 19,
      nombre: "Transportín Ventilado",
      categoria: "transportes",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen181.jpg",
      descripcion: "Seguro para viajes y visitas al veterinario",
      stock: 14,
      rating: 4.8,
    },
     
  ];

  const categorias = [
    { id: "todos", label: "🦡 Todos", count: productos.length },
    { id: "alimento", label: "🍖 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "jaulas", label: "🏠 Jaulas", count: productos.filter(p => p.categoria === "jaulas").length },
    { id: "accesorios", label: "🧸 Accesorios", count: productos.filter(p => p.categoria === "accesorios").length },
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
    <div className="hur-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="hur-hero">
        <div className="hur-hero-content">
          <span className="hur-badge">🦡 Mundo Hurón</span>
          <h1 className="hur-h1">Todo para tu hurón</h1>
          <p className="hur-p">
            Descubre nuestra colección completa de alimentos altos en
            proteína, jaulas multinivel y accesorios para mantener a tu
            hurón activo y saludable.
          </p>
          <div className="hur-hero-stats">
            <div className="hur-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="hur-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="hur-hero-image">
          <div className="hur-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Hurón ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="hur-hero-carousel-btn hur-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="hur-hero-carousel-btn hur-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="hur-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`hur-hero-carousel-dot ${
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

      <section className="hur-precio-section">
        <div className="hur-precio-card">
          <span className="hur-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="hur-precio-h2">Consulta para hurones</h2>
          <p className="hur-precio-texto">
            Los hurones requieren manejo especializado y conocimiento
            específico de su especie, por lo que la evaluación tiene un
            valor distinto al de perros y gatos.
          </p>

          <div className="hur-precio-comparacion">
            <div className="hur-precio-item">
              <span className="hur-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="hur-precio-valor hur-precio-valor-normal">$15.000</span>
            </div>
            <div className="hur-precio-item hur-precio-destacado">
              <span className="hur-precio-label">Evaluación hurones</span>
              <span className="hur-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="hur-precio-nota">
            Incluye revisión general, chequeo de piel y peso, y
            recomendaciones de alimentación y hábitat.
          </p>
        </div>
      </section>

      <section className="hur-info-section">
        <h2 className="hur-info-h2">Características principales</h2>
        <p className="hur-info-p">
          Antes de tener un hurón como mascota, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="hur-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="hur-feature-card">
              <span className="hur-feature-icono">{c.icono}</span>
              <h3 className="hur-feature-titulo">{c.titulo}</h3>
              <p className="hur-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>


      <div className="hur-container">
        <aside className="hur-sidebar">
          <h3 className="hur-sidebar-h3">Categorías</h3>
          <div className="hur-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`hur-categoria-btn ${selectedCategory === cat.id ? "hur-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="hur-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="hur-main">
          <div className="hur-main-header">
            <h2 className="hur-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="hur-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="hur-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="hur-producto-card">
                <div className="hur-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="hur-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="hur-producto-info">
                  <h3 className="hur-producto-h3">{producto.nombre}</h3>
                  <p className="hur-descripcion">{producto.descripcion}</p>

                  <div className="hur-rating">
                    ⭐ {producto.rating}
                    <span className="hur-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="hur-precios">
                    <span className="hur-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="hur-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="hur-btn-agregar"
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

            <section className="hur-curiosos-section">
        <h2 className="hur-curiosos-h2">¿Sabías que...?</h2>
        <div className="hur-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="hur-curioso-item">
              <span className="hur-curioso-icono">💡</span>
              <p className="hur-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <button className="hur-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="hur-cart-panel">
          <div className="hur-cart-header">
            <h3 className="hur-cart-h3">🛒 Tu carrito</h3>
            <button className="hur-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="hur-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="hur-cart-item">
                <div className="hur-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="hur-item-info">
                  <p className="hur-item-nombre">{item.nombre}</p>
                  <p className="hur-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="hur-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="hur-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="hur-cart-footer">
            <div className="hur-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="hur-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Huron;