import { Route, Routes, Navigate } from "react-router";

import Header from "./components/Home/Header";
import Home from "./components/Home/Home";

import PokeList from "./components/PokeList";
import PokeSearch from "./components/PokeSearch";

function App() {
  if (window.location.pathname === "/") {
    return <Navigate to="/home" />;
  }

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
