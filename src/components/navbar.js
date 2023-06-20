import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom"

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
              <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <button
                  onClick={handleClick}
                  className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                >
                  <Link to="/"> Home</Link>
                </button>
                <button
                  onClick={handleClick}
                  className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                >
                  <Link>Add Product</Link>
                </button>
                <button className="font-mono cursor-pointer text-[16px] text-white  mr-10">
                  test
                </button>
                <button className="font-mono cursor-pointer text-[16px] text-white  mr-10">
                  Profile
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
