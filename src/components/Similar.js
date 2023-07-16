import React, { useState, useEffect } from "react";
import Products from "./Products";
import Search from "./Search";
import { Link } from "react-router-dom";
import GetCategories from "./Categories/GetCategories";
import { useParams } from "react-router-dom";
import axios from "axios";
const Similar = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  console.log(id)
  const FetchProducts = async (query) => {
    const options = {
      method: "GET",
      url: "https://asos10.p.rapidapi.com/api/v1/getYouMightAlsoLike",
      params: {
        productId: id,
        currency: "USD",
        country: "US",
        store: "US",
        language: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
        "X-RapidAPI-Host": "asos10.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setProducts(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, [id]);
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        You might also like
      </div>
      <div className="items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          {products.length > 0 ? (
            <ul className="flex flex-wrap">
              {products.slice(0,6).map((top, index) => (
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
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );

};

export default Similar;
