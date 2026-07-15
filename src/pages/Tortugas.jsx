import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Tortugas.css";
import WhatsAppButton from "../components/WhatsAppButton";

function Tortugas() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen91.webp",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=500&fit=crop",
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
      const cleanCat = cat.replace("-tortugas", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🐢",
      titulo: "Longevidad extrema",
      texto: "Muchas especies de tortugas pueden vivir varias décadas, incluso más de 50 años con buenos cuidados.",
    },
    {
      icono: "💧",
      titulo: "Vida semiacuática",
      texto: "Las tortugas acuáticas necesitan tanto agua limpia para nadar como una zona seca para tomar sol.",
    },
    {
      icono: "☀️",
      titulo: "Requieren luz UV",
      texto: "La luz UV-B es esencial para que absorban calcio correctamente y mantengan su caparazón sano.",
    },
    {
      icono: "🥬",
      titulo: "Dieta variada",
      texto: "Combinan proteína animal, vegetales y suplementos de calcio según la etapa de vida.",
    },
    {
      icono: "🌡️",
      titulo: "Temperatura controlada",
      texto: "El agua y el ambiente deben mantenerse en rangos específicos para evitar enfermedades respiratorias.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Problemas de caparazón o piel pueden avanzar lento pero requieren atención veterinaria oportuna.",
    },
  ];

  const datosCuriosos = [
    "El caparazón de una tortuga está formado por huesos fusionados a sus costillas, no es una concha separada.",
    "Algunas tortugas pueden retener la respiración bajo el agua por varias horas.",
    "No tienen dientes: usan un pico córneo para cortar su alimento.",
    "Pueden sentir vibraciones y presión a través de su caparazón.",
    "La temperatura de incubación de los huevos determina el sexo de las crías en muchas especies.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Pellets Tortuga Acuática Premium",
      categoria: "alimento",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen86.jpg",
      descripcion: "Nutrición balanceada para tortugas acuáticas",
      stock: 28,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Vegetales Mixtos Deshidratados",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen102.jpg",
      descripcion: "Lechuga, zanahoria y espinaca deshidratadas",
      stock: 35,
      rating: 4.8,
    },
    {
      id: 3,
      nombre: "Camarones Secos Naturales",
      categoria: "alimento",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen103.jpg",
      descripcion: "Proteína natural para tortugas",
      stock: 22,
      rating: 4.7,
    },
    {
      id: 4,
      nombre: "Mix de Algas Marinas",
      categoria: "alimento",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen104.webp",
      descripcion: "Suplemento vitamínico natural",
      stock: 40,
      rating: 4.8,
    },
    {
      id: 5,
      nombre: "Acuario Cristal 100x50x50",
      categoria: "acuario",
      precio: 89900,
      precioOriginal: 120000,
      imagen: "/images/imagen105.jpg",
      descripcion: "Acuario amplio con vidrio reforzado",
      stock: 6,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Filtro Acuático Sumergible 1500L/h",
      categoria: "acuario",
      precio: 34900,
      precioOriginal: 45000,
      imagen: "/images/imagen106.jpg",
      descripcion: "Filtración eficiente y silenciosa",
      stock: 15,
      rating: 4.9,
    },
    {
      id: 7,
      nombre: "Sustrato Arena Fina 20kg",
      categoria: "acuario",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen107.webp",
      descripcion: "Arena natural segura para acuarios",
      stock: 25,
      rating: 4.8,
    },
    
    {
      id: 9,
      nombre: "Plataforma Basking Flotante",
      categoria: "acuario",
      precio: 14900,
      precioOriginal: 19000,
      imagen: "/images/imagen108.webp",
      descripcion: "Isla para tomar el sol en el agua",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 10,
      nombre: "Bombilla UV-B 8.0 75W",
      categoria: "iluminacion",
      precio: 32900,
      precioOriginal: 42000,
      imagen: "/images/imagen109.webp",
      descripcion: "Luz UV para tortugas acuáticas",
      stock: 16,
      rating: 4.9,
    },
 
    {
      id: 12,
      nombre: "Calentador Acuático 500W",
      categoria: "calefaccion",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen110.png",
      descripcion: "Mantiene temperatura estable 25-30°C",
      stock: 18,
      rating: 4.9,
    },
    {
      id: 13,
      nombre: "Termostato Digital Piscina",
      categoria: "calefaccion",
      precio: 22900,
      precioOriginal: 30000,
      imagen: "/images/imagen111.webp",
      descripcion: "Control automático de temperatura",
      stock: 17,
      rating: 4.8,
    },
    {
      id: 14,
      nombre: "Calcio Granulado 150g",
      categoria: "suplementos",
      precio: 10900,
      precioOriginal: 14000,
      imagen: "/images/imagen112.jpg",
      descripcion: "Fortalece caparazón y huesos",
      stock: 35,
      rating: 4.9,
    },
    {
      id: 15,
      nombre: "Multivitamínico para Tortugas",
      categoria: "suplementos",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen113.jpg",
      descripcion: "Nutrientes esenciales completos",
      stock: 30,
      rating: 4.8,
    },
    {
      id: 16,
      nombre: "Kit Limpieza Acuario Completo",
      categoria: "mantenimiento",
      precio: 14900,
      precioOriginal: 19000,
      imagen: "/images/imagen114.png",
      descripcion: "Limpiador, raspador y cepillo",
      stock: 25,
      rating: 4.7,
    },
    {
      id: 17,
      nombre: "Test pH y Amoníaco Acuario",
      categoria: "mantenimiento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen115.jpg",
      descripcion: "Monitoreo de calidad de agua",
      stock: 28,
      rating: 4.8,
    },
  
    
    {
      id: 20,
      nombre: "Comedero Flotante",
      categoria: "accesorios",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen116.jpg",
      descripcion: "Facilita la alimentación",
      stock: 45,
      rating: 4.8,
    },
  ];

  const categorias = [
    { id: "todos", label: "🐢 Todos", count: productos.length },
    { id: "alimento", label: "🥬 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "acuario", label: "💧 Acuario", count: productos.filter(p => p.categoria === "acuario").length },
    { id: "iluminacion", label: "💡 Iluminación", count: productos.filter(p => p.categoria === "iluminacion").length },
    { id: "calefaccion", label: "🌡️ Calefacción", count: productos.filter(p => p.categoria === "calefaccion").length },
    { id: "suplementos", label: "💊 Suplementos", count: productos.filter(p => p.categoria === "suplementos").length },
    { id: "mantenimiento", label: "🧹 Mantenimiento", count: productos.filter(p => p.categoria === "mantenimiento").length },
    { id: "accesorios", label: "⚙️ Accesorios", count: productos.filter(p => p.categoria === "accesorios").length },
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
    <div className="tor-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="tor-hero">
        <div className="tor-hero-content">
          <span className="tor-badge">🐢 Mundo Acuático</span>
          <h1 className="tor-h1">Todo para tu tortuga acuática</h1>
          <p className="tor-p">
            Descubre nuestra colección completa de acuarios, filtros, alimentos
            naturales y suplementos para mantener a tu tortuga saludable y feliz.
          </p>
          <div className="tor-hero-stats">
            <div className="tor-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="tor-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="tor-hero-image">
          <div className="tor-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Tortugas ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="tor-hero-carousel-btn tor-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="tor-hero-carousel-btn tor-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="tor-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`tor-hero-carousel-dot ${
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

      <section className="tor-precio-section">
        <div className="tor-precio-card">
          <span className="tor-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="tor-precio-h2">Consulta para tortugas</h2>
          <p className="tor-precio-texto">
            Las tortugas requieren manejo especializado y conocimiento
            específico de su fisiología, por lo que la evaluación tiene un
            valor distinto al de perros y gatos.
          </p>

          <div className="tor-precio-comparacion">
            <div className="tor-precio-item">
              <span className="tor-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="tor-precio-valor tor-precio-valor-normal">$15.000</span>
            </div>
            <div className="tor-precio-item tor-precio-destacado">
              <span className="tor-precio-label">Evaluación tortugas</span>
              <span className="tor-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="tor-precio-nota">
            Incluye revisión general, chequeo de caparazón e hidratación, y
            recomendaciones de hábitat y dieta.
          </p>
        </div>
      </section>

      <section className="tor-info-section">
        <h2 className="tor-info-h2">Características principales</h2>
        <p className="tor-info-p">
          Antes de tener una tortuga como mascota, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="tor-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="tor-feature-card">
              <span className="tor-feature-icono">{c.icono}</span>
              <h3 className="tor-feature-titulo">{c.titulo}</h3>
              <p className="tor-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>


      <div className="tor-container">
        <aside className="tor-sidebar">
          <h3 className="tor-sidebar-h3">Categorías</h3>
          <div className="tor-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`tor-categoria-btn ${selectedCategory === cat.id ? "tor-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tor-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="tor-main">
          <div className="tor-main-header">
            <h2 className="tor-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="tor-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="tor-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="tor-producto-card">
                <div className="tor-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="tor-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="tor-producto-info">
                  <h3 className="tor-producto-h3">{producto.nombre}</h3>
                  <p className="tor-descripcion">{producto.descripcion}</p>

                  <div className="tor-rating">
                    ⭐ {producto.rating}
                    <span className="tor-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="tor-precios">
                    <span className="tor-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="tor-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="tor-btn-agregar"
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


            <section className="tor-curiosos-section">
        <h2 className="tor-curiosos-h2">¿Sabías que...?</h2>
        <div className="tor-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="tor-curioso-item">
              <span className="tor-curioso-icono">💡</span>
              <p className="tor-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

     { /* CARRITO */}
      {cart.length > 0 && (
        <button className="tor-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="tor-cart-panel">
          <div className="tor-cart-header">
            <h3 className="tor-cart-h3">🛒 Tu carrito</h3>
            <button className="tor-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="tor-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="tor-cart-item">
                <div className="tor-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="tor-item-info">
                  <p className="tor-item-nombre">{item.nombre}</p>
                  <p className="tor-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="tor-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="tor-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="tor-cart-footer">
            <div className="tor-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="tor-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Tortugas;