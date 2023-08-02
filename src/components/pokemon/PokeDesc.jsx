import { capitalize } from "@mui/material";
import { NavLink } from "react-router-dom";

import PokeTypeTranslate from "./utils/PokeTypeTranslate";
import PokeGenTranslate from "./utils/PokeGenTranslate";

function PokeDesc({ poke, pokespecies }) {
  return (
    <div className="inline">
      <p className="font-bold inline">{capitalize(poke.name)} </p>
      <p className="inline">
        es un Pokémon de tipo <PokeTypeTranslate types={poke.types} />{" "}
        introducido en la <PokeGenTranslate gen={pokespecies.generation.name} />{" "}
        generación.{" "}
        {pokespecies.evolves_from_species && (
          <>
            Es la evolución de{" "}
            <NavLink to={`/pokemon/${pokespecies.evolves_from_species.name}`} className="text-orange-500 underline">
              {capitalize(pokespecies.evolves_from_species.name)}
            </NavLink>
          </>
        )}
      </p>
    </div>
  );
}

export default PokeDesc;
