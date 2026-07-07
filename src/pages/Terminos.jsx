


import NavBar2 from "../components/NavBar2";
import "./Legal.css";

function Terminos() {
  return (
    <div className="legal-page">
      <NavBar2 />

      <section className="legal-hero">
        <span className="legal-badge">📄 Legal</span>
        <h1 className="legal-h1">Términos de servicio</h1>
        <p className="legal-p">
          Última actualización: julio 2026
        </p>
      </section>

      <div className="legal-container">
        <section className="legal-block">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web de Hikari, aceptas cumplir con
            estos Términos de Servicio. Si no estás de acuerdo con alguna
            parte de estos términos, te pedimos que no utilices nuestros
            servicios.
          </p>
        </section>

        <section className="legal-block">
          <h2>2. Descripción del servicio</h2>
          <p>
            Hikari ofrece servicios veterinarios, venta de productos para
            mascotas y contenido informativo relacionado con el cuidado
            animal. Nos reservamos el derecho de modificar, suspender o
            discontinuar cualquier parte del servicio en cualquier momento.
          </p>
        </section>

        <section className="legal-block">
          <h2>3. Cuentas de usuario</h2>
          <p>
            Para acceder a ciertas funciones de la plataforma es necesario
            crear una cuenta. Eres responsable de mantener la
            confidencialidad de tu contraseña y de toda la actividad que
            ocurra bajo tu cuenta.
          </p>
        </section>

        <section className="legal-block">
          <h2>4. Compras y pagos</h2>
          <p>
            Los precios de los productos están expresados en pesos chilenos
            (CLP) e incluyen los impuestos aplicables. Nos reservamos el
            derecho de modificar precios y disponibilidad de productos sin
            previo aviso.
          </p>
        </section>

        <section className="legal-block">
          <h2>5. Servicios veterinarios</h2>
          <p>
            Las evaluaciones y consultas veterinarias están sujetas a
            disponibilidad de horarios. La información entregada a través
            del sitio no reemplaza una consulta presencial con nuestro
            equipo profesional en casos de urgencia.
          </p>
        </section>

        <section className="legal-block">
          <h2>6. Propiedad intelectual</h2>
          <p>
            Todo el contenido del sitio, incluyendo textos, imágenes, logos
            y diseño, es propiedad de Hikari o de sus respectivos titulares,
            y está protegido por las leyes de propiedad intelectual
            vigentes.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Limitación de responsabilidad</h2>
          <p>
            Hikari no será responsable por daños indirectos, incidentales o
            consecuentes derivados del uso o la imposibilidad de uso de
            nuestros servicios.
          </p>
        </section>

        <section className="legal-block">
          <h2>8. Modificaciones</h2>
          <p>
            Podemos actualizar estos Términos de Servicio periódicamente. Te
            notificaremos de cambios significativos publicando la nueva
            versión en esta página.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos Términos de Servicio, puedes
            contactarnos a través de nuestra página de{" "}
            <a href="/contacto">Contacto</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terminos;