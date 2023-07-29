import { Route, Routes, Navigate } from "react-router";

import Header from "./components/Home/Header.jsx";
import Home from "./components/Home/Home.jsx";

import PokeList from "./components/PokeList.jsx";
import PokeSearch from "./components/PokeSearch.jsx";

function App() {
  if (window.location.pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="bg-fiber-carbon h-full min-h-screen p-10 pt-5 text-center">
      <Header />

      <Routes>
        <Route path="PiplupPedia/home" element={<Home />} />
        <Route path="PiplupPedia/pokemon-list/:index" element={<PokeList />} />
        <Route path="PiplupPedia/pokemon-search/:index" element={<PokeSearch />} />
      </Routes>
    </main>
  );
}
export default App;
