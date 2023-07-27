import React, { useState, useContext, useEffect, useCallback } from "react";
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
  updateDoc
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import ContactInfo from "./ContactInfo";
const CheckOut = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
  const [subTotal, setSubTotal] = useState();
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);
  const [productId, setProductId] = useState();
  const [quantityPrice, setQuantityPrice] = useState(0);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState();
const [reFetch, setReFetch] = useState(0)
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
const handleClick = (id) => {
  if (id === productId) {
    setShowQuantity(!showQuantity);
  } else {
    setShowQuantity(true);
  }
  setProductId(id);
};

 const handleQuantityChange = async (newQuantity, price, id) => {
  const idAsString = id.toString();
   if (user) {
     try {
       await updateDoc(doc(db, "users", user.uid, "products", idAsString), {
         quantity: newQuantity,
       });
       setShowQuantity(false);
       setQuantity(0);
       setReFetch(reFetch+1)
     } catch (err) {
       console.log(err);
     }
   } else {
     navigate("/login");
   }

 };


  useEffect(() => {
    // ... (previous useEffect hooks) ...
const quantityCheck = () => {
  if (data.length > 0) {
    data.forEach((top) => {
      setQuantity((prevQuantity) => prevQuantity + top.quantity);
    });
  }
};

    // Calculate the subtotal
    const calculateSubTotal = () => {
      if (data.length === 0) {
        setSubTotal(0); // If there are no products, set the subtotal to 0
      } else {

        // Calculate the sum of all product prices
        const totalPrice = data.reduce((acc, top) => {

          // Assuming price is a string and needs to be converted to a number for the calculation
          const price = parseFloat(
            top.product.price.current.text.replace(/\$/g, "")
          );
          return acc + price * top.quantity;
        }, 0);
        setSubTotal(totalPrice);
      }
    };
quantityCheck();
    // Call the function to calculate the subtotal
    calculateSubTotal();
  }, [data]);

  useEffect(() => {
    if (user?.uid) {
      try {
        const docRef = collection(db, "users", user.uid, "products");

        const docSnap = async () => {
          const fav = await getDocs(docRef);
          setData(
            fav.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          console.log(data);
        };
        docSnap();
      } catch (err) {
        console.log(err);
      }
    }
  }, [user?.uid, reFetch]);


  if (user && subTotal !== 0) {
    return (
      <div className="flex flex-row ml-96">
        <ContactInfo user={user} subTotal={subTotal} />
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <div className="text-gray-500 text-2xl py-4 capitalize mr-96">
              Order History
            </div>
            {data.length === 0 ? (
              <div className="flex flex-wrap">
                No Products have been added yet.
              </div>
            ) : (
              <ul className="flex flex-col bg-white shadow w-[450px] divide-y">
                {data.map((top) => {
                  return (
                    <li
                      className="mr-4 md:mr-8 pb-6 flex flex-row ml-4 "
                      key={top.product.id}
                    >
                      <a href={`/info/${top.product.id}`}>
                        <img
                          className="w-[100px] h-[180px] md:w-[100px] md:h-[150px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                          src={`https://${top.product?.media.images[0].url}`}
                          alt="img"
                        />
                      </a>
                      <div className="w-36 md:w-60 text-gray-700 text-[16px] text-left  font-normal ml-2">
                        <button className="">
                          <Link
                            to={`/info/${top.product.id}`}
                            className="text-left "
                          >
                            {top.product.name}
                          </Link>
                        </button>
                        <div className="flex flex-row relative">
                          <div className="mt-1">
                            {top.product.variants[0]?.colour}
                          </div>
                          <div className="flex flex-row px-2 mb-2  absolute right-[0px] mt-1">
                            <div className="text-[16px] text-gray-800 ml-10 mr-1">
                              Qty: {" "}
                            </div>
                            <div className="relative pb-2">
                              <button
                                type="button"
                                className="inline-flex align-left gap-x-1.5 rounded-md w-[52px] h-[28px] bg-white px-3 pt-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="menu-button"
                                onClick={() => handleClick(top.product.id)} // Update the onClick handler
                              >
                                {top.quantity}
                                <div className="absolute top-0 right-0 mr-2 mt-1">
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
                          <div
                            className={
                              top.product.id === productId && showQuantity
                                ? "flex"
                                : "hidden"
                            }
                          >
                            <div className="flex-col pb-3 mt-9 z-20 w-[52px] h-[200px] scrollbar absolute  right-[8px] overflow-y-auto  bg-white rounded font-normal text-left shadow-lg">
                              {[...Array(10)].map((_, index) => (
                                <ul className="flex flex-col" key={index + 1}>
                                  <li className="px-4 py-2">
                                    <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                                      <button
                                        onClick={() =>
                                          handleQuantityChange(
                                            index + 1,
                                            top.product.price.current.value,
                                            top.product.id
                                          )
                                        }
                                      >
                                        <div className="capitalize">
                                          {index + 1}
                                        </div>
                                      </button>
                                    </div>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-1">{top.size}</div>

                        <div className="text-gray-700 text-left font-bold ml-2 mt-1">
                          ${top.product.price.current.value * top.quantity}
                        </div>
                      </div>
                      <div className=" ml-5 mt-4 h-[30px] ">
                        <button onClick={() => deleteFav(top.product.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  );
                })}
                <div className="flex flex-col text-[16px]">
                  <div className="flex flex-row px-4 py-2 relative">
                    Subtotal({quantity} items):
                    <div className="text-red-500 absolute right-5">
                      ${subTotal}
                    </div>
                  </div>
                  <div className="flex flex-row px-4 pb-4 relative">
                    Shipping:
                    <div className="text-red-500 absolute right-5">$5.00</div>
                  </div>
                  <div className="flex flex-row px-4 pb-4 font-semibold text-[20px] relative">
                    Total:
                    <div className="text-red-500 absolute right-5">
                      ${subTotal + 5}
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CheckOut;
