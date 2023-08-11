import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
export const useFetch = (id) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
 const FetchProducts = async (query) => {
   const options = {
     method: "GET",
     url: "https://asos2.p.rapidapi.com/products/v2/list",
     params: {
       store: "US",
       offset: "0",
       categoryId: id,
       limit: "48",
       country: "US",
       sort: "freshness",
       currency: "USD",
       sizeSchema: "US",
       lang: "en-US",
     },
     headers: {
       "X-RapidAPI-Key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
       "X-RapidAPI-Host": "asos2.p.rapidapi.com",
     },
   };

   try {
     const response = await axios.request(options);
           console.log(response);
     console.log(response.data);
     setProducts(response.data.products);
     console.log(products);
     setLoading(false);
   } catch (error) {
     console.error(error);
   }
 };

  useEffect(() => {
    
    FetchProducts();
  }, []); // Empty dependency array

  return { loading, products };
};
