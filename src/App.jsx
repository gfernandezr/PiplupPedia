import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

import Header from "./components/page/Header.jsx";
import Home from "./components/page/Home.jsx";
import PokeNotFound from "./components/page/PokeNotFound.jsx";

import PokeList from "./components/index/PokeList.jsx";
import PokeSearch from "./components/index/PokeSearch.jsx";

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
        <Route path="*" element={<PokeNotFound />} />
      </Routes>
    </main>
  );
}
export default App;
