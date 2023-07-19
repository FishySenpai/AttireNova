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
    if (user) {
      setProfileToggle((prev) => !prev);
    }
  };
  const logOut = async () => {
    await signOut(auth);
    window.localStorage.clear();
  };
  return (
    <div className="flex flex-row space-x-10 static">
      <div className="flex flex-row justify-center items-center  absolute top-[90px] right-[40px] sm:top-[24px] z-50">
        <button onClick={handleClick} className="px-1 flex flex-row">
          <h1 className="hover:text-red-400">
            {user ? (
              localStorage.getItem("name") || user.email?.split("@")[0]
            ) : (
              <Link to="/login" className="text-white ">
                Login
              </Link>
            )}
          </h1>
          <div className={user ? "flex" : "hidden"}>
            
          </div>
        </button>
        <div className={`${profileToggle ? "flex " : "hidden"}`}>
          <div className={`${user ? "flex " : "hidden"}`}>
            <div className="h-[200px] absolute right-0 top-10 ">
              <div className="flex flex-col w-[150px] bg-white rounded font-normal p-2">
                {user ? (
                  <button
                    className="font-mono cursor-pointer text-left text-black hover:text-red-400 pb-1"
                    onClick={() => {
                      setProfileToggle(!profileToggle);
                    }}
                  >
                    <Link to="/fav">Favourites</Link>
                  </button>
                ) : (
                  <div className="hidden">adf</div>
                )}

                <div>
                  <button
                    onClick={logOut}
                    className={`${
                      !user ? "hidden" : "flex hover:text-red-400 text-black "
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
