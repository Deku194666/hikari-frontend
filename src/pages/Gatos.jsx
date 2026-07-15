import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import "./Gatos.css";
import WhatsAppButton from "../components/WhatsAppButton";


function Gatos() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen49.webp",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=500&fit=crop",
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
      const cleanCat = cat.replace("-gatos", "");
      setSelectedCategory(cleanCat);
    } else {
      setSelectedCategory("todos");
    }
  }, [location.search]);

  const caracteristicas = [
    {
      icono: "🐱",
      titulo: "Animales independientes",
      texto: "Los gatos valoran su espacio y autonomía, pero igual necesitan cariño y estimulación diaria.",
    },
    {
      icono: "🌙",
      titulo: "Hábitos crepusculares",
      texto: "Suelen estar más activos al amanecer y al atardecer, herencia de su instinto cazador natural.",
    },
    {
      icono: "🪥",
      titulo: "Higiene meticulosa",
      texto: "Pasan gran parte del día acicalándose; el cepillado regular ayuda a reducir bolas de pelo.",
    },
    {
      icono: "🐾",
      titulo: "Necesitan rascar",
      texto: "Rascar es un comportamiento natural para marcar territorio y mantener sus uñas sanas.",
    },
    {
      icono: "🥣",
      titulo: "Dieta rica en proteína",
      texto: "Son carnívoros estrictos; su alimentación debe estar basada principalmente en proteína animal.",
    },
    {
      icono: "🩺",
      titulo: "Chequeos regulares",
      texto: "Las visitas veterinarias periódicas permiten detectar a tiempo problemas comunes como los renales.",
    },
  ];

  const datosCuriosos = [
    "Los gatos pueden hacer más de 100 sonidos distintos, mientras que los perros hacen alrededor de 10.",
    "Duermen entre 12 y 16 horas al día en promedio.",
    "Sus bigotes les ayudan a medir si caben por un espacio y a detectar cambios en el aire.",
    "Un grupo de gatos se llama clowder.",
    "Los gatos no pueden saborear lo dulce: carecen del receptor para ese sabor.",
  ];

  // PRODUCTOS PARA GATOS
  const productos = [
    // COMIDA
    {
      id: 1,
      nombre: "Alimento Premium Adultos",
      categoria: "comida",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen22.jpg",
      descripcion: "Nutrición completa para gatos adultos",
      stock: 25,
      rating: 4.8,
    },
    {
      id: 2,
      nombre: "Alimento Gatitos",
      categoria: "comida",
      precio: 22900,
      precioOriginal: 28000,
      imagen: "/images/imagen59.jpg",
      descripcion: "Especial para gatitos en crecimiento",
      stock: 18,
      rating: 4.9,
    },
    {
      id: 3,
      nombre: "Snacks Naturales",
      categoria: "comida",
      precio: 6900,
      precioOriginal: 9000,
      imagen: "/images/imagen60.avif",
      descripcion: "Snacks con sabor pescado",
      stock: 35,
      rating: 4.7,
    },
    {
      id: 4,
      nombre: "Alimento Húmedo Atún",
      categoria: "comida",
      precio: 3900,
      precioOriginal: 5500,
      imagen: "/images/imagen61.png",
      descripcion: "Lata individual sabor atún",
      stock: 50,
      rating: 4.8,
    },

    // JUGUETES
    {
      id: 5,
      nombre: "Pelota con Cascabel",
      categoria: "juguetes",
      precio: 4900,
      precioOriginal: 7000,
      imagen: "/images/imagen62.webp",
      descripcion: "Pelota que hace sonido al moverse",
      stock: 40,
      rating: 4.7,
    },
    {
      id: 6,
      nombre: "Caña con Pluma",
      categoria: "juguetes",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen63.webp",
      descripcion: "Estimula el instinto cazador",
      stock: 25,
      rating: 4.9,
    },
    {
      id: 7,
      nombre: "Ratón de Juguete",
      categoria: "juguetes",
      precio: 3900,
      precioOriginal: 5500,
      imagen: "/images/imagen64.avif",
      descripcion: "Ratón de tela con catnip",
      stock: 60,
      rating: 4.8,
    },

    // CAMAS
    {
      id: 8,
      nombre: "Cama Suave Iglú",
      categoria: "camas",
      precio: 29900,
      precioOriginal: 38000,
      imagen: "/images/imagen65.webp",
      descripcion: "Cama estilo iglú acolchada",
      stock: 12,
      rating: 4.9,
    },
    {
      id: 9,
      nombre: "Cama Hamaca Ventana",
      categoria: "camas",
      precio: 19900,
      precioOriginal: 25000,
      imagen: "/images/imagen66.jpg",
      descripcion: "Se cuelga en la ventana con ventosas",
      stock: 8,
      rating: 4.8,
    },
    {
      id: 10,
      nombre: "Cojín Térmico",
      categoria: "camas",
      precio: 24900,
      precioOriginal: 32000,
      imagen: "/images/imagen67.jpg",
      descripcion: "Cojín que mantiene el calor",
      stock: 15,
      rating: 4.7,
    },

    // RASCADORES
    {
      id: 11,
      nombre: "Rascador Vertical 60cm",
      categoria: "rascadores",
      precio: 18900,
      precioOriginal: 24000,
      imagen: "/images/imagen68.webp",
      descripcion: "Rascador con base estable",
      stock: 14,
      rating: 4.8,
    },
    {
      id: 12,
      nombre: "Torre Rascador 120cm",
      categoria: "rascadores",
      precio: 49900,
      precioOriginal: 65000,
      imagen: "/images/imagen69.avif",
      descripcion: "Torre completa con múltiples niveles",
      stock: 6,
      rating: 4.9,
    },
    {
      id: 13,
      nombre: "Tabla Rascadora",
      categoria: "rascadores",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen70.jpg",
      descripcion: "Tabla plana de cartón corrugado",
      stock: 30,
      rating: 4.6,
    },

    // HIGIENE
    {
      id: 14,
      nombre: "Arena Aglutinante 10kg",
      categoria: "higiene",
      precio: 14900,
      precioOriginal: 19000,
      imagen: "/images/imagen71.webp",
      descripcion: "Arena de alta absorción",
      stock: 40,
      rating: 4.8,
    },
    {
      id: 15,
      nombre: "Champú para Gatos",
      categoria: "higiene",
      precio: 10900,
      precioOriginal: 14000,
      imagen: "/images/imagen76.avif",
      descripcion: "Champú suave hipoalergénico",
      stock: 22,
      rating: 4.7,
    },
    {
      id: 16,
      nombre: "Cepillo Desenredante",
      categoria: "higiene",
      precio: 8900,
      precioOriginal: 12000,
      imagen: "/images/imagen77.jpg",
      descripcion: "Cepillo para pelaje largo",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 17,
      nombre: "Caja de Arena con Tapa",
      categoria: "higiene",
      precio: 22900,
      precioOriginal: 30000,
      imagen: "/images/imagen78.avif",
      descripcion: "Caja cubierta con filtro",
      stock: 10,
      rating: 4.9,
    },

    // ROPA
    {
      id: 18,
      nombre: "Collar con Cascabel",
      categoria: "ropa",
      precio: 4900,
      precioOriginal: 7000,
      imagen: "/images/imagen79.jpg",
      descripcion: "Collar elegante ajustable",
      stock: 45,
      rating: 4.7,
    },
    

    // MEDICAMENTOS
    {
      id: 20,
      nombre: "Antiparasitario Mensual",
      categoria: "medicamentos",
      precio: 16900,
      precioOriginal: 22000,
      imagen: "/images/imagen81.jpg",
      descripcion: "Protege contra pulgas y garrapatas",
      stock: 30,
      rating: 4.9,
    },
    {
      id: 21,
      nombre: "Vitaminas para Gatos",
      categoria: "medicamentos",
      precio: 13900,
      precioOriginal: 18000,
      imagen: "/images/imagen82.jpg",
      descripcion: "Refuerza el sistema inmunológico",
      stock: 25,
      rating: 4.8,
    },
    {
      id: 22,
      nombre: "Pasta Antibolas de Pelo",
      categoria: "medicamentos",
      precio: 9900,
      precioOriginal: 13000,
      imagen: "/images/imagen83.jpg",
      descripcion: "Ayuda a eliminar bolas de pelo",
      stock: 20,
      rating: 4.7,
    },

    // ROPA HIKARI (tejidos artesanales)
    {
      id: 23,
      nombre: "Chaleco Tejido a Mano",
      categoria: "ropa-hikari",
      precio: 21900,
      precioOriginal: 28000,
      imagen: "/images/imagen100.webp",
      descripcion: "Tejido artesanal en lana suave, hecho a mano",
      stock: 8,
      rating: 5.0,
    },
    
  ];

  const categorias = [
    { id: "todos", label: "🐾 Todos", count: productos.length },
    { id: "comida", label: "🥩 Comida", count: productos.filter(p => p.categoria === "comida").length },
    { id: "juguetes", label: "🧵 Juguetes", count: productos.filter(p => p.categoria === "juguetes").length },
    { id: "camas", label: "🛏️ Camas", count: productos.filter(p => p.categoria === "camas").length },
    { id: "rascadores", label: "🪶 Rascadores", count: productos.filter(p => p.categoria === "rascadores").length },
    { id: "higiene", label: "🧴 Higiene", count: productos.filter(p => p.categoria === "higiene").length },
    { id: "ropa", label: "🎀 Ropa", count: productos.filter(p => p.categoria === "ropa").length },
    { id: "ropa-hikari", label: "🧶 Ropa Hikari", count: productos.filter(p => p.categoria === "ropa-hikari").length },
    { id: "medicamentos", label: "💊 Medicamentos", count: productos.filter(p => p.categoria === "medicamentos").length },
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
    <div className="gatos-page">
      <NavBar2 />
      <WhatsAppButton />


      {/* ===== HERO ===== */}
      <section className="gatos-hero">
        <div className="hero-content">
          <span className="badge">🐱 Todo para tu Gato</span>
          <h1>Productos premium para tu felino consentido</h1>
          <p>
            Descubre nuestra selección de alimentos, juguetes, camas, rascadores
            y todo lo que tu gato necesita para ser feliz.
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
          <div className="gatos-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Gatos felices ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="gatos-hero-carousel-btn gatos-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="gatos-hero-carousel-btn gatos-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="gatos-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`gatos-hero-carousel-dot ${
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
      <section className="gat-precio-section">
        <div className="gat-precio-card">
          <span className="gat-precio-badge">🩺 Evaluación veterinaria</span>
          <h2 className="gat-precio-h2">Consulta general para gatos</h2>
          <p className="gat-precio-texto">
            Revisión completa a cargo de nuestro equipo veterinario, adaptada
            a la edad y estado de salud de tu gato.
          </p>
          <div className="gat-precio-valor-box">
            <span className="gat-precio-valor">$15.000</span>
            <span className="gat-precio-label">Evaluación estándar</span>
          </div>
          <p className="gat-precio-nota">
            Incluye revisión general, chequeo de peso y recomendaciones de
            alimentación y cuidado.
          </p>
        </div>
      </section>

      {/* ===== CARACTERÍSTICAS ===== */}
      <section className="gat-info-section">
        <h2 className="gat-info-h2">Características principales</h2>
        <p className="gat-info-p">
          Antes de traer un gato a casa, es importante conocer sus
          necesidades básicas.
        </p>

        <div className="gat-features-grid">
          {caracteristicas.map((c, idx) => (
            <div key={idx} className="gat-feature-card">
              <span className="gat-feature-icono">{c.icono}</span>
              <h3 className="gat-feature-titulo">{c.titulo}</h3>
              <p className="gat-feature-texto">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>



      {/* ===== CONTENIDO ===== */}
      <div className="gatos-container" id="tienda-anchor" >
        <aside className="gatos-sidebar">
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

        <main className="gatos-main">
          <div className="main-header">
            <h2>{categorias.find((c) => c.id === selectedCategory)?.label}</h2>
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


            {/* ===== DATOS CURIOSOS ===== */}
      <section className="gat-curiosos-section">
        <h2 className="gat-curiosos-h2">¿Sabías que...?</h2>
        <div className="gat-curiosos-list">
          {datosCuriosos.map((dato, idx) => (
            <div key={idx} className="gat-curioso-item">
              <span className="gat-curioso-icono">💡</span>
              <p className="gat-curioso-texto">{dato}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARRITO */}
      {cart.length > 0 && (
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && cart.length > 0 && (
        <aside className="cart-panel">
          <div className="cart-header">
            <h3>🛒 Tu carrito</h3>
            <button className="close-cart" onClick={() => setShowCart(false)}>✕</button>
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
                  <p className="item-precio">${item.precio.toLocaleString("es-CL")}</p>
                  <div className="item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>❌</button>
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

export default Gatos;