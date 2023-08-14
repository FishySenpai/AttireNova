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
          "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key_Search,
          "X-RapidAPI-Host": "asos10.p.rapidapi.com",
        },
      };
console.log(process.env.REACT_APP_X_RapidAPI_Key_Search);
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
}, [search])

  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      fetchData();
      
    } else {
      
    }
  };
  return (
    <div className="min-h-screen">
      
      <Products products={products}/>
    </div>
  );
};

export default Search;
