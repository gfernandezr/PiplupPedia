import { useState } from "react";

function PokeStats({ stats }) {
  function stat_es(stat) {
    if (stat === "hp") {
      return "PS";
    } else if (stat === "attack") {
      return "Ataque";
    } else if (stat === "defense") {
      return "Defensa";
    } else if (stat === "special-attack") {
      return "At. esp.";
    } else if (stat === "special-defense") {
      return "Def. esp.";
    } else if (stat === "speed") {
      return "Velocidad";
    }
  }

  function td_className(index) {
    let td_class =
      "text-gray-800 text-center border-r-[1px] border-gray-400 sm:px-3";
    if (index % 2 === 0) {
      return td_class + " bg-gray-200";
    } else {
      return td_class + " bg-gray-300";
    }
  }

  function td_bar_className(index) {
    let td_class =
      "text-gray-800 text-center w-3/4  border-r-[1px] border-gray-400 px-1";
    if (index % 2 === 0) {
      return td_class + " bg-gray-200";
    } else {
      return td_class + " bg-gray-300";
    }
  }

  function statBar(stat) {
    const w = (stat / 255) * 100;
    let backgroundColor = "#f73434";
    if (stat <= 40) {
      backgroundColor = "#f73434";
    } else if (stat > 40 && stat <= 60) {
      backgroundColor = "#f78d34";
    } else if (stat > 60 && stat <= 80) {
      backgroundColor = "#f7c534";
    } else if (stat > 80 && stat <= 100) {
      backgroundColor = "#f7f134";
    } else if (stat > 100 && stat <= 120) {
      backgroundColor = "#49f734";
    } else if (stat > 120) {
      backgroundColor = "#12a724";
    }

    return { width: w + "%", backgroundColor: backgroundColor };
  }

  function StatCalculator(stat, base, iv, ev, lvl, nature) {
    if (isNaN(lvl)) {
      return "-";
    }
    if (stat === "hp") {
      return parseInt(((2 * base + iv + ev / 4) * lvl) / 100 + lvl + 10);
    } else {
      return parseInt((((2 * base + iv + ev / 4) * lvl) / 100 + 5) * nature);
    }
  }

  const [level, setLevel] = useState(50);

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
      setLevel(50);
    }
  };

  return (
    <table className="bg-black bg-opacity-70 w-full border-2 border-black text-[11px] sm:text-base md:text-lg max-w-[800px] mx-auto my-2">
      <tr>
        <th className="border-2 border-black"></th>
        <th
          className="border-2 border-black text-center text-gray-200 bg-gr font-normal"
          colSpan={2}
        >
          Características base
        </th>
        <th
          className="border-2 border-black text-center text-gray-200 bg-gr font-normal"
          colSpan={2}
        >
          Nivel{" "}
          <input
            className="w-10 h-fit bg-gray-400 text-gray-800 rounded-xl text-center mx-1 border-[1.5px] border-black outline-none font-bold"
            type="number"
            inputMode="numeric"
            value={level}
            onChange={handleLevelChange}
            onBlur={handleLevelBLur}
          />
        </th>
        <th
          className="border-2 border-black text-center text-gray-200 bg-gr font-normal"
          colSpan={2}
        >
          Nivel 100
        </th>
        <th className="border-2 border-black text-center text-gray-200 bg-gr font-normal">
          PE
        </th>
      </tr>
      {stats.map((stat, index) => (
        <tr key={index}>
          <th className="border-2 border-black text-center text-gray-200 font-normal">
            {stat_es(stat.stat.name)}
          </th>

          <td className={td_className(index)}>{stat.base_stat}</td>

          <td className={td_bar_className(index)}>
            <div
              style={statBar(stat.base_stat)}
              className="h-3 rounded-lg border-[1px] border-gray-800"
            ></div>
          </td>

          <td className={td_className(index)}>
            {StatCalculator(stat.stat.name, stat.base_stat, 0, 0, level, 0.9)}
          </td>
          <td className={td_className(index)}>
            {StatCalculator(
              stat.stat.name,
              stat.base_stat,
              31,
              252,
              level,
              1.1
            )}
          </td>

          <td className={td_className(index)}>
            {StatCalculator(stat.stat.name, stat.base_stat, 0, 0, 100, 0.9)}
          </td>
          <td className={td_className(index)}>
            {StatCalculator(stat.stat.name, stat.base_stat, 31, 252, 100, 1.1)}
          </td>

          <td className={td_className(index)}>{stat.effort}</td>
        </tr>
      ))}
      <tr>
        <th className="border-2 border-black text-center text-gray-200 font-normal">
          Total
        </th>
        <td className="border-2 border-black text-center text-gray-200 font-normal">
          {Object.values(stats).reduce(
            (total, obj) => total + obj.base_stat,
            0
          )}
        </td>
        <td className="border-2 border-black"></td>
        <th className="border-2 border-black text-center text-gray-200 font-normal">
          Mín
        </th>
        <th className="border-2 border-black text-center text-gray-200 font-normal">
          Máx
        </th>
        <th className="border-2 border-black text-center text-gray-200 font-normal">
          Mín
        </th>
        <th className="border-2 border-black text-center text-gray-200 font-normal">
          Máx
        </th>
        <td className="border-2 border-black"></td>
      </tr>
      <tr>
        {" "}
        <td className="text-center italic bg-gray-300 text-gray-800 px-2" colSpan={8}>
          Valores mínimos (Mín) calculados asumiendo naturaleza desfavorable, 0
          EVs y 0 IVs.
        </td>
      </tr>
      <tr>
        <td className="text-center italic bg-gray-300 text-gray-800 px-2" colSpan={8}>
          Valores máximos (Máx) calculados asumiendo naturaleza favorable, 252
          EVs y 31 IVs.
        </td>
      </tr>
    </table>
  );
}

export default PokeStats;
