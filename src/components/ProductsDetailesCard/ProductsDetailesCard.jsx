import { BsCart3, BsShieldFillCheck, BsStarFill } from 'react-icons/bs'
import React, { useState } from 'react'
import { GrMapLocation } from "react-icons/gr";
import { LikeButton, ShareButton } from '../ToggleButtons/ToggleButtons';
import { useSeparate } from '../../Hook/useNumbers';
import CountInput from '../CounterInput/CountInput';
import './ProductsDetailesCard.css' // Code => 52

const ProductsDetailesCard = () => {
    const [COUNT, setCOUNT] = useState(0)
    const Product_Price = useSeparate('1230000', ',') // => قیمت محصول را دریافت و ۳ رقم ۳ رقم جدا کرده و به فارسی بر میگرداند
    const addToFavorites = (payload) => {
        payload ? console.log('Add to favorites') : console.log('Remove from favorites')
    }
    const shareHandle = () => {
        console.log('Share this Product link ;)')
    }
    const openMap = () => {
        window.open("https://maps.google.com?q=38.05339143532025,46.28310309630766")
    }
    const addToCartHandler = () => {
        setCOUNT(1)
    }
    const countHandler=(n)=>{
        setCOUNT(COUNT + n)
    }
    const removeFromCart=()=>{
        setCOUNT(0)
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
                    <li className="feature_52 btn_52 location-btn_52" onClick={openMap}>
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
                    {Product_Price}
                    <span>تومان</span>
                </div>

                {COUNT != 0 ?
                    <div className="counter-holder_52">
                        <CountInput className="counter_52" value={COUNT} onMinus={()=>countHandler(-1)} onPluse={()=>countHandler(1)} />
                        <span className="remove-btn_52" onClick={removeFromCart}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path></svg>
                        </span>
                    </div>
                    :
                    <div className="btn_52 cart-btn_52" onClick={addToCartHandler}>
                        <span className="btn-icon_52">
                            <BsCart3 size={20} />
                        </span>
                        <span>
                            افزودن به سبد خرید
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductsDetailesCard