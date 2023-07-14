import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const ProductInfo = () => {
    const {id} = useParams();
    console.log(id)
    const [product, setProduct] = useState({});
    const [thumbnail, setThumbnail] = useState("");
    const FetchProducts = async (query) => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {
          id: id,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
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
        setProduct(response.data)
        setThumbnail(response.data.media.images[0].url)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      FetchProducts();
      console.log(product);
    }, []);

    const handleImageClick = (image) => {
      setThumbnail(image); // update the thumbnail state variable with the clicked image
    };
    const {name, media, description, info} = product;
  return (
    <div className="flex flex-row">
      <div className="ml-72 mt-32 ">
        <img
          className="h-[216px] w-[350px]"
          src={`https://${thumbnail}`}
          alt="image"
        />
        <div className="flex flex-row justify-center align-middle items-center">
          {media?.images.map((image) => (
            <ul className="flex flex-row   ">
              <li>
                <button onMouseOver={() => handleImageClick(image.url)}>
                  <img
                    className="h-[52px] w-[52px] mr-6 mt-2"
                    src={`https://${image.url}`}
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
          {name}
        </div>
        <div className="ml-12 text-xl font-sans ">
          
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo