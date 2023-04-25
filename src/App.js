import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const FetchProducts = async (query) => {
    const temp = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    setProducts(temp);
    console.log(temp);
  };

  useEffect(() => {
    FetchProducts();
    console.log(products);
  }, [products]);

  return (
    <div className="App">
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          test
          <ul className="flex flex-wrap">
            {products?.map((product) => (
              <li>
                {console.log(products)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
