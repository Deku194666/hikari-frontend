import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Erizo.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Erizo() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate(); 

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen98.jpg",
    "/images/imagen201.webp",
    "/images/imagen202.jpg",
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
      const cleanCat = cat.replace("-erizo", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🦔",
      titulo: "Insectívoros",
      texto: "Su dieta se basa en insectos y pellets especializados, con proteína como base principal.",
    },
    {
      icono: "🌙",
      titulo: "Animales nocturnos",
      texto: "Están activos principalmente de noche; duermen la mayor parte del día en un lugar oscuro.",
    },
    {
      icono: "🌡️",
      titulo: "Necesitan calor constante",
      texto: "Requieren temperaturas entre 24-27°C; el frío puede provocarles hibernación forzada, algo peligroso.",
    },
    {
      icono: "🛡️",
      titulo: "Se enroscan como defensa",
      texto: "Cuando se sienten amenazados, se enrollan en una bola protegida por sus púas.",
    },
    {
      icono: "🏃",
      titulo: "Necesitan ejercicio",
      texto: "Una rueda de ejercicio silenciosa les ayuda a gastar energía y mantenerse en buen peso.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Son propensos a problemas dentales y de piel; el control veterinario periódico es importante.",
    },
  ];

  const datosCuriosos = [
    "Los erizos tienen entre 5.000 y 7.000 púas, que son en realidad pelos modificados.",
    "Practican un comportamiento llamado 'anointing': mastican algo nuevo y se cubren de saliva espumosa.",
    "Son inmunes a algunos venenos que resultarían tóxicos para otros animales.",
    "Pueden correr distancias sorprendentes durante la noche en busca de alimento.",
    "Su vista no es muy buena, pero compensan con un excelente olfato y oído.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Pellets Insectívoros Premium",
      categoria: "alimento",
      precio: 10900,
      precioOriginal: 14000,
      imagen: "/images/imagen176.jpg",
      descripcion: "Fórmula balanceada especial para erizos",
      stock: 30,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Gusanos Secos Premium",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen175.png",
      descripcion: "Proteína natural, snack favorito de los erizos",
      stock: 35,
      rating: 4.8,
    },
     
    {
      id: 4,
      nombre: "Suplemento Calcio en Polvo",
      categoria: "alimento",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen86.jpg",
      descripcion: "Refuerzo nutricional para huesos sanos",
      stock: 40,
      rating: 4.8,
    },
    {
      id: 5,
      nombre: "Jaula/Terrario 90x50x40",
      categoria: "habitat",
      precio: 69900,
      precioOriginal: 90000,
      imagen: "/images/imagen153.jpg",
      descripcion: "Espacio amplio con buena ventilación",
      stock: 8,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Rueda de Ejercicio Silenciosa",
      categoria: "habitat",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen178.jpg",
      descripcion: "Superficie sólida, segura para sus patas",
      stock: 18,
      rating: 4.9,
    },
  
    {
      id: 9,
      nombre: "Casa Refugio Oscura",
      categoria: "accesorios",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen196.jpg",
      descripcion: "Espacio para esconderse durante el día",
      stock: 20,
      rating: 4.9,
    },
     
    {
      id: 11,
      nombre: "Comedero y Bebedero Set",
      categoria: "accesorios",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen180.jpg",
      descripcion: "Cerámica resistente a volcaduras",
      stock: 32,
      rating: 4.8,
    },
    
    {
      id: 13,
      nombre: "Cepillo Suave para Púas",
      categoria: "cuidado",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen181.jpg",
      descripcion: "Ayuda a mantener la higiene sin lastimar",
      stock: 24,
      rating: 4.8,
    },
    {
      id: 14,
      nombre: "Cortauñas de Precisión",
      categoria: "cuidado",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen182.jpg",
      descripcion: "Corte seguro y sin estrés",
      stock: 20,
      rating: 4.9,
    },
     
   
     
    {
      id: 18,
      nombre: "Bandeja Sanitaria Pequeña",
      categoria: "higiene",
      precio: 10900,
      precioOriginal: 14000,
      imagen: "/images/imagen203.jpg",
      descripcion: "Fácil de limpiar diariamente",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 19,
      nombre: "Transportín Compacto Ventilado",
      categoria: "transportes",
      precio: 18900,
      precioOriginal: 24000,
      imagen: "/images/imagen173.jpg",
      descripcion: "Seguro para viajes cortos",
      stock: 14,
      rating: 4.8,
    },
     
  ];

  const categorias = [
    { id: "todos", label: "🦔 Todos", count: productos.length },
    { id: "alimento", label: "🐛 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "habitat", label: "🏠 Hábitat", count: productos.filter(p => p.categoria === "habitat").length },
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
    <div className="eri-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="eri-hero">
        <div className="eri-hero-content">
          <span className="eri-badge">🦔 Mundo Erizo</span>
          <h1 className="eri-h1">Todo para tu erizo</h1>
          <p className="eri-p">
            Descubre nuestra colección completa de alimentos insectívoros,
            hábitats térmicos y accesorios para mantener a tu erizo cómodo
            y saludable.
          </p>
          <div className="eri-hero-stats">
            <div className="eri-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="eri-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="eri-hero-image">
          <div className="eri-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Erizo ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="eri-hero-carousel-btn eri-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="eri-hero-carousel-btn eri-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="eri-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`eri-hero-carousel-dot ${
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

      <section className="eri-precio-section">
        <div className="eri-precio-card">
          <span className="eri-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="eri-precio-h2">Consulta para erizos</h2>
          <p className="eri-precio-texto">
            Los erizos requieren manejo delicado y conocimiento específico de
            su especie, por lo que la evaluación tiene un valor distinto al
            de perros y gatos.
          </p>

          <div className="eri-precio-comparacion">
            <div className="eri-precio-item">
              <span className="eri-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="eri-precio-valor eri-precio-valor-normal">$15.000</span>
            </div>
            <div className="eri-precio-item eri-precio-destacado">
              <span className="eri-precio-label">Evaluación erizos</span>
              <span className="eri-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="eri-precio-nota">
            Incluye revisión general, chequeo de piel y peso, y
            recomendaciones de alimentación y hábitat.
          </p>
        </div>
      </section>

      <section className="eri-info-section">
        <h2 className="eri-info-h2">Características principales</h2>
        <p className="eri-info-p">
          Antes de tener un erizo como mascota, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="eri-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="eri-feature-card">
              <span className="eri-feature-icono">{c.icono}</span>
              <h3 className="eri-feature-titulo">{c.titulo}</h3>
              <p className="eri-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>


      <div className="eri-container">
        <aside className="eri-sidebar">
          <h3 className="eri-sidebar-h3">Categorías</h3>
          <div className="eri-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`eri-categoria-btn ${selectedCategory === cat.id ? "eri-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="eri-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="eri-main">
          <div className="eri-main-header">
            <h2 className="eri-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="eri-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="eri-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="eri-producto-card">
                <div className="eri-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="eri-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="eri-producto-info">
                  <h3 className="eri-producto-h3">{producto.nombre}</h3>
                  <p className="eri-descripcion">{producto.descripcion}</p>

                  <div className="eri-rating">
                    ⭐ {producto.rating}
                    <span className="eri-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="eri-precios">
                    <span className="eri-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="eri-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="eri-btn-agregar"
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

            <section className="eri-curiosos-section">
        <h2 className="eri-curiosos-h2">¿Sabías que...?</h2>
        <div className="eri-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="eri-curioso-item">
              <span className="eri-curioso-icono">💡</span>
              <p className="eri-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <button className="eri-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="eri-cart-panel">
          <div className="eri-cart-header">
            <h3 className="eri-cart-h3">🛒 Tu carrito</h3>
            <button className="eri-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="eri-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="eri-cart-item">
                <div className="eri-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="eri-item-info">
                  <p className="eri-item-nombre">{item.nombre}</p>
                  <p className="eri-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="eri-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="eri-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="eri-cart-footer">
            <div className="eri-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="eri-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Erizo;