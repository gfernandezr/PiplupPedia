import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";

import { capitalize } from "@mui/material";

import { PokeContext } from "../../context/PokeContext.jsx";

import { importPoke } from "../../functions/importPoke.jsx";
import getEvolutionLine from "../../functions/getEvolutionLine.jsx";
import getEvolutionLineImg from "../../functions/getEvolutionLineImg.jsx";

import PokeNotFound from "../page/PokeNotFound.jsx";
import PokePageCard from "./PokePageCard";
import PokeDesc from "./PokeDesc.jsx";
import PokeEvolutionLine from "./PokeEvolutionLine.jsx";
import PokeEvolutionDesc from "./PokeEvolutionDesc.jsx";
import PokeGameData from "./PokeGameData.jsx";
import PokedexDesc from "./PokedexDesc.jsx";
import PokeDropDown from "../tools/PokeDropDown.jsx";
import PokeStats from "./PokeStats.jsx";

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

  useEffect(() => {
    poke
      ? (document.title = capitalize(poke.name) + " - PiplupPedia")
      : "PiplupPedia";
  }, [poke]);

  const [evolutionList, setEvolutionList] = useState();

  useEffect(() => {
    if (pokespecies) {
      getEvolutionLine(pokespecies.evolution_chain.url).then((e) => {
        setEvolutionList(e[0]);
      });
    }
  }, [pokespecies]);

  const [evolutionImgList, setEvolutionImgList] = useState();

  useEffect(() => {
    if (pokespecies) {
      getEvolutionLineImg(pokespecies.evolution_chain.url).then((e) => {
        setEvolutionImgList(e[0]);
      });
    }
  }, [pokespecies]);

  const [pokedexLanguage, setPokedexLanguage] = useState("es");

  if (pokemon_array.length === 0) {
    return <PokeNotFound />;
  }
  if (!poke || !pokespecies) {
    return <div className="mx-auto text-white">PokeLoading...</div>;
  }

  return (
    <div>
      <div className="md:flex md:flex-row-reverse md:gap-10">
        <PokePageCard poke={poke} pokespecies={pokespecies} />

        <div className=" md:min-w-[110px] w-full">
          <div>
            <p className="hidden md:flex text-orange-500 text-4xl font-black capitalize my-2">
              {poke.name}
            </p>

            <hr className="hidden md:flex h-[1px] bg-orange-500 border-0" />

            <div className="bg-gray-800 text-gray-400 rounded-lg p-3 border-[2px] border-orange-500 text-justify mt-3 w-full">
              <PokeDesc poke={poke} pokespecies={pokespecies} />
            </div>
          </div>

          <div>
            <p className="text-left md:flex text-orange-500 text-3xl md:text-4xl font-black capitalize my-2 ">
              Evolución
            </p>

            <hr className="h-[1px] bg-orange-500 border-0" />

            <div className="bg-gray-800 text-gray-400 rounded-lg p-2 pb-3 border-[2px] border-orange-500 text-justify mt-3 w-full overflow-x-auto ">
              <div>
                <PokeEvolutionDesc evolutionList={evolutionList} />
              </div>
              <div className="flex flex-row w-fit mx-auto">
                <p className="text-gray-800 min-w-fit invisible">---</p>
                <div className="min-w-fit mt-4 bg-gray-500 rounded-lg p-3 border-[2.5px] border-black flex justify-center">
                  <PokeEvolutionLine
                    evolutionList={evolutionList}
                    evolutionImgList={evolutionImgList}
                  />
                </div>
                <p className="text-gray-800 min-w-fit invisible">---</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-left md:flex text-orange-500 text-3xl md:text-4xl font-black capitalize my-2 ">
              Otros Datos
            </p>

            <hr className="h-[1px] bg-orange-500 border-0" />

            <div className="bg-gray-800 text-gray-400 rounded-lg p-2 pb-3 border-[2px] border-orange-500 text-justify mt-3 w-full overflow-x-auto ">
              <PokeGameData poke={poke} pokespecies={pokespecies} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-3 align-middle">
          <p className="text-left md:flex text-orange-500 text-3xl md:text-4xl font-black capitalize my-2 ">
            Características de combate
          </p>
        </div>
        <hr className="h-[1px] bg-orange-500 border-0" />

        <div className="bg-gray-800 text-gray-400 rounded-lg p-3 pb-3 border-[2px] border-orange-500 text-justify mt-3 w-full overflow-x-auto">
          <PokeStats stats={poke.stats} />
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-row gap-3 align-middle">
            <p className="text-left md:flex text-orange-500 text-3xl md:text-4xl font-black capitalize my-2 ">
              Descripción Pokédex
            </p>
            <PokeDropDown
              default_lan={pokedexLanguage}
              setValue={setPokedexLanguage}
            />
          </div>
          <hr className="h-[1px] bg-orange-500 border-0" />

          <div className="bg-gray-800 text-gray-400 rounded-lg p-2 pb-3 border-[2px] border-orange-500 text-justify mt-3 w-full">
            <PokedexDesc
              entries={pokespecies.flavor_text_entries}
              language={pokedexLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokePage;
