import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home";
import Search from "./components/Search";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import { Makeup, SearchBar, Sneakers, Login, Registration, CartUser, CheckOut, Dresses, Shoes, WorkWear, WishList, OrderedItems, Men, Women, Footer } from "./components";
import Test from "./components/test";
import GetProductInfo from "./components/getProductInfo"
import Products from "./components/Products";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />

                  {/* <Sneakers />
                <Makeup />  */}
                </>
              }
            />
            <Route
              path="/women"
              element={
                <>
                  <Dresses />
                  <Shoes />
                  <WorkWear />
                </>
              }
            />

            <Route path="/yh/:tcin" element={<GetProductInfo />} />
            <Route path="/categories/men/:id" element={<Men />} />
            <Route path="/categories/women/:id" element={<Women />} />
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
            <Route path="/search/:search" element={<Search />} />
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
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
