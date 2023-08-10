import { useState, useContext } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Profile from "./User/Profile";
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
} from "./index.js";
const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [womenToggle, setWomenToggle] = useState(false);
  const [menToggle, setMenToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(0);
  };
  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className="relative">
      <div className="bg-gray-700 w-full py-3 ">
        <div>
          <div>
            <nav className="w-full flex  justify-between items-center">
              <ul className="list-none flex flex-col sm:hidden space-x-4 z-20 ">
                <div className="flex flex-row ">
                  <li className="ml-2">
                    <button
                      className="h-[25px]"
                      onClick={(prev) => setToggle(!toggle)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25px"
                        width="25px"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="text-2xl font-bold text-white absolute left-[50px] top-[6px] ">
                    <Link to="/">Clothing</Link>
                  </li>

                  <li>
                    <button className=" absolute right-[60px] top-[8px]">
                      <Link to="/cart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25px"
                          height="25px"
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
                  </li>
                  <li className="ml-2 absolute right-4 top-[9px]">
                    <Profile />
                  </li>
                </div>
                <div className="flex sm:hidden flex-col  justify-center">
                  <form className="" onSubmit={handleSearch}>
                    <div className="flex flex-row  my-2 w-full">
                      <input
                        className="w-[370px] inline-flex align-left gap-x-1.5 rounded-lg bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        type="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="flex flex-row text-white font-medium space-x-11">
                  <div className="flex flex-row">
                    <button
                      className=" "
                      onClick={() => {
                        setWomenToggle(false);
                        setMenToggle(!menToggle);
                      }}
                    >
                      <div>Men</div>
                    </button>
                  </div>
                  <div>
                    <button
                      className=""
                      onClick={() => {
                        setWomenToggle(!womenToggle);
                        setMenToggle(false);
                      }}
                    >
                      <div>Women</div>
                    </button>
                  </div>
                  <div>Wishlist</div>
                  <div>Orders</div>
                </div>
              </ul>
              <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
                <div className="group hover:bg-gray-100 text-white hover:text-gray-600 ">
                  <div className="absolute hidden text-gray-600 pt-1 group-hover:block z-50 shadow text-left bg-gray-100 space-y-2 px-3 py-4">
                    <ul className=" text-gray-800 font-medium text-left   w-full  divide-y-2">
                      <li className="h-[80px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/27110"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">New in</div>
                          <img className="h-[80px]" src={newin} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/27111"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">
                            Designer Brands
                          </div>
                          <img className="h-[80px]" src={brands} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-b hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/4209"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">Shoes</div>
                          <img className="h-[80px] " src={shoes} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/4210"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">Accessories</div>
                          <img className="h-[80px] " src={accesories} alt="" />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/5678"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">Suits</div>
                          <img className="h-[80px] " src={suits} alt="" />
                        </Link>
                      </li>
                      <li className="h-[80px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/men/26090"
                          onClick={() => {
                            setToggle(false);
                          }}
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
                    className="font-medium cursor-pointer text-[16px] hover:text-red-400 mx-5 px-5 py-4"
                  >
                    <Link to="/women">Women</Link>
                  </button>
                  <div className="absolute hidden text-gray-600 pt-1 group-hover:block z-50 shadow text-left bg-gray-100 space-y-2 px-3 py-4">
                    <ul className=" text-gray-800 font-medium text-left   w-full divide-y-2">
                      <li className="h-[80px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/27108"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">New in</div>
                          <img className="h-[80px]" src={womenNewin} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/15210"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute py-6 pl-4">
                            Designer Brands
                          </div>
                          <img className="h-[80px]" src={womenBrands} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-b hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/4172"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute  py-6 pl-4">Shoes</div>
                          <img className="h-[80px]" src={womenShoes} />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/4174"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute  py-6 pl-4">Accessories</div>
                          <img
                            className="h-[80px]"
                            src={womenAccesories}
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/13491"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute  py-6 pl-4">Dresses</div>
                          <img className="h-[80px]" src={womenDresses} alt="" />
                        </Link>
                      </li>
                      <li className="h-[82px]">
                        <Link
                          className="rounded-t hover:text-red-400 text-md  flex flex-row"
                          to="/categories/women/19645"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <div className="absolute  py-6 pl-4">Workwear</div>
                          <img
                            className="h-[80px]"
                            src={womenWorkwear}
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center">
                  <form className="" onSubmit={handleSearch}>
                    <div className="flex flex-row mr-10 ">
                      <input
                        className="w-[200px] md:w-[300px] lg:w-[500px]  xl:w-[800px] 2xl:w-[900px] inline-flex align-left gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                  className="font-medium cursor-pointer text-[16px] text-white hover:text-red-400 mx-5"
                >
                  <Link to="/orders">Orders</Link>
                </button>
                <button
                  onClick={handleClick}
                  className="font-medium cursor-pointer text-[16px] text-white hover:text-red-400 mx-5"
                >
                  <Link to="/wishlist">Wishlist</Link>
                </button>
                <button className="mx-5">
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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

                <button className="font-medium cursor-pointer text-[16px] text-white  mx-5">
                  <Profile />
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className={womenToggle ? "flex" : "hidden"}>
          <div className="flex flex-col overscroll-none">
            <div className="bg-gray-900/50 h-screen w-full absolute text-gray-500 hover:text-gray-600 z-30">
              <div className=" border-4 border-gray-600 bg-gray-100 divide-y-8 w-[329px]">
                <ul className=" text-gray-800 font-medium text-left   w-full divide-y-8">
                  <li className="h-[110px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/27108"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">New in</div>
                      <img className="" src={womenNewin} />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/15210"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Designer Brands</div>
                      <img src={womenBrands} />
                    </Link>
                  </li>
                  <li className="h-[110px]">
                    <Link
                      className="rounded-b hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/4172"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Shoes</div>
                      <img src={womenShoes} />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/4174"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Accessories</div>
                      <img src={womenAccesories} alt="" />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/13491"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Dresses</div>
                      <img src={womenDresses} alt="" />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/women/19645"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Workwear</div>
                      <img src={womenWorkwear} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={menToggle ? "flex" : "hidden"}>
          <div className="flex flex-col overscroll-none">
            <div className="bg-gray-900/50 h-screen w-full absolute text-gray-500 hover:text-gray-600 z-30">
              <div className=" border-4 border-gray-600 bg-gray-100 divide-y-8 w-[329px]">
                <ul className=" text-gray-800 font-medium text-left   w-full divide-y-8">
                  <li className="h-[110px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/27110"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">New in</div>
                      <img className="" src={newin} />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/27111"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Designer Brands</div>
                      <img src={brands} />
                    </Link>
                  </li>
                  <li className="h-[110px]">
                    <Link
                      className="rounded-b hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/4209"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Shoes</div>
                      <img src={shoes} />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/4210"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Accessories</div>
                      <img src={accesories} alt="" />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/5678"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Suits</div>
                      <img src={suits} alt="" />
                    </Link>
                  </li>
                  <li className="h-[115px]">
                    <Link
                      className="rounded-t hover:text-red-400 text-xl  flex flex-row"
                      to="/categories/men/26090"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <div className="absolute pt-8 pl-4">Sportswear</div>
                      <img src={sportswear} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
