import { useEffect, useRef, useState } from 'react'
import './PostsGridLayout.css' // Code => 30
import ProductCard from '../ProductCard/ProductCard'
import Advertising from '../Advertising/Advertising'

const PostsGridLayout = ({ itemList }) => {
  const adsIndex = useRef(30)
  const grid_content = useRef(null)

  function CreateADV() {
    let columns = useRef(0)
    const [advList, setAdvList] = useState([])

    useEffect(() => {
      const screenResizeHandler = () => {
        const rowCount = Math.floor((itemList.length) / adsIndex.current)

        let cols = window.getComputedStyle(grid_content.current)
          .getPropertyValue('grid-template-columns')
          .replace(' 0px', '')
          .split(' ').length;

        let adv_rows = [];
        if (columns.current != cols) {
          columns.current = cols;

          let row = Math.ceil(adsIndex.current / cols)
          for (let i = 1; i <= rowCount; i++) {
            adv_rows.push(row * i)
          }

          setAdvList(adv_rows)
        }
      }

      screenResizeHandler()
      window.addEventListener('resize', screenResizeHandler)
      return () => window.removeEventListener('resize', screenResizeHandler)
    }, [])

    return (<>
      {advList.length && advList.map(adv =>

        <Advertising key={'adv-' + adv} row={adv} />
      )}
    </>)
  }

  return (
    <div ref={grid_content} className="products-wrapper_30">

      {itemList.map(card =>
        <ProductCard key={card.id} {...card} />
      )}

      <CreateADV />
    </div>
  )
}

export default PostsGridLayout