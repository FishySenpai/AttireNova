import React, {useState, useEffect} from 'react'
import { db } from "../firebaseConfig";
import { serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  where,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
const ContactInfo = ({user, subTotal, onSuccessToggle, data}) => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [city, setCity] = useState("");
      const [country, setCountry] = useState("");
      const [zip, setZip] = useState("");
      // State for payment information
      const [card, setCard] = useState("");
      const [randomId, setRandomId] = useState(null);
        const navigate = useNavigate();
      // Function to handle form submission
      const handleSubmit = (e) => {
        
        addFav();
        e.preventDefault();
        // Do something with the form data, e.g., send it to a server
        console.log({
          name,
          email,
          address,
          city,
          country,
          zip,
          card,
        });
      };
const randomID = () => {
  setRandomId(Math.floor(Math.random() * (100000 - 10000)) + 10000);
};
useEffect(() => {
  randomID();
}, [])



      

       const addFav = async () => {
         // Add a new document in collection "users"
         
         const idAsString = randomId.toString();
         if (user) {
           try {
             await setDoc(doc(db, "users", user.uid, "info", user.uid), {
               name,
               email,
               address,
               city,
               country,
               zip,
               card,
             });
             await setDoc(doc(db, "users", user.uid, "orders", idAsString), {
               data,
               subTotal,
               timestamp: serverTimestamp() 
             });
             onSuccessToggle();
           } catch (err) {
             console.log(err);
           }
         } else {
           navigate("/login");
         }
       };
  
  return (
    <div>
      {" "}
      <div class="leading-loose relative text-left w-full sm:w-[500px]">
        <div className="text-gray-500 text-2xl py-4 capitalize">
          Contact Information
        </div>
        <form class="max-w-xl m-4 py-5 px-10 bg-white rounded shadow-md">
          <p class="text-gray-800 text-xl font-medium text-center">
            Customer information
          </p>
          <div class="">
            <label
              class="block text-md font-medium text-gray-600"
              for="cus_name"
            >
              Name
            </label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-200  rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Your Name"
              aria-label="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mt-2">
            <label
              class="block text-md font-medium text-gray-600"
              for="cus_email"
            >
              Email
            </label>
            <input
              class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Your Email"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mt-2">
            <label
              class=" block text-md font-medium text-gray-600"
              for="cus_email"
            >
              Address
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Email"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="mt-2">
            <label
              class="hidden text-md font-medium  text-gray-600"
              for="cus_email"
            >
              City
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="City"
              aria-label="Email"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div class="inline-block mt-2 w-1/2 pr-1">
            <label
              class="hidden  text-md font-medium text-gray-600"
              for="cus_email"
            >
              Country
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Country"
              aria-label="Email"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label
              class="hidden  text-md font-medium text-gray-600"
              for="cus_email"
            >
              Zip
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Email"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <p class="mt-4 text-gray-800 text-xl font-medium text-center">
            Payment information
          </p>
          <div class="">
            <label
              class="block text-md font-medium text-gray-600"
              for="cus_name"
            >
              Card Number
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Card Number"
              aria-label="Name"
              onChange={(e) => setCard(e.target.value)}
            />
          </div>
          <div class="">
            <label
              class="block text-md font-medium text-gray-600"
              for="cus_name"
            >
              Name on card
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Name on card"
              aria-label="Name"
              onChange={(e) => setCard(e.target.value)}
            />
          </div>
          <div class="flex flex-row">
            <div class="">
              <label
                class="block text-md font-medium text-gray-600"
                for="cus_name"
              >
                Expiry Date (MM/YY)
              </label>
              <input
                class="w-[150px] sm:w-[250px] px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="MM/YY"
                aria-label="Name"
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
            <div class="ml-4">
              <label
                class="block text-md font-medium text-gray-600"
                for="cus_name"
              >
                CVC
              </label>
              <input
                class="w-[120px] px-2 py-2 text-gray-700 bg-gray-200 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="CVC"
                aria-label="Name"
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
          </div>
          <div class="mt-6 ml-[49px] sm:ml-24 ">
            <button
              class="px-4 py-1 text-white w-[200px]  font-light tracking-wider bg-gray-900 rounded focus:border-gray-800 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-80"
              type="submit"
              onClick={handleSubmit}
            >
              Pay: ${(subTotal + 5).toFixed(2)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo