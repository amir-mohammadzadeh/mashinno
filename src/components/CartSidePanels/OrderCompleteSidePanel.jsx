import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCompleteSidePanel = () => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/cart/order-complete#4')
  }
  return (
    <aside className="sidepanel_64">
      <div className="panel-header_64">
        صورت حساب شما
      </div>
      <ul className="panel-body_64">
        <li className="panel-item_64">
          <span> جمع سبد خرید: </span>
          <span> ۸۲۴۳۲۰۰۰ </span>
        </li>
        <li className="panel-item_64">
          <span> هزینه ارسال: </span>
          <span> بر عهده مشتری </span>
        </li>
        <li className="panel-item_64">
          <span> قیمت نهایی: </span>
          <span> ۸۲۴۳۲۰۰۰ </span>
        </li>
      </ul>
      <button className="btn btn-animate panel-btn_64" onClick={clickHandler}>
        پرداخت و تکمیل سفارش
      </button>
    </aside>
  )
}

export default OrderCompleteSidePanel