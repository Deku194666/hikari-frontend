import { Navigate } from "react-router-dom";

function PrivateVetRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user || user.role !== "vet") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateVetRoute;
