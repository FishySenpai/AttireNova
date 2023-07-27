import React, { useState, useEffect } from "react";
import Products from "./Products";
import Search from "./Search";
import { Link } from "react-router-dom";
import GetCategories from "./Categories/GetCategories";
import { useParams } from "react-router-dom";
import { useFetch } from "./getData";
import axios from "axios";
const Similar = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id)
  const FetchProducts = async (query) => {
    const options = {
      method: "GET",
      url: "https://asos-com1.p.rapidapi.com/products/list-similarities",
      params: {
        id: id,
        country_code: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "a5555e8425msh0e3b2d01db9ba61p17c64djsn379b3aceaaa4",
        "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      console.log(response.data);
      setProducts(response.data.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, [id]);
  if(loading){
 return (
   <div>
     <div className="flex text-left font-mono text-2xl text-gray-600">
       You might also like
     </div>
     <div className=" items-center mx-auto container justify-between">
       <div className="sm:p-6 pt-12 items-center container justify-between">
         <div className="flex flex-wrap">
           {[...Array(6)].map((_, index) => (
             <li
               className="mr-4 md:mr-8 pb-6 rounded animate-pulse list-none"
               key={index}
             >
               <div className="w-[165px] h-[239px] bg-gray-300 mb-2"></div>
               <div className="mt-2">
                 <div className="w-12 md:w-40  bg-gray-300 h-4 shadow"></div>
               </div>
             </li>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
  } else{
 return (
   <div>
     <div className="flex text-left font-mono text-2xl text-gray-600">
       You might also like
     </div>
     <div className="items-center mx-auto container justify-between">
       <div className="sm:py-6 pt-12 items-center container justify-between">
           <ul className="flex flex-wrap">
             {products.slice(0, 6).map((top, index) => (
               <li className="mr-4 md:mr-8 pb-6" key={top.id}>
                 <a href={`/info/${top.id}`}>
                   <img
                     className="w-[165px] h-[239px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                     src={`https://${top.imageUrl}`}
                     alt="img"
                   />
                 </a>
                 <div className="w-36 md:w-[165px] text-gray-700 text-md hover:text-red-500 cursor-pointer">
                   <button>
                     <Link to={`/info/${top.id}`}>{top.name}</Link>
                   </button>
                   <div className="text-gray-700 text-left font-bold ml-2">
                     {top.price.current.text}
                   </div>
                 </div>
               </li>
             ))}
           </ul>
       </div>
     </div>
   </div>
 );

  }
 
};

export default Similar;
