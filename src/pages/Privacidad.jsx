


import NavBar2 from "../components/NavBar2";
import "./Legal.css";

function Privacidad() {
  return (
    <div className="legal-page">
      <NavBar2 />

      <section className="legal-hero">
        <span className="legal-badge">🔒 Legal</span>
        <h1 className="legal-h1">Política de privacidad</h1>
        <p className="legal-p">
          Última actualización: julio 2026
        </p>
      </section>

      <div className="legal-container">
        <section className="legal-block">
          <h2>1. Información que recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como
            nombre, correo electrónico, teléfono y dirección al crear una
            cuenta, realizar una compra o agendar una consulta veterinaria.
          </p>
        </section>

        <section className="legal-block">
          <h2>2. Cómo usamos tu información</h2>
          <p>
            Utilizamos tus datos para gestionar tu cuenta, procesar compras y
            citas, enviarte comunicaciones relacionadas con el servicio, y
            mejorar la experiencia dentro de la plataforma.
          </p>
        </section>

        <section className="legal-block">
          <h2>3. Datos de tu mascota</h2>
          <p>
            Al agendar servicios veterinarios, podemos recopilar información
            sobre tu mascota (especie, raza, edad, historial médico) con el
            único fin de brindar una atención adecuada.
          </p>
        </section>

        <section className="legal-block">
          <h2>4. Compartir información</h2>
          <p>
            No vendemos ni compartimos tu información personal con terceros
            para fines de marketing sin tu consentimiento. Podemos compartir
            datos con proveedores de servicios (como pasarelas de pago) solo
            en la medida necesaria para operar la plataforma.
          </p>
        </section>

        <section className="legal-block">
          <h2>5. Cookies</h2>
          <p>
            Usamos cookies para mejorar tu experiencia de navegación,
            recordar tus preferencias y analizar el uso del sitio. Puedes
            configurar tu navegador para rechazar cookies, aunque esto
            podría afectar algunas funcionalidades.
          </p>
        </section>

        <section className="legal-block">
          <h2>6. Seguridad de la información</h2>
          <p>
            Implementamos medidas técnicas y organizativas razonables para
            proteger tu información contra accesos no autorizados,
            alteración o divulgación.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, corrección o eliminación de tus datos
            personales en cualquier momento, escribiéndonos a través de
            nuestra página de <a href="/contacto">Contacto</a>.
          </p>
        </section>

        <section className="legal-block">
          <h2>8. Retención de datos</h2>
          <p>
            Conservamos tu información personal durante el tiempo necesario
            para cumplir con los fines descritos en esta política, salvo que
            la ley exija un período de retención distinto.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente.
            Cualquier cambio será publicado en esta página con la fecha de
            actualización correspondiente.
          </p>
        </section>

        <section className="legal-block">
          <h2>10. Contacto</h2>
          <p>
            Si tienes dudas sobre esta Política de Privacidad, contáctanos a
            través de nuestra página de <a href="/contacto">Contacto</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacidad;