async function getEvolutionLine(url) {
    const response = await fetch(url);
    const data = await response.json();
    const evolutionLine = [];

    function addPoke(chain, list) {
      const pokeName = chain.species.name;
      list.push([pokeName]);
       if (chain.evolves_to.length > 0) {
        chain.evolves_to.map((e)=>(addPoke(e, list[list.length - 1])));
      }
    }
    addPoke(data.chain, evolutionLine);
    return evolutionLine;
}

export default getEvolutionLine;