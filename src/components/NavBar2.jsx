import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./NavBar2.css";

// 👇 Estas dos condiciones son las MISMAS que usa NavBar2.css para activar
// el modo "celular" (scroll horizontal + dropdown con position:fixed).
// Fuera de este rango (desktop/tablet grande), el dropdown se comporta
// exactamente igual que antes, sin ningún cambio.
const MOBILE_QUERY = "(max-width: 600px)";
const LANDSCAPE_QUERY = "(orientation: landscape) and (max-width: 1000px)";

function useIsMobileNav() {
  const [isMobileNav, setIsMobileNav] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia(MOBILE_QUERY).matches ||
      window.matchMedia(LANDSCAPE_QUERY).matches
    );
  });

  useEffect(() => {
    const mqMobile = window.matchMedia(MOBILE_QUERY);
    const mqLandscape = window.matchMedia(LANDSCAPE_QUERY);

    const update = () => {
      setIsMobileNav(mqMobile.matches || mqLandscape.matches);
    };

    update();
    mqMobile.addEventListener("change", update);
    mqLandscape.addEventListener("change", update);

    return () => {
      mqMobile.removeEventListener("change", update);
      mqLandscape.removeEventListener("change", update);
    };
  }, []);

  return isMobileNav;
}

function NavBar2() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const isMobileNav = useIsMobileNav();

  const menuItems = [
    {
      id: "inicio",
      label: "🏠 Inicio",
      path: "/",
      items: null,
    },
    {
      id: "servicios",
      label: "🏥 Servicios",
      path: "/servicios",
      items: null,
    },
    {
      id: "tienda",
      label: "🛍️ Tienda",
      path: "/tienda",
      items: null,
    },
    {
      id: "farmacia",
      label: "💊 Farmacia",
      path: "/farmacia",
      items: null,
    },
    {
      id: "contacto",
      label: "📞 Contacto",
      path: "/contacto",
      items: null,
    },
    {
      id: "perros",
      label: "🐕 Perros",
      items: [
        { label: "🐾 Ver todos", path: "/perros" },
        { label: "🥩 Comida", path: "/perros?categoria=comida-perros" },
        { label: "🎽 Arnés", path: "/perros?categoria=arnes-perros" },
        { label: "🔗 Correas", path: "/perros?categoria=correas-perros" },
        { label: "🧸 Juguetes", path: "/perros?categoria=juguetes-perros" },
        { label: "🛏️ Camas", path: "/perros?categoria=camas-perros" },
        { label: "👕 Ropa", path: "/perros?categoria=ropa-perros" },
        { label: "🧶 Ropa Hikari", path: "/perros?categoria=ropa-hikari-perros" },
        { label: "💊 Medicamentos", path: "/perros?categoria=medicamentos-perros" },
        { label: "🧴 Higiene", path: "/perros?categoria=higiene-perros" },
      ],
    },
    {
      id: "gatos",
      label: "🐱 Gatos",
      items: [
        { label: "🐾 Ver todos", path: "/gatos" },
        { label: "🥩 Comida", path: "/gatos?categoria=comida-gatos" },
        { label: "🧵 Juguetes", path: "/gatos?categoria=juguetes-gatos" },
        { label: "🛏️ Camas", path: "/gatos?categoria=camas-gatos" },
        { label: "🪶 Rascadores", path: "/gatos?categoria=rascadores-gatos" },
        { label: "🧴 Higiene", path: "/gatos?categoria=higiene-gatos" },
        { label: "🎀 Ropa", path: "/gatos?categoria=ropa-gatos" },
        { label: "🧶 Ropa Hikari", path: "/gatos?categoria=ropa-hikari-gatos" },
        { label: "💊 Medicamentos", path: "/gatos?categoria=medicamentos-gatos" },
      ],
    },
    {
      id: "exoticos",
      label: "🦎 Exóticos",
      items: [
        {
          label: "🦎 Reptiles",
          path: "/reptiles",
          subitems: [
            { label: "🐢 Tortugas", path: "/tortugas" },
            { label: "🦎 Iguanas", path: "/iguanas" },
          ],
        },
        { label: "🐰 Conejos", path: "/conejos" },
        {
          label: "🐹 Roedores",
          path: "/roedores",
          subitems: [
            { label: "🐹 Cuy", path: "/cuy" },
            { label: "🦡 Hurón", path: "/huron" },
            { label: "🦔 Erizo", path: "/erizo" },
          ],
        },
        { label: "🦜 Aves", path: "/aves" },
      ],
    },
  ];

  const handleDropdownClick = (id) => {
    // Toggle: si ya está abierto ese mismo dropdown, lo cierra; si no, lo abre
    setOpenDropdown(openDropdown === id ? null : id);
    setOpenSubmenu(null);
  };

  const handleSubmenuClick = (idx, e) => {
    e.preventDefault(); // evita navegar de inmediato al tocar un padre con subitems
    setOpenSubmenu(openSubmenu === idx ? null : idx);
  };

  const renderDropdownMenu = (menu) => (
    <div className="dropdown-menu">
      {menu.items.map((item, idx) =>
        !item.subitems ? (
          <Link
            key={idx}
            to={item.path}
            className="dropdown-item"
            onMouseEnter={() => setOpenSubmenu(null)}
          >
            {item.label}
          </Link>
        ) : (
          <div
            key={idx}
            className="dropdown-item-wrapper"
            onMouseEnter={() => setOpenSubmenu(idx)}
          >
            <Link
              to={item.path || "#"}
              className="dropdown-item dropdown-item-parent"
              onClick={(e) => handleSubmenuClick(idx, e)}
            >
              {item.label}
              <span className="submenu-arrow">▶</span>
            </Link>

            {openSubmenu === idx && (
              <div className="dropdown-submenu">
                {item.subitems.map((sub, subIdx) => (
                  <Link key={subIdx} to={sub.path} className="dropdown-subitem">
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );

  return (
    <nav className="navbar2">
      <div className="navbar2-logo">
        <span className="logo-icon"></span>
      </div>
      <div className="navbar2-container">
        {menuItems.map((menu) => (
          <div key={menu.id} className="navbar2-item">
            {!menu.items ? (
              <Link to={menu.path} className="navbar2-link">
                {menu.label}
              </Link>
            ) : (
              <div
                className="dropdown-wrapper"
                onMouseEnter={() => setOpenDropdown(menu.id)}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setOpenSubmenu(null);
                }}
              >
                <button
                  className="dropdown-button"
                  onClick={() => handleDropdownClick(menu.id)}
                >
                  {menu.label}
                  <span className="dropdown-arrow">▼</span>
                </button>

                {openDropdown === menu.id &&
                  (isMobileNav
                    ? // 👇 En mobile (donde ocurre el bug de Safari/iOS), el dropdown
                      // se renderiza directo en document.body vía Portal, saltándose
                      // el contenedor con overflow-x/scroll que lo estaba recortando.
                      // El CSS (position:fixed, top, right) sigue aplicándose igual,
                      // porque las reglas van por className, no por posición en el DOM.
                      createPortal(renderDropdownMenu(menu), document.body)
                    : // 👇 En desktop/tablet, se queda exactamente como estaba antes:
                      // position:absolute, anclado a su .dropdown-wrapper.
                      renderDropdownMenu(menu))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar2;