import React from "react";
import { Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Favs from "./components/Favs";
import FavProvider from "./contexts/FavContext";
import Navbar from "./components/Navbar";
import "./assets/css/app.css"

function App() {
  return (
    <div className="App">
      <FavProvider>
        <header>
          <h1 className="title">Users List</h1>
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Items />} />
        </Routes>
      </FavProvider>
    </div>
  );
}

export default App;
