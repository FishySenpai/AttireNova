import React from 'react'
import WomenCategories from './Women/WomenCategories'
import WomenSale from "./Women/WomenSale"
import WomenPopular from "./Women/WomenPopular"
import AddData from "./addData"
const WomenHome = () => {
  return (
    <div>
      <AddData />
        <WomenSale/>
        <WomenPopular/>
        <WomenCategories/>
    </div>
  )
}

export default WomenHome