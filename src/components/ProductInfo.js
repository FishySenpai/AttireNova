import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Similar from "./Similar";
import Cart from "./User/Cart";
import arrowLeft from "./Assets/arrowLeft.png";
import arrowRight from "./Assets/arrowRight.png";
const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [thumbnail, setThumbnail] = useState("");
  const [size, setSize] = useState("Select:");
  const [showSize, setShowSize] = useState(false);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showError, setShowError] = useState(false);
  const FetchProducts = async () => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v4/detail",
      params: {
        id: id,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key, //ki
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setProduct(response.data);
      console.log(response);
      console.log(product);
      setThumbnail(response.data.media?.images[0].url);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const FetchPrice = async () => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v4/get-stock-price",
      params: {
        productIds: id,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_X_RapidAPI_Key,
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0]?.productPrice?.current.value);
      setPrice(response.data[0]?.productPrice?.current.value);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    FetchProducts();
    FetchPrice();
  }, [id]);
  // useEffect(() => {
  //   // Update the price state here after the product state has been updated
  //   console.log(product);
  //   setPrice(product.price?.current.value);
  //   console.log(price);
  // }, [product]);

  const handleImageClick = (image) => {
    setThumbnail(image);
  };
  const handleImageBack = () => {
    if (product) {
      if (index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
        setThumbnail(product.media?.images[index - 1].url);
        console.log(index);
      } else {
        setIndex(3);
        setThumbnail(product.media?.images[3].url);
      }
    }
  };
  const handleImageForward = () => {
    if (product) {
      if (index < 3) {
        setIndex((prevIndex) => prevIndex + 1);
        setThumbnail(product.media?.images[index + 1].url);
        console.log(index);
      } else {
        setIndex(0);
        setThumbnail(product.media?.images[0].url);
      }
    }
  };

  const { name, media, description, info, variants, brand } = product;

  function addBulletPointsToDescription(description) {
    const bulletPointsAddedDescription = description?.replace(
      /<ul>/g,
      '<ul style="list-style-type: disc;">'
    );
    return bulletPointsAddedDescription;
  }
  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:ml-72 sm:mt-32 ">
            {/* Dummy box */}
            <div className="w-[100vw] h-[450px] sm:w-[350px] bg-gray-200 animate-pulse"></div>
            {/* Dummy box */}
            <div className=" hidden sm:flex flex-row justify-center align-middle items-center">
              <ul className="flex flex-row">
                <li>
                  <button
                    disabled
                    className="h-[60px] w-[55px] mr-6 mt-2 bg-gray-200"
                  ></button>
                </li>
                <li>
                  <button
                    disabled
                    className="h-[60px] w-[55px] mr-6 mt-2 bg-gray-200"
                  ></button>
                </li>
                <li>
                  <button
                    disabled
                    className="h-[60px] w-[55px] mr-6 mt-2 bg-gray-200"
                  ></button>
                </li>
                <li>
                  <button
                    disabled
                    className="h-[60px] w-[55px] mr-6 mt-2 bg-gray-200"
                  ></button>
                </li>
                {/* Add more dummy boxes as needed */}
              </ul>
            </div>
            {/* Dummy text */}
          </div>
          <div className="flex flex-col">
            {/* Dummy text */}
            <div className="text-left ml-4 sm:ml-12 sm:mt-32 text-2xl font-mono ">
              <div className="flex flex-row font-normal pt-2 mb-2">
                <div className="w-[400px] h-[15px] mb-5 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
            {/* Dummy text */}
            <div className="flex flex-col">
              <div className="flex flex-row ml-4 sm:ml-12 mb-2">
                <div className="capitalize mb-5 w-[200px] h-[15px] font-mono bg-gray-200 animate-pulse"></div>
              </div>
              <div>
                <div className="flex flex-row px-2 font-mono mb-5">
                  <div className="w-[200px] h-[15px] ml-2 sm:ml-10 bg-gray-200 animate-pulse rounded-sm"></div>
                </div>
              </div>
            </div>
            {/* Dummy text */}
            <div className=" hidden sm:flex flex-col mt-4">
              <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
                <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
              </div>
              <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
                <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
              </div>
              <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
                <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
              </div>
              <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
                <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="sm:ml-24 sm:mt-32">
            <Cart />
          </div>
          <div className=" mb-4 sm:hidden mt-4">
            <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
              <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
            </div>
            <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
              <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
            </div>
            <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
              <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
            </div>
            <div className="ml-4 sm:ml-12 py-2 text-lg font-mono text-left">
              <div className="pt-2 w-[300px] h-[15px] bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="sm:ml-72 ml-6 sm:mt-12">
          <Similar />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col overflow-hidden min-h-screen">
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col xl:flex-row">
            <div className="sm:ml-32 md:ml-14 lg:ml-52 xl:ml-16  2xl:ml-72 sm:mt-20 ">
              <div className="relative ">
                <button onClick={handleImageBack}>
                  <img
                    src={arrowLeft}
                    className="absolute top-[170px] -left-8 w-[90px] h-[90px]"
                  />
                </button>
                <img
                  className=" w-[100vw] sm:h-auto sm:w-[400px]"
                  src={`https://${thumbnail}`}
                  alt="image"
                />
                <button onClick={handleImageForward}>
                  <img
                    src={arrowRight}
                    className="absolute top-[170px] -right-8  sm:right-[110px] md:right-[110px]  lg:-right-8 w-[90px] h-[90px]"
                  />
                </button>
              </div>
              <div className="hidden sm:flex flex-row  lg:justify-center lg:align-middle lg:items-center">
                {media?.images.map((image) => (
                  <ul className="flex flex-row" key={image.url}>
                    <li>
                      <button onMouseOver={() => handleImageClick(image.url)}>
                        <img
                          className="h-[60px] w-[55px] mr-6 mt-2"
                          src={`https://${image.url}`}
                          alt="image"
                        />
                      </button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex-col  sm:ml-10 xl:ml-4">
              <div className="text-left text-xl ml-4 sm:ml-12 mr-0 md:mt-24 sm:text-2xl font-mono text-gray-700 w-[90vw] md:w-[500px] ">
                {name}
                <div className="flex flex-row font-normal pt-2 mb-2">
                  <div className="text-xl sm:text-[20px] text-gray-800">
                    Price:
                  </div>
                  <div className="text-red-600 pl-2">${price}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-row ml-4 sm:ml-12 mb-2">
                  <div className="capitalize text-xl sm:text-[20px] text-gray-800 font-mono">
                    color:
                  </div>

                  <div className="font-mono pl-2">
                    {variants ? variants[0].colour : "text"}
                  </div>
                </div>
                <div>
                  <div className="flex flex-row px-2 font-mono">
                    <div className="text-xl sm:text-[20px] text-gray-800 ml-2 sm:ml-10">
                      Size:{" "}
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        className="inline-flex align-left gap-x-1.5 rounded-md w-[152px] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        onClick={() => setShowSize(!showSize)} // Update the onClick handler
                      >
                        {size}
                        <div className="absolute top-0 right-0 mr-2 mt-2">
                          <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className={showSize ? "flex" : "hidden"}>
                    <div className="z-50 flex flex-col pb-3 ml-[72px] sm:ml-[102px] mt-0 w-[152px]  absolute overflow-y-auto h-52 sm:h-64 scrollbar bg-white rounded font-normal text-left shadow-lg">
                      {variants?.map((size) => (
                        <ul className="flex flex-col " key={size.id}>
                          <li className="px-4 py-2">
                            <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                              <button
                                onClick={() => {
                                  setSelectedSize(size.displaySizeText);
                                  setShowError(false);
                                  setSize(size.displaySizeText);
                                  console.log(price);
                                  setShowSize(false);
                                }}
                              >
                                <div className="capitalize">
                                  {size.displaySizeText}
                                </div>
                              </button>
                            </div>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:hidden">
                {product && (
                  <Cart
                    price={price}
                    brand={brand}
                    product={product}
                    size={size}
                    selectedSize={selectedSize}
                    showError={showError}
                    setShowError={setShowError}
                  />
                )}
              </div>
              <div className="ml-10 sm:ml-16 py-2 text-lg font-mono text-left ">
                <div
                  className="list-item"
                  dangerouslySetInnerHTML={{
                    __html: addBulletPointsToDescription(description),
                  }}
                />
                <div className="pt-2 text-[20px] text-gray-800">
                  {info.sizeAndFit ? "Model's Size:" : null}
                </div>
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: info?.sizeAndFit }}
                />
              </div>
            </div>
          </div>
          <div className="hidden  lg:ml-20 xl:ml-0 md:flex mt-24">
            {product && (
              <Cart
                price={price}
                brand={brand}
                product={product}
                size={size}
                selectedSize={selectedSize}
                showError={showError}
                setShowError={setShowError}
              />
            )}
          </div>
        </div>
        <div className="ml-7 mt-6 sm:ml-14 2xl:ml-72 sm:mt-12">
          <Similar />
        </div>
      </div>
    );
  }
};
export default ProductInfo;
