



import api from "./api";

export const getAlertsRequest = async () => {
  const res = await api.get("/alerts");
  return res.data;
};