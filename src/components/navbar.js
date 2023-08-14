import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Profile from "./User/Profile";
import logo from "./Assets/logo.png";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
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
  womenHome
} from "./index.js";
const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [womenToggle, setWomenToggle] = useState(false);
  const [menToggle, setMenToggle] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  });
  useEffect(() => {
    if (user === null) {
      signInAnonymously(auth)
        .then(() => {
          // Signed in..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }, [user]);

  useEffect(() => {
    if (menToggle || womenToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menToggle, womenToggle]);

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
    <div className="relative">
      <div className="bg-gray-800 w-full py-3 ">
        <div>
          <div>
            <nav className="w-full flex  justify-between items-center">
              <ul className="list-none flex flex-col sm:hidden space-x-4 z-20 ">
                <div className="flex flex-row relative">
                  <li className="text-[22px] font-bold text-white ml-5 ">
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
                          className="h-[50px] w-[50px] absolute -top-4 left-1"
                        />
                      </Link>
                      <div className="italic font-semibold ml-8">
                        ttireNova
                      </div>
                    </button>
                  </li>

                  <li>
                    <button
                      className=" absolute right-[50px] top-[2px]"
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
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
                  <li className="ml-2 absolute right-0 top-[2px]">
                    <button
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      <Profile />
                    </button>
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
                  <div>
                    <button
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      {" "}
                      <Link to="/wishlist">Wishlist</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setMenToggle(false);
                        setWomenToggle(false);
                      }}
                    >
                      {" "}
                      <Link to="/orders">Orders</Link>
                    </button>
                  </div>
                </div>
              </ul>
              <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
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
                        className="h-[50px] w-[50px] absolute -top-4 left-[120px] sm:top-2 sm:left-[175px]"
                      />

                      <div className="italic font-semibold ml-12 sm:absolute sm:top-6 sm:left-44">
                        ttireNova
                      </div>
                    </Link>
                  </button>
                </div>
                <div className="group hover:bg-gray-100 text-white hover:text-gray-600 ">
                  <button
                    onClick={handleClick}
                    className="font-medium cursor-pointer text-[16px] hover:text-red-400 mx-5 px-5 py-4"
                  >
                    <Link to="/">Men</Link>
                  </button>
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
                        className="w-[200px] md:w-[300px] lg:w-[500px]  xl:w-[800px] 2xl:w-[850px] inline-flex align-left gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                        <div className="absolute pt-8 pl-4">
                          Designer Brands
                        </div>
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
                        <div className="absolute pt-8 pl-4">
                          Designer Brands
                        </div>
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
                        <img
                          className="h-[100px] pl-6"
                          src={accesories}
                          alt=""
                        />
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
                        <img
                          className="h-[100px] pl-6"
                          src={sportswear}
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
    </div>
  );
};

export default Navbar;
