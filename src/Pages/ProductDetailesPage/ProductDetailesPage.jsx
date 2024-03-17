import React, { useEffect } from 'react'
import './ProductDetailesPage.css'  //  Code =>  51
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useParams } from 'react-router-dom'
import { BsCart, BsCart3 } from 'react-icons/bs'
import SiteFeatures from '../../components/SiteFeatuers/SiteFeatuers'
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import ProductCard from '../../components/ShoppingPage/ProductCard/ProductCard'

//__________ Fack product iamge list ................
const exam = ['no-image.webp', 'footer-img_1.webp', 'footer-img_2.webp']
const exampel_imageList = new Array(3).fill().map((e, i) => '/public/Images/' + exam[i])
const matchProductList = Array.from(Array(10).keys())

const ProductDetailesPage = () => {
    const params = useParams()
    useEffect(() => {
        console.log(params.productID)
        document.title = 'قیمت و خرید ' + '"نام محصول "' + ' | کاپوت'
    }, [])

    return (
        <>
            <main className="container ">

                <div className="product-detailes-51">
                    <ImageGallery className='img-gallery-51' imageList={exampel_imageList} />
                    <div className="product-content-51">
                        <div className="title-51">
                            <h3>
                                عنوان محصول
                            </h3>
                            <div className="car-info-51">
                                خودروی
                                <span> کیا  </span>
                                مدل
                                <span> فلان  </span>
                            </div>
                        </div>
                        <div className="detaile-body-51">
                            <ul className="featurs-51">
                                <li className="feature-51">
                                    <span>
                                        K
                                    </span>
                                    <span>
                                        گارانتی سلامت فیزیکی کالا
                                    </span>
                                </li>
                                <li className="feature-51">
                                    <span>
                                        برند تولید کننده:
                                    </span>
                                    <span>
                                        طرح اصلی
                                    </span>
                                </li>
                                <li className="feature-51">
                                    <span>
                                        کشور سازنده:
                                    </span>
                                    <span>
                                        کره جنوبی
                                    </span>
                                </li>
                                <li className="feature-51">
                                    <span>
                                        فروشنده:
                                    </span>
                                    <span>
                                        فروشگاه کاپوت
                                    </span>
                                </li>
                                <li className="feature-51">
                                    <span>
                                        ارسال از :
                                    </span>
                                    <span>
                                        تهران
                                    </span>
                                </li>

                            </ul>
                            <div className="price-links-51">
                                <div className="ratting-51">
                                    4.2
                                </div>

                            </div>
                        </div>

                        <div className="detaile-footer-51">
                            <div className="price-51">
                                ۱۹۰۰۰۰
                                <span>تومان</span>
                            </div>
                            <div className="add-cart-btn">
                                <span className="btn-icon-51">
                                    <BsCart3 size={20} />
                                </span>
                                <span>
                                    افزودن به سبد خرید
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFeatures />
            <MultiSlider headerTitle='محصولات مشابه' headerBtnLink={false} >
                {matchProductList.map(i =>
                    <div dir='rtl' key={i}className='test' >
                        <ProductCard noChange={true} />
                    </div>
                )}

            </MultiSlider>


        </>
    )
}

export default ProductDetailesPage