import api from "./api";

export const getProductsRequest = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const createProductRequest = async (productData) => {
  const res = await api.post("/products", productData);
  return res.data;
};

export const updateProductRequest = async (id, productData) => {
  const res = await api.put(`/products/${id}`, productData);
  return res.data;
};

export const deleteProductRequest = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const purchaseProductsRequest = async (items) => {
  const res = await api.post("/products/purchase", { items });
  return res.data;
};