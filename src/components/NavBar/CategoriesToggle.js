import React from 'react'
import { Link } from 'react-router-dom';
import {
  newin,
  accesories,
  brands,
  shoes,
  sportswear,
  suits,
  womenShoes,
  womenDresses,
  womenAccesories,
  womenBrands,
  womenWorkwear,
  womenNewin,
  home,
  womenHome,
} from "../index.js";
const CategoriesToggle = ({menToggle, womenToggle, setMenToggle, setWomenToggle,}) => {
  
  return (
    <div className="">
      <div className={womenToggle ? "flex" : "hidden"}>
        <div className="flex flex-row ">
          <div className="flex flex-col overscroll-none">
            <div className="bg-gray-900/50 h-screen w-full absolute text-gray-500 hover:text-gray-600 z-30">
              <div className=" border-4 border-gray-600 bg-gray-100 divide-y-8 w-[329px]">
                <ul className=" text-gray-800 font-medium text-left   w-full divide-y-8">
                  <li className="h-[100px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/women"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Home</div>
                      <img className="h-[100px] pl-6" src={womenHome} />
                    </Link>
                  </li>
                  <li className="h-[100px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/27108"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">New in</div>
                      <img className="h-[95px] pl-20" src={womenNewin} />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/15210"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Designer Brands</div>
                      <img className="h-[95px] pl-8" src={womenBrands} />
                    </Link>
                  </li>
                  <li className="h-[100px]">
                    <Link
                      className="rounded-b hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/4172"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Shoes</div>
                      <img className="h-[95px] pl-16" src={womenShoes} />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/4174"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Accessories</div>
                      <img
                        className="h-[95px] pl-16"
                        src={womenAccesories}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/13491"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Dresses</div>
                      <img
                        className="h-[95px] pl-24"
                        src={womenDresses}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/19645"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Workwear</div>
                      <img
                        className="h-[95px] pl-24"
                        src={womenWorkwear}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute z-50 top-[152px] left-80">
            <button
              onClick={() => {
                setWomenToggle(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  fill="white"
                />{" "}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={menToggle ? "flex" : "hidden"}>
        <div className="flex flex-row ">
          <div className="flex flex-col overscroll-none">
            <div className="bg-gray-900/50 h-screen w-full absolute text-gray-500 hover:text-gray-600 z-30">
              <div className=" border-4 border-gray-600 bg-gray-100 divide-y-8 w-[329px]">
                <ul className=" text-gray-800 font-medium text-left   w-full divide-y-8">
                  <li className="h-[100px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4 ">Home</div>
                      <img className="h-[100px] pl-6" src={home} />
                    </Link>
                  </li>
                  <li className="h-[100px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/27110"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">New in</div>
                      <img className="h-[100px] pl-6" src={newin} />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/27111"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Designer Brands</div>
                      <img className="h-[100px] pl-6" src={brands} />
                    </Link>
                  </li>
                  <li className="h-[100px]">
                    <Link
                      className="rounded-b hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/4209"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Shoes</div>
                      <img className="h-[100px] pl-6" src={shoes} />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/4210"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Accessories</div>
                      <img className="h-[100px] pl-6" src={accesories} alt="" />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/5678"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Suits</div>
                      <img className="h-[100px] pl-6" src={suits} alt="" />
                    </Link>
                  </li>
                  <li className="h-[105px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row "
                      to="/categories/men/26090"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Sportswear</div>
                      <img className="h-[100px] pl-6" src={sportswear} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute z-50 top-[152px] left-80">
            <button
              onClick={() => {
                setMenToggle(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  fill="white"
                />{" "}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesToggle