import React, {useState, useEffect} from 'react'
import Products from './Products';
import Search from './Search';
import { Link } from 'react-router-dom';
import GetCategories from './Categories/GetCategories';
import axios from 'axios';
const Home = () => {
     const [products, setProducts] = useState([]);
     const FetchProducts = async (query) => {
       const options = {
         method: "GET",
         url: "https://asos2.p.rapidapi.com/products/v2/list",
         params: {
           store: "US",
           offset: "0",
           categoryId: "21410",
           limit: "48",
           country: "US",
           sort: "freshness",
           currency: "USD",
           sizeSchema: "US",
           lang: "en-US",
         },
         headers: {
           "X-RapidAPI-Key":
             "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
           "X-RapidAPI-Host": "asos2.p.rapidapi.com",
         },
       };

       try {
         const response = await axios.request(options);
         console.log(response.data);
         setProducts(response.data.products)
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
      
      <Products products={products} />
    </div>
  );
}

export default Home