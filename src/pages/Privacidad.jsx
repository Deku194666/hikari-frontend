import NavBar2 from "../components/NavBar2";
import "./Legal.css";

const SECTIONS = [
  {
    title: "1. Introducción",
    paragraphs: [
      "En HIKARI reconocemos la importancia de proteger la privacidad y los datos personales de las personas que utilizan nuestro sitio web, crean una cuenta, compran productos, solicitan servicios veterinarios o se comunican con nosotros.",
      "Esta Política explica qué información podemos recopilar, para qué la utilizamos, cómo la protegemos, con quién podría compartirse y cuáles son los derechos que pueden ejercer los titulares de los datos.",
      "HIKARI procurará tratar los datos personales conforme a la legislación chilena aplicable en cada momento, incluyendo la normativa vigente sobre protección de datos personales y sus futuras modificaciones o normas complementarias.",
    ],
  },
  {
    title: "2. Responsable del Tratamiento",
    paragraphs: ["El responsable del tratamiento de los datos personales será:"],
    list: [
      "Nombre o razón social: Hikari SpA",
      "Nombre de fantasía: HIKARI",
      "RUT: 78.409.305-0",
      "Domicilio: No aplica",
      "Correo electrónico para privacidad: nlmg.vet@gmail.com",
      "Teléfono de contacto: +56 9 2831 2359",
    ],
  },
  {
    title: "3. A Quién se Aplica esta Política",
    paragraphs: ["Esta Política se aplica a:"],
    list: [
      "Visitantes del Sitio.",
      "Personas que crean una cuenta.",
      "Clientes.",
      "Tutores o tenedores responsables de animales.",
      "Personas que realizan compras.",
      "Personas que solicitan atención veterinaria.",
      "Personas que participan en promociones.",
      "Personas que se comunican con HIKARI.",
      "Personas que interactúan con nuestras redes o campañas digitales cuando corresponda.",
    ],
  },
  {
    title: "4. Datos que Podemos Recopilar",
    paragraphs: ["Dependiendo de la relación con el usuario, HIKARI podrá recopilar:"],
    subsections: [
      {
        subtitle: "4.1. Datos de identificación",
        list: [
          "Nombre y apellido.",
          "RUT u otro identificador cuando sea necesario.",
          "Fecha de nacimiento, cuando corresponda.",
          "Datos necesarios para verificar identidad.",
        ],
      },
      {
        subtitle: "4.2. Datos de contacto",
        list: [
          "Dirección.",
          "Correo electrónico.",
          "Número telefónico.",
          "Comuna, ciudad y región.",
          "Dirección para atención veterinaria o despacho.",
        ],
      },
      {
        subtitle: "4.3. Datos de cuenta",
        list: [
          "Nombre de usuario.",
          "Correo asociado.",
          "Contraseña almacenada mediante mecanismos de seguridad apropiados y no como texto visible para el personal autorizado, cuando la arquitectura tecnológica lo permita.",
          "Historial de acceso y actividad relevante para seguridad.",
        ],
      },
      {
        subtitle: "4.4. Información sobre animales registrados",
        paragraphs: ["Podemos tratar información relacionada con el animal, incluyendo:"],
        list: [
          "Nombre, especie, raza, sexo, edad, peso.",
          "Estado reproductivo.",
          "Número de microchip cuando sea proporcionado.",
          "Fotografías.",
          "Antecedentes clínicos, vacunas, medicamentos, diagnósticos, exámenes, tratamientos y procedimientos.",
          "Otros antecedentes necesarios para la atención.",
        ],
        paragraphsAfter: [
          "Aunque la información del animal no siempre constituye por sí misma un dato personal, puede estar vinculada al Tutor o permitir su identificación indirecta. Por ello, HIKARI procurará tratar dicha información con medidas de confidencialidad y seguridad adecuadas.",
        ],
      },
      {
        subtitle: "4.5. Información de compras y transacciones",
        list: [
          "Productos adquiridos.",
          "Servicios contratados.",
          "Fecha y monto de la operación.",
          "Estado del pago.",
          "Dirección de despacho.",
          "Historial de pedidos.",
        ],
        paragraphsAfter: [
          "Los datos completos de tarjetas bancarias serán tratados principalmente por los proveedores de pago que correspondan, según la infraestructura utilizada.",
        ],
      },
      {
        subtitle: "4.6. Comunicaciones",
        paragraphs: ["Podremos conservar mensajes enviados por:"],
        list: [
          "Formularios web.",
          "Correo electrónico.",
          "WhatsApp u otros canales oficiales.",
          "Solicitudes de atención.",
          "Reclamos.",
          "Encuestas.",
          "Comentarios.",
        ],
      },
      {
        subtitle: "4.7. Información técnica",
        paragraphs: ["Dependiendo de la configuración del Sitio, podremos recopilar:"],
        list: [
          "Dirección IP.",
          "Tipo de dispositivo, navegador y sistema operativo.",
          "Páginas visitadas.",
          "Fecha y hora de acceso.",
          "Cookies e identificadores similares.",
          "Información relacionada con seguridad y prevención de fraude.",
        ],
      },
    ],
  },
  {
    title: "5. Finalidades del Tratamiento",
    paragraphs: ["HIKARI podrá utilizar los datos para las siguientes finalidades:"],
    subsections: [
      {
        subtitle: "5.1. Prestación de servicios veterinarios",
        list: [
          "Identificar al Tutor y al paciente.",
          "Coordinar visitas.",
          "Mantener registros clínicos.",
          "Evaluar antecedentes y realizar seguimiento.",
          "Emitir documentos cuando corresponda.",
          "Comunicar resultados y gestionar derivaciones.",
          "Contactar al Tutor respecto de situaciones relacionadas con la atención.",
        ],
      },
      {
        subtitle: "5.2. Gestión de cuentas",
        list: [
          "Crear y administrar cuentas.",
          "Autenticar usuarios.",
          "Recuperar accesos.",
          "Prevenir accesos no autorizados.",
          "Mantener preferencias y configuraciones.",
        ],
      },
      {
        subtitle: "5.3. Comercio electrónico",
        list: [
          "Procesar pedidos.",
          "Gestionar pagos.",
          "Coordinar despachos.",
          "Emitir comprobantes o documentos tributarios.",
          "Gestionar cambios, devoluciones o garantías.",
          "Prevenir fraude.",
        ],
      },
      {
        subtitle: "5.4. Atención al cliente",
        list: [
          "Responder consultas.",
          "Gestionar reclamos.",
          "Mejorar nuestros procesos.",
          "Mantener registros necesarios para seguimiento.",
        ],
      },
      {
        subtitle: "5.5. Seguridad",
        list: [
          "Detectar actividades sospechosas.",
          "Prevenir fraude.",
          "Investigar incidentes.",
          "Proteger la infraestructura tecnológica.",
          "Proteger cuentas y usuarios.",
        ],
      },
      {
        subtitle: "5.6. Comunicaciones comerciales",
        paragraphs: [
          "Cuando exista una base legal o autorización válida para ello, HIKARI podrá enviar información relacionada con:",
        ],
        list: [
          "Nuevos servicios y productos.",
          "Promociones y descuentos.",
          "Campañas y contenido educativo.",
          "Recordatorios relacionados con productos o servicios.",
        ],
        paragraphsAfter: [
          "El usuario podrá solicitar dejar de recibir comunicaciones promocionales mediante los mecanismos habilitados.",
        ],
      },
      {
        subtitle: "5.7. Mejora del Sitio y análisis",
        paragraphs: ["Podremos utilizar información agregada, anonimizada o estadística para:"],
        list: [
          "Comprender el uso del Sitio.",
          "Mejorar productos y servicios.",
          "Detectar errores.",
          "Analizar tendencias.",
          "Mejorar la experiencia del usuario.",
        ],
      },
    ],
  },
  {
    title: "6. Bases para el Tratamiento",
    paragraphs: [
      "HIKARI procurará realizar el tratamiento de datos conforme a las bases y condiciones permitidas por la legislación aplicable. Dependiendo del caso, el tratamiento podrá ser necesario para:",
    ],
    list: [
      "Ejecutar una relación contractual.",
      "Prestar un servicio solicitado.",
      "Cumplir obligaciones legales.",
      "Proteger la seguridad de usuarios y sistemas.",
      "Gestionar adecuadamente una atención solicitada.",
      "Contar con el consentimiento del titular cuando sea requerido.",
      "Otras bases permitidas por la legislación vigente.",
    ],
    paragraphsAfter: [
      "Cuando el consentimiento sea requerido, HIKARI procurará obtenerlo de forma clara y conservar evidencia razonable de dicha manifestación.",
    ],
  },
  {
    title: "7. Datos Necesarios y Datos Opcionales",
    paragraphs: [
      "Algunos datos serán necesarios para crear una cuenta, procesar una compra o prestar un servicio veterinario.",
      "Cuando un dato solicitado sea necesario para una finalidad determinada, la falta de entrega podría impedir que HIKARI complete la operación o preste adecuadamente el servicio.",
      "Los datos opcionales podrán ser entregados voluntariamente por el usuario.",
    ],
  },
  {
    title: "8. Veracidad y Actualización",
    paragraphs: [
      "El usuario es responsable de proporcionar información verdadera y actualizada.",
      "HIKARI podrá solicitar confirmación o actualización de determinados datos cuando sea necesario.",
    ],
  },
  {
    title: "9. Confidencialidad de la Información Clínica",
    paragraphs: [
      "HIKARI procurará mantener la confidencialidad de la información clínica relacionada con los pacientes y sus Tutores.",
      "El acceso interno estará limitado, en la medida de lo posible, a personas que requieran conocer dicha información para:",
    ],
    list: [
      "Prestar el servicio.",
      "Dar continuidad a la atención.",
      "Gestionar procesos administrativos.",
      "Cumplir obligaciones legales.",
      "Resolver reclamos.",
      "Proteger derechos o seguridad cuando exista una razón legítima.",
    ],
  },
  {
    title: "10. Compartición de Datos",
    paragraphs: [
      "HIKARI no venderá datos personales como parte de su actividad ordinaria. Podremos compartir información cuando resulte necesario con:",
    ],
    subsections: [
      { subtitle: "10.1. Profesionales y personal autorizado", paragraphs: ["Para prestar o coordinar servicios veterinarios."] },
      {
        subtitle: "10.2. Proveedores tecnológicos",
        paragraphs: ["Por ejemplo:"],
        list: [
          "Hosting.",
          "Servicios de correo.",
          "Sistemas de agenda.",
          "Plataformas de gestión.",
          "Servicios de almacenamiento.",
          "Proveedores de seguridad.",
        ],
      },
      { subtitle: "10.3. Proveedores de pago", paragraphs: ["Para procesar transacciones."] },
      { subtitle: "10.4. Empresas de despacho", paragraphs: ["Cuando sea necesario entregar productos."] },
      { subtitle: "10.5. Laboratorios o proveedores relacionados con servicios", paragraphs: ["Cuando sea necesario procesar exámenes, análisis u otros servicios solicitados."] },
      { subtitle: "10.6. Autoridades", paragraphs: ["Cuando exista una obligación legal, requerimiento válido de una autoridad competente o necesidad de proteger derechos conforme a la legislación aplicable."] },
    ],
    paragraphsAfter: ["HIKARI procurará limitar la información compartida a aquella necesaria para cada finalidad."],
  },
  {
    title: "11. Proveedores y Tratamiento por Terceros",
    paragraphs: [
      "Cuando HIKARI utilice proveedores externos para almacenar o procesar información, procurará seleccionar servicios que implementen medidas de seguridad razonables.",
      "El proveedor externo podrá tratar información únicamente conforme a las funcionalidades contratadas, sus propios términos aplicables y las instrucciones o configuraciones de HIKARI cuando corresponda.",
    ],
  },
  {
    title: "12. Transferencias Internacionales",
    paragraphs: [
      "Algunos proveedores tecnológicos pueden almacenar o procesar información fuera de Chile.",
      "Cuando ello ocurra, HIKARI procurará utilizar mecanismos y proveedores que permitan un tratamiento compatible con la legislación aplicable.",
    ],
  },
  {
    title: "13. Seguridad de la Información",
    paragraphs: [
      "HIKARI implementará medidas técnicas, organizativas y administrativas razonables y proporcionales a la naturaleza de los datos y riesgos existentes. Estas medidas pueden incluir:",
    ],
    list: [
      "Control de acceso.",
      "Gestión de credenciales.",
      "Restricción de permisos.",
      "Uso de conexiones seguras cuando corresponda.",
      "Copias de respaldo.",
      "Monitoreo de seguridad.",
      "Actualización de sistemas.",
      "Medidas para prevenir accesos no autorizados.",
      "Procedimientos de respuesta ante incidentes.",
    ],
    paragraphsAfter: [
      "Sin perjuicio de lo anterior, ningún sistema conectado a Internet puede garantizar seguridad absoluta. Por ello, HIKARI no declara que exista un riesgo cero de incidentes, pero procurará adoptar medidas razonables para prevenir, detectar, contener y gestionar incidentes de seguridad.",
    ],
  },
  {
    title: "14. Seguridad de las Cuentas",
    paragraphs: ["El usuario deberá proteger sus credenciales. Se recomienda:"],
    list: [
      "Utilizar una contraseña robusta.",
      "No compartirla.",
      "No reutilizar contraseñas comprometidas.",
      "Cerrar sesión en dispositivos compartidos.",
      "Informar sospechas de acceso no autorizado.",
    ],
    paragraphsAfter: [
      "HIKARI podrá bloquear temporalmente una cuenta cuando detecte actividad que razonablemente pueda comprometer su seguridad.",
    ],
  },
  {
    title: "15. Cookies y Tecnologías Similares",
    paragraphs: ["El Sitio puede utilizar cookies y tecnologías similares para:"],
    list: [
      "Mantener sesiones.",
      "Recordar preferencias.",
      "Mejorar navegación.",
      "Analizar el funcionamiento del Sitio.",
      "Medir campañas cuando corresponda.",
      "Prevenir fraude.",
    ],
    paragraphsAfter: [
      "El usuario podrá configurar determinadas preferencias desde su navegador o mediante herramientas disponibles en el Sitio. La desactivación de determinadas cookies puede afectar algunas funcionalidades.",
      "Cuando corresponda conforme a la legislación aplicable, HIKARI solicitará las autorizaciones necesarias para el uso de tecnologías no esenciales.",
    ],
  },
  {
    title: "16. Conservación de los Datos",
    paragraphs: [
      "Los datos serán conservados durante el tiempo necesario para cumplir la finalidad para la cual fueron recopilados y para cumplir obligaciones legales, tributarias, contractuales, profesionales o de defensa de derechos. Los criterios de conservación podrán considerar:",
    ],
    list: [
      "Duración de la relación contractual.",
      "Necesidad de continuidad clínica.",
      "Plazos legales aplicables.",
      "Resolución de reclamos.",
      "Prevención de fraude.",
      "Exigencias de respaldo.",
    ],
    paragraphsAfter: [
      "Una vez finalizado el período necesario, los datos podrán ser eliminados, anonimizados o bloqueados según corresponda.",
    ],
  },
  {
    title: "17. Derechos de los Titulares",
    paragraphs: [
      "El titular de datos podrá ejercer los derechos que le reconozca la legislación aplicable. Dependiendo de la normativa vigente, estos pueden incluir derechos relacionados con:",
    ],
    list: [
      "Acceso e información.",
      "Rectificación y actualización.",
      "Supresión o eliminación cuando corresponda.",
      "Oposición en determinados casos.",
      "Solicitud de información sobre el tratamiento.",
    ],
    paragraphsAfter: [
      "Para ejercer estos derechos, el usuario podrá contactar a: nlmg.vet@gmail.com",
      "HIKARI podrá solicitar antecedentes razonables para verificar la identidad del solicitante y proteger la información contra accesos indebidos.",
    ],
  },
  {
    title: "18. Datos de Menores de Edad",
    paragraphs: [
      "HIKARI no pretende celebrar contratos directamente con menores de edad sin la intervención de su representante legal cuando ello sea requerido.",
      "Si se detecta que se han proporcionado datos de un menor en circunstancias que requieran autorización y esta no exista, HIKARI podrá adoptar medidas razonables para limitar o eliminar el tratamiento correspondiente.",
    ],
  },
  {
    title: "19. Datos Relacionados con Terceros",
    paragraphs: [
      "El usuario se compromete a no proporcionar información personal de terceros sin contar con una razón legítima o autorización cuando sea necesaria.",
      "Si el usuario entrega datos de otra persona, declara que cuenta con la autorización o fundamento necesario para hacerlo.",
    ],
  },
  {
    title: "20. Imágenes y Material Audiovisual",
    paragraphs: [
      "HIKARI podrá solicitar o recibir fotografías o videos de animales para fines relacionados con:",
    ],
    list: [
      "Evaluación preliminar.",
      "Seguimiento.",
      "Registro clínico.",
      "Atención veterinaria.",
      "Resolución de consultas.",
    ],
    paragraphsAfter: [
      "La utilización de imágenes con fines publicitarios, testimoniales, promocionales o comerciales se realizará únicamente cuando exista una autorización adecuada o una base jurídica que permita dicho uso.",
      "La negativa a autorizar el uso promocional de una imagen no afectará el acceso ordinario del usuario a los servicios.",
    ],
  },
  {
    title: "21. Comunicaciones por WhatsApp, Correo y Otros Medios",
    paragraphs: [
      "Cuando el usuario proporcione un número telefónico o correo electrónico, HIKARI podrá utilizar dichos datos para comunicaciones relacionadas con:",
    ],
    list: [
      "Reservas y compras.",
      "Entregas.",
      "Atención veterinaria y resultados.",
      "Seguimiento.",
      "Seguridad de la cuenta.",
      "Cambios relevantes.",
    ],
    paragraphsAfter: [
      "Las comunicaciones promocionales estarán sujetas a las condiciones y autorizaciones que resulten aplicables.",
    ],
  },
  {
    title: "22. Enlaces a Sitios de Terceros",
    paragraphs: [
      "El Sitio puede contener enlaces a plataformas o sitios externos.",
      "HIKARI no controla necesariamente las políticas de privacidad, seguridad o contenido de dichos terceros.",
      "El usuario deberá revisar las políticas aplicables de cada plataforma externa.",
    ],
  },
  {
    title: "23. Incidentes de Seguridad",
    paragraphs: [
      "En caso de detectar un incidente que pueda afectar datos personales, HIKARI procurará:",
    ],
    list: [
      "Investigar el incidente.",
      "Adoptar medidas razonables de contención.",
      "Evaluar el impacto.",
      "Recuperar la seguridad de los sistemas cuando sea posible.",
      "Cumplir las obligaciones de comunicación o notificación que establezca la legislación aplicable.",
    ],
  },
  {
    title: "24. Actualizaciones de esta Política",
    paragraphs: ["HIKARI podrá actualizar esta Política para adaptarla a:"],
    list: [
      "Cambios legislativos.",
      "Cambios tecnológicos.",
      "Nuevos servicios.",
      "Nuevos proveedores.",
      "Cambios en los procesos internos.",
    ],
    paragraphsAfter: [
      "La fecha de actualización será indicada al inicio del documento. Cuando un cambio sea relevante, HIKARI podrá informar al usuario por medios razonables.",
    ],
  },
  {
    title: "25. Vigencia y Adaptación Normativa",
    paragraphs: [
      "Esta Política se aplicará desde su publicación.",
      "HIKARI revisará y actualizará sus prácticas de privacidad cuando resulte necesario para cumplir con la normativa vigente en Chile, incluyendo las modificaciones que entren en vigor respecto de la protección de datos personales.",
    ],
  },
  {
    title: "26. Contacto",
    paragraphs: ["Para consultas, solicitudes relacionadas con privacidad o ejercicio de derechos:"],
    list: [
      "HIKARI – Salud Animal a Domicilio y Petshop",
      "Correo general: nlmg.vet@gmail.com",
      "Teléfono/WhatsApp: +56 9 2831 2359",
      "Sitio web: www.hikarivet.com",
    ],
  },
];

function Privacidad() {
  return (
    <div className="legal-page">
      <NavBar2 />

      <section className="legal-hero">
        <span className="legal-badge">🔒 Legal</span>
        <h1 className="legal-h1">Política de Privacidad</h1>
        <p className="legal-p">Última actualización: Agosto 2026</p>
      </section>

      <div className="legal-container">
        {SECTIONS.map((section, idx) => (
          <div key={idx} className="legal-block">
            <h2>{section.title}</h2>
            {section.paragraphs &&
              section.paragraphs.map((p, i) => <p key={`p-${i}`}>{p}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={`li-${i}`}>{item}</li>
                ))}
              </ul>
            )}
            {section.subsections &&
              section.subsections.map((sub, si) => (
                <div key={`sub-${si}`} className="legal-subsection">
                  <h3>{sub.subtitle}</h3>
                  {sub.paragraphs &&
                    sub.paragraphs.map((p, i) => <p key={`sp-${i}`}>{p}</p>)}
                  {sub.list && (
                    <ul>
                      {sub.list.map((item, i) => (
                        <li key={`sli-${i}`}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {sub.paragraphsAfter &&
                    sub.paragraphsAfter.map((p, i) => (
                      <p key={`spa-${i}`}>{p}</p>
                    ))}
                </div>
              ))}
            {section.paragraphsAfter &&
              section.paragraphsAfter.map((p, i) => (
                <p key={`pa-${i}`}>{p}</p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Privacidad;