import NavBar2 from "../components/NavBar2";
import "./Legal.css";

const SECTIONS = [
  {
    title: "1. Identificación del Prestador",
    paragraphs: [
      "El presente documento regula el acceso, navegación, registro, compra de productos y contratación de servicios a través del sitio web www.hikarivet.com, en adelante indistintamente el \"Sitio\", \"HIKARI\", \"nosotros\" o el \"Prestador\".",
      "Los servicios y productos ofrecidos a través del Sitio son prestados y/o comercializados por:",
    ],
    list: [
      "Nombre o razón social: Hikari SpA",
      "Nombre de fantasía: HIKARI",
      "RUT: 78.409.305-0",
      "Domicilio legal: Teatinos #690",
      "Correo electrónico de contacto: nlmg.vet@gmail.com",
      "Teléfono o WhatsApp de contacto: +56 9 2831 2359",
      "Representante legal, cuando corresponda: Nils Ludwig Meyer Galindo",
    ],
    paragraphsAfter: [
      "HIKARI desarrolla, según disponibilidad y zona de cobertura, actividades relacionadas con servicios veterinarios, atención veterinaria a domicilio, orientación y coordinación de servicios, comercialización de productos para animales de compañía y otros servicios o productos que sean informados expresamente en el Sitio.",
    ],
  },
  {
    title: "2. Aceptación de los Términos y Condiciones",
    paragraphs: [
      "Al navegar, registrarse, crear una cuenta, solicitar una atención, realizar una compra o utilizar cualquier funcionalidad del Sitio, el usuario declara haber leído y comprendido estos Términos y Condiciones.",
      "La aceptación electrónica de estos Términos y Condiciones tendrá la validez que corresponda conforme a la legislación aplicable y será considerada como manifestación de voluntad respecto de las acciones realizadas por el usuario dentro de la plataforma.",
      "Si el usuario no está de acuerdo con estos Términos y Condiciones, deberá abstenerse de utilizar las funcionalidades que requieran aceptación contractual, incluyendo la creación de una cuenta, contratación de servicios o compra de productos.",
      "Estos Términos y Condiciones complementan la Política de Privacidad, la información específica de cada servicio o producto, las políticas de despacho, cambios, devoluciones y cualquier consentimiento informado que corresponda a un procedimiento veterinario determinado.",
    ],
  },
  {
    title: "3. Definiciones",
    paragraphs: ["Para efectos de este documento:"],
    list: [
      "Usuario: persona que navega o utiliza el Sitio.",
      "Cliente o Tutor: persona natural o jurídica que solicita un servicio, realiza una compra o registra uno o más animales en la plataforma.",
      "Tenedor Responsable: persona que, conforme a la legislación aplicable, es responsable del cuidado, manejo y decisiones relacionadas con el animal.",
      "Paciente: animal respecto del cual se solicita o presta un servicio veterinario.",
      "Servicio Veterinario: prestación profesional realizada por un médico veterinario u otro profesional o personal habilitado, según corresponda.",
      "Petshop: sección destinada a la comercialización de productos para animales y sus responsables.",
      "Cuenta: perfil personal creado por el usuario para gestionar información, compras, solicitudes, mascotas u otras funcionalidades disponibles.",
    ],
  },
  {
    title: "4. Modificaciones a estos Términos",
    paragraphs: [
      "HIKARI podrá modificar, actualizar o complementar estos Términos y Condiciones cuando sea necesario debido a cambios legales, tecnológicos, operativos o comerciales.",
      "Las modificaciones no tendrán efecto retroactivo respecto de contratos o servicios ya celebrados, salvo cuando una norma legal obligue a ello o cuando la modificación resulte favorable para el consumidor.",
      "La versión vigente estará disponible en el Sitio. Cuando corresponda y la modificación sea relevante para los derechos u obligaciones del usuario, HIKARI podrá comunicarla mediante correo electrónico, aviso en el Sitio u otro medio razonable.",
    ],
  },
  {
    title: "5. Capacidad y Uso del Sitio",
    paragraphs: [
      "El usuario declara contar con capacidad legal suficiente para contratar.",
      "Las personas menores de edad podrán navegar por el Sitio, pero la contratación de servicios veterinarios, realización de compras, creación de obligaciones de pago o aceptación de consentimientos deberá ser realizada por su representante legal o por una persona con capacidad legal suficiente.",
      "El usuario se compromete a utilizar el Sitio de manera lícita y conforme a estos Términos. Queda prohibido:",
    ],
    list: [
      "Crear cuentas utilizando identidades falsas.",
      "Suplantar a terceros.",
      "Proporcionar antecedentes veterinarios falsos o deliberadamente incompletos.",
      "Interferir con el funcionamiento del Sitio.",
      "Intentar acceder a cuentas o sistemas sin autorización.",
      "Utilizar el Sitio para fines fraudulentos.",
      "Reproducir o explotar comercialmente contenidos de HIKARI sin autorización.",
      "Utilizar los canales de atención para amenazas, hostigamiento, abuso o actividades ilícitas.",
    ],
  },
  {
    title: "6. Creación y Administración de Cuentas",
    paragraphs: [
      "Para utilizar determinadas funcionalidades, HIKARI podrá solicitar la creación de una cuenta.",
      "El usuario deberá proporcionar información verdadera, actualizada y completa. El usuario será responsable de:",
    ],
    list: [
      "Mantener actualizados sus datos.",
      "Resguardar sus credenciales de acceso.",
      "No compartir su contraseña con terceros.",
      "Informar oportunamente cualquier acceso no autorizado.",
      "Revisar la información ingresada antes de solicitar un servicio o realizar una compra.",
    ],
    paragraphsAfter: [
      "La creación de una cuenta no garantiza la disponibilidad permanente de productos, servicios, horarios o profesionales.",
      "HIKARI podrá suspender o restringir una cuenta cuando existan antecedentes razonables de fraude, uso indebido, suplantación de identidad, incumplimiento grave de estos Términos o riesgos para la seguridad de otros usuarios, trabajadores, profesionales o sistemas. Cuando sea posible, la medida será informada al usuario y se procurará conservar los derechos que legalmente correspondan.",
    ],
  },
  {
    title: "7. Información del Animal y Responsabilidad del Tutor",
    paragraphs: [
      "El Tutor declara que la información proporcionada respecto del animal es verdadera según su leal saber y entender. Esto incluye, entre otros antecedentes:",
    ],
    list: [
      "Especie, raza o tipo, sexo, edad o fecha de nacimiento aproximada, peso.",
      "Estado reproductivo.",
      "Vacunaciones y desparasitaciones.",
      "Enfermedades previas o actuales.",
      "Medicamentos administrados.",
      "Alergias o reacciones adversas conocidas.",
      "Cirugías previas.",
      "Resultados de exámenes disponibles.",
      "Conducta, antecedentes de agresividad o miedo.",
      "Riesgos conocidos para el manejo y otros antecedentes relevantes para la atención.",
    ],
    paragraphsAfter: [
      "La omisión de información relevante puede afectar el diagnóstico, pronóstico, tratamiento o seguridad del paciente y de las personas involucradas.",
      "El Tutor deberá informar inmediatamente cualquier cambio relevante en el estado del animal antes de la atención.",
    ],
  },
  {
    title: "8. Naturaleza de los Servicios Veterinarios",
    paragraphs: [
      "La medicina veterinaria constituye una actividad profesional basada en la evaluación clínica, los antecedentes disponibles, el conocimiento científico y el juicio profesional. El Tutor comprende que:",
    ],
    list: [
      "No todos los diagnósticos pueden establecerse durante una primera consulta.",
      "Puede ser necesario realizar exámenes complementarios.",
      "Algunos diagnósticos requieren seguimiento o evolución clínica.",
      "La respuesta a tratamientos puede variar entre animales.",
      "Ningún tratamiento puede garantizar un resultado determinado.",
      "El pronóstico puede modificarse según la evolución del paciente.",
    ],
    paragraphsAfter: [
      "HIKARI y los profesionales que intervengan no garantizan la curación absoluta de una enfermedad ni un resultado específico cuando ello dependa de factores biológicos, clínicos, ambientales o del cumplimiento de las indicaciones entregadas.",
      "Lo anterior no limita las responsabilidades legales que correspondan en caso de incumplimiento de obligaciones profesionales o legales.",
    ],
  },
  {
    title: "9. Atención Veterinaria a Domicilio",
    paragraphs: ["La atención a domicilio estará sujeta a:"],
    list: [
      "Disponibilidad de profesionales.",
      "Horarios disponibles.",
      "Zona de cobertura.",
      "Condiciones de acceso al domicilio.",
      "Condiciones mínimas de seguridad.",
      "Condiciones clínicas del paciente.",
      "Disponibilidad de insumos, medicamentos o equipos necesarios.",
    ],
    paragraphsAfter: [
      "El Tutor deberá proporcionar una dirección correcta y condiciones razonables para realizar la atención.",
      "Cuando la evaluación profesional determine que el domicilio no cuenta con condiciones adecuadas para realizar un procedimiento, HIKARI podrá recomendar o requerir la derivación del paciente a una clínica, hospital u otro establecimiento apropiado.",
    ],
  },
  {
    title: "10. Servicios que no Sustituyen una Atención de Urgencia",
    paragraphs: [
      "Salvo que HIKARI informe expresamente la existencia de un servicio de urgencia con disponibilidad determinada, el Sitio no deberá ser considerado un servicio de respuesta inmediata para emergencias.",
      "En caso de que el animal presente signos graves o potencialmente mortales, tales como dificultad respiratoria severa, pérdida de conciencia, hemorragia abundante, convulsiones persistentes, trauma grave, intoxicación sospechada u otra situación de urgencia, el Tutor deberá procurar atención veterinaria inmediata en un centro con capacidad de respuesta adecuada.",
      "El envío de un formulario, mensaje, correo electrónico o solicitud a través del Sitio no garantiza una respuesta inmediata.",
    ],
  },
  {
    title: "11. Agendamiento de Horas",
    paragraphs: [
      "La solicitud de una hora no constituye necesariamente confirmación definitiva de la atención.",
      "La reserva se considerará confirmada cuando HIKARI comunique al usuario la aceptación de la solicitud y, cuando corresponda, se haya verificado el pago o abono requerido. El Tutor deberá:",
    ],
    list: [
      "Estar disponible durante la franja horaria informada.",
      "Proporcionar datos de contacto correctos.",
      "Facilitar el acceso al domicilio.",
      "Contar con autorización para recibir al profesional cuando corresponda.",
      "Mantener al animal en condiciones que permitan su evaluación segura.",
    ],
    paragraphsAfter: [
      "Los horarios podrán sufrir modificaciones razonables por condiciones de tránsito, duración de atenciones anteriores, contingencias, condiciones climáticas, situaciones de seguridad u otras circunstancias operativas. HIKARI procurará informar retrasos relevantes cuando sea posible.",
    ],
  },
  {
    title: "12. Cancelaciones, Reprogramaciones y Ausencia del Cliente",
    paragraphs: [
      "Las condiciones específicas de cancelación y reprogramación podrán ser informadas al momento de realizar la reserva.",
      "Cuando exista una política de cobro por cancelación tardía, inasistencia o imposibilidad de realizar la atención por causas imputables al Tutor, dicha condición deberá ser informada antes de la contratación.",
      "El Tutor deberá informar con la mayor anticipación posible si necesita cancelar o modificar una hora.",
      "Podrán existir gastos o cargos no reembolsables cuando ya se hayan movilizado recursos, profesionales o insumos, siempre que ello haya sido informado previamente y sea compatible con la legislación aplicable.",
    ],
  },
  {
    title: "13. Condiciones de Seguridad durante la Visita",
    paragraphs: [
      "El Tutor deberá adoptar medidas razonables para proteger la seguridad del paciente, del profesional y de terceros. Cuando corresponda, podrá ser necesario:",
    ],
    list: [
      "Utilizar correa, arnés o bozal apropiado.",
      "Mantener al animal separado de otros animales.",
      "Contar con apoyo de un adulto responsable.",
      "Informar antecedentes de agresividad o mordeduras.",
      "Permitir que el profesional determine si existen condiciones mínimas para continuar.",
    ],
    paragraphsAfter: [
      "El profesional podrá suspender, modificar o rechazar una atención cuando existan riesgos razonables para la integridad física de las personas o del animal.",
    ],
  },
  {
    title: "14. Consentimiento Informado",
    paragraphs: [
      "Determinados procedimientos podrán requerir consentimiento informado específico. Dependiendo del servicio, el consentimiento podrá referirse a:",
    ],
    list: [
      "Vacunación y administración de medicamentos.",
      "Procedimientos diagnósticos y toma de muestras.",
      "Sedación y procedimientos invasivos.",
      "Cirugía.",
      "Eutanasia, cuando legal y profesionalmente corresponda.",
      "Uso de imágenes clínicas.",
      "Derivaciones y otros procedimientos que impliquen riesgos relevantes.",
    ],
    paragraphsAfter: [
      "El consentimiento informado específico prevalecerá respecto de las condiciones particulares del procedimiento correspondiente.",
      "El Tutor declara comprender que todo procedimiento médico o veterinario puede involucrar riesgos, efectos adversos, complicaciones o resultados no esperados.",
    ],
  },
  {
    title: "15. Diagnóstico, Tratamiento y Derivación",
    paragraphs: [
      "Las decisiones clínicas serán adoptadas por el profesional responsable de acuerdo con los antecedentes disponibles y su criterio profesional. El Tutor podrá recibir recomendaciones de:",
    ],
    list: [
      "Exámenes, tratamientos, hospitalización.",
      "Derivación e interconsulta.",
      "Atención especializada.",
      "Seguimiento y cambio de manejo.",
    ],
    paragraphsAfter: [
      "La negativa del Tutor a realizar exámenes, tratamientos, derivaciones o procedimientos recomendados podrá limitar las posibilidades diagnósticas o terapéuticas. Cuando corresponda, dicha decisión podrá quedar registrada en la ficha clínica.",
    ],
  },
  {
    title: "16. Medicamentos y Recetas",
    paragraphs: ["Los medicamentos serán indicados o prescritos según corresponda al caso clínico y a la normativa aplicable. El Tutor deberá:"],
    list: [
      "Administrar los medicamentos conforme a las instrucciones entregadas.",
      "Informar reacciones adversas o dificultades.",
      "No modificar dosis por iniciativa propia.",
      "No reutilizar tratamientos prescritos para otros animales sin evaluación profesional.",
      "No administrar medicamentos humanos o veterinarios sin orientación profesional cuando ello pueda representar un riesgo.",
    ],
    paragraphsAfter: [
      "La emisión de recetas estará sujeta a la evaluación profesional y a la normativa aplicable. HIKARI podrá negarse a emitir una receta cuando no exista una base clínica suficiente, cuando el profesional no haya evaluado adecuadamente al paciente o cuando ello resulte contrario a la normativa o al criterio profesional.",
    ],
  },
  {
    title: "17. Ficha Clínica y Registros",
    paragraphs: [
      "HIKARI podrá mantener registros clínicos y administrativos relacionados con el paciente y los servicios contratados. Estos registros podrán incluir antecedentes del Tutor, identificación del paciente, anamnesis, hallazgos clínicos, diagnósticos, exámenes, tratamientos, recetas, consentimientos, comunicaciones relevantes y otros antecedentes necesarios para la continuidad de la atención y cumplimiento de obligaciones legales o profesionales.",
      "El tratamiento de los datos personales se regirá además por la Política de Privacidad de HIKARI.",
    ],
  },
  {
    title: "18. Certificados y Documentos",
    paragraphs: [
      "Los certificados, informes, recetas y demás documentos emitidos por HIKARI serán elaborados sobre la base de los antecedentes disponibles y la evaluación profesional correspondiente.",
      "La solicitud de un documento no garantiza su emisión. HIKARI podrá requerir antecedentes adicionales antes de emitir un certificado.",
      "El Tutor será responsable de verificar los requisitos exigidos por aerolíneas, autoridades, países de destino, municipalidades, organismos públicos u otras instituciones.",
      "La emisión de un certificado por parte de HIKARI no garantiza que una autoridad externa acepte dicho documento, especialmente cuando existan requisitos adicionales o cambios normativos.",
    ],
  },
  {
    title: "19. Teleorientación y Comunicaciones Remotas",
    paragraphs: [
      "Cuando HIKARI ofrezca orientación remota, teleconsulta o comunicación mediante medios digitales, el usuario comprende las limitaciones inherentes a la evaluación a distancia. Una atención remota puede no permitir:",
    ],
    list: [
      "Realizar un examen físico completo.",
      "Obtener parámetros clínicos confiables.",
      "Detectar determinadas alteraciones.",
      "Sustituir una consulta presencial cuando esta sea necesaria.",
    ],
    paragraphsAfter: [
      "El profesional podrá recomendar atención presencial, exámenes o derivación. Los mensajes enviados fuera de los canales o horarios definidos no constituyen una garantía de monitoreo permanente.",
    ],
  },
  {
    title: "20. Petshop y Venta de Productos",
    paragraphs: [
      "HIKARI podrá comercializar productos para animales de compañía y sus responsables.",
      "Las imágenes publicadas tienen fines ilustrativos y pueden existir diferencias razonables de color, presentación, envase o diseño respecto del producto final.",
      "HIKARI procurará mantener actualizada la información relativa a características, precios y disponibilidad. No obstante, pueden producirse errores involuntarios de digitación, actualización o disponibilidad. Cuando exista un error manifiesto que afecte elementos esenciales de la compra, HIKARI podrá contactar al consumidor para informar la situación y ofrecer alternativas compatibles con la legislación aplicable.",
    ],
  },
  {
    title: "21. Stock y Disponibilidad",
    paragraphs: [
      "Los productos estarán sujetos a disponibilidad. La incorporación de un producto al carrito no garantiza su reserva definitiva.",
      "En caso de falta de stock posterior a una compra, HIKARI informará al cliente y procederá conforme a las alternativas legalmente aplicables, incluyendo, cuando corresponda, devolución del monto pagado.",
    ],
  },
  {
    title: "22. Precios",
    paragraphs: [
      "Los precios serán informados en moneda chilena, salvo que se indique expresamente otra cosa.",
      "Antes de finalizar una compra se informará el valor aplicable y, cuando corresponda, costos adicionales tales como despacho.",
      "Las promociones podrán estar sujetas a vigencia, stock, condiciones o cantidades determinadas, las cuales serán informadas de manera clara.",
    ],
  },
  {
    title: "23. Medios de Pago",
    paragraphs: [
      "Los medios de pago disponibles serán aquellos informados en el Sitio al momento de realizar la transacción.",
      "Los pagos podrán ser procesados por proveedores externos especializados. HIKARI no necesariamente almacena datos completos de tarjetas bancarias.",
      "La aprobación o rechazo de una transacción podrá depender de la entidad financiera, medio de pago o proveedor tecnológico correspondiente.",
    ],
  },
  {
    title: "24. Confirmación de la Compra o Contratación",
    paragraphs: [
      "Una vez realizada una compra o contratación, HIKARI enviará una confirmación por el medio de contacto registrado, cuando corresponda.",
      "El usuario deberá revisar la información contenida en dicha confirmación e informar oportunamente cualquier error.",
    ],
  },
  {
    title: "25. Despacho y Entrega",
    paragraphs: [
      "Las condiciones de despacho, zonas de cobertura, plazos estimados y costos serán informados antes de finalizar la compra cuando corresponda.",
      "Los plazos informados son estimados, salvo que expresamente se indique una fecha o condición diferente.",
      "El cliente deberá proporcionar una dirección correcta y condiciones razonables para la recepción.",
      "Si la entrega no puede realizarse debido a datos incorrectos, ausencia del destinatario o imposibilidad de acceso imputable al cliente, podrán aplicarse condiciones de reenvío previamente informadas.",
    ],
  },
  {
    title: "26. Retracto, Cambios y Devoluciones",
    paragraphs: [
      "Los derechos del consumidor se regirán por la legislación chilena aplicable.",
      "Cuando legalmente corresponda el derecho de retracto, HIKARI respetará dicho derecho en los términos, plazos y condiciones establecidos por la normativa vigente.",
      "Si HIKARI excluye el derecho de retracto respecto de determinados productos o servicios cuando la ley permita hacerlo, dicha exclusión deberá ser informada previamente de forma clara y destacada.",
      "Los productos que, por razones legales, sanitarias, de higiene, naturaleza o uso, se encuentren dentro de una excepción legal podrán estar sujetos a condiciones especiales.",
      "Las políticas internas de cambio o devolución no podrán limitar los derechos irrenunciables reconocidos por la legislación aplicable.",
    ],
  },
  {
    title: "27. Garantía Legal",
    paragraphs: [
      "Los productos comercializados por HIKARI estarán sujetos a las normas de garantía legal que resulten aplicables.",
      "La garantía legal no cubre daños producidos exclusivamente por:",
    ],
    list: [
      "Uso indebido.",
      "Manipulación contraria a las instrucciones.",
      "Desgaste normal.",
      "Accidentes.",
      "Modificaciones no autorizadas.",
      "Daños atribuibles al consumidor o a terceros.",
    ],
    paragraphsAfter: [
      "Nada de lo anterior limita los derechos que legalmente correspondan al consumidor cuando exista una falta de conformidad, defecto o incumplimiento cubierto por la normativa aplicable.",
    ],
  },
  {
    title: "28. Promociones y Cupones",
    paragraphs: ["Las promociones, descuentos y códigos promocionales podrán estar sujetos a condiciones específicas. Salvo indicación expresa:"],
    list: [
      "No son acumulables.",
      "Pueden estar sujetos a stock.",
      "Pueden tener fecha de vencimiento.",
      "Pueden aplicarse solo a determinados productos o servicios.",
    ],
    paragraphsAfter: ["Las condiciones particulares serán informadas junto con la promoción."],
  },
  {
    title: "29. Propiedad Intelectual",
    paragraphs: [
      "El nombre HIKARI, sus logotipos, diseños, textos, fotografías, ilustraciones, contenidos, marcas, gráficos y demás elementos del Sitio se encuentran protegidos por la normativa aplicable o son utilizados legítimamente por HIKARI.",
      "No se autoriza su reproducción, distribución, modificación o explotación comercial sin autorización previa.",
    ],
  },
  {
    title: "30. Disponibilidad del Sitio",
    paragraphs: [
      "HIKARI procurará mantener el Sitio disponible y funcional. Sin embargo, pueden existir interrupciones por:",
    ],
    list: [
      "Mantención y actualizaciones.",
      "Fallas técnicas o de conectividad.",
      "Eventos de seguridad.",
      "Fallas de proveedores externos.",
      "Casos fortuitos o fuerza mayor.",
    ],
    paragraphsAfter: [
      "HIKARI no garantiza disponibilidad absoluta e ininterrumpida del Sitio. Cuando sea razonablemente posible, se procurará informar interrupciones relevantes.",
    ],
  },
  {
    title: "31. Seguridad y Fraude",
    paragraphs: ["HIKARI podrá implementar medidas razonables para prevenir:"],
    list: [
      "Fraude y accesos no autorizados.",
      "Uso indebido de cuentas.",
      "Operaciones sospechosas.",
      "Ataques informáticos.",
    ],
    paragraphsAfter: [
      "Cuando existan antecedentes razonables de fraude o riesgo de seguridad, HIKARI podrá solicitar información adicional o suspender temporalmente una operación mientras se realizan verificaciones.",
    ],
  },
  {
    title: "32. Limitación de Responsabilidad",
    paragraphs: [
      "Nada de lo establecido en estos Términos pretende excluir o limitar responsabilidades que no puedan ser excluidas conforme a la legislación chilena.",
      "Dentro de los límites permitidos por la ley, HIKARI no será responsable por daños derivados exclusivamente de:",
    ],
    list: [
      "Información falsa u omitida por el usuario.",
      "Incumplimiento de instrucciones veterinarias.",
      "Administración incorrecta de medicamentos por el Tutor.",
      "Evolución clínica imprevisible.",
      "Negativa del Tutor a realizar procedimientos o derivaciones recomendadas.",
      "Actos de terceros ajenos a HIKARI.",
      "Fuerza mayor o caso fortuito.",
      "Uso indebido de productos.",
      "Accesos fraudulentos derivados de negligencia grave del usuario respecto de sus credenciales.",
    ],
    paragraphsAfter: [
      "Esta disposición no limita las responsabilidades que puedan derivarse de incumplimientos legales, contractuales o profesionales atribuibles a HIKARI o al profesional responsable.",
    ],
  },
  {
    title: "33. Reclamos y Atención al Cliente",
    paragraphs: ["Los usuarios podrán realizar consultas, solicitudes o reclamos mediante:"],
    list: [
      "Correo electrónico: nlmg.vet@gmail.com",
      "Teléfono o WhatsApp: +56 9 2831 2359",
      "Formulario disponible en el Sitio, cuando corresponda.",
    ],
    paragraphsAfter: [
      "HIKARI procurará responder dentro de un plazo razonable. El usuario mantiene los derechos y vías de reclamación establecidos por la legislación aplicable.",
    ],
  },
  {
    title: "34. Protección de Datos Personales",
    paragraphs: [
      "El tratamiento de datos personales se regirá por la Política de Privacidad de HIKARI, la cual forma parte integrante de estos Términos y Condiciones.",
    ],
  },
  {
    title: "35. Nulidad Parcial",
    paragraphs: [
      "Si alguna disposición de estos Términos fuera declarada inválida, ilegal o inaplicable, las restantes disposiciones continuarán vigentes en la medida permitida por la ley.",
    ],
  },
  {
    title: "36. Legislación Aplicable",
    paragraphs: [
      "Estos Términos y Condiciones se regirán por las leyes de la República de Chile.",
      "Los derechos del consumidor reconocidos por la legislación chilena serán respetados y no podrán ser limitados mediante disposiciones contrarias a normas imperativas.",
    ],
  },
  {
    title: "37. Contacto",
    paragraphs: ["Para consultas relacionadas con estos Términos y Condiciones:"],
    list: [
      "HIKARI – Salud Animal a Domicilio y Petshop",
      "Correo electrónico: nlmg.vet@gmail.com",
      "Teléfono/WhatsApp: +56 9 2831 2359",
      "Domicilio: Teatinos #690",
      "Sitio web: www.hikarivet.com",
    ],
  },
];

function TerminosCondiciones() {
  return (
    <div className="legal-page">
      <NavBar2 />

      <section className="legal-hero">
        <span className="legal-badge">📜 Legal</span>
        <h1 className="legal-h1">Términos y Condiciones</h1>
        <p className="legal-p">Última actualización: Agosto 2026</p>
      </section>

      <div className="legal-container">
        {SECTIONS.map((section, idx) => (
          <div key={idx} className="legal-block">
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={`p-${i}`}>{p}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={`li-${i}`}>{item}</li>
                ))}
              </ul>
            )}
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

export default TerminosCondiciones;