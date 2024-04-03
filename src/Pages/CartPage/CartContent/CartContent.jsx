import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import CartSidePanel from '../../../components/CartSidePanels/CartSidePanel'
import CountInput from '../../../components/CounterInput/CountInput'
import './CartContent.css' // Code => 62

const CartContent = () => {
  const test=(e)=>{
    const t = document.getElementById('testt')
    console.log(t)
    t.scrollBy(50 ,0)
  }
  const test2=(e)=>{
    console.log(e)
  }
  return (
    <div className="main-content_62">

      <div className="table-wrapper_62">
        <div id='testt' className="scroll-area_62 no-scrollbar">

          <table className="table_62" onMouseDown={test} onMouseUp={test2} >
            <thead>
              <tr>
                <th></th>
                <th>تصویر</th>
                <th>نام محصول</th>
                <th>برند تولید کننده</th>
                <th>خودرو</th>
                <th>تعداد و قیمت واحد</th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />

            </tbody>
          </table>
        </div>
      </div>

      <div className="cart-summary_62">
        <CartSidePanel />
      </div>
    </div>
  )
}

export default CartContent

function TableItem() {
  return (
    <tr>
      <td>
        <span className='remove-icon_62'>
          <FaTrashAlt size={18} />
        </span>
      </td>
      <td className='image_62'>
        <img src="/public/Images/no-image.webp" alt="" />
      </td>
      <td>
        عنوان محصول اضافه شده به سبد خرید
      </td>
      <td>اصل</td>
      <td>پژو پارس</td>
      <td>
        ۲۳۰۰۰۰
        <CountInput className="counter_62" value={1} />
        </td>
      
    </tr>
  )
}