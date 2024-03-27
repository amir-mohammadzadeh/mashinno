import { BsCart, BsCart3, BsShieldFillCheck, BsStar, BsStarFill, BsXLg } from 'react-icons/bs'
import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import './ProductsDetailesCard.css' // Code => 52
import { LikeButton, ShareButton } from '../ToggleButtons/ToggleButtons';

const ProductsDetailesCard = () => {
    const addToFavorites =(payload)=>{
        payload ? console.log('Add to favorites') : console.log('Remove from favorites')
    }
    const shareHandle=()=>{
        console.log('Share this Product link ;)')
    }
    return (
        <div className="detailes-card_52">
            <div className="title_52">
                <h3>
                    عنوان محصول
                </h3>
                <div className="car-info_52">
                    خودروی
                    <span> کیا  </span>
                    مدل
                    <span> فلان  </span>
                </div>
            </div>
            <div className="detaile-body_52">
                <ul className="featurs-content_52">
                    <li className="feature_52">
                        <span>
                            تاریخ ثبت آگهی:
                        </span>
                        <span>
                            1403/01/01
                        </span>
                    </li>
                    <li className="feature_52">
                        <span>
                            فروشنده:
                        </span>
                        <span>
                            فروشگاه کاپوت
                        </span>
                    </li>
                    <li className="feature_52">
                        <span>
                            شماره تماس فروشنده:
                        </span>
                        <span>
                            ۰۹۱۴۱۲۳۴۵۶۷
                        </span>
                    </li>
                    <li className="feature_52 btn_52 location-btn_52">
                        <span className='icon_52 '>
                            <GrMapLocation size={20} />
                        </span>
                        <span>
                            نمایش موقعیت مکانی
                        </span>
                    </li>
                </ul>

                <ul className="featurs-content_52">
                    <li className="toggle-content_52 flex_52">
                        <div className="ratting_52 flex_52">

                            <span className='icon_52'>
                                <BsStarFill size={20} />
                            </span>
                            <span>
                                4.5
                            </span>
                        </div>
                        <div className="toggles_52 flex_52">
                            <ShareButton onShare={shareHandle} />
                            <LikeButton onClick={addToFavorites} />
                        </div>
                    </li>
                    <li className="feature_52 flex_52">
                        <span>
                            <BsShieldFillCheck size={20} color='#16a34a' />
                        </span>
                        <span>
                            گارانتی سلامت فیزیکی کالا
                        </span>
                    </li>
                    <li className="feature_52">
                        <span>
                            برند تولید کننده:
                        </span>
                        <span>
                            طرح اصلی
                        </span>
                    </li>
                    <li className="feature_52">
                        <span>
                            کشور سازنده:
                        </span>
                        <span>
                            کره جنوبی
                        </span>
                    </li>
                </ul>
            </div>

            <div className="detaile-footer_52">
                <div className="price_52">
                    ۱۹۰۰۰۰
                    <span>تومان</span>
                </div>
                <div className="btn_52 cart-btn_52">
                    <span className="btn-icon_52">
                        <BsCart3 size={20} />
                    </span>
                    <span>
                        افزودن به سبد خرید
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetailesCard