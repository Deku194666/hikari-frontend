import api from "./api";

export const getPetsRequest = async () => {
  const res = await api.get("/pets");
  return res.data;
};

export const createPetRequest = async (petData) => {
  const res = await api.post("/pets", petData);
  return res.data;
};

export const updatePetRequest = async (id, petData) => {
  const res = await api.put(`/pets/${id}`, petData);
  return res.data;
};

export const deletePetRequest = async (id) => {
  const res = await api.delete(`/pets/${id}`);
  return res.data;
};

export const getAllPatientsRequest = async () => {
  const res = await api.get("/pets/patients");
  return res.data;
};