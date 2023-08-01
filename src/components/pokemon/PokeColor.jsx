function PokeColor({ color }) {
  let color_code = "w-[15px] h-[15px] border-black border-[1px] my-auto mx-1";
  let color_str = "";

  if (color === "black") {
    color_str = "Negro";
    color_code = color_code + " bg-black";
  } else if (color === "blue") {
    color_str = "Azul";
    color_code = color_code + " bg-blue-600";
  } else if (color === "brown") {
    color_str = "Café";
    color_code = color_code + " bg-amber-950";
  } else if (color === "gray") {
    color_str = "Gris";
    color_code = color_code + " bg-gray-500";
  } else if (color === "green") {
    color_str = "Verde";
    color_code = color_code + " bg-green-600";
  } else if (color === "pink") {
    color_str = "Rosado";
    color_code = color_code + " bg-pink-500";
  } else if (color === "purple") {
    color_str = "Morado";
    color_code = color_code + " bg-purple-600";
  } else if (color === "red") {
    color_str = "Rojo";
    color_code = color_code + " bg-red-600";
  } else if (color === "white") {
    color_str = "Blanco";
    color_code = color_code + " bg-white";
  } else if (color === "yellow") {
    color_str = "Amarillo";
    color_code = color_code + " bg-yellow-400";
  }

  return (
    <div className="flex flex-row">
      <p className="inline-block font-bold mr-1"> Color: </p> {color_str}
      <div className={color_code}></div>
    </div>
  );
}

export default PokeColor;
