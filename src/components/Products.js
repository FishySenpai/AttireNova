import React from 'react'

import { Link, useNavigate } from "react-router-dom";
const Products = ({products}) => {

  if(products){
  return (
    <div>
      <div className=" items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap">
            {products?.slice(0, 10).map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6 relative" key={top.id}>
                <a href={`/info/${top.id}`}>
                  <img
                    className="w-[265px] h-[339px]  rounded hover:shadow-lg cursor-pointer "
                    src={`https://${top.imageUrl}`}
                    alt="img"
                  />
                </a>
                <div className="w-36 md:w-[265px] text-gray-700 text-md hover:text-red-500 cursor-pointer">
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
  
  }


export default Products