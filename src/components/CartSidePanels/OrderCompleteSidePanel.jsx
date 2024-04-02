import React from 'react'
import { Link } from 'react-router-dom'

const OrderCompleteSidePanel = () => {
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
          <span> ۸۲۴۳۲۰۰۰ </span>
        </li>
        <li className="panel-item_64">
          <span> قیمت نهایی: </span>
          <span> ۸۲۴۳۲۰۰۰ </span>
        </li>
      </ul>
      <Link to={''} className="btn btn-animate panel-btn_64" >
        پرداخت و تکمیل سفارش
      </Link>
    </aside>
  )
}

export default OrderCompleteSidePanel