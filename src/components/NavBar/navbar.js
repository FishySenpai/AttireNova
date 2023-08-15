import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Profile from "../User/Profile";
import logo from "../Assets/logo.png";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

import CategoriesToggle from "./CategoriesToggle";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
const Navbar = (props) => {
  const [search, setSearch] = useState("");

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

 
  return (
    <div className="relative">
      <div className="bg-gray-800 w-full py-3 ">
        <div>
          <div>
            <nav className="w-full flex  justify-between items-center">
              <MobileNav
                setMenToggle={setMenToggle}
                setWomenToggle={setWomenToggle}
                menToggle={menToggle}
                womenToggle={womenToggle}
                logo={logo}
              />
              <DesktopNav
                setMenToggle={setMenToggle}
                setWomenToggle={setWomenToggle}
                menToggle={menToggle}
                womenToggle={womenToggle}
                logo={logo}
              />
            </nav>
          </div>
        </div>
      </div>
      <CategoriesToggle
        menToggle={menToggle}
        womenToggle={womenToggle}
        setMenToggle={setMenToggle}
        setWomenToggle={setWomenToggle}
      />
    </div>
  );
};

export default Navbar;
