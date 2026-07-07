import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">🐾 Hikari Vet</span>
          <p className="footer-tagline">Atención veterinaria profesional a domicilio</p>
        </div>
        <div className="footer-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/terminos">Términos de servicio</Link>
          <Link to="/privacidad">Política de privacidad</Link>
        </div>
        <div className="footer-bottom">
          <p>© {year} Hikari Vet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
