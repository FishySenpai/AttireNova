import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import axios from "axios";
import { Link } from "react-router-dom";
const Search = () => {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm",
        params: {
          searchTerm: search,
          currency: "USD",
          country: "US",
          store: "US",
          languageShort: "en",
          sizeSchema: "US",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "asos10.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProducts(response.data.data.products);
        console.log(products)
      } catch (error) {
        console.error(error);
      }
    };
    
    

  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      fetchData();
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row space-x-16 pt-12 justify-center">
        <form className="pt-2 h-[80px]" onSubmit={handleSearch}>
          <div className="flex flex-row ">
            <input
              className="inline-flex align-left gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <Products products={products}/>
    </div>
  );
};

export default Search;
