import { BsShieldFillCheck, BsStarFill } from 'react-icons/bs'
import React, { useState } from 'react'
import { GrMapLocation } from "react-icons/gr";
import { LikeButton, ShareButton } from '../ToggleButtons/ToggleButtons';
import { useSeparate } from '../../Hook/useNumbers';
import './ProductsDetailesCard.css' // Code => 52
import { Link } from 'react-router-dom';
import ModalContainer from '../../ModalContainer/ModalContainer';
import { useOutClicker } from '../../Hook/useOutsideClick';
import MapModal from '../MapModal/MapModal';

const ProductsDetailesCard = () => {
    const [showContactInfo, setShowContactInfo] = useState(false)
    const [showMapModal, setShowMapModal] = useState(false)
    const [modal_ref, closeAction] = useOutClicker(setShowContactInfo)
    const Product_Price = useSeparate('1230000', ',') // => قیمت محصول را دریافت و ۳ رقم ۳ رقم جدا کرده و به فارسی بر میگرداند

    const addToFavorites = (payload) => {
        payload ? console.log('Add to favorites') : console.log('Remove from favorites')
    }
    const shareHandle = () => {
        console.log('Share this Product link ;)')
    }
    const openMap = () => {
        //window.open("https://maps.google.com?q=38.05339143532025,46.28310309630766")
        setShowMapModal(!showMapModal)
    }
    const showContactModal = () => {
        setShowContactInfo(!showContactInfo)
    }

    return (
        <>
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
                        <li className="feature_52">
                            <span>
                                لینک سایت فروشنده:
                            </span>
                            <Link to='' target='_blank' >
                                www.kapoot.com
                            </Link>
                        </li>
                        <li className="feature_52 btn location-btn_52" onClick={openMap}>
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

                    <div className="footer-butons_52">
                        <button className="btn contact-btn_52" onClick={showContactModal}>
                            اطلاعات تماس
                        </button>

                        <Link to={''} target='_blank' className="btn link-btn_52">
                            خرید از سایت فروشنده
                        </Link>
                    </div>


                </div>
            </div>
            {showMapModal && <MapModal onClose={openMap} />}
            {showContactInfo &&
                <ModalContainer onClick={closeAction}>
                    <div ref={modal_ref} className="contact-card_52">
                        <div className="card-header_52">
                            <span className="h6"> اطلاعات تماس </span>
                            <span className="close-icon_52" onClick={showContactModal}> &#10006; </span>
                        </div>
                        <ul>
                            <li className="contact-item_52">
                                <span>
                                    شماره تماس:
                                </span>
                                <a href={`tel:+${98941}`}>
                                    09141234567
                                </a>
                            </li>
                            <li className="contact-item_52">
                                <span>
                                    شماره تماس:
                                </span>
                                <a href={`tel:+${98941}`}>
                                    09141234567
                                </a>
                            </li>

                        </ul>
                    </div>
                </ModalContainer>
            }
        </>
    )
}

export default ProductsDetailesCard