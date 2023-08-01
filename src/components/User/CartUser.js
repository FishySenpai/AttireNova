import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { doc, getDocs, collection, where, deleteDoc, updateDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const CartUser = () => {
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
  const [reFetch, setReFetch] = useState(0);
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);

  const wishList = async(id, product)=>{
    const idAsString = id.toString();
    if (user) {
        try {
          await setDoc(doc(db, "users", user.uid, "wishlist", idAsString), {
            product
          });
          deleteFav(id)
        } catch (err) {
          console.log(err);
        }
      } else {
        navigate("/login");}
  }
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
        setReFetch(reFetch + 1);
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

  if (user) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <div className="text-gray-500 text-2xl py-4 capitalize">
            {localStorage.getItem("name") || user.email?.split("@")[0]}'s Cart
          </div>
          {data.length === 0 ? (
            <div className="flex flex-wrap">
              No Products have been added yet.
            </div>
          ) : (
            <div className="flex flex-row ml-44 mt-10">
              <ul className="flex flex-col bg-white shadow w-[650px] divide-y pt-2">
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
                      <div className=" text-gray-700 text-[16px] text-left  font-normal ml-2">
                        <button className="text-left">
                          <Link to={`/info/${top.product.id}`}>
                            {top.product.name}
                          </Link>
                        </button>
                        <div className="flex flex-row relative">
                          <div className="mt-1">
                            {top.product.variants[0]?.colour}
                          </div>
                          <div className="ml-5 mt-1">{top.size}</div>
                          <div className="flex flex-row px-2 mb-2  mt-1">
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

                        <div className="text-gray-700 text-left font-bold ml-2 mt-1">
                          ${top.product.price.current.value * top.quantity}
                        </div>
                        <div className=" ml-5 mt-4 text-[16px]">
                          <button
                            className="px-3 py-[1px]  text-white  tracking-wider bg-gray-700 rounded"
                            onClick={() => deleteFav(top.product.id)}
                          >
                            Delete
                          </button>
                          <button className="px-3 py-[1px] ml-2 text-white tracking-wider bg-gray-700 rounded" onClick={()=>wishList(top.product.id, top.product)}>
                            Add to Wishlist
                          </button>
                        </div>
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
              <div>
                <div className="flex flex-col text-[16px] bg-white ml-10 w-[300px]">
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
                  <div className="pb-4">
                    <a href="/checkout" className="bg-gray-800 rounded px-12 py-1 text-white">
                      Proceed to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    navigate("/");
    return null;
  }
};

export default CartUser;
