import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { Link, useNavigate, useParams } from "react-router-dom";
import CartPopUp from "./CartPopUp";
import useOutsideClick from "./useOutsideClick";
const Cart = ({ price, brand, product, size, selectedSize, showError, setShowError }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantityPrice, setQuantityPrice] = useState(price);
  const [user, setUser] = useState({});
  const [cartSuccess, setCartSuccess] = useState(false)
  const [wishSuccess, setWishSuccess] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
 const [cartPopupVisible, setCartPopupVisible] = useState(false);
const cartPopupRef = useRef(null);
const showCartPopup = () => {
  // Show the cart popup when the button is clicked
  setCartPopupVisible(true);
};

const hideCartPopup = () => {
  // Hide the cart popup when called
  setCartPopupVisible(false);
};

  useEffect(() => {
    setQuantityPrice(price * quantity);
  }, [price, quantity]);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setQuantityPrice(newQuantity * price);
    setShowQuantity(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  useEffect(() => {
    const userFav = async () => {
      // Make sure user is defined and has a valid uid property
      if (user && user.uid) {
        try {
          await setDoc(doc(db, "users", user.uid), {});
        } catch (err) {
          console.log(err);
        }
      }
    };

    userFav();
  });
  const wishList = async (id) => {
    const idAsString = id.toString();

    console.log(product);
    if (user) {
      try {
        console.log(product);
        await setDoc(doc(db, "users", user.uid, "wishlist", idAsString), {
          product,
        });
        setWishSuccess((prevMap) => ({ ...prevMap, [id]: true }));
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const addFav = async () => {
    // Add a new document in collection "favs"
    if(selectedSize){
      if (user) {
        try {
          await setDoc(doc(db, "users", user.uid, "cart", id), {
            product,
            size,
            quantity,
          });
         setCartSuccess((prevMap) => ({ ...prevMap, [id]: true }));
          showCartPopup();
        } catch (err) {
          console.log(err);
        }
      } else {
        navigate("/login");
      }
    } else{
setShowError(true)
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:shadow-lg sm:w-[265px] mb-10 sm:mb-0 sm:h-auto pb-4 font-mono ">
        <div className=" hidden sm:flex flex-row text-gray-700">
          <div className="text-[20px] text-red-700 ml-4">${quantityPrice}</div>
          <div className="text-[20px]  ml-auto pr-4">
            <button
              className=""
              onClick={() => {
                wishList(id);
              }}
            >
              {wishSuccess[id] ? "Wishlisted" : "Wishlist"}
            </button>
          </div>
        </div>
        <div>
          <div className="hidden sm:flex text-[16px] py-4 text-left ml-14">
            Sold by {brand?.name}
          </div>
          <div className="relative">
            <div className="flex flex-row px-2 mb-2 font-mono">
              <div className="text-[20px] text-gray-800 ml-2 mt-3 sm:ml-10">
                Quantity:{" "}
              </div>
              <div className="relative pb-2 mt-3">
                <button
                  type="button"
                  className="inline-flex align-left gap-x-1.5 rounded-md w-[52px] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  onClick={() => setShowQuantity(!showQuantity)} // Update the onClick handler
                >
                  {quantity}
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
            <div className={showQuantity ? "flex" : "hidden"}>
              <div className="flex flex-col pb-3 ml-[115px] sm:ml-[148px] w-[52px] top-12 absolute overflow-y-auto scrollbar bg-white rounded font-normal text-left shadow-lg">
                {[...Array(8)].map((_, index) => (
                  <ul className="flex flex-col" key={index + 1}>
                    <li className="px-4 py-2">
                      <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                        <button onClick={() => handleQuantityChange(index + 1)}>
                          <div className="capitalize">{index + 1}</div>
                        </button>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="py-2  px-6 sm:px-0">
            <button
              className="bg-gray-600 p-2 rounded text-white w-full sm:w-[200px]"
              onClick={addFav}
            >
              {cartSuccess[id] ? "Added to Cart" : "Add to Cart"}
            </button>
            {!selectedSize && showError && (
              <p className="text-red-500 mt-2 text-sm px-2">
                Please select a size before adding to cart.
              </p>
            )}
          </div>
          <div className="px-6 sm:px-0">
            <button className="bg-gray-600 p-2 rounded mt-2 text-white w-full sm:w-[200px]">
              <Link to="/checkout">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden 2xl:flex absolute top-[52px] right-[110px] ">
        <div className={`${product && cartPopupVisible ? "flex" : "hidden"}`}>
          {
            <CartPopUp
              product={product}
              quantityPrice={quantityPrice}
              hideCartPopup={hideCartPopup}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
