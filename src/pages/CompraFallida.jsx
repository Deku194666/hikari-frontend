



import { Link } from "react-router-dom";
import "./CompraResultado.css";

function CompraFallida() {
  return (
    <div className="cr-page">
      <div className="cr-card cr-failure">
        <div className="cr-icon">❌</div>
        <h1>No pudimos procesar tu pago</h1>
        <p>
          El pago no se completó. Puede haber sido rechazado por tu banco o
          cancelado durante el proceso. No se realizó ningún cobro.
        </p>
        <Link to="/dashboard-cliente" className="cr-btn">
          Volver a intentar
        </Link>
      </div>
    </div>
  );
}

export default CompraFallida;