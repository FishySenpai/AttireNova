import React from "react";
import { useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  Goo,
  signOut,
} from "firebase/auth";
import { auth, signInWithGoogle } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkUser, setCheckUser] = useState();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="relative flex flex-col font-medium text-left justify-center min-h-screen text-gray-800/90 px-4 sm:px-0">
      <div className="w-full sm:w-[500px] p-6 m-auto mt-12 sm:mt-36 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl  cursor-pointer e underline">Login</h1>
        <div className="mb-2">
          <label for="Email" className=" text-[16px] ">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="block w-full px-4 py-2 mt-2 font-normal text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label for="password" className=" text-[16px] ">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <a href="#" className=" cursor-pointer text-[16px]  hover:underline">
          Forgot Password?
        </a>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
            onClick={login}
          >
            Login
          </button>
        </div>
        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 ">OR</p>
          <hr className="w-full bg-gray-400  " />
        </div>
        <div className="">
          <button
            onClick={signInWithGoogle}
            aria-label="Continue with google"
            role="button"
            className=" focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2.5 px-4 border rounded-lg border-gray-700 flex items-center w-full justify-center bg-gray-700"
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-white ">
              Login with Google
            </p>
          </button>
        </div>
        <p className=" cursor-pointer text-[12px] mt-2">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className=" cursor-pointer text-[16px]  hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
