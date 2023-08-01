import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PokeContext } from "../../context/PokeContext.jsx";

import { capitalize } from "@mui/material";
import { importPoke } from "../../functions/importPoke.jsx";
import importData from "../../functions/importData.jsx";

import PokeNotFound from "../page/PokeNotFound.jsx";
import PokeType from "./PokeType.jsx";
import PokeGen from "./PokeGen.jsx";
import PokeColor from "./PokeColor.jsx";
import PokeFigure from "./PokeFigure.jsx";

import male_icon from "../../assets/male-icon.svg";
import female_icon from "../../assets/female-icon.svg";

function PokePageCard() {
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

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    if (poke) {
      const newAbilities = poke.abilities
        .filter((ab) => !ab.is_hidden)
        .map((ab) => ab.ability.url);

      const fetchAbilities = async () => {
        const abilityNames = await Promise.all(
          newAbilities.map((url) =>
            importData(url).then((data) => data.names[5].name)
          )
        );
        setAbilities(abilityNames);
      };

      fetchAbilities();
    }
  }, [poke]);

  const [hiddenAbilities, setHiddenAbilities] = useState([]);

  useEffect(() => {
    if (poke) {
      const newAbilities = poke.abilities
        .filter((ab) => ab.is_hidden)
        .map((ab) => ab.ability.url);

      const fetchAbilities = async () => {
        const abilityNames = await Promise.all(
          newAbilities.map((url) =>
            importData(url).then((data) => data.names[5].name)
          )
        );
        setHiddenAbilities(abilityNames);
      };

      fetchAbilities();
    }
  }, [poke]);

  const [eggGroup, setEggGroup] = useState([]);

  useEffect(() => {
    if (pokespecies) {
      const newGroups = pokespecies.egg_groups.map((g) => g.url);

      const fetchGroups = async () => {
        const groupsNames = await Promise.all(
          newGroups.map((url) =>
            importData(url).then((data) => data.names[5].name)
          )
        );
        setEggGroup(groupsNames);
      };

      fetchGroups();
    }
  }, [pokespecies]);

  if (pokemon_array.length === 0) {
    return <PokeNotFound />;
  }
  if (!poke || !pokespecies) {
    return <div className="mx-auto text-white">PokeLoading...</div>;
  }

  return (
    <>
      <div
        className="bg-gray-800 text-white rounded-lg p-3 border-[2px] border-orange-500 w-full h-full mx-auto 
      sm:flex sm:flex-col
      md:flex-row md:gap-8 md:min-w-[670px] md:max-w-[800px]
      lg:gap-5 lg:w-[900px] lg:max-w-[900px]"
      >
        <div className="lg:w-fit lg:mx-auto md:pl-5  lg:pl-5 h-fit sm:mb-2">
          <h1
            className="font-bold capitalize text-center text-xl mb-2 
          lg:text-3xl"
          >
            #{poke.id} | {poke.name}
          </h1>

          <div
            className="flex justify-center items-center min-w-[192px] max-w-[192px] min-h-[192px] max-h-[192px] bg-gray-500 rounded-lg border-[2.5px] border-black mx-auto mb-2
          md:min-w-[250px] md:max-w-[250px] md:min-h-[250px] md:max-h-[250px]
          lg:min-w-[288px] lg:max-w-[288px] lg:min-h-[288px] lg:max-h-[288px]"
          >
            <img src={poke.sprites.other["official-artwork"].front_default} />
          </div>
          <span
            className="hidden scale-100 w-fit mx-auto
            sm:flex 
            md:scale-110
            lg:scale-125"
          >
            <PokeType types={poke.types} />
          </span>
        </div>

        <div
          className="grid grid-cols-1 gap-0 text-left text-gray-400 
          sm:grid-cols-2 sm:gap-x-3
          md:text-lg md:p-4 md:pt-9"
        >
          <div
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]
            lg:h-[40px]"
          >
            <PokeGen gen={pokespecies.generation.name} />
          </div>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]
            lg:h-[40px]"
          >
            <p className="font-bold inline"> Categoria: </p>{" "}
            {pokespecies.genera[5].genus}
          </span>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:hidden sm:h-[60px]
            md:h-[70px]"
          >
            <PokeType types={poke.types} />
          </span>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            {abilities.length > 1 && (
              <div className="flex flex-row gap-2">
                <p className="font-bold inline-block my-auto"> Habilidades:</p>
                <span>
                  {abilities.map((ab, index) => (
                    <p key={index}>{ab}</p>
                  ))}
                </span>
              </div>
            )}

            {abilities.length === 1 && (
              <div className="flex flex-row gap-1">
                <p className="font-bold inline-block my-auto"> Habilidad:</p>
                <p>{abilities[0]}</p>
              </div>
            )}
          </span>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            {hiddenAbilities && (
              <div className="flex flex-row gap-1">
                <p className="font-bold inline-block my-auto">
                  {" "}
                  Habilidad oculta:
                </p>
                <p>{hiddenAbilities[0] ? hiddenAbilities[0] : "No tiene"}</p>
              </div>
            )}
          </span>

          <div
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            <p className="inline-block font-bold"> Peso: </p> {poke.weight / 10}{" "}
            kg
            <br />
            <p className="inline-block font-bold"> Altura: </p>{" "}
            {poke.height / 10} m
          </div>

          <div
            className="flex flex-row gap-2 border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            <p className="inline-block font-bold my-auto"> Género: </p>
            {pokespecies.gender_rate === -1 ? (
              <p className="my-auto">Sin Género </p>
            ) : (
              <div className="my-auto">
                <span>
                  <img
                    src={male_icon}
                    className="w-[19px] inline-block align-middle"
                  />
                  <p className="inline ml-2 align-middle">
                    {(1 - pokespecies.gender_rate / 8) * 100} %{" "}
                  </p>
                </span>
                <br />
                <span>
                  <img
                    src={female_icon}
                    className="w-[19px] inline-block align-middle"
                  />
                  <p className="inline ml-2 align-middle">
                    {(pokespecies.gender_rate / 8) * 100} %{" "}
                  </p>
                </span>
              </div>
            )}
          </div>    

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            <div className="flex flex-row gap-2">
              <p className="font-bold inline-block my-auto"> Grupo de huevo:</p>
              <span>
                {eggGroup.map((g, index) => (
                  <p key={index}>{g}</p>
                ))}
              </span>
            </div>
          </span>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit
            sm:h-[60px]
            md:h-[70px]"
          >
            <PokeColor color={pokespecies.color.name} />
          </span>

          <span
            className="border-b-[1px] p-[1px] border-gray-600 h-fit 
            sm:h-[60px]
            md:h-[70px]"
          >
            <PokeFigure shape={pokespecies.shape.name} />
          </span>
        </div>
      </div>
    </>
  );
}

export default PokePageCard;
