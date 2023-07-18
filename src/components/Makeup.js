import React, { useState, useEffect } from "react";
import Products from "./Products";
import Search from "./Search";
import { Link } from "react-router-dom";
import GetCategories from "./Categories/GetCategories";
import axios from "axios";
import { useFetch } from "./getData";
const Makeup = () => {
   const id = 5678;
   const { loading, products } = useFetch(id);
  if(loading){
    return (
      <div>
        <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
          Men's Suites
        </div>
        <div className=" items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <div className="flex flex-wrap">
              {[...Array(10)].map((_, index) => (
                <li
                  className="mr-4 md:mr-8 pb-6 rounded animate-pulse list-none"
                  key={index}
                >
                  <div className="w-[265px] h-[339px] bg-gray-300 mb-2"></div>
                  <div className="mt-2">
                    <div className="w-12 md:w-40  bg-gray-300 h-4 shadow"></div>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
 else {
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        Men's Suites
      </div>
      <Products products={products} />
    </div>
  );
};}

export default Makeup;
