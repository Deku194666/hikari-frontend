import { useState, useEffect } from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Perros.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Perros() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen42.avif",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  // Detectar categoría desde la URL (?categoria=comida-perros)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("categoria");
    if (cat) {
      // Quitar "-perros" del final
      const cleanCat = cat.replace("-perros", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🐾",
      titulo: "Animales sociales",
      texto: "Los perros son leales y necesitan compañía; el aislamiento prolongado puede afectar su comportamiento.",
    },
    {
      icono: "🏃",
      titulo: "Ejercicio diario",
      texto: "Cada raza tiene necesidades distintas, pero todos requieren paseos y actividad física regular.",
    },
    {
      icono: "🦴",
      titulo: "Dieta balanceada",
      texto: "La nutrición debe ajustarse a edad, tamaño y nivel de actividad para mantenerlos saludables.",
    },
    {
      icono: "🎓",
      titulo: "Inteligencia entrenable",
      texto: "Responden muy bien al entrenamiento positivo y a la estimulación mental con juguetes y juegos.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Vacunas, desparasitación y controles veterinarios periódicos previenen enfermedades comunes.",
    },
    {
      icono: "❤️",
      titulo: "Vínculo emocional",
      texto: "Perciben las emociones de su familia humana y desarrollan vínculos afectivos muy fuertes.",
    },
  ];

  const datosCuriosos = [
    "El sentido del olfato de un perro es entre 10.000 y 100.000 veces más sensible que el humano.",
    "Los perros pueden aprender a reconocer más de 150 palabras en promedio.",
    "Mover la cola no siempre significa alegría: la dirección y velocidad indican distintas emociones.",
    "La nariz de un perro es única, como una huella dactilar humana.",
    "Los perros sueñan, y las razas pequeñas suelen soñar con más frecuencia que las grandes.",
  ];

  // PRODUCTOS PARA PERROS
  const productos = [
    // COMIDA
    {
      id: 1,
      nombre: "Alimento Premium Adultos",
      categoria: "comida",
      precio: 28900,
      precioOriginal: 35000,
      imagen: "/images/imagen9.jpg",
      descripcion: "Comida balanceada con proteína premium",
      stock: 15,
      rating: 4.8,
    },
    {
      id: 2,
      nombre: "Alimento Cachorros",
      categoria: "comida",
      precio: 26900,
      precioOriginal: 32000,
      imagen: "/images/imagen43.jpg",
      descripcion: "Nutrición para cachorros en crecimiento",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 3,
      nombre: "Snacks Naturales",
      categoria: "comida",
      precio: 8900,
      precioOriginal: 11000,
      imagen: "/images/imagen44.jpg",
      descripcion: "Snacks deliciosos y saludables",
      stock: 30,
      rating: 4.9,
    },

    // ARNÉS
    {
      id: 4,
      nombre: "Arnés Ajustable Premium",
      categoria: "arnes",
      precio: 15900,
      precioOriginal: 20000,
      imagen: "/images/imagen46.webp",
      descripcion: "Arnés cómodo con acolchado",
      stock: 12,
      rating: 4.8,
    },
    {
      id: 5,
      nombre: "Arnés Reflectante",
      categoria: "arnes",
      precio: 18900,
      precioOriginal: 24000,
      imagen: "/images/imagen47.jpg",
      descripcion: "Con bandas reflectantes para paseos nocturnos",
      stock: 8,
      rating: 4.7,
    },

    // CORREAS
    {
      id: 6,
      nombre: "Correa Resistente 1.5m",
      categoria: "correas",
      precio: 9900,
      precioOriginal: 12000,
      imagen: "/images/imagen48.jpg",
      descripcion: "Correa duradera de nylon reforzado",
      stock: 25,
      rating: 4.6,
    },
    {
      id: 7,
      nombre: "Correa Extensible 5m",
      categoria: "correas",
      precio: 19900,
      precioOriginal: 25000,
      imagen: "/images/imagen45.webp",
      descripcion: "Correa retráctil con freno",
      stock: 10,
      rating: 4.8,
    },

    // JUGUETES
    {
      id: 8,
      nombre: "Juguete Interactivo",
      categoria: "juguetes",
      precio: 12900,
      precioOriginal: 18000,
      imagen: "/images/imagen19.jpg",
      descripcion: "Juguete que estimula la inteligencia",
      stock: 15,
      rating: 4.9,
    },
    {
      id: 9,
      nombre: "Pelota Resistente",
      categoria: "juguetes",
      precio: 5900,
      precioOriginal: 8000,
      imagen: "/images/imagen50.jpg",
      descripcion: "Pelota de goma indestructible",
      stock: 40,
      rating: 4.7,
    },

    // CAMAS
    {
      id: 10,
      nombre: "Cama Ortopédica Grande",
      categoria: "camas",
      precio: 49900,
      precioOriginal: 65000,
      imagen: "/images/imagen21.jpg",
      descripcion: "Cama con soporte ergonómico",
      stock: 8,
      rating: 4.9,
    },
    {
      id: 11,
      nombre: "Cama Suave Mediana",
      categoria: "camas",
      precio: 29900,
      precioOriginal: 38000,
      imagen: "/images/imagen51.webp",
      descripcion: "Cama acolchada y suave",
      stock: 14,
      rating: 4.8,
    },

    // ROPA (NUEVA)
    {
      id: 12,
      nombre: "Suéter Tejido",
      categoria: "ropa",
      precio: 19900,
      precioOriginal: 25000,
      imagen: "/images/imagen20.webp",
      descripcion: "Suéter abrigador y elegante",
      stock: 18,
      rating: 4.7,
    },
    {
      id: 13,
      nombre: "Impermeable para Lluvia",
      categoria: "ropa",
      precio: 22900,
      precioOriginal: 28000,
      imagen: "/images/imagen52.webp",
      descripcion: "Protege a tu mascota de la lluvia",
      stock: 10,
      rating: 4.8,
    },
    {
      id: 14,
      nombre: "Polera de Verano",
      categoria: "ropa",
      precio: 12900,
      precioOriginal: 16000,
      imagen: "/images/imagen53.avif",
      descripcion: "Fresca y cómoda para días calurosos",
      stock: 22,
      rating: 4.6,
    },

    // MEDICAMENTOS (NUEVA)
    {
      id: 15,
      nombre: "Antiparasitario Mensual",
      categoria: "medicamentos",
      precio: 18900,
      precioOriginal: 24000,
      imagen: "/images/imagen54.webp",
      descripcion: "Protección contra pulgas y garrapatas",
      stock: 25,
      rating: 4.9,
    },
    {
      id: 16,
      nombre: "Vitaminas Multivitamínicas",
      categoria: "medicamentos",
      precio: 15900,
      precioOriginal: 20000,
      imagen: "/images/imagen55.jpg",
      descripcion: "Refuerza el sistema inmunológico",
      stock: 30,
      rating: 4.8,
    },
    {
      id: 17,
      nombre: "Desparasitante Interno",
      categoria: "medicamentos",
      precio: 13900,
      precioOriginal: 17000,
      imagen: "/images/imagen56.jpg",
      descripcion: "Elimina gusanos intestinales",
      stock: 20,
      rating: 4.7,
    },

    // HIGIENE (NUEVA)
    {
      id: 18,
      nombre: "Champú Hipoalergénico",
      categoria: "higiene",
      precio: 11900,
      precioOriginal: 15000,
      imagen: "/images/imagen57.jpg",
      descripcion: "Suave para pieles sensibles",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 19,
      nombre: "Cepillo Desenredante",
      categoria: "higiene",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen58.webp",
      descripcion: "Desenreda y masajea el pelaje",
      stock: 35,
      rating: 4.7,
    },
  

    // ROPA HIKARI (tejidos artesanales)
    {
      id: 21,
      nombre: "Chaleco Tejido a Mano, Perro Pequeño",
      categoria: "ropa-hikari",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen99.webp",
      descripcion: "Tejido artesanal en lana suave, hecho a mano",
      stock: 8,
      rating: 5.0,
    },
 
   
  ];

  const categorias = [
    { id: "todos", label: "🐾 Todos", count: productos.length },
    { id: "comida", label: "🥩 Comida", count: productos.filter(p => p.categoria === "comida").length },
    { id: "arnes", label: "🎽 Arnés", count: productos.filter(p => p.categoria === "arnes").length },
    { id: "correas", label: "🔗 Correas", count: productos.filter(p => p.categoria === "correas").length },
    { id: "juguetes", label: "🧸 Juguetes", count: productos.filter(p => p.categoria === "juguetes").length },
    { id: "camas", label: "🛏️ Camas", count: productos.filter(p => p.categoria === "camas").length },
    { id: "ropa", label: "👕 Ropa", count: productos.filter(p => p.categoria === "ropa").length },
    { id: "ropa-hikari", label: "🧶 Ropa Hikari", count: productos.filter(p => p.categoria === "ropa-hikari").length },
    { id: "medicamentos", label: "💊 Medicamentos", count: productos.filter(p => p.categoria === "medicamentos").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
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
    <div className="perros-page">
      <NavBar2 />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="perros-hero">
        <div className="hero-content">
          <span className="badge">🐕 Todo para tu Perro</span>
          <h1>Productos premium para tu mejor amigo</h1>
          <p>
            Descubre nuestra selección de alimentos, accesorios, juguetes,
            medicamentos y todo lo que tu perro necesita.
          </p>
          <div className="hero-stats">
            <div>
              <strong>{productos.length}+</strong>
              <span>Productos</span>
            </div>
            <div>
              <strong>{categorias.length - 1}</strong>
              <span>Categorías</span>
            </div>
          
          </div>
        </div>
        <div className="hero-image">
          <div className="perros-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Perros felices ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="perros-hero-carousel-btn perros-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="perros-hero-carousel-btn perros-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="perros-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`perros-hero-carousel-dot ${
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

      {/* ===== PRECIO EVALUACIÓN ===== */}
      <section className="per-precio-section">
        <div className="per-precio-card">
          <span className="per-precio-badge">🩺 Evaluación veterinaria</span>
          <h2 className="per-precio-h2">Consulta general para perros</h2>
          <p className="per-precio-texto">
            Revisión completa a cargo de nuestro equipo veterinario, adaptada
            a la edad, raza y estado de salud de tu perro.
          </p>
          <div className="per-precio-valor-box">
            <span className="per-precio-valor">$15.000</span>
            <span className="per-precio-label">Evaluación estándar</span>
          </div>
          <p className="per-precio-nota">
            Incluye revisión general, chequeo de peso y recomendaciones de
            alimentación y cuidado.
          </p>
        </div>
      </section>

      {/* ===== CARACTERÍSTICAS ===== */}
      <section className="per-info-section">
        <h2 className="per-info-h2">Características principales</h2>
        <p className="per-info-p">
          Antes de traer un perro a casa, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="per-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="per-feature-card">
              <span className="per-feature-icono">{c.icono}</span>
              <h3 className="per-feature-titulo">{c.titulo}</h3>
              <p className="per-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DATOS CURIOSOS ===== */}
      <section className="per-curiosos-section">
        <h2 className="per-curiosos-h2">¿Sabías que...?</h2>
        <div className="per-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="per-curioso-item">
              <span className="per-curioso-icono">💡</span>
              <p className="per-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTENIDO ===== */}
      <div className="perros-container"  id="tienda-anchor"  >
        {/* SIDEBAR - CATEGORÍAS */}
        <aside className="perros-sidebar">
          <h3>Categorías</h3>
          <div className="categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`categoria-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN - PRODUCTOS */}
        <main className="perros-main">
          <div className="main-header">
            <h2>
              {categorias.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p>{productosFiltrados.length} productos disponibles</p>
          </div>

          <div className="productos-grid">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto-card">
                <div className="producto-imagen">
                  {producto.imagen.startsWith("/") ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span className="emoji-imagen">{producto.imagen}</span>
                  )}
                </div>

                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p className="descripcion">{producto.descripcion}</p>
                  
                  <div className="rating">
                    ⭐ {producto.rating} 
                    <span className="stock">
                      {producto.stock > 0 ? `✅ ${producto.stock} disponibles` : "❌ Agotado"}
                    </span>
                  </div>

                  <div className="precios">
                    <span className="precio-original">
                      ${producto.precioOriginal.toLocaleString("es-CL")}
                    </span>
                    <span className="precio">
                      ${producto.precio.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button
                    className="btn-agregar"
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
                  {item.imagen.startsWith("/") ? (
                    <img src={item.imagen} alt={item.nombre} />
                  ) : (
                    <span>{item.imagen}</span>
                  )}
                </div>
                <div className="item-info">
                  <p className="item-nombre">{item.nombre}</p>
                  <p className="item-precio">
                    ${item.precio.toLocaleString("es-CL")}
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
            <button className="btn-checkout" onClick={() => navigate("/login")}>
              💳 Ir al pago
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Perros;