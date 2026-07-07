



function ClientTips() {
  const tips = [
    { icon: "🐾", title: "Nutrición balanceada", desc: "Mantén a tu mascota con una dieta equilibrada según su edad y peso" },
    { icon: "💪", title: "Ejercicio regular", desc: "Realiza paseos diarios y actividades que mantengan a tu mascota activa" },
    { icon: "🧼", title: "Higiene dental", desc: "Cepilla los dientes de tu mascota 3 veces a la semana" },
    { icon: "🏥", title: "Chequeos periódicos", desc: "Visita al veterinario cada 6 meses para prevenir problemas" },
  ];

  const articles = [
    { title: "Cómo mantener a tu mascota saludable", desc: "Descubre los mejores hábitos para el bienestar de tu perro o gato..." },
    { title: "Nutrición según la edad de tu mascota", desc: "Aprende qué alimentos son ideales según el ciclo de vida..." },
    { title: "Primeros auxilios para emergencias", desc: "Qué hacer antes de llegar a una clínica veterinaria..." },
  ];

  return (
    <section className="section-content tips-section">
      <div className="section-title">
        <h2>💡 Tips y Consejos</h2>
        <p>Recomendaciones para el cuidado de tu mascota</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip, idx) => (
          <div key={idx} className="tip-card">
            <div className="tip-icon">{tip.icon}</div>
            <h3>{tip.title}</h3>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>

      <div className="tips-extra">
        <h3>📚 Artículos relacionados</h3>
        <div className="articles-list">
          {articles.map((article, idx) => (
            <div key={idx} className="article-item">
              <h4>{article.title}</h4>
              <p>{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientTips;