



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPatientsRequest } from "../../../services/petService";
import "./VetTelemedicine.css";

function VetTelemedicine() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllPatientsRequest();
      setPatients(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar los pacientes");
    } finally {
      setLoading(false);
    }
  };

  const handleStartCall = (petId) => {
    navigate(`/videollamada/${petId}`);
  };

  if (loading) {
    return (
      <section className="section-content vt-section">
        <div className="section-title">
          <h2>📹 Telemedicina</h2>
        </div>
        <p>Cargando pacientes...</p>
      </section>
    );
  }

  return (
    <section className="section-content vt-section">
      <div className="section-title">
        <h2>📹 Telemedicina</h2>
        <p>Inicia una videollamada con el dueño de cualquier paciente</p>
      </div>

      {error && <p className="vt-error">{error}</p>}

      <div className="vt-grid">
        {patients.map((patient) => (
          <div key={patient._id} className="vt-card">
            <div className="vt-card-info">
              <span className="vt-pet-icon">
                {patient.type === "Perro" ? "🐕" : "🐱"}
              </span>
              <div>
                <strong>{patient.name}</strong>
                <p>{patient.owner?.name || "—"}</p>
              </div>
            </div>
            <button
              className="vt-call-btn"
              onClick={() => handleStartCall(patient._id)}
            >
              📹 Iniciar videollamada
            </button>
          </div>
        ))}

        {patients.length === 0 && (
          <p className="vt-empty">Aún no hay pacientes registrados.</p>
        )}
      </div>
    </section>
  );
}

export default VetTelemedicine;