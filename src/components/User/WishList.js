import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { doc, getDocs, collection, where, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const WishList = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
    const [size, setSize] = useState("Select size:");
    const [showSize, setShowSize] = useState(false);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState();
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(user);
      });
    }, [user]);
    const deleteFav = async (id) => {
      // delete document in collection "products"
      try {
        console.log(id);
        const idAsString = id.toString(); //firebase expects id to be a string
        const docRef = doc(db, "users", user.uid, "products", idAsString);
        await deleteDoc(docRef);
      } catch (err) {
        console.log(err);
      }
    };

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
  }, [user?.uid]); // use dependency list so useEffect only runs when there is change to useState

  if (user) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <div className="text-gray-500 text-2xl py-4 capitalize">
            {localStorage.getItem("name") || user.email?.split("@")[0]}'s
            Wishlist
          </div>
          {data.length === 0 ? (
            <div className="flex flex-wrap">
              No Products have been added yet.
            </div>
          ) : (
            <ul className="flex flex-wrap">
              {data.map((top) => (
                <li className="mr-4 md:mr-8 pb-6" key={top.product.id}>
                  <div className="relative">
                    <div className=" ml-5 mt-4 h-[30px] absolute right-5 ">
                      <button onClick={() => deleteFav(top.product.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          fill="rgb(31 41 55)"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </button>
                    </div>
                    <a href={`/info/${top.product.id}`}>
                      <img
                        className="w-[265px] h-[339px]  rounded cursor-default"
                        src={`https://${top.product?.media.images[0].url}`}
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="w-36 md:w-[265px] text-gray-500 text-left text-sm ml-1  ">
                    <button className="text-left text-sm">
                      <Link className="" to={`/info/${top.product.id}`}>
                        {top.product.name}
                      </Link>
                    </button>

                    <div className="divide-y">
                      <div className="text-gray-700 text-left font-bold py-1">
                        {top.product.price.current.text}
                      </div>
                      <div className="py-2">
                        {top.product.variants[0].colour}
                      </div>
                      <div className="flex mb-2 font-mono">
                        <div className="relative">
                          <button
                            type="button"
                            className="text-left rounded-md w-[262px]  py-2 text-sm font-semibold text-gray-900 shadow-sm "
                            id="menu-button"
                            onClick={() => setShowSize(!showSize)} // Update the onClick handler
                          >
                            {size}
                            <div className="absolute top-0 right-0 mr-2 mt-2">
                              <svg
                                className="-mr-1 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className={showSize ? "flex" : "hidden"}>
                        <div className="flex flex-col pb-3  mt-0 w-[262px] h-[200px] absolute overflow-y-auto scrollbar bg-white rounded font-normal text-left shadow-lg">
                          {top.product.variants?.map((size) => (
                            <ul className="flex flex-col " key={size.id}>
                              <li className="px-4 py-2">
                                <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                                  <button
                                    onClick={() => {
                                      setSize(size.displaySizeText);
                                      setShowSize(false);
                                    }}
                                  >
                                    <div className="capitalize">
                                      {size.displaySizeText}
                                    </div>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="bg-gray-800 text-white w-[262px] py-1 rounded text-[16px]">
                      Move to cart
                    </button>
                  </div>
                </li>
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
