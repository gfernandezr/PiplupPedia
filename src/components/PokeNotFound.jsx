import DizzyPiplup from "../assets/pokemon-piplup-not-found.gif";

export default function PokeNotFound() {
  return (
    <div>
        <b className="text-orange-500 text-5xl sm:text-6xl">¡Oops!</b>
      <img src={DizzyPiplup} className="mx-auto my-10 rounded-lg w-[300px]" />
      <p className="text-orange-500 text-3xl">Al parecer, la pagina que buscas no existe.</p>
    </div>
  );
}
