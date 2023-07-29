import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

import Header from "./components/Home/Header.jsx";
import Home from "./components/Home/Home.jsx";

import PokeList from "./components/PokeList.jsx";
import PokeSearch from "./components/PokeSearch.jsx";

function App() {

  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/PiplupPedia/") {
      navigate("/home");
    }
  }, []);

  return (
    <main className="bg-fiber-carbon h-full min-h-screen p-10 pt-5 text-center">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon-list/:index" element={<PokeList />} />
        <Route path="/pokemon-search/:index" element={<PokeSearch />} />
      </Routes>
    </main>
  );
}
export default App;
