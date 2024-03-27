import React, { useEffect, useState } from 'react'
import './ShoppingPage.css'// Code => 45
import SideMenu from '../../components/ShoppingPage/SideMenu/SideMenu'
import { useParams } from 'react-router-dom'
import Selection from '../../components/Selection/Selection'
import { FiFilter } from "react-icons/fi";
import ProductCard from '../../components/ShoppingPage/ProductCard/ProductCard'
import UserLocation from '../../components/UserLocation/UserLocation'

//_____ ساخت یک دیتای آزمایشی و اولیه برای دسته بندی ها ____________
const categoryList = new Array(10).fill().map((e, id) => ({ title: 'دسته بندی - ' + id, id }))
const filterList = ['محبوب ترین', 'جدید ترین', 'ارزان ترین', 'گران ترین', 'پر فروش ترین']
const cardList = Array.from(Array(150).keys())

const ShoppingPage = () => {
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const params = useParams()
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
        <div className="main_container-45">

          <aside className="sidemenu-holder-45">
            <div className="filter-btn-45" onClick={() => setOpenFilterBox(!openFilterBox)}>
              <span>
                <FiFilter />
              </span>
              <span>
                فیلتر
              </span>
            </div>
            <Selection value={''} label='انتخاب کنید' optionList={filterList} onSelect={filterByPrice} className='filter-item-45' />
            <SideMenu valueList={categoryList} openSideMenu={openFilterBox} closeAction={setOpenFilterBox} onSelect={filterByCategory} />
          </aside>

          <div className="products-wrapper">

            {cardList.map(card =>
              <ProductCard key={card} />
            )}

          </div>
        </div>

      </main>
    </>
  )
}

export default ShoppingPage