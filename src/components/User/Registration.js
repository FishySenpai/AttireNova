import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
const Registration = () => {
  const [emailReg, setEmailReg] = useState();
  const [checkPass, setCheckPass] = useState();
  const [passwordReg, setPasswordReg] = useState();
  const [passErr, setPassErr] = useState();
  const navigate = useNavigate();
  const register = async () => {
    if(passwordReg === checkPass){
      setPassErr(null)
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          emailReg,
          passwordReg
        );
        console.log(user);
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    } else{
      setPassErr("Passwords do not match!!")
    }
  };

  return (
    <div className="relative flex flex-col justify-center text-left sm:min-h-screen font-medium text-gray-800/90 px-4 sm:px-0">
      <div className="w-full sm:w-[500px]  p-6 m-auto mt-36 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl  cursor-pointer  underline">Sign Up</h1>

        <div className="mb-2">
          <label for="email" className=" text-[16px] ">
            Email
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            className="font-normal block w-full px-4 py-2 mt-2  text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setEmailReg(e.target.value);
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
            className="block w-full px-4 py-2 mt-2 text-gray-800 font-normal bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label for="password" className=" text-[16px] ">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setCheckPass(e.target.value);
            }}
          />
        </div>
        <div className="text-red-600">
          {passErr}
        </div>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide  cursor-pointer text-[16px] text-white  transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
            onClick={register}
          >
            Sign Up
          </button>
        </div>

        <p className="mt-8  cursor-pointer text-[12px] ">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className=" cursor-pointer text-[16px]  hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
