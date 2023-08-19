import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import arrow from "../Assets/arrow.png";
const Profile = () => {
  const [user, setUser] = useState({});
  const [profileToggle, setProfileToggle] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleClick = () => {
    if (user && !user.isAnonymous) {
      setProfileToggle((prev) => !prev);
    } else {
      navigate("/login");
    }
  };
  const logOut = async () => {
    await signOut(auth);
    window.localStorage.clear();
    setProfileToggle(false);
    navigate("/")
  };
  return (
    <div className="flex flex-row relative">
      <div className="flex flex-row ">
        <button
          onClick={handleClick}
          className="hidden 2xl:flex flex-row font-medium cursor-pointer text-[16px] text-white  mx-4"
        >
          <h1 className="hover:text-red-400">
            {user && !user?.isAnonymous ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                width="20px"
                viewBox="0 0 448 512"
              >
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                  fill="white"
                />
              </svg>
            ) : (
              <Link to="/login" className="text-white ">
                Login
              </Link>
            )}
          </h1>
          <div className={user ? "flex" : "hidden"}></div>
        </button>
        <button
          onClick={handleClick}
          className="flex 2xl:hidden flex-row  lg:w-[20px] lg:mx-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            width="25px"
            viewBox="0 0 448 512"
          >
            <path
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              fill="white"
            />
          </svg>
        </button>
        <div className={`${profileToggle ? "flex " : "hidden"}`}>
          <div className={`${user ? "flex " : "hidden"}`}>
            <div>
              <img
                src={arrow}
                className="absolute top-6 right-1 sm:top-5 sm:right-0.5 lg:top-5 lg:right-4 h-3 w-5"
              />
            </div>
            <div className="absolute z-30 top-8 right-0  sm:top-8 sm:-right-2 lg:top-8 lg:right-0">
              <button
                onClick={() => {
                  setProfileToggle(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="38px"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    fill="black"
                  />{" "}
                </svg>
              </button>
            </div>
            <div className="absolute top-8 right-0  sm:top-8 sm:-right-3 lg:top-8 lg:right-0 z-20">
              <div className="flex flex-col w-[175px] bg-white rounded  p-2 text-gray-800 font-normal text-left">
                <div className="space-y-2 ml-2">
                  <div className="hover:text-red-500 ">
                    <button
                      onClick={() => {
                        setProfileToggle(!profileToggle);
                      }}
                    >
                      <Link to="/orders">My Orders</Link>
                    </button>
                  </div>

                  <div className="hover:text-red-500 ">
                    <button
                      onClick={() => {
                        setProfileToggle(!profileToggle);
                      }}
                    >
                      <Link to="/cart">My Cart</Link>
                    </button>
                  </div>
                  <div className="hover:text-red-500 ">
                    <button
                      onClick={() => {
                        setProfileToggle(!profileToggle);
                      }}
                    >
                      <Link to="/wishlist">My Wishlist</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={logOut}
                      className={`${
                        user === null
                          ? "hidden"
                          : "flex hover:text-red-500  pb-2"
                      }`}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
