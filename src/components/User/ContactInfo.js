import React, {useState} from 'react'
import { db } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  where,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
const ContactInfo = ({user, subTotal}) => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [city, setCity] = useState("");
      const [country, setCountry] = useState("");
      const [zip, setZip] = useState("");
      // State for payment information
      const [card, setCard] = useState("");
      const [success, setSuccess] = useState(false)
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

       const addFav = async () => {
         // Add a new document in collection "favs"
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
             setSuccess(true)
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
      <div class="leading-loose">
        <div className="text-gray-500 text-2xl py-4 capitalize">
          Contact Information
        </div>
        <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
          <p class="text-gray-800 font-medium">Customer information</p>
          <div class="">
            <label class="block text-sm text-gray-00" for="cus_name">
              Name
            </label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
            <label class="block text-sm text-gray-600" for="cus_email">
              Email
            </label>
            <input
              class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
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
            <label class=" block text-sm text-gray-600" for="cus_email">
              Address
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
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
            <label class="hidden text-sm  text-gray-600" for="cus_email">
              City
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
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
            <label class="hidden  text-sm text-gray-600" for="cus_email">
              Country
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
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
            <label class="hidden  text-sm text-gray-600" for="cus_email">
              Zip
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Email"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <p class="mt-4 text-gray-800 font-medium">Payment information</p>
          <div class="">
            <label class="block text-sm text-gray-600" for="cus_name">
              Card
            </label>
            <input
              class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Card Number MM/YY CVC"
              aria-label="Name"
              onChange={(e) => setCard(e.target.value)}
            />
          </div>
          {!success ? (
            <div class="mt-4">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Pay: ${subTotal + 5}
              </button>
            </div>
          ) : (
            <div class="bg-gray-100 ">
              <div class="bg-white p-6  md:mx-auto">
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
                    <a
                      href="#"
                      class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                    >
                      GO BACK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactInfo