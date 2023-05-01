import React, { useState, useEffect } from "react";
import Products from "../Products";

import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const {name} = useParams();
  const FetchProducts = async (query) => {
    const temp = await fetch(
      `https://dummyjson.com/products/category/${name}`
    ).then((res) => res.json());
    setProducts(temp.products);
    console.log(temp);
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, []);
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Home;
