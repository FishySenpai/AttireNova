import React, { useState, useEffect } from "react";
import Products from "./Products";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useFetch } from "./getData";
import axios from "axios";
const Sneakers = () => {
 const id = 27108;
 const {loading, products} = useFetch(id);
 if(loading){
    return (
      <div>
        <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
          Women's New
        </div>
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="md:px-16 items-center mx-auto container justify-between">
            <div className="flex flex-wrap">
              {[...Array(10)].map((_, index) => (
                <div
                  className="  rounded-lg p-1 animate-pulse mr-7"
                  key={index}
                >
                  <div className="w-[265px] h-[339px] bg-gray-300 mb-2"></div>
                  <div className="mt-2">
                    <div className="w-12 md:w-28  bg-gray-300 h-4 shadow"></div>
                  </div>
                </div>
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
        Women's New
      </div>
      <Products products={products} />
    </div>
  );
}
}

export default Sneakers;
