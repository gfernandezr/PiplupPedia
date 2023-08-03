import { useState, useEffect } from "react";

import importData from "../../functions/importData.jsx";

import PokeType from "./utils/PokeType.jsx";
import PokeGen from "./utils/PokeGen.jsx";
import PokeColor from "./utils/PokeColor.jsx";
import PokeFigure from "./utils/PokeFigure.jsx";

import male_icon from "../../assets/male-icon.svg";
import female_icon from "../../assets/female-icon.svg";

function PokePageCard({ poke, pokespecies }) {
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

  return (
    <>
      <div
        className="bg-gray-800 text-white rounded-lg p-3 border-[2px] border-orange-500 min-w-fit max-w-[400px] h-full mx-auto my-auto
      md:min-w-[270px] md:max-w-[270px] md:mr-0"
      >
        <h1 className="font-bold capitalize text-center text-xl mb-2">
          #{poke.id} | {poke.name}
        </h1>

        <div className="flex justify-center items-center min-w-[192px] max-w-[192px] min-h-[192px] max-h-[192px] bg-gray-500 rounded-lg border-[2.5px] border-black mx-auto mb-2">
          <img src={poke.sprites.other["official-artwork"].front_default} />
        </div>

        <div className="grid grid-cols-1 gap-0 text-left text-gray-400">
          <div className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <PokeGen gen={pokespecies.generation.name} />
          </div>

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <p className="font-bold inline"> Categoria: </p>{" "}
            {pokespecies.genera[5].genus}
          </span>

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <PokeType types={poke.types} />
          </span>

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
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

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            {hiddenAbilities && (
              <div className="flex flex-row gap-1">
                <p className="font-bold inline-block my-auto">
                  {" "}
                  Habilidad oculta:
                </p>
                {hiddenAbilities[0] ? (
                  <p>{hiddenAbilities[0]}</p>
                ) : (
                  <p className="italic">No tiene</p>
                )}
              </div>
            )}
          </span>

          <div className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <p className="inline-block font-bold"> Peso: </p> {poke.weight / 10}{" "}
            kg
            <br />
            <p className="inline-block font-bold"> Altura: </p>{" "}
            {poke.height / 10} m
          </div>

          <div className="flex flex-row gap-2 border-b-[1px] p-[1px] border-gray-600 h-fit">
            <p className="inline-block font-bold my-auto"> Género: </p>
            {pokespecies.gender_rate === -1 ? (
              <p className="my-auto italic">Sin género</p>
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

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <div className="flex flex-row gap-2">
              <p className="font-bold inline-block my-auto"> Grupo de huevo:</p>
              <span>
                {eggGroup.map((g, index) => (
                  <p key={index}>{g}</p>
                ))}
              </span>
            </div>
          </span>

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <PokeColor color={pokespecies.color.name} />
          </span>

          <span className="border-b-[1px] p-[1px] border-gray-600 h-fit">
            <PokeFigure shape={pokespecies.shape.name} />
          </span>
        </div>
      </div>
    </>
  );
}

export default PokePageCard;
