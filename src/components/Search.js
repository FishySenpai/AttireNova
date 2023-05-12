import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const FetchProducts = async (query) => {
    const temp = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    ).then((res) => res.json());
    setProducts(temp.products);
    console.log(temp);
  };

  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      FetchProducts();
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
      <Products products={products} />
    </div>
  );
};

export default Search;
