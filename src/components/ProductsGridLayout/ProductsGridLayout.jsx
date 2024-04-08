import React from 'react'
import './ProductsGridLayout.css' // Code => 30
import ProductCard from '../ProductCard/ProductCard'
import Advertising from '../Advertising/Advertising'

const ProductsGridLayout = () => {
  const cardList = Array.from(Array(50).keys())
  let n = getAdsIndex(21)
  return (
    <>
      <div className="products-wrapper_30">

        {cardList.map((card, index) =>
          (index + 1) % n == 0 ?
            <Advertising key={index + 0.5} />
            : <ProductCard key={index} />
        )}

      </div>
    </>
  )
}

export default ProductsGridLayout
function getAdsIndex(n) {
  (window.innerWidth <= 1200 && window.innerWidth >= 768) ?
    n = n + 1
    : n = n

  return n
}