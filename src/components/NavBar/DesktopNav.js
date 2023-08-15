import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../User/Profile";
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
const DesktopNav = ({
  setMenToggle,
  setWomenToggle,
  menToggle,
  womenToggle,
  logo,
}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(0);
  };
  const handleSearch = (e) => {
    setMenToggle(false);
    setWomenToggle(false);
    if (search) {
      navigate(`/search/${search}`);
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };
  return (
    <div>
      <ul className="list-none lg:flex hidden justify-end items-center flex-1 mr-10">
        {" "}
        <div className="text-[22px] font-bold text-white ml-5 ">
          <button
            className="flex flex-row "
            onClick={() => {
              setMenToggle(false);
              setWomenToggle(false);
            }}
          >
            <Link to="/">
              <img
                src={logo}
                className="h-[50px] w-[50px] absolute  sm:top-2 sm:left-[78px]"
              />

              <div className="italic font-semibold ml-12 sm:absolute sm:top-6 sm:left-20">
                ttireNova
              </div>
            </Link>
          </button>
        </div>
        <div className="group hover:bg-gray-100 text-white hover:text-gray-600 ">
          <button
            onClick={handleClick}
            className="font-medium cursor-pointer text-[16px] hover:text-red-400  lg:px-2 lg:mx-3  2xl:mx-2 2xl:px-5 py-4"
          >
            <Link to="/">Men</Link>
          </button>
          <div className="absolute hidden text-gray-600 pt-1 group-hover:block z-50 shadow text-left bg-gray-100 space-y-2 px-3 py-4">
            <ul className=" text-gray-800 font-medium text-left   w-full  divide-y-2">
              <li className="h-[80px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/27110"
                >
                  <div className="absolute py-6 pl-4">New in</div>
                  <img className="h-[80px]" src={newin} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/27111"
                >
                  <div className="absolute py-6 pl-4">Designer Brands</div>
                  <img className="h-[80px]" src={brands} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-b hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/4209"
                >
                  <div className="absolute py-6 pl-4">Shoes</div>
                  <img className="h-[80px] " src={shoes} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/4210"
                >
                  <div className="absolute py-6 pl-4">Accessories</div>
                  <img className="h-[80px] " src={accesories} alt="" />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/5678"
                >
                  <div className="absolute py-6 pl-4">Suits</div>
                  <img className="h-[80px] " src={suits} alt="" />
                </Link>
              </li>
              <li className="h-[80px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/men/26090"
                >
                  <div className="absolute py-6 pl-4">Sportswear</div>
                  <img className="h-[80px] " src={sportswear} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="group hover:bg-gray-100 text-white hover:text-gray-600 ">
          <button
            onClick={handleClick}
            className="font-medium cursor-pointer text-[16px] hover:text-red-400  lg:px-2 lg:mx-3 2xl:mx-0 2xl:px-5 py-4"
          >
            <Link to="/women">Women</Link>
          </button>
          <div className="absolute hidden text-gray-600 pt-1 group-hover:block z-50 shadow text-left bg-gray-100 space-y-2 px-3 py-4">
            <ul className=" text-gray-800 font-medium text-left   w-full divide-y-2">
              <li className="h-[80px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/27108"
                >
                  <div className="absolute py-6 pl-4">New in</div>
                  <img className="h-[80px]" src={womenNewin} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/15210"
                >
                  <div className="absolute py-6 pl-4">Designer Brands</div>
                  <img className="h-[80px]" src={womenBrands} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-b hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/4172"
                >
                  <div className="absolute  py-6 pl-4">Shoes</div>
                  <img className="h-[80px]" src={womenShoes} />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/4174"
                >
                  <div className="absolute  py-6 pl-4">Accessories</div>
                  <img className="h-[80px]" src={womenAccesories} alt="" />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/13491"
                >
                  <div className="absolute  py-6 pl-4">Dresses</div>
                  <img className="h-[80px]" src={womenDresses} alt="" />
                </Link>
              </li>
              <li className="h-[82px]">
                <Link
                  className="rounded-t hover:text-red-400 text-md  flex flex-row"
                  to="/categories/women/19645"
                >
                  <div className="absolute  py-6 pl-4">Workwear</div>
                  <img className="h-[80px]" src={womenWorkwear} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <form className="" onSubmit={handleSearch}>
            <div className="flex flex-row mr-10 ">
              <input
                className="w-[30vw]  xl:w-[35vw] 2xl:w-[40vw] inline-flex align-left gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
        </div>
        <button
          onClick={handleClick}
          className="font-medium cursor-pointer text-[16px] text-white hover:text-red-400 ml-2 mr-5 xl:mx-5"
        >
          <Link to="/orders">Orders</Link>
        </button>
        <button
          onClick={handleClick}
          className="font-medium cursor-pointer text-[16px] text-white hover:text-red-400 mx-5"
        >
          <Link className="hidden xl:flex" to="/wishlist">
            Wishlist
          </Link>
          <div className="xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </div>
        </button>
        <button className="mx-5 pr-3">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="25"
              color="white"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
          </Link>
        </button>
        <button className="">
          <Profile />
        </button>
      </ul>
    </div>
  );
};

export default DesktopNav;
