import './StorePanel.css' // Code => 84
import { Link, useMatch, useParams } from 'react-router-dom'
import { ImPencil2, ImPhone, ImLocation2, ImSphere, ImFilePicture } from 'react-icons/im'
import { IoStorefrontOutline, IoChevronDownOutline, IoReceiptOutline, IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import Card from '../../components/Dashbord.Card/Card'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { usePersianNumbers, useSeparate } from '../../Hook/useNumbers'
import { Input, TextArea } from '../../components/Inputs/Inputs'
import { useOutClicker } from '../../Hook/useOutsideClick'

const StorePanel = () => {
  const [imgDropDown, setImgDropDown] = useState(false)
  const [orderDetailesModal, setOrderDetailesModal] = useState(0)
  const [rejectModal, setRejectModal] = useState(false)
  const reject_input = useRef(null)
  const [modal_ref, closeAction] = useOutClicker(setOrderDetailesModal)
  const preview = useMatch('store/:storeID/panel')
  const params = useParams()
  const Stores_List = useSelector(state => state.storeInfo)// لیست فروشگاه ها از ریداکس دریافت میشود

  const Store_Info = preview ?
    useSelector(state => state.storeInfo)  //  Stores_List.find(s => s.id == params.storeID)
    : useSelector(state => state.storeInfo)

  useEffect(() => {
    window.scroll({ behavior: 'instant', top: 0, left: 0 })
    document.title = preview ? `${Store_Info.storeName} | کاپوت` : 'کاپوت من | پنل فروشگاه';
  }, [])

  const rejectOrderHandel = (orderID) => {
    console.log('سفارش رد شده: ', orderID)
    console.log('علت رد شدن : ', reject_input.current.value)

    setRejectModal(false)
  }

  const acceptOrderHandel = (orderID) => {
    console.log('سفارش تایید شده: ', orderID)
  }

  return (<>
    <div className={preview ? "s_panel-preview_84" : "container s_panel_84"}>
      <div className="header_84">
        <div className="logo-content_84">
          <img src={Store_Info.LPKimage[0] ? Store_Info.LPKimage[0] : '/Images/no-image.webp'} />
        </div>

        <div className="header-body_84">
          <div className="header-title_84">
            <span className="label_84">
              فروشگاه‌
            </span>
            <span className="h4">
              {Store_Info.storeName}
            </span>
          </div>
          {!preview &&
            <div className="edit-btn_84">
              <Link to='/userdashbord/store_panel/edit'>
                <ImPencil2 />
                ویرایش پروفایل
              </Link>
            </div>
          }
        </div>

      </div>

      <div dir='ltr' className="card card_84 no-span_84">
        <span className="card-icon_84 rotate_84"> <ImPhone size='100%' /> </span>

        {Store_Info.phoneNumbers.map((phone, idx) =>
          <a key={idx} href={`tel:+${phone.replace('0', '98')}`}>
            {phone.split('').slice(0, 4)} - {phone.split('').slice(4, 7)} - {phone.split('').slice(7, 11)}
          </a>
        )}
      </div>

      <div className="card card_84 no-span_84">
        <span className="card-icon_84"> <ImSphere size='100%' /> </span>
        <span className="label_84">سایت فروشگاه</span>
        {Store_Info.siteURL ?
          <a href={Store_Info.siteURL} target='_blank' className="line-limit-1">
            {Store_Info.siteURL}
          </a>
          : <span> درحال حاضر سایتی وجود ندارد! </span>
        }
      </div>

      <address className="card card_84 ">
        <span className="card-icon_84"> <ImLocation2 size='100%' /> </span>
        <span> {`${Store_Info.storeAddress.ostan} - ${Store_Info.storeAddress.city}`} </span>
        <p> {Store_Info.storeAddress.address} </p>
      </address>

      <div className="card card_84 ">
        <span className="card-icon_84"> <IoStorefrontOutline size='100%' /> </span>
        <p>
          {Store_Info.aboutStore}
        </p>
      </div>

      {!preview &&
        <section className="card card_84 ">
          <span className="card-icon_84"> <IoReceiptOutline size='100%' /> </span>
          <h5>
            سفارشات فروشگاه
          </h5>

          <ul className="order-list_84 font-lg">
            <li className="order_84 " onClick={() => setOrderDetailesModal(1)}>
              <span>
                سفارش شماره ۱
              </span>
              <span>
                بررسی نشده
              </span>
            </li>
            <li className="order_84 status-2_84" onClick={() => setOrderDetailesModal(2)}>
              <span>
                سفارش شماره ۲
              </span>
              <span>
                تأیید شده
              </span>
            </li>
            <li className="order_84 status-1_84" onClick={() => setOrderDetailesModal(3)}>
              <span>
                سفارش شماره ۳
              </span>
              <span>
                رد شده
              </span>
            </li>
          </ul>

        </section>
      }

      {Store_Info.images.length > 0 &&
        <div className="card card_84">
          <span className="card-icon_84"> <ImFilePicture size='100%' /> </span>

          <div className="img-header_84" onClick={() => setImgDropDown(!imgDropDown)}>
            <span className="h5">
              تصاویری از فروشگاه
            </span>
            <span className={`drop-btn_84 ${imgDropDown && 'drop-U-btn_84'}`}>
              <IoChevronDownOutline size={25} />
            </span>
          </div>
          {imgDropDown &&
            <div className="image-content_84">

              <div className="image_84">
                <img src={Store_Info.LPKimage[2]} alt="پروانه کسب" />
              </div>

              <div className="image_84">
                <img src={Store_Info.LPKimage[1]} alt="کارت ملی فروشنده" />
              </div>

              {Store_Info.images.map((img, idx) =>
                <div key={idx} className="image_84">
                  <img src={img} alt={Store_Info.storeName} />
                </div>
              )}

            </div>
          }
        </div>
      }

      {preview &&
        <section className="post-wrapper_84">
          <h5>
            آگهی‌های فروشگاه
          </h5>
          <div className="posts-content_84">

            <Card postID='KpT111' />
            <Card postID='KpT115' />
            <Card postID='KpT125' />
          </div>
        </section>
      }

      {orderDetailesModal &&
        <ModalContainer onClick={closeAction}>
          <div ref={modal_ref} className="card order-modal_84">
            <div className="modal-header_84">
              جزئیات سفارش
            </div>
            <div className="modal-close_84" onClick={() => setOrderDetailesModal(false)}>
              <IoClose size={32} />
            </div>
            <div className="order-content_84">

              <ul className="order-list_89 no-scrollbar">

                <li className="order_89">
                  <span>
                    نام کالا یاهمون عنوان آگهی
                  </span>
                  <div className="order-body_89">
                    <span>
                      تعداد: {usePersianNumbers(3)}
                    </span>
                    <span>
                      {useSeparate(300000)} تومان
                    </span>
                  </div>
                </li>
                <li className="order_89">
                  <Link to={'/userdashbord/user_posts'} target='_blank'>
                    نام کالا یاهمون عنوان آگهی
                  </Link>
                  <div className="order-body_89">
                    <span>
                      تعداد: {usePersianNumbers(3)}
                    </span>
                    <span>
                      {useSeparate(300000)} تومان
                    </span>
                  </div>
                </li>

              </ul>

              <div className="order-detaile_84 no-scrollbar">

                <div className="dt-item_84">
                  <span>
                    وضعیت سفارش :
                  </span>
                  <span>
                    بررسی نشده
                  </span>
                </div>
                <div className="dt-item_84">
                  <span>
                    جمع کل :
                  </span>
                  <span>
                    {useSeparate(3640000)} تومان
                  </span>
                </div>

              </div>
            </div>

            <div className="modal-btns_84">
              <button className="btn btn-animate t-btn_84" onClick={() => acceptOrderHandel(5)}>
                &#10004;
                تأیید
              </button>
              <button className="btn btn-animate r-btn_84" onClick={() => setRejectModal(true)}>
                &#10008;
                رد کردن
              </button>
            </div>
          </div>

          {rejectModal &&
            <div className="card reject-modal_84" onClick={e => e.stopPropagation()}>
              <p>
                دلیل رد کردن این سفارش را بنویسید
              </p>
              <TextArea
                ref={reject_input}
                helpText='علت رد کردن (اختیاری)'
              />

              <div className="reject-btns_84">
                <button className="btn" onClick={() => setRejectModal(false)}>
                  انصراف
                </button>
                <button className="btn btn-animate b-btn_84" onClick={() => rejectOrderHandel(5)}>
                  تأیید
                </button>
              </div>
            </div>
          }
        </ModalContainer>
      }

    </div>
  </>)

}

export default StorePanel