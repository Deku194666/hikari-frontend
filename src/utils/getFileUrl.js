



export const getServerUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
  return apiUrl.replace("/api", "");
};

export const getPhotoUrl = (photoPath) => {
  if (!photoPath) return null;
  return `${getServerUrl()}${photoPath}`;
};