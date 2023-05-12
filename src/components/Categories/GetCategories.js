import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const GetCategories = () => {
    const [categories, setCategories] = useState();
    const [showCategories, setShowCategories] = useState(false)
    const handleSubmit=()=>{
        setShowCategories(!showCategories);
        FetchCategories();
        console.log(categories);
    }
    const FetchCategories = async (query) => {
      const temp = await fetch(
        "https://dummyjson.com/products/categories"
      ).then((res) => res.json());
      setCategories(temp);
      console.log(temp);
    };

  return (
    <div>
      <div className="flex flex-col px-4 mb-4">
        <div>
          <button
            type="button"
            className="inline-flex align-left gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            onClick={handleSubmit}
          >
            Categories
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={!showCategories ? "flex" : "hidden"}>
        <div className="flex flex-col h-[300px] absolute overflow-y-auto scrollbar bg-white rounded font-normal text-left ">
          {categories?.map((genre, index) => (
            <ul className="flex flex-col">
              <li className="px-4 py-2" key={genre.id}>
                <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                  <Link to={`/categories/${genre}`}>
                    <button>
                      <div className="capitalize">{genre}</div>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetCategories