import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import PokeType from "../pokemon/utils/PokeType.jsx";
import PokeGen from "../pokemon/utils/PokeGen.jsx";
import PokeGif from "./PokeGif.jsx";

function PokeCard({ pokemon_url }) {
  const [poke, setPoke] = useState(null);
  const [pokespecies, setSpecies] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  if (!poke || !pokespecies) {
    return <div className="mx-auto text-white">PokeLoading...</div>;
  }

  return (
    <NavLink to={`/pokemon/${poke.name}`}>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 bg-gray-800 text-white rounded-xl p-3 border-[2px] border-orange-500 hover:shadow-md hover:shadow-red-500/30 hover:border-red-500
      sm:text-left md:text-center xl:text-left
      w-[250px] sm:w-[460px] md:w-[250px] xl:w-[460px] h-[430px] sm:h-[225px] md:h-[430px] xl:h-[225px]"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center items-center min-w-[192px] max-w-[192px] min-h-[192px] max-h-[192px] bg-gray-500 rounded-xl border-[2.5px] border-black mx-auto">
          <PokeGif
            gifLink={
              poke.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            isHovered={isHovered}
          />
        </div>

        <div>
          {/* Datos */}
          <h1 className="font-bold capitalize text-center text-xl">
            #{poke.id} | {poke.name}
          </h1>
          <div className="grid grid-cols-1 gap-2 text-gray-400">
            <PokeGen gen={pokespecies.generation.name} />

            <span>
              <p className="font-bold inline"> Categoria: </p>{" "}
              {pokespecies.genera[5].genus}
            </span>

            <PokeType types={poke.types} />

            <span>
              <p className="inline-block font-bold"> Peso: </p>{" "}
              {poke.weight / 10} kg
            </span>

            <span>
              <p className="inline-block font-bold"> Altura: </p>{" "}
              {poke.height / 10} m
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default PokeCard;
