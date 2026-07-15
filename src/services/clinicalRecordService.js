



import api from "./api";

export const getRecordsByPetRequest = async (petId) => {
  const res = await api.get(`/clinical-records/pet/${petId}`);
  return res.data;
};

export const getRecordByIdRequest = async (id) => {
  const res = await api.get(`/clinical-records/${id}`);
  return res.data;
};

export const createRecordRequest = async (recordData) => {
  const res = await api.post("/clinical-records", recordData);
  return res.data;
};

export const updateRecordRequest = async (id, recordData) => {
  const res = await api.put(`/clinical-records/${id}`, recordData);
  return res.data;
};