import api from "./api";

export const loginRequest = async (email, password) => {
  const res = await api.post("/auth/login", {
    email,
    password
  });

  return res.data;
};

export const registerRequest = async ({ name, email, phone, password }) => {
  const res = await api.post("/auth/register", {
    name,
    email,
    phone,
    password
  });

  return res.data;
};

export const forgotPasswordRequest = async (email) => {
  const res = await api.post("/auth/forgot-password", { email });
  return res.data;
};

export const resetPasswordRequest = async (token, newPassword) => {
  const res = await api.post("/auth/reset-password", { token, newPassword });
  return res.data;
};