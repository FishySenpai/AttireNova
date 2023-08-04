import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import {
  doc,
  getDocs,
  collection,
 getDoc
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const OrderedItems = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
  const [subTotal, setSubTotal] = useState();
  const [quantity, setQuantity] = useState(0);
const [info, setInfo] = useState();
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
        const docRef = collection(db, "users", user.uid, "orders");

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
useEffect(() => {
  const fetchData = async () => {
    if (user?.uid) {
      try {
        const docRef = doc(db, "users", user.uid, "info", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInfo({ id: docSnap.id, ...docSnap.data() });
          console.log(info)
        } else {
          // Handle case when document does not exist
          setInfo(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  fetchData();
}, [user?.uid]);
function formatTimestamp(timestamp) {
  const seconds = timestamp?.seconds || 0;
  const nanoseconds = timestamp?.nanoseconds || 0;

  // Convert the timestamp to milliseconds
  const timestampInMillis = seconds * 1000 + nanoseconds / 1000000;

  // Create a new Date object using the milliseconds
  const date = new Date(timestampInMillis);

  // Convert the date to a localized string representation (e.g., "8/31/2023, 3:00:07 PM")
  const dateString = date.toLocaleString();

  return dateString;
}

if (user) {
  return (
    <div className="px-6 items-center mx-auto container justify-between">
      <div className="sm:p-6 pt-12 items-center container justify-between">
        <div className="flex flex-col ml-16 mt-10">
          {data.map((orders) => (
            <div key={orders.id}>
              <div className="text-2xl text-left lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800 mb-1">
                Order ID: {orders.id}
              </div>
              <div className="text-base text-left font-medium leading-6 text-gray-600 mb-4">
                {formatTimestamp(orders?.timestamp)}
              </div>
              <div className="flex flex-row">
                <ul className="flex flex-col bg-white shadow w-[750px] divide-y-2  pt-2">
                  {orders.data.map((top) => (
                    <li
                      className="mr-4 md:mr-8 pb-6 flex flex-row  ml-4 "
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
                        <div className="flex flex-row justify-between">
                          <button className="text-left  w-[350px]">
                            <Link to={`/info/${top.product.id}`}>
                              {top.product.name}
                            </Link>
                          </button>
                          <div className="flex flex-row px-2 mb-2 space-x-11 ml-6 ">
                            <div className="text-gray-700 text-left font-bold ">
                              ${top.product.price.current.value}
                            </div>
                            <div className="text-[16px] text-gray-800 ">
                              Qty:{top.quantity}
                            </div>
                            <div className="text-gray-700 text-left font-bold">
                              ${top.product.price.current.value * top.quantity}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col relative">
                          <div className="mt-1">
                            Color: {top.product.variants[0]?.colour}
                          </div>
                          <div className=" mt-1">Size: {top.size}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-white shadow ml-6 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Customer Information
                  </h3>
                  {info ? (
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                      <div className="flex flex-col justify-start items-start flex-shrink-0">
                        <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-base font-semibold leading-4 text-left text-gray-800">
                              {info.name}
                            </p>
                            <p className="text-sm leading-5 text-gray-600">
                              0 Previous Orders
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                          <img
                            className="hidden dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                            alt="email"
                          />
                          <p className="cursor-pointer text-sm leading-5">
                            {info.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                        <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                          <div className="flex  justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                            <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                              Shipping Address
                            </p>
                            <div className="flex flex-col">
                              <p className="w-48 lg:w-full text-center md:text-left text-sm leading-5 text-gray-600">
                                {info.address},
                              </p>
                              <p className="w-48 lg:w-full text-center md:text-left text-sm leading-5 text-gray-600">
                                {info.city} {info.country} {info.zip}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                            <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                              Billing Address
                            </p>
                            <div className="flex flex-col">
                              <p className="w-48 lg:w-full text-center md:text-left text-sm leading-5 text-gray-600">
                                {info.address},
                              </p>
                              <p className="w-48 lg:w-full text-center md:text-left text-sm leading-5 text-gray-600">
                                {info.city} {info.country} {info.zip}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-center items-center md:justify-start md:items-start ">
                          <button className="mt-6 md:mt-0 bg-gray-800 text-white border hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border-gray-800 font-medium w-96 2xl:w-full text-base py-2  leading-4 ">
                            Edit Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col text-[16px] w-[750px] mt-6 bg-white shadow">
                <div className="flex flex-row px-4 py-2 relative">
                  Subtotal({quantity} items):
                  <div className="text-red-500 absolute right-5">
                    $
                    {orders.data.reduce(
                      (total, top) =>
                        total + top.product.price.current.value * top.quantity,
                      0
                    )}
                  </div>
                </div>
                <div className="flex flex-row px-4 pb-4 relative">
                  Shipping:
                  <div className="text-red-500 absolute right-5">$5.00</div>
                </div>
                <div className="flex flex-row px-4 pb-4 font-semibold text-[20px] relative">
                  Total:
                  <div className="text-red-500 absolute right-5">
                    $
                    {orders.data.reduce(
                      (total, top) =>
                        total + top.product.price.current.value * top.quantity,
                      5
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
