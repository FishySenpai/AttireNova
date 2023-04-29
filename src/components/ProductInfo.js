import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const {id} = useParams();
    console.log(id)
    const [product, setProduct] = useState({});
    const [thumbnail, setThumbnail] = useState("");
    const FetchProducts = async (query) => {
      const temp = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
        res.json()
      );
      setProduct(temp);
      setThumbnail(temp.thumbnail)
      console.log(temp);
    };

    useEffect(() => {
      FetchProducts();
      console.log(product);
    }, []);

    const handleImageClick = (image) => {
      setThumbnail(image); // update the thumbnail state variable with the clicked image
    };
    const {title, images, brand, description} = product;
  return (
    <div className="flex flex-row">
      <div className="ml-72 mt-32 ">
        <img className="h-[216px] w-[350px]" src={thumbnail} alt="image" />
        <div className="flex flex-row justify-center align-middle items-center">
          {images?.slice(0, 4).map((image) => (
            <ul className="flex flex-row   ">
              <li>
                <button onMouseOver={() => handleImageClick(image)}>
                  <img
                    className="h-[52px] w-[52px] mr-6 mt-2"
                    src={image}
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
          {title}
        </div>
        <div className="ml-12 text-xl font-sans ">{description}.</div>
      </div>
    </div>
  );
}

export default ProductInfo