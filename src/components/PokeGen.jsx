function PokeGen({ gen }) {
  let gen_logo = "";
  let gen_str = "";

  if (gen === "generation-i") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/2/2a/latest/20220602220839/Primera_generaci%C3%B3n.png";
    gen_str = "Primera";
  } else if (gen === "generation-ii") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/f/f7/latest/20220602220844/Segunda_generaci%C3%B3n.png";
    gen_str = "Segunda";
  } else if (gen === "generation-iii") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/5/54/latest/20220602220849/Tercera_generaci%C3%B3n.png";
    gen_str = "Tercera";
  } else if (gen === "generation-iv") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20220602220854/Cuarta_generaci%C3%B3n.png";
    gen_str = "Cuarta";
  } else if (gen === "generation-v") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/6/61/latest/20220602220857/Quinta_generaci%C3%B3n.png";
    gen_str = "Quinta";
  } else if (gen === "generation-vi") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20220602220016/Sexta_generaci%C3%B3n.png";
    gen_str = "Sexta";
  } else if (gen === "generation-vii") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20220602215812/S%C3%A9ptima_generaci%C3%B3n.png";
    gen_str = "Séptima";
  } else if (gen === "generation-viii") {
    gen_logo =
      "https://images.wikidexcdn.net/mwuploads/wikidex/b/b4/latest/20220602215725/Octava_generaci%C3%B3n.png";
    gen_str = "Octava";
  }
  return (
    <div className="inline-block text-gray-400">
      <p className="inline-block font-bold"> Generación: </p> {gen_str}{" "}
      <img src={gen_logo} className="inline-block" />
    </div>
  );
}

export default PokeGen;
