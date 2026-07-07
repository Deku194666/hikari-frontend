import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { buscarRuta } from "../data/searchIndex"; 
import "./Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sinResultados, setSinResultados] = useState(false); 
  const navigate = useNavigate(); 
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const ruta = buscarRuta(searchQuery);

    if (ruta) {
      setSinResultados(false);
      navigate(ruta);
      setSearchQuery("");
    } else {
      setSinResultados(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logovet1.png" alt="Hikari Vet" className="logo-img" />
          <span className="logo-text">Hikari</span>
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar productos, servicios..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (sinResultados) setSinResultados(false);
            }}
          />
          <button type="submit" className="search-btn">
            🔎
          </button>
          {sinResultados && (
            <span className="search-no-results">
              No encontramos nada relacionado, probá con otra palabra
            </span>
          )}
        </form>

        <div className="nav-auth">
          <Link to="/login" className="nav-link login-link">
            🔑 Iniciar Sesión
          </Link>
          <Link to="/register" className="nav-link register-btn">
            ✨ Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;