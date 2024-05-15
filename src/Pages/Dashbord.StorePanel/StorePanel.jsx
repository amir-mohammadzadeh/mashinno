import './StorePanel.css' // Code => 84
import { Link, useMatch, useParams } from 'react-router-dom'
import { ImPencil2, ImPhone, ImLocation2, ImSphere, ImFilePicture } from 'react-icons/im'
import { IoStorefrontOutline, IoChevronDownOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Card from '../../components/Dashbord.Card/Card'

const StorePanel = () => {
  const preview = useMatch('store/:storeID/panel')
  const [imgDropDown, setImgDropDown] = useState(preview ? false : true)
  const params = useParams()
  const Stores_List = useSelector(state => state.storeInfo)// لیست فروشگاه ها از ریداکس دریافت میشود
  const Store_Info = preview ?
    useSelector(state => state.storeInfo)  //  Stores_List.find(s => s.id == params.storeID)
    : useSelector(state => state.storeInfo)

  useEffect(() => {
    window.scroll({ behavior: 'instant', top: 0, left: 0 })
    document.title = preview ? `${Store_Info.storeName} | کاپوت` : 'کاپوت من | پنل فروشگاه';
  }, [])

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

    </div>
  </>)

}

export default StorePanel