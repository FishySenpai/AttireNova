import React, {useState, useEffect} from 'react'
import Products from './Products';
import Search from './Search';
import { Link } from 'react-router-dom';
import GetCategories from './Categories/GetCategories';

const Home = () => {
     const [products, setProducts] = useState([]);
     const FetchProducts = async (query) => {
       const temp = await fetch("https://dummyjson.com/products").then((res) =>
         res.json()
       );
       setProducts(temp.products);
       console.log(temp);
     };

     useEffect(() => {
       FetchProducts();
       console.log(products);
     }, []);
  return (
    <div>
      
      <Products products={products} />
    </div>
  );
}

export default Home