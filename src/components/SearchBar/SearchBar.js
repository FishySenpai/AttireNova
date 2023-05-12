import React from 'react'
import Search from '../Search';
import GetCategories from '../Categories/GetCategories';
const SearchBar = () => {
  return (
    <div className="flex flex-row justify-center">
      <Search />
      <div className="mt-[56px]">
        <GetCategories />
      </div>
    </div>
  );
}

export default SearchBar