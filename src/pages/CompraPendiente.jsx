



import { Link } from "react-router-dom";
import "./CompraResultado.css";

function CompraPendiente() {
  return (
    <div className="cr-page">
      <div className="cr-card cr-pending">
        <div className="cr-icon">⏳</div>
        <h1>Tu pago está pendiente</h1>
        <p>
          Estamos esperando la confirmación de tu pago (esto puede pasar con
          algunos medios de pago, como transferencias o pagos en efectivo).
          Te avisaremos apenas se confirme.
        </p>
        <Link to="/dashboard-cliente" className="cr-btn">
          Volver a mi cuenta
        </Link>
      </div>
    </div>
  );
}

export default CompraPendiente;