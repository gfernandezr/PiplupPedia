import { useState } from "react";
import PokeGrowthRate from "./utils/PokeGrowthRate";

function PokeGameData({ poke, pokespecies }) {
  const [level, setLevel] = useState(100);

  const handleLevelChange = (e) => {
    let lvl = parseInt(e.target.value);
    if (lvl < 1) {
      setLevel(1);
    } else if (lvl > 100) {
      setLevel(100);
    } else {
      setLevel(lvl);
    }
  };

  const handleLevelBLur = (e) => {
    let lvl = parseInt(e.target.value);
    if (isNaN(lvl)) {
      setLevel(100);
    }
  };
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-row">
        <p className="min-w-fit">Puntos de exp. en nivel</p>
        <input
          className="w-10 h-fit bg-gray-400 text-gray-800 rounded-xl text-center mx-1 border-[1.5px] border-black outline-none font-bold"
          type="number"
          inputMode="numeric"
          value={level}
          onChange={handleLevelChange}
          onBlur={handleLevelBLur}
        />
        <p>:</p>
      </div>
      <div>
        <PokeGrowthRate
          growth_rate={pokespecies.growth_rate.name}
          level={level}
        />
      </div>
    </div>
  );
}

export default PokeGameData;
