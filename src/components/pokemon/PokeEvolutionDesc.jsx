import { capitalize } from "@mui/material";

function PokeEvolutionDesc({ evolutionList }) {
  function desc(list) {
    if (list) {
      if (list.length === 1) {
        return <p className="inline">{capitalize(list[0])} no evoluciona.</p>;
      } else if (list.length === 2) {
        return (
          <>
            <p className="inline">
              {capitalize(list[0])} evoluciona a {capitalize(list[1][0])}.{" "}
            </p>
            {desc(list[1])}
          </>
        );
      } else if (list.length > 2) {
        return (
          <>
            <p>{capitalize(list[0])} puede evolucionar en: </p>

            {list.slice(1).map((e, i) => (
              <div>
                <p className="">- {capitalize(e[0])}.{" "}</p>
                <p className="inline ml-5">{"- "}</p>
                {desc(e)}
              </div>
            ))}
          </>
        );
      }
    }
  }
  return <>{desc(evolutionList)}</>;
}

export default PokeEvolutionDesc;
