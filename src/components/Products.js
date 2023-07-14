import React from 'react'
import { Link } from 'react-router-dom';
const Products = ({products}) => {
  return (
    <div>
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap">
            {products?.slice(0, 24).map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6 " key={top.id}>
                <a href={`/info/${top.id}`}>
                  <img
                    className="w-[220px] h-[144px]  rounded hover:shadow-lg cursor-pointer hover:scale-105"
                    src={`https://${top.imageUrl}`}
                    alt="img"
                  />
                </a>
                <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                  <button>
                    <Link to={`/info/${top.id}`}>{top.name}</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products