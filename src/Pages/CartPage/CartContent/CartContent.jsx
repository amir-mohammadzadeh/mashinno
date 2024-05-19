import React, { useRef, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import CartSidePanel from '../../../components/CartSidePanels/CartSidePanel'
import CountInput from '../../../components/CounterInput/CountInput'
import './CartContent.css' // Code => 62
import { Link } from 'react-router-dom'
import ModalContainer from '../../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../../Hook/useOutsideClick'
import { useSeparate } from '../../../Hook/useNumbers'

// Exampel for cart items...
const example_orderList = new Array(2).fill().map((e, id) => ({ id: id, tilte: 'عنوان محصول', count: 1 }))
const exampel_storeList = Array.from(Array(2).keys())

const CartContent = () => {
  const [cartItems, setCartItems] = useState(example_orderList)
  const [contactModal, setContactModal] = useState(false)
  const [modal_ref, closeAction] = useOutClicker(setContactModal)
  let store_id = useRef(null)

  const countManualChange = (v, itemId) => {
    let newList = cartItems.map(i => i.id == itemId ? { ...i, count: Number(v) } : i);
    setCartItems(newList)
  }

  const countChange = (n, itemId) => {
    let newList = cartItems.map(i => i.id == itemId ? { ...i, count: i.count + n } : i);
    setCartItems(newList)
  }

  const openStoreContactModal = (id) => {
    store_id.current = id;
    setContactModal(true)
  }
  
/*   Cart Tabel Component ....
  function Table() {
    return (
      <table className="table_62" >
        <thead>
          <tr>
            <th>x</th>
            <th>تصویر</th>
            <th>نام محصول</th>
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
              <td>پژو پارس</td>
              <td>
                <span>
                  {useSeparate(230000)}
                  <small>{' تومان'}  </small>
                </span>
                <CountInput
                  className="counter_62"
                  value={item.count}
                  onInputValue={(value) => countManualChange(value, item.id)}
                  onMinus={() => countChange(-1, item.id)}
                  onPluse={() => countChange(1, item.id)}
                />
              </td>

            </tr>

          )}

        </tbody>
      </table>
    )
  }
*/

  return (<>
    <div className="main-content_62">
      <div className="cart-content">

        {exampel_storeList.map(store =>

          <div key={store} className="card table-wrapper_62">
            <div className="h5 store-title_62">
              نام فروشگاه
            </div>
            <div className="scroll-area_62 no-scrollbar">

              <table className="table_62" >
                <thead>
                  <tr>
                    <th>x</th>
                    <th>تصویر</th>
                    <th>نام محصول</th>
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
                      <td>پژو پارس</td>
                      <td>
                        <span>
                          {useSeparate(230000)}
                          <small>{' تومان'}  </small>
                        </span>
                        <CountInput
                          className="counter_62"
                          value={item.count}
                          onInputValue={(value) => countManualChange(value, item.id)}
                          onMinus={() => countChange(-1, item.id)}
                          onPluse={() => countChange(1, item.id)}
                        />
                      </td>

                    </tr>

                  )}

                </tbody>
              </table>

            </div>
            <div className="button-group_62">
              <div className="total-price_62 font-lg">
                <span>
                  جمع کل:
                </span>
                <span>
                  ۳۰۰۰۰ تومان
                </span>
              </div>
              <Link to={'/cart/payment'} className="btn btn-animate p-btn_62">
                پرداخت
              </Link>
              <button className="btn btn-animate e-btn_62" onClick={() => openStoreContactModal(1)}>
                استعلام قیمت
              </button>
            </div>
          </div>

        )}
      </div>
      <div className="cart-summary_62">
        <CartSidePanel />
      </div>
    </div>
    {contactModal &&
      <ModalContainer onClick={closeAction}>
        <div ref={modal_ref} className="estealam-modal_62">
          <div className="modal-header_62">
            <span>
              استعلام قیمت
            </span>
            <span className="modal-close_62" onClick={() => setContactModal(false)}>
              &#10006;
            </span>
          </div>
          <p>
            برای استعلام قیمت می‌توانید از طریق یکی از راه‌های زیر با فروشنده تماس گرفته و از عدم تغیر قیمت اقلام لیست شده اطمینان حاصل کنید.
          </p>
          <ul className="modal-numbers_62">
            <li className="modal-item_62">
              <span>
                شماره فروشنده:
              </span>
              <a href="tel:+">
                09147521321
              </a>
            </li>
            <li className="modal-item_62">
              <span>
                شماره فروشگاه:
              </span>
              <a href="tel:+">
                09147521321
              </a>
            </li>
          </ul>
        </div>
      </ModalContainer>
    }
  </>)
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