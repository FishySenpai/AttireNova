import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home";
import Search from "./components/Search";
import "./App.css";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<ProductInfo />} />
          <Route path="/search/:search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
