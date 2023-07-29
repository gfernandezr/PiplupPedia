import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import lupa from "../../assets/search.svg";
import HomeButton from "./HomeButton";

export default function PokeSearchBar() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.search) {
      navigate(`/pokemon-search/1?search=${data.search}`);
    }
  };

  return (
    <div className="flex w-fit mx-auto">
      <HomeButton />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 w-fit pl-5 pr-3 py-2 rounded-full flex justify-between mx-auto border-[2px] border-gray-800 focus-within:border-[2px] focus-within:border-orange-500"
      >
        <input
          placeholder="Busque un pokémon..."
          {...register("search")}
          className="bg-gray-800 h-6 text-white outline-none w-[175px] sm:w-96"
        />
        <button type="submit">
          {" "}
          <img src={lupa} className="h-6" />{" "}
        </button>
      </form>
    </div>
  );
}
