


const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Lista las conversaciones del usuario logeado (cliente o vet, cada uno ve las suyas)
export const getConversationsRequest = async () => {
  const response = await fetch(`${API_URL}/messages/conversations`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener las conversaciones");
  return data;
};

// Crea (o recupera si ya existe) la conversación con otro usuario.
// otherUserId = id del vet (si soy cliente) o id del cliente (si soy vet).
export const startConversationRequest = async (otherUserId) => {
  const response = await fetch(`${API_URL}/messages/conversations`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ otherUserId }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al iniciar la conversación");
  return data;
};

// Trae todos los mensajes de una conversación puntual
export const getConversationRequest = async (conversationId) => {
  const response = await fetch(`${API_URL}/messages/conversations/${conversationId}`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener la conversación");
  return data;
};

// Envía un mensaje dentro de una conversación existente
export const sendMessageRequest = async (conversationId, text) => {
  const response = await fetch(`${API_URL}/messages/conversations/${conversationId}/messages`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al enviar el mensaje");
  return data;
};

export const markAsReadRequest = async (conversationId) => {
  const response = await fetch(`${API_URL}/messages/conversations/${conversationId}/read`, {
    method: "PUT",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al marcar como leído");
  return data;
};