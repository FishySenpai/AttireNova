import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Products = ({ products, view, name }) => {
  const [fillColor, setFillColor] = useState("black");
  const [user, setUser] = useState({});
  const [productId, setProductId] = useState([]);
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [wish, setWish] = useState(false);
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  const FetchProducts = async (id) => {
    const idAsString = id.toString();
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v4/detail",
      params: {
        id: idAsString,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setProduct(response.data);
      console.log(response);
      console.log(product);
    } catch (error) {
      console.error(error);
    }
  };
  const FetchPrice = async (id) => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v4/get-stock-price",
      params: {
        productIds: id,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_X_RapidAPI_Key,
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0]?.productPrice?.current.value);
      setPrice(response.data[0]?.productPrice?.current.value);
    } catch (error) {
      console.error(error);
    }
  };
  const wishList = async (id) => {
    const idAsString = id.toString();

    console.log(product);
    if (user) {
      try {
        console.log(product, price);
        await setDoc(doc(db, "users", user.uid, "wishlist", idAsString), {
          price,
          product,
        });
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
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    wishList(currentId);
  }, [product]);

  const handleClick = async (id) => {
    setCurrentId(id);
    FetchProducts(id);
    FetchPrice(id);
    if (productId.includes(id)) {
      await deleteFav(id);
      // If the product is already in the array, remove it (toggle off)
      setProductId(productId.filter((product) => product !== id));
    } else {
      // If the product is not in the array, add it (toggle on)
      setProductId([...productId, id]);
    }
    setWish(true);
  };
  if (products) {
    return (
      <div>
        <div className="flex justify-center pt-12 pb-12">
          <div className="w-full max-w-screen-2xl px-4">
            <div className="flex text-left pb-5 ml-4  font-mono text-2xl text-gray-600">
              {name}
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
              {products?.slice(0, 45).map((top, index) => (
                <li className="relative" key={top.id}>
                  <button
                    className="absolute top-0 right-1 p-3"
                    onClick={() => handleClick(top.id, top)}
                  >
                    {wish && productId.includes(top.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 512 512"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 512 512"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                      </svg>
                    )}
                  </button>
                  <a href={`/info/${top.id}`}>
                    <img
                      className="w-full h-auto rounded hover:shadow-lg cursor-pointer"
                      src={`https://${top.imageUrl}`}
                      alt="img"
                    />
                  </a>
                  <div className="mt-2 text-gray-700 hover:text-red-500 cursor-pointer">
                    <button className="text-left">
                      <Link className="truncate-2-lines" to={`/info/${top.id}`}>
                        {top.name}
                      </Link>
                    </button>
                    <div className="flex items-center">
                      <div className="text-gray-500 text-sm line-through">
                        {top.price?.rrp.text}
                      </div>
                      <div className="text-gray-700 font-bold ml-2">
                        {top.price.current.text}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Products;
