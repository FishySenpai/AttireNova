import React from 'react'
import { Link } from 'react-router-dom';
import CategoryMenShoes from "../Assets/CategoryMen/CategoryMenShoes.webp"
import CategoryMenSuits from "../Assets/CategoryMen/CategoryMenSuits.webp";
import CategoryMenAccessories from "../Assets/CategoryMen/CategoryMenAccessories.webp";
import CategoryMenBrands from "../Assets/CategoryMen/CategoryMenBrands.webp";
import CategoryMenNewin from "../Assets/CategoryMen/CategoryMenNewin.webp";
import CategoryMenSports from "../Assets/CategoryMen/CategoryMenSports.webp";
const MenCategories = () => {
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        Categories
      </div>
      <div className=" items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap pl-24 px-20 ">
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href={`/info`}>
                <img
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
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
                  className="w-[180px] h-[239px] sm:w-[380px] sm:h-[500px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-36 md:w-[380px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to={`/info`}>
                    Designer Brands
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