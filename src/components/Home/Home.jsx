import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { PokeContext } from "../../context/PokeContext";

import PokeCard from "../PokeCard";
import PokeButton from "../tools/PokeButton";

function Home() {
  const { pokemon } = useContext(PokeContext);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const randomPokemonArray = [];
  const randomIndexes = new Set();
  while (randomPokemonArray.length < 6) {
    const randomIndex = getRandomNumber(0, pokemon.length);
    if (!randomIndexes.has(randomIndex)) {
      randomIndexes.add(randomIndex);
      randomPokemonArray.push(pokemon[randomIndex]);
    }
  }

  return (
    <>
      <b className="text-orange-500 text-3xl"> Algunos Pokémon: </b>
      <div className="grid gap-10 my-5 mx-auto grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center">
        {randomPokemonArray.map((poke) => (
          <PokeCard key={poke.name} pokemon_url={poke.url} />
        ))}
      </div>
      <NavLink to="/pokemon-list/1">
        {" "}
        <PokeButton text="Ver lista de pokemon" />{" "}
      </NavLink>
    </>
  );
}

export default Home;
