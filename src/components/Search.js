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
              className="w-[288px] h-[36px] ml-4 pl-2 shadow rounded-l appearance-none border-gray-500 focus:outline-none "
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
