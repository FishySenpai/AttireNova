import React, { useState, useContext, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import WishlistItem from "./WishlistItem";
const WishList = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [reFetch, setReFetch] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      try {
        const docRef = collection(db, "users", user.uid, "wishlist");

        const docSnap = async () => {
          const fav = await getDocs(docRef);
          setData(fav.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log(data);
        };
        docSnap();
      } catch (err) {
        console.log(err);
      }
    }
  }, [user?.uid, reFetch]); // use dependency list so useEffect only runs when there is change to useState

  if (user) {
    return (
      <div className="px-6 items-center mx-auto container justify-between min-h-screen pb-8">
        <div className="sm:p-6 pt-12 items-center container justify-between relative">
          <div className="text-gray-500 text-2xl py-4 text-left capitalize">
            My Wishlist
          </div>
          {data.length === 0 ? (
            <div className="flex flex-wrap">
              No Products have been added yet.
            </div>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {data.map((top, index) => (
                <WishlistItem //the cartpop exists individually for each item state with wishlist item component
                  top={top}
                  price={top.price}
                  key={top.product.id}
                  reFetch={reFetch}
                  setReFetch={setReFetch}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  } else {
    navigate("/");
    return null;
  }
};

export default WishList;
