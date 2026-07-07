


// Índice de búsqueda liviano: mapea palabras clave a rutas + categoría.
// No busca productos exactos, redirige a la sección más relevante.

const normalizar = (texto) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // saca tildes
    .trim();

// Cada especie: nombre(s) + categorías reales con su sufijo de URL
const especies = [
  {
    nombres: ["perro", "perros"],
    route: "/perros",
    sufijo: "-perros",
    categorias: ["comida", "arnes", "correas", "juguetes", "camas", "ropa", "ropa-hikari", "medicamentos", "higiene"],
  },
  {
    nombres: ["gato", "gatos"],
    route: "/gatos",
    sufijo: "-gatos",
    categorias: ["comida", "juguetes", "camas", "rascadores", "higiene", "ropa", "ropa-hikari", "medicamentos"],
  },
  {
    nombres: ["tortuga", "tortugas"],
    route: "/tortugas",
    sufijo: "-tortugas",
    categorias: ["alimento", "acuario", "iluminacion", "calefaccion", "suplementos", "mantenimiento", "accesorios"],
  },
  {
    nombres: ["iguana", "iguanas"],
    route: "/iguanas",
    sufijo: "-iguanas",
    categorias: ["alimento", "terrario", "iluminacion", "calefaccion", "suplementos", "higiene", "accesorios"],
  },
  {
    nombres: ["conejo", "conejos"],
    route: "/conejos",
    sufijo: "-conejos",
    categorias: ["alimento", "espacios", "accesorios", "higiene", "cuidado", "transportes"],
  },
  {
    nombres: ["cuy", "cuyes", "cuyi", "cuyito"],
    route: "/cuy",
    sufijo: "-cuy",
    categorias: ["alimento", "espacios", "accesorios", "cuidado", "higiene", "transportes"],
  },
  {
    nombres: ["huron", "hurones"],
    route: "/huron",
    sufijo: "-huron",
    categorias: ["alimento", "jaulas", "accesorios", "higiene", "cuidado", "transportes"],
  },
  {
    nombres: ["erizo", "erizos"],
    route: "/erizo",
    sufijo: "-erizo",
    categorias: ["alimento", "habitat", "accesorios", "cuidado", "higiene", "transportes"],
  },
  {
    nombres: ["ave", "aves", "pajaro", "pajaros", "loro", "loros", "canario", "canarios"],
    route: "/aves",
    sufijo: "-aves",
    categorias: ["alimento", "jaulas", "accesorios", "iluminacion", "suplementos", "higiene", "transportes"],
  },
];

// Tienda y Farmacia no sincronizan categoría por URL todavía, así que
// por ahora solo redirigen a la página general.
const otras = [
  { nombres: ["tienda", "productos", "accesorios", "juguetes", "ropa"], route: "/tienda" },
  {
    nombres: [
      "farmacia", "medicamento", "medicamentos", "vacuna", "vacunas",
      "antibiotico", "antibioticos", "jarabe", "jarabes", "gotas",
      "desparasitante", "antiinflamatorio", "vitaminas",
    ],
    route: "/farmacia",
  },
];

/**
 * Busca la mejor página + categoría para una consulta de texto libre.
 * Devuelve un string de ruta, ej: "/perros?categoria=comida-perros" o "/perros"
 * o null si no encontró nada relacionado.
 */
export function buscarRuta(query) {
  const q = normalizar(query);
  if (!q) return null;

  const palabras = q.split(/\s+/);

  // 1) ¿Coincide con el nombre de una especie + una categoría? (ej: "comida perros")
  for (const especie of especies) {
    const mencionaEspecie = especie.nombres.some((n) => q.includes(n));
    if (!mencionaEspecie) continue;

    const categoriaEncontrada = especie.categorias.find((cat) =>
      palabras.some((p) => cat.includes(p) || p.includes(cat))
    );

    if (categoriaEncontrada) {
      return `${especie.route}?categoria=${categoriaEncontrada}${especie.sufijo}`;
    }
    // Solo mencionó la especie, sin categoría específica
    return especie.route;
  }

  // 2) ¿Coincide con Tienda o Farmacia?
  for (const otra of otras) {
    if (otra.nombres.some((n) => q.includes(n))) {
      return otra.route;
    }
  }

  // 3) Última chance: busca la categoría sola en cualquier especie
  //    (ej: alguien escribe solo "juguetes" sin decir para qué animal)
  for (const especie of especies) {
    const categoriaEncontrada = especie.categorias.find((cat) =>
      palabras.some((p) => cat.includes(p) || p.includes(cat))
    );
    if (categoriaEncontrada) {
      return `${especie.route}?categoria=${categoriaEncontrada}${especie.sufijo}`;
    }
  }

  return null; // no se encontró nada relacionado
}