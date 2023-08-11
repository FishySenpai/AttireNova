import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [profileToggle, setProfileToggle] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleClick = () => {
    if (user && !user.isAnonymous) {
      setProfileToggle((prev) => !prev);
    }
  };
  const logOut = async () => {
    await signOut(auth);
    window.localStorage.clear();
  };
  return (
    <div className="flex flex-row ">
      <div className="flex flex-row ">
        <button onClick={handleClick} className="hidden sm:flex flex-row">
          <h1 className="hover:text-red-400">
            {user ? (
              localStorage.getItem("name") || user.email?.split("@")[0]
            ) : (
              <Link to="/login" className="text-white ">
                Login
              </Link>
            )}
            <Link to="/login">{user?.isAnonymous ? "Login" : ""}</Link>
          </h1>
          <div className={user ? "flex" : "hidden"}></div>
        </button>
        <button onClick={handleClick} className="flex sm:hidden flex-row">
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
            <div className="h-[200px] absolute right-0 top-10 z-20">
              <div className="flex flex-col w-[150px] bg-white rounded font-normal p-2">
                {user ? (
                  <button
                    className="font-mono cursor-pointer text-left text-black hover:text-red-400 pb-1"
                    onClick={() => {
                      setProfileToggle(!profileToggle);
                    }}
                  >
                    <Link to="/orders">Orders</Link>
                  </button>
                ) : (
                  <div className="hidden">adf</div>
                )}

                <div>
                  <button
                    onClick={logOut}
                    className={`${
                      user===null ? "hidden" : "flex hover:text-red-400 text-black pt-2 pb-4"
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
  );
};

export default Profile;
