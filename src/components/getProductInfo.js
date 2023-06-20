import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const GetProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState({});
  const { webID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://kohls.p.rapidapi.com/products/detail",
        params: { webID },
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "kohls.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProducts(response.data.payload.products[0]);      
        setThumbnail(response.data.payload.products.images[0].url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setThumbnail(image.url);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="ml-72 mt-32">
          <img
            className="h-[216px] w-[350px]"
            src={thumbnail}
            alt="image"
          />
          <div className="flex flex-row justify-center align-middle items-center">
            {products.altImages?.slice(0, 4).map((image, index) => (
              <ul key={index} className="flex flex-row">
                <li>
                  <button onMouseOver={() => handleImageClick(image)}>
                    <img
                      className="h-[52px] w-[52px] mr-6 mt-2"
                      src={image.url}
                      alt="image"
                    />
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex-col">
          <div className="text-left ml-12 mt-32 text-2xl font-mono text-gray-700">
            {products.productTitle}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GetProductInfo;
