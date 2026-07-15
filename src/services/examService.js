


import api from "./api";

export const createExamRequestRequest = async (data) => {
  const res = await api.post("/exams", data);
  return res.data;
};

export const getMyExamRequestsRequest = async () => {
  const res = await api.get("/exams/mine");
  return res.data;
};

export const getAllExamRequestsRequest = async () => {
  const res = await api.get("/exams");
  return res.data;
};

export const updateExamRequestRequest = async (id, data) => {
  const res = await api.put(`/exams/${id}`, data);
  return res.data;
};