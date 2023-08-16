import React, { useState, useContext, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import {
  doc,
  getDocs,
  collection,
  where,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import CartPopUp from "./CartPopUp";

const WishlistItem = ({ top, reFetch, setReFetch }) => { 
  const [user, setUser] = useState({});
  const [size, setSize] = useState("Select size:");
  const [showSize, setShowSize] = useState(false);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showError, setShowError] = useState(false);
  const [productId, setProductId] = useState(null);

  const [cartPopupVisible, setCartPopupVisible] = useState(false);
  const cartPopupRef = useRef(null);
  const showCartPopup = () => {
    setCartPopupVisible(true);
  };

  const hideCartPopup = () => {
    setCartPopupVisible(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  const handleClick = (id) => {
    console.log(id);
    console.log(productId);
    if (id === productId) {
      setShowSize(!showSize);
    } else {
      setShowSize(true);
    }
    setProductId(id);
  };
  const addFav = async (id, product, size) => {
    setProductId(id);
    // Add a new document in collection "favs"
    const idAsString = id.toString();

    if (selectedSize || size) {
      if (user) {
        console.log(size);
        try {
          await setDoc(doc(db, "users", user.uid, "cart", idAsString), {
            product,
            size,
            quantity: 1,
          });
          showCartPopup();
        } catch (err) {
          console.log(err);
        }
      } else {
        navigate("/login");
      }
    } else {
      setShowError(true);
    }
  };
  const handleSizeChange = async (id, newSize, product) => {
    const idAsString = id.toString();
    if (user) {
      try {
        await updateDoc(doc(db, "users", user.uid, "wishlist", idAsString), {
          product,
          size: newSize,
        });
        setProductId(null);
        setSelectedSize(null);
        setShowSize(false);
        setReFetch(reFetch + 1);
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };
  const deleteFav = async (id) => {
    // delete document in collection "products"
    try {
      console.log(id);
      const idAsString = id.toString(); //firebase expects id to be a string
      const docRef = doc(db, "users", user.uid, "wishlist", idAsString);
      await deleteDoc(docRef);
      setReFetch(reFetch + 1);
    } catch (err) {
      console.log(err);
    }
  };

  // ... Rest of the code for handling size change, adding to cart, etc.

  return (
    <li className=" pb-6 " key={top.product.id}>
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
            className="w-full h-auto  rounded cursor-default"
            src={`https://${top.product?.media.images[0].url}`}
            alt="img"
          />
        </a>
      </div>
      <div className="w-full text-gray-500 text-left text-sm ml-1  ">
        <button className="text-left text-sm">
          <Link className="truncate-1-lines" to={`/info/${top.product.id}`}>
            {top.product.name}
          </Link>
        </button>

        <div className="divide-y">
          <div className="text-gray-700 text-left font-bold py-1">
            {top.product.price.current.text}
          </div>
          <div className="py-2">{top.product.variants[0].colour}</div>
          <div className="flex mb-2 font-mono  relative">
              <button
                type="button"
                className="text-left rounded-md w-full py-2 text-sm font-semibold text-gray-900 shadow-sm "
                id="menu-button"
                onClick={() => handleClick(top.product.id)} // Update the onClick handler
              >
                {top.size ? top.size : "Select size: "}
                <div className="absolute  top-0 right-[0px] mr-2 mt-2">
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
          <div
            className={
              top.product.id === productId && showSize ? "flex" : "hidden"
            }
          >
            <div className="flex flex-col pb-3  mt-0 w-[262px] h-[200px] absolute overflow-y-auto scrollbar bg-white rounded font-normal text-left shadow-lg z-50">
              {top.product.variants?.map((size) => (
                <ul className="flex flex-col " key={size.id}>
                  <li className="px-4 py-2">
                    <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                      <button
                        onClick={() => {
                          handleSizeChange(
                            top.product.id,
                            size.displaySizeText,
                            top.product
                          );
                          setSelectedSize(size.displaySizeText);
                          setShowError(false);
                          setSize(size.displaySizeText);
                          setShowSize(false);
                        }}
                      >
                        <div className="capitalize">{size.displaySizeText}</div>
                      </button>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <button
          className="bg-gray-800 text-white w-full py-1 rounded text-[16px]"
          onClick={() => addFav(top.product.id, top.product, top.size)}
        >
          Add to cart
        </button>
        {!selectedSize && !top.size && showError && (
          <div className={top.product.id === productId ? "flex" : "hidden"}>
            <p className="text-red-500 mt-2 text-sm px-2">
              Please select a size before adding to cart.
            </p>
          </div>
        )}
      </div>
      <div className="hidden 2xl:flex absolute -top-[30px] -right-[96px] z-50">
        <div
          className={`${
            top.product && cartPopupVisible && top.product.id === productId
              ? "flex"
              : "hidden"
          }`}
        >
          {console.log({ top: top.product.id, product: productId })}
          {
            <CartPopUp
              product={top.product}
              quantityPrice={top.product.price?.current.value}
              hideCartPopup={hideCartPopup}
            />
          }
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
