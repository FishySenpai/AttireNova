import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home";
import Search from "./components/Search";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import GetCategories from "./components/Categories/GetCategories";
import ShowCategories from "./components/Categories/ShowCategories"
import { SearchBar } from "./components";
import Test from "./components/test";
import GetProductInfo from "./components/getProductInfo"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <Home />
              </>
            }
          />
          <Route path="/yh/:webID" element={<GetProductInfo />} />
          <Route path="/test" element={<Test />} />
          <Route path="/info/:id" element={<ProductInfo />} />
          <Route path="/search/:search" element={<SearchBar />} />
          <Route path="/categories" element={<SearchBar />} />
          <Route
            path="/categories/:name"
            element={
              <>
                <SearchBar />
                <ShowCategories />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
