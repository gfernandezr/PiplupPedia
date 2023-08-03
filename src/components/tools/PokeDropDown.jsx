function PokeDropDown({ default_lan, setValue }) {
  return (
    <select defaultValue={default_lan} onChange={(e) => setValue(e.target.value)}
    className="bg-gray-800 text-orange-500 rounded-md px-1 h-fit my-auto">
      <option value="en">English 🇺🇸 </option>
      <option value="es">Español 🇪🇸 </option>
      <option value="fr">Français 🇫🇷 </option>
      <option value="de">Deutsch 🇩🇪 </option>
      <option value="it">Italiano 🇮🇹 </option>
      <option value="ja">日本語 🇯🇵 </option>
    </select>
  );
}
export default PokeDropDown;
