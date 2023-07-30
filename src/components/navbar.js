import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import Profile from "./User/Profile";
const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(0);
  };
  return (
    <div>
      <div className="bg-gray-700 w-full overflow-hidden">
        <div>
          <div>
            <nav className="w-full flex py-6 justify-between items-center overflow-hidden">
              <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
                <button
                  onClick={handleClick}
                  className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                >
                  <Link to="/"> Men</Link>
                </button>
                <button
                  onClick={handleClick}
                  className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                >
                  <Link to="/women">Women</Link>
                </button>
                <button
                  onClick={handleClick}
                  className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                >
                  <Link to="/wishlist">Wishlist</Link>
                </button>
                <button className="mr-20">
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

                <button className="font-mono cursor-pointer text-[16px] text-white  mr-10">
                  <Profile />
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
