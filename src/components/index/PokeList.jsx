import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext.jsx";

import { useParams } from "react-router";

import PokeGrid from "./PokeGrid.jsx";

import { chunkArray } from "../../functions/chunkArray.jsx";

function PokeList() {
  const { pokemon } = useContext(PokeContext);
  const { index } = useParams();

  const pokemon_split = chunkArray(pokemon, 12);

  if (!pokemon_split) {
    return;
  }

  return (<PokeGrid pokemon_split={pokemon_split} index={index} path="pokemon-list" query={undefined}/>);
}

export default PokeList;
