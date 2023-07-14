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
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap">
            {products?.slice(0, 25).map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6 " key={top.id}>
                <a href={`/info/${top.id}`}>
                  <img
                    className="w-[220px] h-[144px]  rounded hover:shadow-lg cursor-pointer hover:scale-105"
                    src={`https://${top.imageUrl}`}
                  />
                  {console.log(top.imageUrl)}
                </a>
                <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                  <button>
                    <Link to={`/info/${top.id}`}>{top.name}</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
