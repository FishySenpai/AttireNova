import React from 'react'
import { Link } from 'react-router-dom';
import CategoryMenShoes from "../Assets/CategoryMen/CategoryMenShoes.webp"
import CategoryMenSuits from "../Assets/CategoryMen/CategoryMenSuits.webp";
import CategoryMenAccessories from "../Assets/CategoryMen/CategoryMenAccessories.webp";
import CategoryMenBrands from "../Assets/CategoryMen/CategoryMenBrands.webp";
import CategoryMenNewin from "../Assets/CategoryMen/CategoryMenNewin.webp";
import CategoryMenSports from "../Assets/CategoryMen/CategoryMenSports.webp";
import CategoryMenJackets from "../Assets/CategoryMen/CategoryMenJackets.webp"
import CategoryMenHoodies from "../Assets/CategoryMen/CategoryMenHoodies.webp";
const MenCategories = () => {
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        Categories
      </div>
      <div className=" items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap pl-[80px]  ">
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenNewin}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenAccessories}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenSuits}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Suits
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenSports}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenShoes}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenJackets}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  src={CategoryMenHoodies}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                   Hoodies & Sweatshirts
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenCategories