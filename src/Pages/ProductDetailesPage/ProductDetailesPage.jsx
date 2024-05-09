import { useEffect, useRef, useState } from 'react'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import ProductCard from '../../components/ProductCard/ProductCard'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ProductsDetailesCard from '../../components/ProductsDetailesCard/ProductsDetailesCard'
import TextEditor from '../../components/TextEditor/TextEditor'
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer'
import { TextArea } from '../../components/Inputs/Inputs'
import { BsTrash3 } from 'react-icons/bs'
import './ProductDetailesPage.css'  //  Code =>  5
import SupportWidget from '../../components/SupportWidget/SupportWidget';
import { useDispatch, useSelector } from 'react-redux';
import { addUserNote, removeUserNote } from '../../redux/UserReducer/userSlice';

//__________ Fack product iamge list ................
const exam = ['no-image.webp', 'footer-img_1.webp', 'footer-img_2.webp']
const exampel_imageList = new Array(3).fill().map((e, i) => '/Images/' + exam[i])
const matchProductList = Array.from(Array(10).keys())

const ProductDetailesPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const POSTS_LIST = useSelector(state => state.posts)
    const User = useSelector(state => state.userInfo)
    const same_posts = POSTS_LIST.slice(0, 10)
    const [openGallery, setOpenGallery] = useState(false)
    const [activeTab, setActiveTab] = useState('T1D')
    const userNote = useRef(null)

    const post = POSTS_LIST.find(p => p.id == params.productID)
    const { images, ...postInfo } = post ? post : {};

    // در صورت پیدا نکردن آی‌دی آگهی به صفحه 404 منتقل میشود
    if (!post) return <Navigate to={'/page-not-found'} />

    // آی‌دی آگهی را در حافظه ذخیری میکند 
    const setToRecently = () => {
        let local = localStorage.getItem('User_Recently_Seen');
        if (!local) {
            localStorage.setItem('User_Recently_Seen', JSON.stringify([params.productID]))
        } else {
            local = JSON.parse(local)
            local = local.filter(i => i != params.productID)
            localStorage.setItem('User_Recently_Seen', JSON.stringify([...local, params.productID]))
        }
    }

    useEffect(() => {
        setToRecently()
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        document.title = `قیمت و خرید ${post.title} | کاپوت`;
    }, [])

    // اگر کاربر یاداشتی برای این آگهی نوشته باشد در اینجا مدیریت میشود
    useEffect(() => {
        if (activeTab == 'T3N') {
            const note = User.notes.find(n => n.postID == post.id)
            if (note) {
                userNote.current.value = note.noteText;
                noteAreaOnChange()
            }
        }
    }, [activeTab])

    const saveNot = (e) => {
        if (localStorage.getItem('tokan')) {
            const date = new Date().toLocaleString()
            dispatch(addUserNote({
                postID: post.id,
                noteDate: date,
                noteText: userNote.current.value,
            }))
            e.currentTarget.parentElement.classList.add('done-5')
            alert(`${userNote.current.value}\nاز طریق API در کاپوت کاربر ذخیره میشود`)
        }
    }

    const noteAreaOnChange = () => {
        if (userNote.current.value == '') {
            userNote.current.parentElement.nextSibling.style.display = 'none'
        } else {
            userNote.current.parentElement.nextSibling.style.display = 'flex'
        }
    }

    const removeNot = (e) => {
        dispatch(removeUserNote(post.id))
        e.currentTarget.parentElement.classList.remove('done-5')
        userNote.current.value = '';

        alert(`${userNote.current.value}\nاز طریق API در کاپوت کاربر حذف میشود`)
    }

    return (<>
        <BreadCrumbs />
        <main className="container ">

            <div className="product-detailes-5">
                <ImageGallery
                    className='image-container-5'
                    imageList={exampel_imageList}
                    productName={'نام محصول'}
                    onImgClick={() => setOpenGallery(true)}
                />
                <ProductsDetailesCard {...postInfo} />
            </div>
            <div className="dis-coment-container_5">
                <header className="tab-wrapper_5">
                    <div className={`tab_5 ${activeTab == 'T1D' && 'active-tab_5'}`} onClick={() => setActiveTab('T1D')}>
                        توضیحات
                    </div>
                    <div className={`tab_5 ${activeTab == 'T2C' && 'active-tab_5'}`} onClick={() => setActiveTab('T2C')}>
                        نظرات
                    </div>
                    <div className={`tab_5 ${activeTab == 'T3N' && 'active-tab_5'}`} onClick={() => setActiveTab('T3N')}>
                        یاداشت
                    </div>
                </header>

                {activeTab == 'T1D' && <>
                    <div className="discreption-content_5">
                        <TextEditor readOnly={true} value={'<h3>توضیحات</h3>'} />
                    </div>

                    <div className="isEmpty_5">توضیحی برای این محصول ارائه نشده است !</div>

                </>}

                {activeTab == 'T2C' && <CommentsContainer commentList={[1]} />}

                {activeTab == 'T3N' && <>

                    <div className="not-content_5">
                        <TextArea
                            label='یادداشت تنها برای شما قابل دیدن است!'
                            className="not-atrea_5"
                            name='not'
                            helpText='یاداشت شما...'
                            ref={userNote}
                            onChange={noteAreaOnChange}
                        />

                        <div className="not-btns_5">
                            <span> ثبت شد </span>
                            <button className="btn" onClick={saveNot}>
                                &#10004;
                            </button>
                            <button className="btn" onClick={removeNot}>
                                <BsTrash3 />
                            </button>
                        </div>

                    </div>

                </>}
            </div>
        </main>

        <MultiSlider headerTitle='محصولات مشابه' headerBtnLink={false} >
            {same_posts.reverse().map(post =>
                <div dir='rtl' key={post.id} className='test' >
                    <ProductCard noChange={true} {...post} />
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