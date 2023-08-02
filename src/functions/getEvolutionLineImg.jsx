async function getEvolutionLineImg(url) {
  const response = await fetch(url);
  const data = await response.json();
  const evolutionLine = [];

  async function addPoke(chain, list) {
    const pokeName = chain.species.name;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const data = await response.json();
    list.push([data.sprites.other["official-artwork"].front_default]);

    if (chain.evolves_to.length > 0) {
      for (const e of chain.evolves_to) {
        await addPoke(e, list[list.length - 1]);
      }
    }
  }

  await addPoke(data.chain, evolutionLine);
  return evolutionLine;
}

export default getEvolutionLineImg;
