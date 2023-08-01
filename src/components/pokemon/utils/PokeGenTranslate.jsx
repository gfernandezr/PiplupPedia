function PokeGenTranslate({ gen }) {
  const gen_es = {
    "generation-i": "primera",
    "generation-ii": "segunda",
    "generation-iii": "tercera",
    "generation-iv": "cuarta",
    "generation-v": "quinta",
    "generation-vi": "sexta",
    "generation-vii": "séptima",
    "generation-viii": "octava",
  };

  return gen_es[gen];
}

export default PokeGenTranslate;
