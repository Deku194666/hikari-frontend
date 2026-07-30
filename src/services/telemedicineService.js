



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getVideoTokenRequest = async (room) => {
  const response = await fetch(`${API_URL}/telemedicine/token?room=${encodeURIComponent(room)}`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener el acceso a la videollamada");
  return data;
};