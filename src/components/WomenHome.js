import React from 'react'
import WomenCategories from './Women/WomenCategories'
import WomenSale from "./Women/WomenSale"
import WomenPopular from "./Women/WomenPopular"
const WomenHome = () => {
  return (
    <div>
        <WomenSale/>
        <WomenPopular/>
        <WomenCategories/>
    </div>
  )
}

export default WomenHome