import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import CartSidePanel from '../../../components/CartSidePanels/CartSidePanel'
import CountInput from '../../../components/CounterInput/CountInput'
import './CartContent.css' // Code => 62

// Exampel for cart items...
const example_itemList = new Array(10).fill().map((e, id) => ({ id: id, tilte: 'عنوان محصول', count: 1 }))

const CartContent = () => {
  const [cartItems, setCartItems] = useState(example_itemList)

  const countChangeHandler = (e, itemId) => {
    let newList = cartItems.map(i => i.id == itemId ? { ...i, count: Number(e.target.value) } : i);
    setCartItems(newList)
  }

  const test2 = (e) => {
    console.log(e)
  }

  return (
    <div className="main-content_62">

      <div className="table-wrapper_62">
        <div id='testt' className="scroll-area_62 no-scrollbar">

          <table className="table_62" >
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
              {cartItems.map(item =>
                <tr key={item.id}>
                  <td>
                    <span className='remove-icon_62'>
                      <FaTrashAlt size={18} />
                    </span>
                  </td>
                  <td className='image_62'>
                    <img src="/public/Images/no-image.webp" alt="" />
                  </td>
                  <td>
                    {item.tilte}  اضافه شده به سبد خرید
                  </td>
                  <td>اصل</td>
                  <td>پژو پارس</td>
                  <td>
                    ۲۳۰۰۰۰
                    <CountInput className="counter_62" value={item.count} onInputValue={(e) => countChangeHandler(e, item.id)} />
                  </td>

                </tr>

              )}

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