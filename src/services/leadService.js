



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Público — cualquier visitante del sitio puede mandar esto, no necesita estar logueado
export const createLeadRequest = async ({ name, email, phone, message }) => {
  const response = await fetch(`${API_URL}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, message }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al enviar el mensaje");
  return data;
};

// Desde acá para abajo, todo requiere estar logueado como vet
const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getLeadsRequest = async () => {
  const response = await fetch(`${API_URL}/leads`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener los leads");
  return data;
};

export const updateLeadStatusRequest = async (id, status) => {
  const response = await fetch(`${API_URL}/leads/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al actualizar el lead");
  return data;
};