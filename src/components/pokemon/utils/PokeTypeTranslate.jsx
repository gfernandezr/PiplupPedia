function PokeTypeTranslate({ types }) {
  const type_es = {
    steel: "acero",
    water: "agua",
    bug: "bicho",
    dragon: "dragón",
    electric: "eléctrico",
    ghost: "fantasma",
    fire: "fuego",
    fairy: "hada",
    ice: "hielo",
    fighting: "lucha",
    normal: "normal",
    grass: "planta",
    psychic: "psíquico",
    rock: "roca",
    dark: "siniestro",
    ground: "tierra",
    poison: "veneno",
    flying: "volador",
  };

  return types.length === 1
    ? type_es[types[0].type.name]
    : types.map((types_i) => type_es[types_i.type.name]).join(" / ");
}

export default PokeTypeTranslate;
