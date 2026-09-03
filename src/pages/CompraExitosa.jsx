


import { Link } from "react-router-dom";
import "./CompraResultado.css";

function CompraExitosa() {
  return (
    <div className="cr-page">
      <div className="cr-card cr-success">
        <div className="cr-icon">✅</div>
        <h1>¡Compra realizada con éxito!</h1>
        <p>
          Tu pago fue aprobado. En breve recibirás la confirmación de tu pedido
          y nos pondremos en contacto para coordinar la entrega.
        </p>
        <Link to="/dashboard-cliente" className="cr-btn">
          Volver a mi cuenta
        </Link>
      </div>
    </div>
  );
}

export default CompraExitosa;