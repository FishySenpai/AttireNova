import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home";
import Search from "./components/Search";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import GetCategories from "./components/Categories/GetCategories";
import ShowCategories from "./components/Categories/ShowCategories"
import { Makeup, SearchBar, Sneakers, Login, Registration, CartUser, CheckOut, Dresses, Shoes, WorkWear, WishList, OrderedItems } from "./components";
import Test from "./components/test";
import GetProductInfo from "./components/getProductInfo"
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <Home />
                {/* <Sneakers />
                <Makeup /> */}
              </>
            }
          />
          <Route
            path="/women"
            element={
              <>
                <SearchBar />
                <Dresses />
                <Shoes />
                <WorkWear />
              </>
            }
          />
          <Route path="/yh/:tcin" element={<GetProductInfo />} />
          <Route
            path="/test"
            element={
              <>
                <Search />
                <Test />
              </>
            }
          />
          <Route path="/info/:id" element={<ProductInfo />} />
          <Route path="/search/:search" element={<SearchBar />} />
          <Route path="/categories" element={<SearchBar />} />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            path="/categories/:name"
            element={
              <>
                <SearchBar />
                <ShowCategories />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <CartUser />
              </>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <WishList />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <CheckOut />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <OrderedItems />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
