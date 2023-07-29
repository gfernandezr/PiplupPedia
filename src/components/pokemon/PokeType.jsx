function PokeType({ types }) {
  const type_icons = {
    steel:
      "https://images.wikidexcdn.net/mwuploads/wikidex/e/e7/latest/20230221203825/Tipo_acero_XY.png",
    water:
      "https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20230221203842/Tipo_agua_XY.png",
    bug: "https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20230221203852/Tipo_bicho_XY.png",
    dragon:
      "https://images.wikidexcdn.net/mwuploads/wikidex/9/90/latest/20230221203900/Tipo_drag%C3%B3n_XY.png",
    electric:
      "https://images.wikidexcdn.net/mwuploads/wikidex/f/f1/latest/20230221203916/Tipo_el%C3%A9ctrico_XY.png",
    ghost:
      "https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20230221203924/Tipo_fantasma_XY.png",
    fire: "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20230221203937/Tipo_fuego_XY.png",
    fairy:
      "https://images.wikidexcdn.net/mwuploads/wikidex/7/73/latest/20230221203723/Tipo_hada_XY.png",
    ice: "https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20230221204053/Tipo_hielo_XY.png",
    fighting:
      "https://images.wikidexcdn.net/mwuploads/wikidex/1/1c/latest/20230221204101/Tipo_lucha_XY.png",
    normal:
      "https://images.wikidexcdn.net/mwuploads/wikidex/9/98/latest/20230221204111/Tipo_normal_XY.png",
    grass:
      "https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20230221204124/Tipo_planta_XY.png",
    psychic:
      "https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20230221204132/Tipo_ps%C3%ADquico_XY.png",
    rock: "https://images.wikidexcdn.net/mwuploads/wikidex/0/00/latest/20230221204144/Tipo_roca_XY.png",
    dark: "https://images.wikidexcdn.net/mwuploads/wikidex/a/aa/latest/20230221204157/Tipo_siniestro_XY.png",
    ground:
      "https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20230221204205/Tipo_tierra_XY.png",
    poison:
      "https://images.wikidexcdn.net/mwuploads/wikidex/8/8a/latest/20230221204213/Tipo_veneno_XY.png",
    flying:
      "https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20230221204222/Tipo_volador_XY.png",
  };

  return (
    <div className="inline-block text-gray-400">
      <p className="inline-block font-bold"> Tipo: </p>
      {types.map((type_index) => (
        <img
          key={type_index.slot}
          src={type_icons[type_index.type.name]}
          className="inline-block ml-1"
        />
      ))}
    </div>
  );
}

export default PokeType;
