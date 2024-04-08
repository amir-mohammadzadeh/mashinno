import React, { useEffect, useState } from 'react'
import './ShoppingPage.css'// Code => 3
import SideMenu from '../../components/ShoppingPage/SideMenu/SideMenu'
import { useParams } from 'react-router-dom'
import Selection from '../../components/Selection/Selection'
import { FiFilter } from "react-icons/fi";
import ProductCard from '../../components/ProductCard/ProductCard'
import UserLocation from '../../components/UserLocation/UserLocation'
import Advertising from '../../components/Advertising/Advertising'

//_____ ساخت یک دیتای آزمایشی و اولیه برای دسته بندی ها ____________
const categoryList = new Array(10).fill().map((e, id) => ({ title: 'دسته بندی - ' + id, id }))
const filterList = ['محبوب ترین', 'جدید ترین', 'ارزان ترین', 'گران ترین', 'پر فروش ترین']
const cardList = Array.from(Array(150).keys())

const ShoppingPage = () => {
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const params = useParams()
  const n = getAdsIndex(21) // تعداد آگهی های قبل از هر تبلیغات 

  useEffect(() => {
    document.title = 'لوازم یدکی ' + params.carModel + " | فروشگاه آنلاین لوازم یدکی کاپوت"
  }, [])

  const filterByPrice = (filterValue) => {
    console.log(filterValue)
  }

  const filterByCategory = (filterValue) => {
    console.log('This OBJ is selected :)\n', filterValue)
  }

  return (
    <>
      <UserLocation />
      <main className="container">
        <div className="main_container_3">

          <aside className="sidemenu-holder_3">
            <div className="filter-btn_3" onClick={() => setOpenFilterBox(!openFilterBox)}>
              <span>
                <FiFilter />
              </span>
              <span>
                فیلتر
              </span>
            </div>
            <Selection value={filterList[0]} optionList={filterList} onSelect={filterByPrice} className='filter-item_3' />
            <SideMenu valueList={categoryList} openSideMenu={openFilterBox} closeAction={setOpenFilterBox} onSelect={filterByCategory} />
          </aside>

          <div className="products-wrapper_3">

            {cardList.map((card, index) =>
              (index + 1) % n == 0 ? <Advertising key={index + 0.5} />
                : <ProductCard key={index} />

            )}

          </div>
        </div>

      </main>
    </>
  )
}

export default ShoppingPage

function getAdsIndex(n) {
  (window.innerWidth <= 1200 && window.innerWidth >= 768) ?
    n = n + 1
    : n = n

  return n
}