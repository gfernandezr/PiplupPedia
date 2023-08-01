function PokeFigure({ shape }) {
  const shape_icons = {
    ball: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a0/latest/20200214140440/Figura_1.png/48px-Figura_1.png",
    squiggle: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/18/latest/20200214140740/Figura_2.png/48px-Figura_2.png",
    fish: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/01/latest/20200214140905/Figura_3.png/48px-Figura_3.png",
    arms: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/15/latest/20200214141009/Figura_4.png/48px-Figura_4.png",
    blob: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/21/latest/20200214141122/Figura_5.png/48px-Figura_5.png",
    upright: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/ff/latest/20200214141238/Figura_6.png/48px-Figura_6.png",
    legs: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c7/latest/20200214141337/Figura_7.png/48px-Figura_7.png",
    quadruped: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/67/latest/20200214141425/Figura_8.png/48px-Figura_8.png",
    wings: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9c/latest/20200214141545/Figura_9.png/48px-Figura_9.png",
    tentacles: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c5/latest/20200214141655/Figura_10.png/48px-Figura_10.png",
    heads: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/93/latest/20200214141809/Figura_11.png/48px-Figura_11.png",
    humanoid: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/38/latest/20200214141912/Figura_12.png/48px-Figura_12.png",
    "bug-wings": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5b/latest/20200214142011/Figura_13.png/48px-Figura_13.png",
    armor: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/cb/latest/20200214142056/Figura_14.png/48px-Figura_14.png",
  };

  return (
    <div className="inline-block text-gray-400 my-auto">
      <p className="inline-block font-bold my-auto"> Figura: </p>
      <img
        src={shape_icons[shape]}
        className="inline-block ml-2 align-middle w-9 m-1 bg-gray-500 rounded-xl border-[1.5px] border-black my-1"
      />
    </div>
  );
}

export default PokeFigure;
