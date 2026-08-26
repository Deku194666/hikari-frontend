


import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./Laboratorio.css";
import { Link } from "react-router-dom";

function Laboratorio() {
  

  const [expandedFAQ, setExpandedFAQ] = useState(null);


  const benefits = [
    { icon: "🔬", title: "Laboratorio Especializado", desc: "Equipos de última tecnología y profesionales certificados" },
    { icon: "⚡", title: "Resultados Rápidos", desc: "Análisis precisos en el menor tiempo posible" },
    { icon: "📋", title: "Informe Detallado", desc: "Reportes completos y fáciles de entender" },
    { icon: "💉", title: "Toma Profesional", desc: "Personal experto en extracción de muestras" },
    { icon: "🏥", title: "Interpretación Médica", desc: "Asesoramiento veterinario sobre resultados" },
    { icon: "📱", title: "Resultados Online", desc: "Accede a tus resultados desde cualquier lugar" },
  ];

  const exams = [
    { name: "Hematología", desc: "Hemograma, química sanguínea, enzimas hepáticas", time: "24-48h",  },
    { name: "Bioquímica", desc: "Glucosa, Creatinina, Urea, Transaminasas, Colesterol, Electrolitos ", time: "12-24h",  },
    { name: "Hormonas", desc: "TSH, Testosterona, Cortisol, FSH, LH",  time: "24h",  },
    { name: "Biomarcadores", desc: "Son señales biológicas como proteínas, hormonas, lípidos o células que indican procesos normales o anormales en el cuerpo.", time: "24-48h",  },
    { name: "Microbiología", desc: "Hemocultivo, Bacterias, Hongos", time: "48-72h",  },
    { name: "Parasitología", desc: "Malaria, Enfermedad de Chagas, EIA, IFA / IFI, ELISA", time: "48-72h",  },
    { name: "Biopsias", desc: "Una biopsia es un procedimiento médico donde se extrae una pequeña muestra de tejido u órgano para analizarla en un laboratorio y obtener un diagnóstico definitivo", time: "48-72h",  },
    { name: "Citologías", desc: "La citología veterinaria es un examen rápido y poco invasivo que analiza células de tejidos o fluidos de tu mascota para detectar infecciones, inflamaciones o tumores", time: "48-72h",  },
    { name: "Mucho más", desc: "Muchos mas examenes a disposición, todo depende al momento de la evaluación", time: "48-72h",  },
  ];

  const process = [
    { step: 1, title: "Solicita el Examen", desc: "Consulta cuál es el análisis que necesitas" },
    { step: 2, title: "Agendar Toma", desc: "Elige fecha y hora conveniente para ti" },
    { step: 3, title: "Extracción", desc: "Toma profesional de la muestra en casa o clínica" },
    { step: 4, title: "Análisis", desc: "Procesamiento en nuestro laboratorio especializado" },
    { step: 5, title: "Resultados", desc: "Recibe informe detallado en 24-72 horas" },
    { step: 6, title: "Consulta", desc: "Asesoramiento veterinario sobre los resultados" },
  ];

  const faqs = [
    { q: "¿Puedo hacerle exámenes a cualquier edad?", a: "Sí, desde cachorros/gatitos. Los análisis se pueden hacer a cualquier edad. En mascotas senior se recomiendan análisis anuales." },
    { q: "¿Es necesario ayuno?", a: "Para análisis de sangre sí, se recomienda 8-12 horas sin comer. Para orina no es necesario." },
    { q: "¿Cuánto demora tener los resultados?", a: "Varía según el análisis: 12-24h para básicos, 48-72h para más complejos." },
    { q: "¿Duele la extracción de muestra?", a: "Mínimamente. Nuestro personal es muy experiente en mascotas y lo hace rápidamente." },
    { q: "¿Puedo ir a domicilio?", a: "Sí, ofrecemos toma de muestras a domicilio sin costo adicional." },
    { q: "¿Qué pasa si los resultados están fuera de rango?", a: "Te asesoramos sobre el significado y recomendaciones de tratamiento." },
  ];

  const testimonios = [
    { name: "Verónica T.", mascota: "Canela (Gata)", text: "Los exámenes fueron rápidos y claros. El informe muy bien explicado. Excelente servicio." },
    { name: "Ricardo M.", mascota: "Bruno (Perro)", text: "Muy profesionales. Detectaron a tiempo un problema renal. Se lo agradezco." },
    { name: "Mónica S.", mascota: "Milo (Perro)", text: "La toma a domicilio fue comodísima. Los resultados llegaron en 24h. Muy recomendado." },
  ];

  return (
    <div className="lab-page">
      <NavBar2 />

      {/* ===== HERO ===== */}
      <section className="lab-hero">
        <div className="lab-hero-content">
          <span className="lab-badge">🧬 Diagnóstico Preciso</span>
          <h1 className="lab-h1">Exámenes de Laboratorio</h1>
          <p className="lab-p">
            Análisis precisos con equipos de última tecnología. Detecta problemas de salud a tiempo y asegura el bienestar de tu mascota.
          </p>
          <div className="lab-hero-cta">
            <Link to="/login" className="lab-btn-primary">Solicitar Examen</Link>
             <button className="lab-btn-secondary">📞 Consultar</button>
          </div>
        </div>
        <div className="lab-hero-image">
  <img 
    src="/images/imagen87.webp" 
    alt="Exámenes de Laboratorio" 
    className="lab-hero-img-full"
  />
</div>
      </section>

      {/* ===== DESCRIPCIÓN ===== */}
      <section className="lab-description">
        <div className="lab-container-small">
          <h2 className="lab-section-h2">¿Qué son los Exámenes de Laboratorio?</h2>
          <p className="lab-description-text">
            Son análisis especializados que nos permiten diagnosticar enfermedades, evaluar la función de órganos y detectar problemas de salud antes de que se vuelvan graves. Utilizamos tecnología de punta y personal certificado.
          </p>
          <div className="lab-description-grid">
            <div className="lab-desc-card">
              <span className="lab-desc-icon">🔍</span>
              <h3>Diagnóstico Preciso</h3>
              <p>Identificamos problemas que no se ven a simple vista.</p>
            </div>
            <div className="lab-desc-card">
              <span className="lab-desc-icon">⚙️</span>
              <h3>Tecnología Avanzada</h3>
              <p>Equipos de última generación para máxima precisión.</p>
            </div>
            <div className="lab-desc-card">
              <span className="lab-desc-icon">👨‍🔬</span>
              <h3>Personal Certificado</h3>
              <p>Profesionales con alta experiencia en laboratorio veterinario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="lab-benefits">
        <div className="lab-container-small">
          <h2 className="lab-section-h2">Beneficios de los Exámenes</h2>
          <div className="lab-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="lab-benefit-card">
                <span className="lab-benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE EXÁMENES ===== */}
      <section className="lab-exams">
        <div className="lab-container-small">
          <h2 className="lab-section-h2"> Algunos de los examenes que realizamos </h2>
          <div className="lab-exams-grid">
            {exams.map((exam, idx) => (
              <div key={idx} className="lab-exam-card">
                <h3>{exam.name}</h3>
                <p className="lab-exam-desc">{exam.desc}</p>
                <div className="lab-exam-footer">
                  <div className="lab-exam-time">⏱️ {exam.time}</div>
                  <div className="lab-exam-price">{exam.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="lab-process">
        <div className="lab-container-small">
          <h2 className="lab-section-h2">Proceso de Examen</h2>
          <div className="lab-process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="lab-process-item">
                <div className="lab-process-number">{item.step}</div>
                <div className="lab-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="lab-faq">
        <div className="lab-container-small">
          <h2 className="lab-section-h2">Preguntas Frecuentes</h2>
          <div className="lab-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="lab-faq-item">
                <button
                  className="lab-faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="lab-faq-icon">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="lab-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="lab-testimonios">
        <div className="lab-container-small">
          <h2 className="lab-section-h2">Lo Que Dicen Nuestros Clientes</h2>
          <div className="lab-testimonios-grid">
            {testimonios.map((test, idx) => (
              <div key={idx} className="lab-testimonio-card">
                <div className="lab-testimonio-header">
                  <span className="lab-testimonio-avatar">👤</span>
                  <div>
                    <h4>{test.name}</h4>
                    <p className="lab-testimonio-pet">{test.mascota}</p>
                  </div>
                </div>
                <p className="lab-testimonio-text">"{test.text}"</p>
                <div className="lab-testimonio-stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ===== CTA FINAL ===== */}
      <section className="lab-cta-final">
        <div className="lab-container-small">
          <h2>Cuida la salud de tu mascota</h2>
          <p>Diagnósticos precisos que te dan paz mental</p>
          <button className="lab-btn-large">📞 Llamar Ahora</button>
        </div>
      </section>
    </div>
  );
}

export default Laboratorio;