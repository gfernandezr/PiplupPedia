import { useSearchParams } from "react-router-dom";

import { useEffect, useContext } from "react";
import { PokeContext } from "../../context/PokeContext.jsx";

import { useParams } from "react-router";

import PokeGrid from "./PokeGrid.jsx";

import { chunkArray } from "../../functions/chunkArray.jsx";

import who_pokemon from "../../assets/who_pokemon.png";
import loading from "../../assets/loading.svg";


function PokeSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  const { pokemon } = useContext(PokeContext);
  const { index } = useParams();

  useEffect(() => {
    document.title =
      "Pagina " + index + " de " + pokemon_split.length + " - PiplupPedia";
  }, [query]);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.includes(searchParams.get("search"))
  );

  const pokemon_split = chunkArray(filteredPokemon, 12);

  if (!pokemon_split) {
    return (
      <div className="flex flex-row mx-auto text-white">
        <img className="w-6 animate-spin" src={loading} />
        <p className="my-auto ml-3"> PokeLoading...</p>
      </div>
    );
  } else if (pokemon_split.length === 0)
    return (
      <div>
        <b className="text-orange-500 text-3xl">¿Cuál es ese pokémon? 🤔</b>
        <img
          src={who_pokemon}
          className="my-5 rounded-md mx-auto w-[300px] sm:w-[400px]"
        />
        <h1 className="text-orange-500 text-xl md:text-3xl">
          {" "}
          No hay pokémon que coincidan con tu busqueda.{" "}
        </h1>
      </div>
    );
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
