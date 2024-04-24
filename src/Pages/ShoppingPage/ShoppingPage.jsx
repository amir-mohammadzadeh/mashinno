import { useEffect, useState } from 'react'
import SideMenu from '../../components/ShoppingPage.SideMenu/SideMenu'
import { useParams } from 'react-router-dom'
import Selection from '../../components/Selection/Selection'
import UserLocation from '../../components/UserLocation/UserLocation'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import ProductsGridLayout from '../../components/ProductsGridLayout/ProductsGridLayout'
import './ShoppingPage.css'// Code => 3
import { getPosts } from '../../assets/Data/postGenerator'

const ShoppingPage = () => {
  const [postsList, setPostsList] = useState(getPosts(150))
  const sortingList = ['جدید ترین', 'ارزان ترین', 'گران ترین', 'پر فروش ترین']
  const [filterList, setFilterList] = useState([])
  const [sortBy, setSortBy] = useState(sortingList[0])
  const params = useParams()

  useEffect(() => {
    document.title = 'لوازم یدکی ' + params.carModel + " | فروشگاه آنلاین لوازم یدکی کاپوت"
  }, [])

  useEffect(() => {
    console.log('Filter posts by this methods:', filterList)
    console.log('Sorting by : ', sortBy)
  }, [filterList, sortBy])

  const sortingHandler = (payload) => {
    setSortBy(payload)
  }

  const filterByCategory = (payload, add) => {
    add ? setFilterList(pre => [...pre, payload])
      : setFilterList(pre => pre.filter(i => i != payload));
  }

  return (<>
    <UserLocation />
    <main className="container">
      <div className="main_container_3">

        <Selection value={sortBy} optionList={sortingList} onSelect={sortingHandler} className='filter-sort_3' />

        <SideMenu className='sidemenu_3' onSelect={filterByCategory} />

        <div className="posts_3">
          <ProductsGridLayout itemList={postsList} />
        </div>

      </div>
    </main>
    <SupportWidget />
  </>)
}

export default ShoppingPage