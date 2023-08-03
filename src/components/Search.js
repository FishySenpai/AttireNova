import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Products from "./Products";
import axios from "axios";

const Search = () => {
  const [products, setProducts] = useState();
  const {search} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
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
            "ab5260649dmsh1c14116f3d59e38p17de0djsn0e0cd39cc3ff",
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
    
    
useEffect(() => {
  console.log(search)
  handleSearch()
}, [searchParams])

  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      fetchData();
      
    } else {
      
    }
  };
  return (
    <div>
      
      <Products products={products}/>
    </div>
  );
};

export default Search;
