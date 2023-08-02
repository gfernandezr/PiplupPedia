import { versions } from "./utils/PokedexGameIcons";

function PokedexDesc({ entries, language }) {
  const es_entries = entries.filter(
    (e) => e.language.name === language && e.version.name in versions
  );
  return (
    <div className="flex flex-col gap-3 p-1">
      {es_entries.map((e, index) => (
        <div
          className={`flex flex-col rounded-md bg-[${versions[e.version.name].color}] md:flex-row`}
          key={index}
        >
          <div
            className="flex flex-row justify-evenly p-2
          md:w-80"
          >
            <img
              src={versions[e.version.name].icon}
              className="w-fit h-fit my-auto"
            />
            <b className="my-auto text-gray-400">
              {versions[e.version.name].name_es}
            </b>
          </div>
          <div className="w-full">
            <p
              key={index}
              className="italic p-2 px-3 border-gray-600 h-fit
            bg-opacity-70 bg-white text-gray-700 text-justify rounded-b-md
            md:rounded-b-none md:rounded-r-md md:w-full md:m-0 md:h-full"
            >
              "{e.flavor_text}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokedexDesc;
