import { useSearchParams } from "react-router-dom";

import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

import { useParams } from "react-router";

import PokeGrid from "./PokeGrid";

import { chunkArray } from "../functions/ChunkArray";

function PokeSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  const { pokemon } = useContext(PokeContext);
  const { index } = useParams();

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.includes(searchParams.get("search"))
  );

  const pokemon_split = chunkArray(filteredPokemon, 12);

  if (!pokemon_split) {
    return <h1 className="text-white"> Pokeloading...</h1>;
  } else if (pokemon_split.length === 0)
    return <h1 className="text-white"> No hay pokémon que coincidan con la busqueda </h1>;

  return (
    <PokeGrid
      pokemon_split={pokemon_split}
      index={index}
      path="pokemon-search"
      query={query}
    />
  );
}

export default PokeSearch;
