import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.10:5000/api"
});

// Agrega automáticamente el token guardado en localStorage
// a todas las peticiones que hace esta instancia de axios.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Si el backend responde 401 (token inválido o expirado),
// cerramos la sesión localmente y mandamos al login.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;