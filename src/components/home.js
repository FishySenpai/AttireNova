import React, {useState, useEffect} from 'react'

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
      {" "}
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap">
            {products?.map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6 " key={top.id}>
                <a href={`/topanime/${top.id}`}>
                  <img
                    className="w-[220px] h-[144px]  rounded hover:shadow-lg cursor-pointer hover:scale-105"
                    src={top.thumbnail}
                    alt="img"
                  />
                </a>
                <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                  <button>{top.title}</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home