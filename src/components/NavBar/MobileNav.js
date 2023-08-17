import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../User/Profile';
const MobileNav = ({ setMenToggle, setWomenToggle, menToggle, womenToggle, logo, }) => {
      const [search, setSearch] = useState("");
      const navigate = useNavigate();
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
      <ul className="list-none flex flex-col lg:hidden space-x-4 z-20 px-0 sm:px-10 ">
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
              <div className="italic font-semibold ml-8">ttireNova</div>
            </button>
          </li>

          <li>
            <button
              className=" absolute right-[65px] top-[2px] sm:right-[60px] "
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
          <li className="ml-2 absolute right-5 top-[2px] sm:right-[10px] ">
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
        <div className="flex lg:hidden flex-col  justify-center">
          <form className="" onSubmit={handleSearch}>
            <div className="flex flex-row  my-2  ">
              <input
                className="w-[90vw] sm:w-[80vw] inline-flex align-left gap-x-1.5 rounded-lg bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="flex flex-row text-white font-medium space-x-11 sm:space-x-20 md:space-x-24 md:pl-24 px-3 sm:px-6">
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
    </div>
  );
};

export default MobileNav