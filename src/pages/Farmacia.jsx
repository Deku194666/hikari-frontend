import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./Farmacia.css";
import WhatsAppButton from "../components/WhatsAppButton";

function Farmacia() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // ===== IMÁGENES DEL CARRUSEL DEL HERO =====
  // Agrega, quita o reemplaza rutas aquí para cambiar las fotos del carrusel.
  const heroImages = [
    "/images/imagen29.png",
    "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=500&fit=crop",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=500&fit=crop",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextHeroImage = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const medicamentos = [
    {
      id: 1,
      nombre: "Gotas Oftálmicas para Perros",
      categoria: "gotas",
      precio: 8900,
      descripcion: "Alivio para irritación ocular y conjuntivitis",
      imagen: "/images/imagen30.jpg",
      stock: 15,
    },
    {
      id: 2,
      nombre: "Antibiótico Oral (Amoxicilina)",
      categoria: "antibioticos",
      precio: 12900,
      descripcion: "Tratamiento de infecciones bacterianas",
      imagen: "/images/imagen31.jpg",
      stock: 20,
    },
    {
      id: 3,
      nombre: "Jarabe para la Tos",
      categoria: "jarabes",
      precio: 9900,
      descripcion: "Alivia la tos y congestión respiratoria",
      imagen: "/images/imagen32.jpg",
      stock: 12,
    },
    {
      id: 4,
      nombre: "Vacuna Séxtuple (DHPP)",
      categoria: "vacunas",
      precio: 35900,
      descripcion: "Protege contra 6 enfermedades graves en perros",
      imagen: "/images/imagen33.webp",
      stock: 8,
    },
    {
      id: 5,
      nombre: "Vacuna Rabia",
      categoria: "vacunas",
      precio: 28900,
      descripcion: "Prevención obligatoria de rabia",
      imagen: "/images/imagen34.jpg",
      stock: 10,
    },
    {
      id: 6,
      nombre: "Antiparasitario Interno",
      categoria: "desparasitantes",
      precio: 15900,
      descripcion: "Elimina gusanos intestinales y parásitos",
      imagen: "/images/imagen35.jpg",
      stock: 18,
    },
    {
      id: 7,
      nombre: "Jarabe Digestivo",
      categoria: "jarabes",
      precio: 10900,
      descripcion: "Mejora la digestión y reduce el gas",
      imagen: "/images/imagen36.jpg",
      stock: 14,
    },
    {
      id: 8,
      nombre: "Antiinflamatorio (Ibuprofeno Veterinario)",
      categoria: "antiinflamatorios",
      precio: 16900,
      descripcion: "Reduce inflamación y dolor articular",
      imagen: "/images/imagen37.jpg",
      stock: 11,
    },
    {
      id: 9,
      nombre: "Gotas Óticas (Para los oídos)",
      categoria: "gotas",
      precio: 11900,
      descripcion: "Trata infecciones de oído y otitis",
      imagen: "/images/imagen38.png",
      stock: 13,
    },
    {
      id: 10,
      nombre: "Vitaminas Multivitamínicas",
      categoria: "vitaminas",
      precio: 18900,
      descripcion: "Refuerza el sistema inmunológico",
      imagen: "/images/imagen39.jpeg",
      stock: 22,
    },
    {
      id: 11,
      nombre: "Antipulgas y Garrapatas",
      categoria: "antiparasitarios",
      precio: 24900,
      descripcion: "Protección mensual contra pulgas y garrapatas",
      imagen: "/images/imagen40.webp",
      stock: 19,
    },
  ];

  const categorias = [
    { id: "todos", label: "Todos" },
    { id: "vacunas", label: "💉 Vacunas" },
    { id: "gotas", label: "👁️ Gotas" },
    { id: "jarabes", label: "🍯 Jarabes" },
    { id: "antibioticos", label: "💊 Antibióticos" },
    { id: "desparasitantes", label: "🪱 Desparasitantes" },
    { id: "antiinflamatorios", label: "💊 Antiinflamatorios" },
    { id: "vitaminas", label: "🥤 Vitaminas" },
    { id: "topicos", label: "🧴 Tópicos" },
  ];

  const medicamentosFiltrados =
    selectedCategory === "todos"
      ? medicamentos
      : medicamentos.filter((med) => med.categoria === selectedCategory);

  return (
    <div className="farmacia">
      <NavBar2 />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="hero" style={{
  backgroundImage: `linear-gradient(135deg, rgba(251, 247, 240, 0.93), rgba(232, 220, 200, 0.88)), url("https://images.unsplash.com/photo-1631669969504-f35518bf96ba?w=1600&q=80")`,
}} >
        <div className="hero-content">
          <span className="badge">💊 Farmacia Veterinaria Online</span>
          <h1>Medicamentos y tratamientos para tu mascota</h1>
          <p>
            Acceso fácil a vacunas, antibióticos, gotas y todos los medicamentos
            que tu mascota necesita.
          </p>
          <h3>Entrega rápida, precios justos y asesoramiento profesional.</h3>

          {/* ESTADÍSTICAS */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Mascotas tratadas</p>
            </div>
          </div>
        </div>

        {/* IMAGEN DECORATIVA */}
        <div className="hero-image">
          <div className="farmacia-hero-carousel">
            <img
              src={heroImages[heroIndex]}
              alt={`Medicamento veterinario ${heroIndex + 1}`}
            />

            {heroImages.length > 1 && (
              <>
                <button
                  className="farmacia-hero-carousel-btn farmacia-hero-carousel-prev"
                  onClick={prevHeroImage}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  className="farmacia-hero-carousel-btn farmacia-hero-carousel-next"
                  onClick={nextHeroImage}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                <div className="farmacia-hero-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`farmacia-hero-carousel-dot ${
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

      {/* ===== AVISO PRÓXIMAMENTE ===== */}
      <div className="farmacia-notice-wrap">
        <div className="farmacia-notice-box">
          <span className="farmacia-notice-icon">📌</span>
          <div>
            <h3>¡Próximamente!</h3>
            <p>
              Por el momento, no contamos con venta directa de medicamentos. Actualmente, en esta sección solo se realiza la prescripción y emisión de recetas médicas veterinarias, siempre bajo el criterio clínico del médico veterinario asignado y previa evaluación del caso en consulta.
            </p>
            <p>
              Las recetas podrán ser emitidas durante una consulta veterinaria o posteriormente, cuando el profesional cuente con los antecedentes clínicos necesarios para indicar el tratamiento de forma responsable y segura.
            </p>
          </div>
        </div>
      </div>

      <div className="farmacia-container">
        {/* ===== SIDEBAR - FILTROS ===== */}
        <aside className="farmacia-sidebar">
          <h3>Categorías</h3>
          <div className="categorias-list">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`categoria-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <main className="farmacia-main">
          {/* HEADER */}
          <div className="farmacia-header">
            <h2>
              {selectedCategory === "todos"
                ? "Todos los medicamentos"
                : categorias.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p>{medicamentosFiltrados.length} productos en catálogo (venta próximamente)</p>
          </div>

          {/* GRID DE MEDICAMENTOS */}
          <div className="medicamentos-grid">
            {medicamentosFiltrados.map((medicamento) => (
              <div key={medicamento.id} className="medicamento-card">
                <div className="medicamento-imagen">
                  {medicamento.imagen.startsWith("/") ? (
                    <img src={medicamento.imagen} alt={medicamento.nombre} />
                  ) : (
                    medicamento.imagen
                  )}
                </div>
                <h3>{medicamento.nombre}</h3>
                <p className="descripcion">{medicamento.descripcion}</p>
                <p className="precio">${medicamento.precio.toLocaleString("es-CL")}</p>
                <button className="btn-agregar" disabled>
                  🚫 Próximamente disponible
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Farmacia;