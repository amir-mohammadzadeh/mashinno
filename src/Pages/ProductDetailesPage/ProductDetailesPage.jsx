import React, { useEffect, useState } from 'react'
import './ProductDetailesPage.css'  //  Code =>  5
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useLocation, useParams } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";
import SiteFeatures from '../../components/SiteFeatuers/SiteFeatuers'
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import ProductCard from '../../components/ProductCard/ProductCard'
import UserLocation from '../../components/UserLocation/UserLocation'
import ProductsDetailesCard from '../../components/ProductsDetailesCard/ProductsDetailesCard'
import TextEditor from '../../components/TextEditor/TextEditor'
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer'

//__________ Fack product iamge list ................
const exam = ['no-image.webp', 'footer-img_1.webp', 'footer-img_2.webp']
const exampel_imageList = new Array(3).fill().map((e, i) => '/public/Images/' + exam[i])
const matchProductList = Array.from(Array(10).keys())

const ProductDetailesPage = () => {
    const [openGallery, setOpenGallery] = useState(false)
    const [activeTab, setActiveTab] = useState(1)
    const params = useParams()
    const t = useLocation()
    useEffect(() => {
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        console.log(t)
        document.title = 'قیمت و خرید ' + '"نام محصول "' + ' | کاپوت'
    }, [])

    return (
        <>
            <UserLocation />
            <main className="container ">

                <div className="product-detailes-5">
                    <ImageGallery
                        className='image-container-5'
                        imageList={exampel_imageList}
                        productName={'نام محصول'}
                        onImgClick={() => setOpenGallery(true)}
                    />
                    <ProductsDetailesCard />
                </div>
                <div className="dis-coment-container_5">
                    <header className="tab-wrapper_5">
                        <div className={`tab_5 ${activeTab == 1 && 'active-tab_5'}`} onClick={() => setActiveTab(1)}>
                            توضیحات
                        </div>
                        <div className={`tab_5 ${activeTab == 2 && 'active-tab_5'}`} onClick={() => setActiveTab(2)}>
                            نظرات
                        </div>
                    </header>

                    {activeTab == 1 && <>
                        <div className="discreption-content_5">

                        </div>
                        <div className="isEmpty_5">توضیحی برای این محصول ارائه نشده است !</div>

                    </>}

                    {activeTab == 2 &&
                        <CommentsContainer />
                    }
                </div>
            </main>
            
            <MultiSlider headerTitle='محصولات مشابه' headerBtnLink={false} >
                {matchProductList.map(i =>
                    <div dir='rtl' key={i} className='test' >
                        <ProductCard noChange={true} />
                    </div>
                )}
            </MultiSlider>
            {openGallery &&
                <ModalContainer >
                    <div className="gallery-close-5" onClick={() => setOpenGallery(false)}>
                        <FaXmark size={'100%'} />
                    </div>
                    <ImageGallery className='gallery-container-5' imageList={exampel_imageList} productName={'نام محصول'} />
                </ModalContainer>
            }
        </>
    )
}

export default ProductDetailesPage