import { useState, useEffect } from "react";
import {
  getPetsRequest,
  createPetRequest,
  deletePetRequest,
} from "../../../services/petService";
import "./ClientPets.css";

const TYPE_STYLES = {
  Perro: { emoji: "🐕", label: "Perro" },
  Gato: { emoji: "🐱", label: "Gato" },
  Tortuga: { emoji: "🐢", label: "Tortuga" },
  Iguana: { emoji: "🦎", label: "Iguana" },
  Conejo: { emoji: "🐰", label: "Conejo" },
  Ave: { emoji: "🦜", label: "Ave" },
  Cuy: { emoji: "🐹", label: "Cuy" },
  Huron: { emoji: "🦡", label: "Hurón" },
  Erizo: { emoji: "🦔", label: "Erizo" },
};

function ClientPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    sex: "",
  });

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
      setError(
        err.response?.data?.msg || "No se pudieron cargar tus mascotas"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({
      ...newPet,
      [name]: value,
    });
  };

  const handleSelectType = (type) => {
    setNewPet({
      ...newPet,
      type,
    });
  };

  const handleAddPet = async (e) => {
    e.preventDefault();

    if (!newPet.name || !newPet.type || !newPet.breed || !newPet.age || !newPet.weight || !newPet.sex) {
  alert("⚠️ Por favor completa todos los campos");
  return;
}

    setSubmitting(true);
    setError("");

    try {
      const created = await createPetRequest({
        name: newPet.name,
        type: newPet.type,
        breed: newPet.breed,
        age: parseInt(newPet.age),
        weight: parseFloat(newPet.weight),
        sex: newPet.sex,
      });

      setPets([...pets, created]);
      setNewPet({ name: "", type: "", breed: "", age: "", weight: "", sex: ""  });
      alert("✅ Mascota registrada correctamente");
    } catch (err) {
      setError(
        err.response?.data?.msg || "No se pudo registrar la mascota"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeletePet = async (id) => {
    if (!window.confirm("¿Eliminar esta mascota?")) return;

    try {
      await deletePetRequest(id);
      setPets(pets.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo eliminar la mascota");
    }
  };

  const dogCount = pets.filter((p) => p.type === "Perro").length;
  const catCount = pets.filter((p) => p.type === "Gato").length;

  return (
    <section className="section-content cp-section">
      <div className="section-title">
        <h2>🐾 Mis Mascotas</h2>
        <p>{pets.length} mascotas registradas</p>
      </div>

      {/* RESUMEN */}
      <div className="cp-summary">
        <div className="cp-summary-card cp-summary-total">
          <span className="cp-summary-number">{pets.length}</span>
          <span className="cp-summary-label">Total</span>
        </div>
        <div className="cp-summary-card cp-summary-dog">
          <span className="cp-summary-number">{dogCount}</span>
          <span className="cp-summary-label">🐕 Perros</span>
        </div>
        <div className="cp-summary-card cp-summary-cat">
          <span className="cp-summary-number">{catCount}</span>
          <span className="cp-summary-label">🐱 Gatos</span>
        </div>
      </div>

      {error && <p className="cp-error">{error}</p>}

      {/* GRID DE MASCOTAS */}
      {loading ? (
        <div className="cp-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="cp-card cp-card-skeleton" />
          ))}
        </div>
      ) : pets.length === 0 ? (
        <div className="cp-empty">
          <div className="cp-empty-icon">🐾</div>
          <h3>Aún no tienes mascotas registradas</h3>
          <p>Completa el formulario de abajo para agregar a tu primer compañero</p>
        </div>
      ) : (
        <div className="cp-grid">
          {pets.map((pet) => {
            const style = TYPE_STYLES[pet.type] || { emoji: "🐾", label: pet.type };
            return (
              <div
                key={pet._id}
                className={`cp-card ${pet.type === "Perro" ? "cp-card-dog" : "cp-card-cat"}`}
              >
                <button
                  className="cp-delete-btn"
                  onClick={() => handleDeletePet(pet._id)}
                  title="Eliminar mascota"
                >
                  ✕
                </button>

                <div className="cp-avatar">{style.emoji}</div>
                <h3 className="cp-name">{pet.name}</h3>
                <span className="cp-type-chip">{style.label}</span>

                <div className="cp-stats">
  <div className="cp-stat">
    <span className="cp-stat-label">Raza</span>
    <span className="cp-stat-value">{pet.breed}</span>
  </div>
  <div className="cp-stat">
    <span className="cp-stat-label">Edad</span>
    <span className="cp-stat-value">{pet.age} años</span>
  </div>
  <div className="cp-stat">
    <span className="cp-stat-label">Peso</span>
    <span className="cp-stat-value">{pet.weight} kg</span>
  </div>
  <div className="cp-stat">
    <span className="cp-stat-label">Sexo</span>
    <span className="cp-stat-value">{pet.sex || "—"}</span>
  </div>
</div>

                <button className="cp-history-btn">Ver historial</button>
              </div>
            );
          })}
        </div>
      )}

      {/* FORMULARIO */}
      <div className="cp-form-card">
        <h3>➕ Registrar nueva mascota</h3>
        <form className="cp-form" onSubmit={handleAddPet}>

          <div className="cp-type-select cp-type-select-grid">
  {Object.entries(TYPE_STYLES).map(([type, style]) => (
    <button
      key={type}
      type="button"
      className={`cp-type-option ${newPet.type === type ? "selected" : ""}`}
      onClick={() => handleSelectType(type)}
      disabled={submitting}
    >
      {style.emoji} {style.label}
    </button>
  ))}
</div>

         <div className="cp-form-grid">
  <input
    type="text"
    name="name"
    placeholder="Nombre"
    value={newPet.name}
    onChange={handleInputChange}
    disabled={submitting}
    required
  />
  <input
    type="text"
    name="breed"
    placeholder="Raza"
    value={newPet.breed}
    onChange={handleInputChange}
    disabled={submitting}
    required
  />
  <input
    type="number"
    name="age"
    placeholder="Edad (años)"
    value={newPet.age}
    onChange={handleInputChange}
    disabled={submitting}
    required
  />
  <input
    type="number"
    name="weight"
    placeholder="Peso (kg)"
    value={newPet.weight}
    onChange={handleInputChange}
    disabled={submitting}
    required
  />
  <select
    name="sex"
    value={newPet.sex}
    onChange={handleInputChange}
    disabled={submitting}
    required
  >
    <option value="">Sexo</option>
    <option value="Macho">Macho</option>
    <option value="Hembra">Hembra</option>
  </select>
</div>
          <button type="submit" className="cp-submit-btn" disabled={submitting}>
            {submitting ? "Registrando..." : "🚀 Registrar mascota"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ClientPets;