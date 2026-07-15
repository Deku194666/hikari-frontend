




import api from "./api";

export const getProfileRequest = async () => {
  const res = await api.get("/user/profile");
  return res.data;
};

export const updateProfileRequest = async (data) => {
  const res = await api.put("/user/profile", data);
  return res.data;
};

export const uploadProfilePhotoRequest = async (file) => {
  const formData = new FormData();
  formData.append("photo", file);

  const res = await api.post("/user/profile/photo", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const changePasswordRequest = async (data) => {
  const res = await api.put("/user/change-password", data);
  return res.data;
};