import React from "react";
import { Link } from "react-router-dom";
import CategoryWomenShoes from "../Assets/CategoryWomen/CategoryWomenShoes.webp"
import CategoryWomenSports from "../Assets/CategoryWomen/CategoryWomenSports.webp";
import CategoryWomenWork from "../Assets/CategoryWomen/CategoryWomenWork.webp";
import CategoryWomenBrands from "../Assets/CategoryWomen/CategoryWomenBrands.webp";
import CategoryWomenDresses from "../Assets/CategoryWomen/CategoryWomenDresses.webp";
import CategoryWomenJackets from "../Assets/CategoryWomen/CategoryWomenJackets.webp";
import CategoryWomenNewin from "../Assets/CategoryWomen/CategoryWomenNewin.webp";
import CategoryWomenAccessories from "../Assets/CategoryWomen/CategoryWomenAccessories.webp";
const WomenCategories = () => {
  return (
    <div>
      <div className="flex text-left ml-4 sm:ml-52 font-mono text-2xl text-gray-600">
        Categories
      </div>
      <div className=" items-center mx-auto container justify-between pb-8">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap ml-4 sm:ml-0 sm:pl-[80px]  ">
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenNewin}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Newin
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Designer Brands
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenAccessories}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Accessories
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenDresses}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Dresses
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenSports}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Sports
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenShoes}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Shoes
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenJackets}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Jacekts & Coats
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryWomenWork}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Workwear
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WomenCategories;
