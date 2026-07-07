import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const tieneCategoria = params.get("categoria");

    if (tieneCategoria) {
      // Espera a que la página termine de renderizar antes de buscar el ancla
      const timer = setTimeout(() => {
        const anchor = document.getElementById("tienda-anchor");
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;