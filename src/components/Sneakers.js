import React, { useState, useEffect } from "react";
import Products from "./Products";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useFetch } from "./getData";
import { useNavigate } from "react-router-dom";
const Sneakers = () => {
  const [user, setUser] = useState();
  const id = 8409;
  const navigate = useNavigate();
  const { loading, products } = useFetch(id);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  const addFav = async () => {
    // Add a new document in collection "favs"
    const men = "men";
    const idAsString = id.toString();
    if (user && products) {
      try {
        await setDoc(doc(db, "categories", men, "products", idAsString), {
          name: "Men's Sale",
          products,
        });
        console.log("success")
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };
  if (loading) {
    return (
      <div>
        <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
          Women's New
        </div>
        <div className=" items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <div className="flex flex-wrap">
              {[...Array(10)].map((_, index) => (
                <li
                  className="mr-4 md:mr-8 pb-6 rounded animate-pulse list-none"
                  key={index}
                >
                  <div className="w-[265px] h-[339px] bg-gray-300 mb-2"></div>
                  <div className="mt-2">
                    <div className="w-12 md:w-40  bg-gray-300 h-4 shadow"></div>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={addFav}>Add</button>
        <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
          Women's New
        </div>
        <Products products={products} />
      </div>
    );
  }
};

export default Sneakers;
