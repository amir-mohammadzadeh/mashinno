import './StorePanel.css' // Code => 84
import { Link } from 'react-router-dom'
import { ImPencil2, ImPhone, ImLocation2, ImSphere, ImFilePicture } from 'react-icons/im'
import { IoStorefrontOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const StorePanel = () => {
  const Store_Info = useSelector(state => state.storeInfo)


  return (<>
    <div className="man-container_84">
      <div className="header_84">
        <div className="logo-content_84">
          <img src={Store_Info.LPKimage[0] ? Store_Info.LPKimage[0] : '/Images/no-image.webp'} />
        </div>

        <div className="header-body_84">
          <div>
            <span className="label_84">
              فروشگاه‌
            </span>
            <span className="h4">
              {Store_Info.storeName}
            </span>
          </div>
          <div className="edit-btn_84">
            <Link to='/userdashbord/store_panel/edit'>
              <ImPencil2 />
              ویرایش پروفایل
            </Link>
          </div>
        </div>

      </div>

      <div dir='ltr' className="card card_84 no-span_84">
        <span className="card-icon_84 rotate_84"> <ImPhone size='100%' /> </span>

        {Store_Info.phoneNumbers.map((phone,idx) =>
          <a key={idx} href={`tel:+98${phone.replace('0', '')}`}>
            {phone.split('').slice(0, 4)} - {phone.split('').slice(4, 7)} - {phone.split('').slice(7, 11)}
          </a>
        )}

      </div>
      <div className="card card_84 no-span_84">
        <span className="card-icon_84 rotate_84"> <ImSphere size='100%' /> </span>
        <span className="label_84">سایت فروشگاه</span>
        {Store_Info.siteURL &&
          <a href={Store_Info.siteURL} target='_blank' className="line-limit-1">
            {Store_Info.siteURL}
          </a>
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
        <div className="card card_84 image-card_84">
          <span className="card-icon_84"> <ImFilePicture size='100%' /> </span>

          <div className="image_84">
            <img src={Store_Info.LPKimage[2]} alt="پروانه کسب" />
          </div>

          <div className="image_84">
            <img src={Store_Info.LPKimage[1]} alt="کارت ملی فروشنده" />
          </div>

          {Store_Info.images.map((img, idx) =>
            <div key={idx} className="image_84">
              <img src={img} alt="" />
            </div>
          )}

        </div>
      }
    </div>
  </>)

}

export default StorePanel