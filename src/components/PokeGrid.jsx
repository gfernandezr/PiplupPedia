import PokeCard from "./PokeCard.jsx";
import PokePagination from "./tools/PokePagination.jsx";

function PokeGrid({ pokemon_split, index, path, query }) {
  return (
    <>
      <div className="flex flex-row items-center w-fit mx-auto">
        {query ? (
          <h1 className="text-orange-500 text-3xl font-bold mr-2">
            Busqueda: {query} -
          </h1>
        ) : (
          ""
        )}
        <h1 className="text-orange-500 text-3xl font-bold">Pagina: {index}</h1>
      </div>

      <div className="inline-block my-5">
        <PokePagination
          pokemon={pokemon_split}
          page={parseInt(index)}
          path={path}
          query={query}
        />
      </div>

      <div className="grid gap-10 my-5 mx-auto grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center">
        {pokemon_split[index - 1].map((poke) => (
          <PokeCard key={poke.name} pokemon_url={poke.url} />
        ))}
      </div>

      <div className="inline-block my-5">
        <PokePagination
          pokemon={pokemon_split}
          page={parseInt(index)}
          path={path}
          query={query}
        />
      </div>

      <div className="flex flex-row items-center w-fit mx-auto">
        {query ? (
          <h1 className="text-orange-500 text-3xl font-bold mr-2">
            Busqueda: {query} -
          </h1>
        ) : (
          ""
        )}
        <h1 className="text-orange-500 text-3xl font-bold">Pagina: {index}</h1>
      </div>
    </>
  );
}

export default PokeGrid;
