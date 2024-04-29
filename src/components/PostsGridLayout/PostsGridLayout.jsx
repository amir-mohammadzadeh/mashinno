import { useEffect, useState } from 'react'
import './PostsGridLayout.css' // Code => 30
import ProductCard from '../ProductCard/ProductCard'
import Advertising from '../Advertising/Advertising'

const PostsGridLayout = ({ itemList }) => {
  const [adsIndex, setAdsIndex] = useState(getAdsIndex(21))

  function getAdsIndex(n) {
    (window.innerWidth <= 992 && window.innerWidth >= 768) ? n += 1 : n = n;
    return n
  }

  useEffect(() => {
    const screenResizeHandler = () => {
      const idx = getAdsIndex(21)
      setAdsIndex(idx);
    }

    window.addEventListener('resize', screenResizeHandler)
    return () => window.removeEventListener('resize', screenResizeHandler)
  }, [])

  return (
    <div className="products-wrapper_30">

      {itemList.map((card, index) => (index + 1) % adsIndex == 0 ?
        <Advertising key={index + 0.5} />
        :
        <ProductCard key={card.id} {...card} />
      )}

    </div>
  )
}

export default PostsGridLayout