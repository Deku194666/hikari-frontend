



import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfileRequest, uploadProfilePhotoRequest } from "../services/userService";
import { getPhotoUrl } from "../utils/getFileUrl";
import "./UserProfile.css";

function UserProfile() {
  const { user, updateUser } = useAuth();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });
  const [saving, setSaving] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const updated = await updateProfileRequest(form);
      updateUser(updated);
      setSuccess("Perfil actualizado correctamente");
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo actualizar el perfil");
    } finally {
      setSaving(false);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingPhoto(true);
    setError("");
    try {
      const updated = await uploadProfilePhotoRequest(file);
      updateUser(updated);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo subir la foto");
    } finally {
      setUploadingPhoto(false);
      e.target.value = "";
    }
  };

  const photoUrl = getPhotoUrl(user?.photo);

  return (
    <section className="section-content up-section">
      <div className="section-title">
        <h2>👤 Mi Perfil</h2>
        <p>Actualiza tu foto y tus datos personales</p>
      </div>

      {error && <p className="up-error">{error}</p>}
      {success && <p className="up-success">{success}</p>}

      <div className="up-card">
        <div className="up-photo-wrap">
          <div className="up-avatar" onClick={handlePhotoClick}>
            {photoUrl ? (
              <img src={photoUrl} alt="Foto de perfil" />
            ) : (
              <span>{getInitials(user?.name)}</span>
            )}
            <div className="up-avatar-overlay">
              {uploadingPhoto ? "Subiendo..." : "📷 Cambiar"}
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/jpeg,image/png,image/webp"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          <p className="up-photo-hint">Haz clic en la foto para cambiarla</p>
        </div>

        <form className="up-form" onSubmit={handleSave}>
          <label className="up-field">
            Nombre completo
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="up-field">
            Correo electrónico
            <input type="email" value={user?.email || ""} disabled />
          </label>

          <label className="up-field">
            Teléfono
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="up-field">
            Dirección
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Calle, número, comuna"
            />
          </label>

          <button type="submit" className="up-save-btn" disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default UserProfile;