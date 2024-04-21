import React from 'react'
import './StorePanel.css' // Code => 84
import { Link } from 'react-router-dom'
import { ImPencil2, ImPhone, ImLocation2, ImSphere, ImFilePicture } from 'react-icons/im'
import { IoStorefrontOutline } from 'react-icons/io5'

const StorePanel = () => {
  return (<>
    <div className="man-container_84">
      <div className="header_84">
        <div className="logo-content_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
        <div className="header-body_84">
          <div>
            <span className="label_84">
              فروشگاه‌
            </span>
            <span className="h4">
              دادلی بال
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
      <div className="card card_84 no-span_84">
        <span className="card-icon_84 rotate_84"> <ImPhone size='100%' /> </span>
        <a href="tel:+"> 0914-325-1212 </a>
        <a href="tel:+"> 0914-325-1212 </a>
      </div>
      <div className="card card_84 no-span_84">
        <span className="card-icon_84 rotate_84"> <ImSphere size='100%' /> </span>
        <span className="label_84">سایت فروشگاه</span>
        <a href='' target='_blank' className="line-limit-1">
          ww.df
        </a>
      </div>
      <address className="card card_84 ">
        <span className="card-icon_84"> <ImLocation2 size='100%' /> </span>
        <span>استان - شهر </span>
        <p> ادرس فروشگاه هم در اینجا قرار میگیرد... </p>
      </address>
      <div className="card card_84 ">
        <span className="card-icon_84"> <IoStorefrontOutline size='100%' /> </span>
        <p>
          خلاصه ای مختصر درباره فروشگاه خود ارائه داده میشود
        </p>
      </div>
      <div className="card card_84 image-card_84">
        <span className="card-icon_84"> <ImFilePicture size='100%' /> </span>
        <div className="image_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
        <div className="image_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
        <div className="image_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
        <div className="image_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
        <div className="image_84">
          <img src="/Images/no-image.webp" alt="" />
        </div>
      </div>
    </div>
  </>)

}

export default StorePanel