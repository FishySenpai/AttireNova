import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const FetchProducts = async (query) => {
    const temp = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    setProducts(temp.products);
    console.log(temp);
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
