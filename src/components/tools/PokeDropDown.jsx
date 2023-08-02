function PokeDropDown({ default_lan, setValue }) {
  return (
    <select defaultValue={default_lan} onChange={(e) => setValue(e.target.value)}
    className="bg-gray-800 text-orange-500 rounded-md px-1 h-fit my-auto">
      <option value="en">Ingles 🇺🇸 </option>
      <option value="es">Español 🇪🇸 </option>
    </select>
  );
}
export default PokeDropDown;
