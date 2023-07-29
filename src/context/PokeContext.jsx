import { createContext, useState, useEffect } from "react";

export const PokeContext = createContext();

export function PokeContextProvider(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0")
      .then((response) => response.json())
      .then((pokemonData) => setPokemon(pokemonData.results));
  }, []);

  if (!pokemon) {
    return "PokeLoading...";
  }

  return (
    <PokeContext.Provider
      value={{
        pokemon,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
}
