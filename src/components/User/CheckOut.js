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
  const [success, setSuccess] = useState(false);

const [reFetch, setReFetch] = useState(0)
const handleSuccessToggle = () => {
  setSuccess(true);
};
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
      setReFetch(reFetch+1)
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
      <div className="relative">
        <div className="flex flex-row ml-96">
          <ContactInfo
            user={user}
            data={data}
            subTotal={subTotal}
            onSuccessToggle={handleSuccessToggle}
          />
          <div className="px-6 items-center  container justify-between ">
            <div className="sm:px-6 pb-6 pt-4 items-center container justify-between">
              <div className="text-gray-500 text-2xl pb-7 capitalize w-[450px] ">
                Order History
              </div>
              {data.length === 0 ? (
                <div className="flex flex-wrap">
                  No Products have been added yet.
                </div>
              ) : (
                <ul className="flex flex-col bg-white shadow w-[550px] divide-y pt-2">
                  {data.map((top) => {
                    return (
                      <li
                        className="mr-4 md:mr-8 pb-6 flex flex-row ml-4 "
                        key={top.product.id}
                      >
                        <a href={`/info/${top.product.id}`}>
                          <img
                            className="w-[120px] h-[160px] md:w-[160px] md:h-[180px]  rounded hover:shadow-lg cursor-pointer hover:scale-105"
                            src={`https://${top.product?.media.images[0].url}`}
                            alt="img"
                          />
                        </a>
                        <div className="w-36 sm:w-full text-gray-700 text-[16px] text-left  font-normal ml-2">
                          <div className="flex flex-row relative">
                            <button className="text-left">
                              <Link
                                to={`/info/${top.product.id}`}
                                className="text-left "
                              >
                                {top.product.name}
                              </Link>
                            </button>
                            <div className=" ml-5 mt-4 h-[30px] absolute -right-3 -top-3 ">
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
                          </div>
                          <div className="flex flex-row relative">
                            <div className="mt-1">
                              {top.product.variants[0]?.colour}
                            </div>
                            <div className="mt-1 ml-6">{top.size}</div>
                            <div className="flex flex-row absolute right-0 sm:relative px-2 mb-2  mt-1">
                              <div className="text-[16px] text-gray-800 ml-5 mr-1">
                                Qty:{" "}
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
                              <div
                                className={
                                  top.product.id === productId && showQuantity
                                    ? "flex"
                                    : "hidden"
                                }
                              >
                                <div className="flex-col pb-3 mt-9 z-20 w-[52px] h-[200px] scrollbar absolute  right-[8px] overflow-y-auto  bg-white rounded font-normal text-left shadow-lg">
                                  {[...Array(10)].map((_, index) => (
                                    <ul
                                      className="flex flex-col"
                                      key={index + 1}
                                    >
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
                          </div>

                          <div className="text-gray-700 text-left font-bold ml-2 mt-1">
                            $
                            {(
                              top.product.price.current.value * top.quantity
                            ).toFixed(2)}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <div className="flex flex-col text-[16px]">
                    <div className="flex flex-row px-4 py-2 relative">
                      Subtotal({quantity} items):
                      <div className="text-red-500 absolute right-5">
                        ${subTotal.toFixed(2)}
                      </div>
                    </div>
                    <div className="flex flex-row px-4 pb-4 relative">
                      Shipping:
                      <div className="text-red-500 absolute right-5">$5.00</div>
                    </div>
                    <div className="flex flex-row px-4 pb-4 font-semibold text-[20px] relative">
                      Total:
                      <div className="text-red-500 absolute right-5">
                        ${(subTotal + 5).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className={!success ? "hidden" : "flex"}>
          <div class="absolute inset-0 pt-[196px]  h-full  bg-gray-900/50  z-50">
            <div class="bg-white p-6  md:mx-auto w-[500px] shadow-xl rounded">
              <svg
                viewBox="0 0 24 24"
                class="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                  Payment Done!
                </h3>
                <p class="text-gray-600 my-2">
                  Thank you for completing your secure online payment.
                </p>
                <p> Have a great day! </p>
                <div class="py-10 text-center">
                  <button class="px-12 bg-gray-900 hover:bg-gray-800 rounded text-white font-semibold py-3">
                    <Link to="/">GO BACK</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CheckOut;
