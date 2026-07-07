import api from "./api";

export const getMyOrdersRequest = async () => {
  const res = await api.get("/orders/mine");
  return res.data;
};

export const getAllOrdersRequest = async () => {
  const res = await api.get("/orders");
  return res.data;
};