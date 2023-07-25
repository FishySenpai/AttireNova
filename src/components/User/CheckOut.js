import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { doc, getDocs, collection, where, deleteDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import ContactInfo from "./ContactInfo";
const CheckOut = () => {
  const [data, setData] = useState([]); // data is returned back in []
  const [user, setUser] = useState({});
  const [subTotal, setSubTotal] = useState();
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantityPrice, setQuantityPrice] = useState();
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
    // ... (previous useEffect hooks) ...

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
          return acc + price*top.quantity;
        }, 0);
        setSubTotal(totalPrice);
      }
    };

    // Call the function to calculate the subtotal
    calculateSubTotal();
  }, [data]);

  useEffect(() => {
    if (user?.uid) {
      try {
        const docRef = collection(db, "users", user.uid, "products");

        const docSnap = async () => {
          const fav = await getDocs(docRef);
          setData(fav.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setQuantityPrice(data.product.price.current.value)
          console.log(data);
        };
        docSnap();
      } catch (err) {
        console.log(err);
      }
    }
  }, [user?.uid]); // use dependency list so useEffect only runs when there is change to useState


  if (user && subTotal!==0) {
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
              <ul className="flex flex-col bg-white shadow w-[450px]">
                {data.map((top) => {
                  return (
                    <li
                      className="mr-4 md:mr-8 pb-6 flex flex-row ml-4"
                      key={top.product.id}
                    >
                      <a href={`/info/${top.product.id}`}>
                        <img
                          className="w-[100px] h-[180px] md:w-[100px] md:h-[150px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                          src={`https://${top.product?.media.images[0].url}`}
                          alt="img"
                        />
                      </a>
                      <div className="w-36 md:w-60 text-gray-700 text-[16px] hover:text-red-500 text-left cursor-pointer font-normal ml-2">
                        <button className="">
                          <Link
                            to={`/info/${top.product.id}`}
                            className="text-left "
                          >
                            {top.product.name}
                          </Link>
                        </button>
                        <div className="flex flex-row ">
                          <div className="mt-1">
                            {top.product.variants[0]?.colour}
                          </div>
                          <div className="flex flex-row px-2 mb-2 font-mono">
                            <div className="text-[20px] text-gray-800 ml-10">
                              Quantity:{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mt-1">{top.size}</div>

                        <div className="text-gray-700 text-left font-bold ml-2 mt-1">
                          {top.product.price.current.text}
                        </div>
                      </div>
                      <div className=" ml-5 mt-4">
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
                  <div className="flex flex-row px-4 py-2">
                    Subtotal:
                    <div className="text-red-500 ml-72">${subTotal}</div>
                  </div>
                  <div className="flex flex-row px-4 pb-4">
                    Shipping:
                    <div className="text-red-500 ml-72">$5.00</div>
                  </div>
                  <div className="flex flex-row px-4 pb-4 font-semibold text-[20px]">
                    Total:
                    <div className="text-red-500 ml-[300px]">
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
