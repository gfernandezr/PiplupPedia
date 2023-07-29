import PokeInput from '../tools/PokeSearchBar'

function Header() {
  return (
    <>
      <div className="bg-gray-800 h-auto max-w-6xl mx-auto rounded-3xl border-4 border-orange-500 py-4 px-10">
        <div className="flex items-center justify-center">
          <img
            className="inline scale-x-[-1]"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/393.gif"
          />
          <b className="text-orange-500 text-3xl mx-3">
            {" "}
            ¡Bienvenido a PiplupPedia!{" "}
          </b>
          <img
            className="inline"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/393.gif"
          />
        </div>
        <div className="w-fit mx-auto mb-3">
          <p className="text-gray-400 inline">La </p>
          <img
            className="inline w-16"
            src="https://archives.bulbagarden.net/media/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png"
          />
          <p className="text-gray-400 inline"> en español</p>
        </div>
        <p className="text-white text-justify">
          PiplupPedia es un proyecto de una plataforma enciclopedica en español
          donde encontrarás una extensa base de datos que abarca desde los
          clásicos Pokémon de primera generación hasta las criaturas de quinta
          generación. Los datos e imagenes de esta plataforma son recolectados
          de{" "}
          <a className="text-orange-500 underline" href="https://pokeapi.co/">
            PokéAPI
          </a>{" "}
          y{" "}
          <a
            className="text-orange-500 underline"
            href="https://www.wikidex.net/wiki/WikiDex"
          >
            WikiDex
          </a>
          .{" "}
        </p>
      </div>

      <hr class="h-[2px] my-4 bg-orange-500 border-0" />
      <PokeInput />
      <hr class="h-[2px] my-4 bg-orange-500 border-0" />
    </>
  );
}

export default Header;
