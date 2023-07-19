import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const GetProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState({});
  const { tcin } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://target1.p.rapidapi.com/products/v3/get-details",
        params: {
          tcin,
          store_id: "911",
        },
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "target1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProducts(response.data.data.product);
        setThumbnail(
          response.data.data.product?.item.enrichment.images.content_labels[0]
            .image_url
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setThumbnail(image.image_url);
  };
  if (products) {
    return (
      <div>
        <div className="flex flex-row">
          <div className="ml-72 mt-32">
            <img className="h-[339px] w-[265px]" src={thumbnail} alt="image" />
            <div className="flex flex-row justify-center align-middle items-center">
              {products.item?.enrichment.images.content_labels
                .slice(0, 4)
                .map((image, index) => (
                  <ul key={index} className="flex flex-row">
                    <li>
                      <button onMouseOver={() => handleImageClick(image)}>
                        <img
                          className="h-[52px] w-[52px] mr-6 mt-2"
                          src={image.image_url}
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
              {products.item?.product_description.title}
            </div>
            <div className="ml-12 text-l font-sans flex w-[700px] ">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    products.item?.product_description.downstream_description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>loading...</div>;
  }
};

export default GetProductInfo;
