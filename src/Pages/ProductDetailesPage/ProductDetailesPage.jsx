import { useEffect, useRef, useState } from 'react'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useLocation, useParams } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import ProductCard from '../../components/ProductCard/ProductCard'
import UserLocation from '../../components/UserLocation/UserLocation'
import ProductsDetailesCard from '../../components/ProductsDetailesCard/ProductsDetailesCard'
import TextEditor from '../../components/TextEditor/TextEditor'
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer'
import { TextArea } from '../../components/Inputs/Inputs'
import { BsTrash3 } from 'react-icons/bs'
import './ProductDetailesPage.css'  //  Code =>  5
import SupportWidget from '../../components/SupportWidget/SupportWidget';

//__________ Fack product iamge list ................
const exam = ['no-image.webp', 'footer-img_1.webp', 'footer-img_2.webp']
const exampel_imageList = new Array(3).fill().map((e, i) => '/Images/' + exam[i])
const matchProductList = Array.from(Array(10).keys())

const ProductDetailesPage = () => {
    const [openGallery, setOpenGallery] = useState(false)
    const [activeTab, setActiveTab] = useState(1)
    const [notebookBtn, setNotebookBtn] = useState(false)
    const userNote = useRef(null)
    const params = useParams()
    const t = useLocation()
    useEffect(() => {
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        console.log(t)
        document.title = 'قیمت و خرید ' + '"نام محصول "' + ' | کاپوت'
    }, [])

    const saveNot = (e) => {
        e.currentTarget.parentElement.classList.add('done-5')
        alert(`${userNote.current.value}\nاز طریق API در کاپوت کاربر ذخیره میشود`)
    }
    const noteAreaOnChange = (e) => {
        e.target.value == '' ? setNotebookBtn(false) : setNotebookBtn(true)
    }
    const removeNot = (e) => {
        e.currentTarget.parentElement.classList.remove('done-5')
        alert(`${userNote.current.value}\nاز طریق API در کاپوت کاربر حذف میشود`)
        userNote.current.value = '';
        setNotebookBtn(false)
    }

    return (<>

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
                    <div className={`tab_5 ${activeTab == 3 && 'active-tab_5'}`} onClick={() => setActiveTab(3)}>
                        یاداشت
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
                {activeTab == 3 && <>

                    <div className="not-content_5">
                        <TextArea
                            className="not-atrea_5"
                            name='not'
                            helpText='یاداشت شما...'
                            ref={userNote}
                            onChange={noteAreaOnChange}
                        />
                        {notebookBtn &&
                            <div className="not-btns_5 clean-5">
                                <span> ثبت شد </span>
                                <button className="btn" onClick={saveNot}>
                                    &#10004;
                                </button>
                                <button className="btn" onClick={removeNot}>
                                    <BsTrash3 />
                                </button>
                            </div>
                        }
                        <span>
                            یادداشت تنها برای شما قابل دیدن است!
                        </span>
                    </div>

                </>}
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
        <SupportWidget />
    </>)
}

export default ProductDetailesPage