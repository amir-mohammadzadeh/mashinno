import React from 'react'
import './CartContent.css' // Code => 62
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import DiscountInput from './DiscountInput'

const CartContent = () => {
  return (
    <div className="main-content_62">

      <div className="table-wrapper_62">
        <div className="scroll-area_62 no-scrollbar">

          <table className="table_62">
            <thead>
              <tr>
                <th></th>
                <th>تصویر</th>
                <th>نام محصول</th>
                <th>برند تولید کننده</th>
                <th>خودرو</th>
                <th>تعداد</th>
                <th>قیمت واحد</th>
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

        <DiscountInput />

        <div className="summary-card_62">
          <span className="h6">
            صورت حساب شما
          </span>
          <ul className="summarys_62">
            <li className="item_62">
              <span>
                تعداد کالاها:
              </span>
              <span>
                4
              </span>
            </li>
            <li className="item_62">
              <span>
                جمع کل:
              </span>
              <span>
                ۳۰۰۰۰۰۰۰۰
                <small>
                  تومان
                </small>
              </span>
            </li>
            <li className="item_62">
              <span>
                قیمت نهایی:
              </span>
              <span>
                ۳۰۰۰۰۰۰۰۰
                <small>
                  تومان
                </small>
              </span>
            </li>
          </ul>
          <div className="buttons_62">
            <Link to={'/cart/shipping-details#2'} className="btn btn-animate next-step_62 " >
              تایید و تکمیل سفارش
            </Link>
            <Link to={-1} className="btn return_62 ">
              بازگشت
            </Link>
          </div>
        </div>

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
      <td>۲</td>
      <td>۲۳۰۰۰۰</td>
    </tr>
  )
}