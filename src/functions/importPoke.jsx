import { useState, useEffect } from "react";

export const importPoke = (pokemon_url) => {
  const [poke, setPoke] = useState(null);
  const [pokespecies, setSpecies] = useState(null);

  useEffect(() => {
    fetch(pokemon_url)
      .then((response) => response.json())
      .then((pokemonData) => {
        setPoke(pokemonData);
        fetch(pokemonData.species.url)
          .then((speciesResponse) => speciesResponse.json())
          .then((speciesData) => setSpecies(speciesData));
      });
  }, [pokemon_url]);

  return [poke, pokespecies];
};
