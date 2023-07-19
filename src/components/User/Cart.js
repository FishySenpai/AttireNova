import React, { useState, useEffect } from 'react'

const Cart = ({price, brand}) => {
    const [quantity, setQuantity] = useState(1);
    const [showQuantity, setShowQuantity] = useState(false);
    const [quantityPrice, setQuantityPrice] = useState(price);
      useEffect(() => {
        setQuantityPrice(price * quantity);
      }, [price, quantity]);
    const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
      setQuantityPrice(newQuantity * price);
      setShowQuantity(false);
    };
  return (
    <div className="flex flex-col shadow-lg w-[265px] h-[300px] font-mono ">
      <div className="flex flex-row text-gray-700">
        <div className="text-[20px] text-red-700 ml-10">${quantityPrice}</div>
        <div className="text-[20px] ml-24">Wishlist</div>
      </div>
      <div>
        <div className="text-[16px] py-4 text-left ml-14">Sold by {brand?.name}</div>
        <div>
          <div className="flex flex-row px-2 mb-2 font-mono">
            <div className="text-[20px] text-gray-800 ml-10">Size: </div>
            <div className="relative pb-2">
              <button
                type="button"
                className="inline-flex align-left gap-x-1.5 rounded-md w-[52px] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                onClick={() => setShowQuantity(!showQuantity)} // Update the onClick handler
              >
                {quantity}
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
          <div className={showQuantity ? "flex" : "hidden"}>
            <div className="flex flex-col pb-3 ml-[102px] mt-0 w-[52px] absolute overflow-y-auto scrollbar bg-white rounded font-normal text-left shadow-lg">
              {[...Array(10)].map((_, index) => (
                <ul className="flex flex-col" key={index + 1}>
                  <li className="px-4 py-2">
                    <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                      <button onClick={() => handleQuantityChange(index + 1)}>
                        <div className="capitalize">{index + 1}</div>
                      </button>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="py-2">
          <button className="bg-gray-600 p-2 rounded text-white w-[200px]">
            Add to Cart
          </button>
        </div>
        <div>
          <button className="bg-gray-600 p-2 rounded mt-2 text-white w-[200px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart