import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import arrow from "../Assets/arrow.png"
import useOutsideClick from "./useOutsideClick";
const CartPopUp = ({ product, quantityPrice, hideCartPopup}) => {
 const cartPopupRef = useRef(null);

 // Attach the useOutsideClick hook to the cart popup
 useOutsideClick(cartPopupRef, () => {
   // This callback will be executed when a click is detected outside of the cart popup
   // Hide the cart popup here
   hideCartPopup();
 });
  useEffect(() => {
    console.log(product);
    console.log(product?.name);
  }, [product]);

  // Add a conditional check to ensure product is an array before mapping over it
  if (product) {
    return (
      <div ref={cartPopupRef} className="relative sidebar ">
        <img src={arrow} className="ml-48 h-4 w-10" />
        <div className="flex flex-col shadow-lg w-[265px] h-[280px] font-sans bg-white rounded ">
          <ul className="flex flex-wrap">
            <li className="pb-6 flex flex-col" key={product.id}>
              <div className="flex flex-row">
                <a href={`/info/${product.id}`}>
                  <img
                    className="w-[100px] h-[139px]  rounded hover:shadow-lg cursor-pointer hover:scale-105 mr-5 ml-2"
                    src={`https://${product.media.images[0].url}`}
                    alt="img"
                  />
                </a>
                <div className="flex flex-col">
                  <button className="text-[14px] text-left w-28 flex-wrap text-gray-700 text-md hover:text-red-500 cursor-pointer whitespace-pre-line font-sans">
                    <Link to={`/info/${product.id}`}>{product.name}</Link>
                  </button>
                  <div className="flex flex-row text-[14px] mt-2">
                    <div className="text-gray-700 text-left mr-2">Black</div>
                    <div className="text-gray-700 text-left">Qty: 1</div>
                  </div>
                  <div className="text-gray-700 text-left text-[14px] flex flex-row ">
                    Price:
                    <div className="text-red-700 ml-2">${quantityPrice}</div>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <button className="bg-gray-600 p-2 rounded text-white w-[200px]">
                  <Link to="/cart">View Cart</Link>
                </button>
              </div>
              <div>
                <button className="bg-gray-600 p-2 rounded mt-2 text-white w-[200px]">
                  Buy Now
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>nothing</div>;
  }
};

export default CartPopUp;

