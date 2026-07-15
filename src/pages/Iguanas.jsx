import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Iguanas.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Iguanas() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen117.webp",
    "/images/imagen118.webp",
    "/images/imagen123.webp",
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
      const cleanCat = cat.replace("-iguanas", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🦎",
      titulo: "Herbívoras estrictas",
      texto: "Su dieta debe ser vegetal en un 90% o más: hojas verdes, vegetales y una porción de fruta ocasional.",
    },
    {
      icono: "🌡️",
      titulo: "Necesitan calor intenso",
      texto: "Requieren zonas de temperatura elevada (hasta 35-38°C) para su correcta digestión y metabolismo.",
    },
    {
      icono: "☀️",
      titulo: "Luz UV esencial",
      texto: "Sin luz UV-B adecuada desarrollan enfermedad ósea metabólica, una condición grave pero prevenible.",
    },
    {
      icono: "📏",
      titulo: "Pueden crecer mucho",
      texto: "Una iguana verde adulta puede superar el metro y medio de largo, por lo que necesita espacio amplio.",
    },
    {
      icono: "🧗",
      titulo: "Excelentes trepadoras",
      texto: "En la naturaleza viven en árboles; agradecen ramas y estructuras verticales en su terrario.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Problemas óseos y de piel avanzan rápido si no se detectan a tiempo con control veterinario.",
    },
  ];

  const datosCuriosos = [
    "Las iguanas pueden desprender la cola como mecanismo de defensa y regenerarla parcialmente.",
    "Tienen un tercer ojo, llamado ojo parietal, que detecta cambios de luz en la parte superior de la cabeza.",
    "Pueden aguantar la respiración varios minutos y son buenas nadadoras.",
    "Su lengua no es pegajosa como la de otros reptiles: usan la boca para atrapar el alimento.",
    "El color de su piel puede cambiar levemente según la temperatura y su estado de ánimo.",
  ];

  const productos = [
    {
      id: 1,
      nombre: "Mix Vegetales para Iguana",
      categoria: "alimento",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen118.webp",
      descripcion: "Hojas verdes y vegetales deshidratados para dieta herbívora",
      stock: 30,
      rating: 4.9,
    },
    {
      id: 2,
      nombre: "Pellets Herbívoros Premium",
      categoria: "alimento",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen85.avif",
      descripcion: "Alimento balanceado especial para iguanas verdes",
      stock: 25,
      rating: 4.8,
    },
    {
      id: 3,
      nombre: "Flores Comestibles Deshidratadas",
      categoria: "alimento",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen119.jpg",
      descripcion: "Complemento natural rico en nutrientes",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 4,
      nombre: "Fruta Tropical Mix",
      categoria: "alimento",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen120.jpg",
      descripcion: "Snack ocasional rico en vitaminas",
      stock: 40,
      rating: 4.6,
    },
    {
      id: 5,
      nombre: "Terrario Vertical 100x50x150",
      categoria: "terrario",
      precio: 149900,
      precioOriginal: 190000,
      imagen: "/images/imagen121.jpg",
      descripcion: "Terrario en altura, ideal para iguanas adultas",
      stock: 5,
      rating: 4.9,
    },
    {
      id: 6,
      nombre: "Sustrato Coco Fibra 10L",
      categoria: "terrario",
      precio: 7900,
      precioOriginal: 11000,
      imagen: "/images/imagen122.jpg",
      descripcion: "Sustrato natural con retención de humedad",
      stock: 35,
      rating: 4.8,
    },
    {
      id: 7,
      nombre: "Rama Gruesa para Trepar",
      categoria: "terrario",
      precio: 15900,
      precioOriginal: 21000,
      imagen: "/images/imagen123.webp",
      descripcion: "Rama robusta natural para escalar y descansar",
      stock: 18,
      rating: 4.8,
    },
    
 
    {
      id: 9,
      nombre: "Bombilla UV-B 10.0 75W",
      categoria: "iluminacion",
      precio: 34900,
      precioOriginal: 45000,
      imagen: "/images/imagen124.jpg",
      descripcion: "Luz UV esencial para la salud ósea",
      stock: 15,
      rating: 4.9,
    },
    {
      id: 10,
      nombre: "Lámpara Basking 150W",
      categoria: "iluminacion",
      precio: 21900,
      precioOriginal: 28000,
      imagen: "/images/imagen125.jpg",
      descripcion: "Calor concentrado, iguanas necesitan altas temperaturas",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 11,
      nombre: "Temporizador Automático 12h",
      categoria: "iluminacion",
      precio: 12900,
      precioOriginal: 17000,
      imagen: "/images/imagen126.jpg",
      descripcion: "Control automático de ciclo día/noche",
      stock: 25,
      rating: 4.7,
    },
   
    {
      id: 13,
      nombre: "Termostato Digital Regulable",
      categoria: "calefaccion",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen127.jpg",
      descripcion: "Control preciso de temperatura, clave para iguanas",
      stock: 18,
      rating: 4.9,
    },
    {
      id: 14,
      nombre: "Piedra Térmica Natural",
      categoria: "calefaccion",
      precio: 14900,
      precioOriginal: 19000,
      imagen: "/images/imagen128.webp",
      descripcion: "Retiene calor y lo libera gradualmente",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 15,
      nombre: "Calcio con Vitamina D3",
      categoria: "suplementos",
      precio: 11900,
      precioOriginal: 15000,
      imagen: "/images/imagen129.jpg",
      descripcion: "Previene enfermedad ósea metabólica, común en iguanas",
      stock: 40,
      rating: 4.9,
    },
    {
      id: 16,
      nombre: "Multivitamínico para Iguanas",
      categoria: "suplementos",
      precio: 13900,
      precioOriginal: 18000,
      imagen: "/images/imagen130.avif",
      descripcion: "Nutrientes esenciales completos",
      stock: 32,
      rating: 4.8,
    },
     
    {
      id: 18,
      nombre: "Bebedero Amplio Cerámica",
      categoria: "higiene",
      precio: 7900,
      precioOriginal: 10500,
      imagen: "/images/imagen131.jpg",
      descripcion: "Iguanas necesitan agua fresca siempre disponible",
      stock: 30,
      rating: 4.8,
    },
    {
      id: 19,
      nombre: "Medidor Humedad/Temperatura",
      categoria: "accesorios",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen132.webp",
      descripcion: "Monitoreo en tiempo real",
      stock: 28,
      rating: 4.9,
    },
    {
      id: 20,
      nombre: "Correa y Arnés para Iguana",
      categoria: "accesorios",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen133.jpg",
      descripcion: "Para paseos seguros y supervisados",
      stock: 20,
      rating: 4.7,
    },
  ];

  const categorias = [
    { id: "todos", label: "🦎 Todos", count: productos.length },
    { id: "alimento", label: "🥬 Alimento", count: productos.filter(p => p.categoria === "alimento").length },
    { id: "terrario", label: "🏠 Terrario", count: productos.filter(p => p.categoria === "terrario").length },
    { id: "iluminacion", label: "💡 Iluminación", count: productos.filter(p => p.categoria === "iluminacion").length },
    { id: "calefaccion", label: "🔥 Calefacción", count: productos.filter(p => p.categoria === "calefaccion").length },
    { id: "suplementos", label: "💊 Suplementos", count: productos.filter(p => p.categoria === "suplementos").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
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
    <div className="igu-page">
      <NavBar2 />
      <WhatsAppButton />

      <section className="igu-hero">
        <div className="igu-hero-content">
          <span className="igu-badge">🦎 Mundo Iguana</span>
          <h1 className="igu-h1">Todo para tu iguana</h1>
          <p className="igu-p">
            Descubre nuestra colección especializada en terrarios, iluminación
            UV, calefacción y nutrición herbívora para mantener a tu iguana saludable y feliz.
          </p>
          <div className="igu-hero-stats">
            <div className="igu-stat">
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div className="igu-stat">
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </div>
        <div className="igu-hero-image">
          <div className="igu-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Iguanas ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="igu-hero-carousel-btn igu-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="igu-hero-carousel-btn igu-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="igu-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`igu-hero-carousel-dot ${
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

      <section className="igu-precio-section">
        <div className="igu-precio-card">
          <span className="igu-precio-badge">🩺 Evaluación veterinaria especializada</span>
          <h2 className="igu-precio-h2">Consulta para iguanas</h2>
          <p className="igu-precio-texto">
            Las iguanas requieren manejo especializado y equipo específico
            para su revisión, por lo que la evaluación tiene un valor
            distinto al de perros y gatos.
          </p>

          <div className="igu-precio-comparacion">
            <div className="igu-precio-item">
              <span className="igu-precio-label">Evaluación estándar (perros y gatos)</span>
              <span className="igu-precio-valor igu-precio-valor-normal">$15.000</span>
            </div>
            <div className="igu-precio-item igu-precio-destacado">
              <span className="igu-precio-label">Evaluación iguanas</span>
              <span className="igu-precio-valor">$25.000</span>
            </div>
          </div>

          <p className="igu-precio-nota">
            Incluye revisión general, chequeo óseo y de piel, y
            recomendaciones de hábitat y dieta.
          </p>
        </div>
      </section>

      <section className="igu-info-section">
        <h2 className="igu-info-h2">Características principales</h2>
        <p className="igu-info-p">
          Antes de tener una iguana como mascota, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="igu-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="igu-feature-card">
              <span className="igu-feature-icono">{c.icono}</span>
              <h3 className="igu-feature-titulo">{c.titulo}</h3>
              <p className="igu-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

  

      <div className="igu-container">
        <aside className="igu-sidebar">
          <h3 className="igu-sidebar-h3">Categorías</h3>
          <div className="igu-categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`igu-categoria-btn ${selectedCategory === cat.id ? "igu-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="igu-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="igu-main">
          <div className="igu-main-header">
            <h2 className="igu-main-h2">{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
            <p className="igu-main-p">{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="igu-productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="igu-producto-card">
                <div className="igu-producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="igu-emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="igu-producto-info">
                  <h3 className="igu-producto-h3">{producto.nombre}</h3>
                  <p className="igu-descripcion">{producto.descripcion}</p>

                  <div className="igu-rating">
                    ⭐ {producto.rating}
                    <span className="igu-stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="igu-precios">
                    <span className="igu-precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="igu-precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="igu-btn-agregar"
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
        <button className="igu-cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

          <section className="igu-curiosos-section">
        <h2 className="igu-curiosos-h2">¿Sabías que...?</h2>
        <div className="igu-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="igu-curioso-item">
              <span className="igu-curioso-icono">💡</span>
              <p className="igu-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {showCart && cart.length > 0 && (
        <aside className="igu-cart-panel">
          <div className="igu-cart-header">
            <h3 className="igu-cart-h3">🛒 Tu carrito</h3>
            <button className="igu-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="igu-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="igu-cart-item">
                <div className="igu-item-imagen">
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="igu-item-info">
                  <p className="igu-item-nombre">{item.nombre}</p>
                  <p className="igu-item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="igu-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="igu-btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="igu-cart-footer">
            <div className="igu-cart-total">
              <strong>Total:</strong>
              <span>${totalCart.toLocaleString("es-CL")}</span>
            </div>
            <button className="igu-btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Iguanas;