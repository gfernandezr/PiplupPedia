import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PokeContext } from "../../context/PokeContext.jsx";

import { capitalize } from "@mui/material";
import { importPoke } from "../../functions/importPoke.jsx";

import PokeNotFound from "../page/PokeNotFound.jsx";
import PokePageCard from "./PokePageCard";
import PokeDesc from "./PokeDesc.jsx";

function PokePage() {
  const { pokemon } = useContext(PokeContext);
  const { pokemon_name } = useParams();

  useEffect(() => {
    if (pokemon_name !== capitalize(pokemon_name)) {
      window.history.replaceState(
        null,
        null,
        `/PiplupPedia/pokemon/${capitalize(pokemon_name)}`
      );
    }
  }, []);

  const pokemon_array = pokemon.filter((poke) =>
    poke.name.includes(pokemon_name.toLocaleLowerCase())
  );

  const [poke, pokespecies] = importPoke(pokemon_array[0].url);

  useEffect(() => { poke ?
    document.title = capitalize(poke.name) + " - PiplupPedia" : "PiplupPedia"
  }, [poke]);

  if (pokemon_array.length === 0) {
    return <PokeNotFound />;
  }
  if (!poke || !pokespecies) {
    return <div className="mx-auto text-white">PokeLoading...</div>;
  }

  return (
    <div className="md:flex flex-row-reverse">

      <PokePageCard poke={poke} pokespecies={pokespecies} />

      <div className="w-full mr-10">

        <div className="bg-gray-800 text-gray-400 rounded-lg p-3 border-[2px] border-orange-500 text-justify mt-3 w-full">
          <PokeDesc poke={poke} pokespecies={pokespecies} />
        </div>

      </div>
    </div>
  );
}

export default PokePage;
