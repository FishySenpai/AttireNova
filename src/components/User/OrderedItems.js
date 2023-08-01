import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import {
  doc,
  getDocs,
  collection,
  where,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const OrderedItems = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
  const [subTotal, setSubTotal] = useState();
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      try {
        const docRef = collection(db, "users", user.uid, "ordered");

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
  }, [user?.uid]);

  if (user) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <div className="text-gray-500 text-2xl py-4 capitalize">
            {localStorage.getItem("name") || user.email?.split("@")[0]}'s Cart
          </div>
          
            <div className="flex flex-row ml-44 mt-10">
              <ul className="flex flex-col bg-white shadow w-[650px] divide-y pt-2">
                {data.map((orders) => {
                  
                  console.log(orders.data)
                  return (orders.data.map((top)=>{
                    return (
                      <li
                        className="mr-4 md:mr-8 pb-6 flex flex-row ml-4 "
                        key={top?.product.id}
                      >
                        <a href={`/info/${top?.product.id}`}>
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
                            </div>
                          </div>

                          <div className="text-gray-700 text-left font-bold ml-2 mt-1">
                            ${top.product.price.current.value * top.quantity}
                          </div>
                        </div>
                        
                      </li>
                    );
                  }))
                
                }
                  
                )}
                
              </ul>
              <div></div>
            </div>
       
        </div>
      </div>
    );
  } else {
    navigate("/");
    return null;
  }
};

export default OrderedItems;
