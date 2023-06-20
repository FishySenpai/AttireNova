import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import { Link } from "react-router-dom";
const Test = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://kohls.p.rapidapi.com/products/list",
        params: {
          limit: "24",
          offset: "1",
          dimensionValueID: "AgeAppropriate:Teens",
        },
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "kohls.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProducts(response.data.payload.products);
      } catch (error) {
        console.error(error);
      }
      
    };
    fetchData();
  }, []);

  return (
    
      <div>
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <ul className="flex flex-wrap">
              {products?.map((top, index) => (
                <li className="mr-4 md:mr-8 pb-6 " key={top.webID}>
                  <a href={`/info/${top.webID}`}>
                    <img
                      className="w-[220px] h-[144px]  rounded hover:shadow-lg cursor-pointer hover:scale-105"
                      src={top.image.url}
                      alt="img"
                    />
                  </a>
                  <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                    <button>
                      <Link to={`/yh/${top.webID}`}>{top.productTitle}</Link>
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

export default Test;
