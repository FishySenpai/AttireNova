import React, { useState, useEffect } from "react";
import Products from "./Products";
import Search from "./Search";
import { Link } from "react-router-dom";
import GetCategories from "./Categories/GetCategories";
import axios from "axios";
const Sneakers = () => {
  const [products, setProducts] = useState([]);
  const FetchProducts = async (query) => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "27108",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "ab5260649dmsh1c14116f3d59e38p17de0djsn0e0cd39cc3ff",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, []);
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        Women's New
      </div>
      <Products products={products} />
    </div>
  );
};

export default Sneakers;
