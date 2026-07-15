



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPetsRequest } from "../../../services/petService";
import "./ClientTelemedicine.css";

function ClientTelemedicine() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadPets();
  }, []);

  const loadPets = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getPetsRequest();
      setPets(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar tus mascotas");
    } finally {
      setLoading(false);
    }
  };

  const handleStartCall = (petId) => {
    navigate(`/videollamada/${petId}`);
  };

  if (loading) {
    return (
      <section className="section-content ct-section">
        <div className="section-title">
          <h2>📹 Telemedicina</h2>
        </div>
        <p>Cargando tus mascotas...</p>
      </section>
    );
  }

  return (
    <section className="section-content ct-section">
      <div className="section-title">
        <h2>📹 Telemedicina</h2>
        <p>Inicia una videollamada con el equipo veterinario</p>
      </div>

      {error && <p className="ct-error">{error}</p>}

      <div className="ct-grid">
        {pets.map((pet) => (
          <div key={pet._id} className="ct-card">
            <div className="ct-card-info">
              <span className="ct-pet-icon">
                {pet.type === "Perro" ? "🐕" : "🐱"}
              </span>
              <div>
                <strong>{pet.name}</strong>
                <p>{pet.breed}</p>
              </div>
            </div>
            <button
              className="ct-call-btn"
              onClick={() => handleStartCall(pet._id)}
            >
              📹 Iniciar videollamada
            </button>
          </div>
        ))}

        {pets.length === 0 && (
          <p className="ct-empty">Aún no tienes mascotas registradas.</p>
        )}
      </div>
    </section>
  );
}

export default ClientTelemedicine;