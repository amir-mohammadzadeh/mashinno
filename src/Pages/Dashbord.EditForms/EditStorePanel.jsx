import { useEffect, useRef, useState } from 'react'
import './EditForms.css'//Code => 86
import { MdAddAPhoto } from 'react-icons/md'
import { Input, TextArea } from '../../components/Inputs/Inputs'
import Selection from '../../components/Selection/Selection'
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setStoreInfo } from '../../redux/StoreReducer/StoreSlice'
import { setUserInfo } from '../../redux/UserReducer/userSlice'
import { ImageUploader_Multi } from '../../components/FileUploader/FileUploader'

const EditStorePanel = () => {
    const Store_Info = useSelector(state => state.storeInfo)
    const UserID = useSelector(state => state.userInfo.id)
    const dispath = useDispatch()
    const navigate = useNavigate()

    const list = Array.from(Array(5).keys())
    const [allowURL, setAllowURL] = useState(false)
    const provinces_cities_list = useRef(ProvincesCities)
    const provincesList = useRef([])
    const citiesList = useRef([])

    const [error, setError] = useState({})
    const [storeImages, setStoreImages] = useState([])
    const [storeLogo, setStoreLogo] = useState(Store_Info.LPKimage[0] || '')
    const [parvaneImg, setParvaneImg] = useState(Store_Info.LPKimage[1] || '')
    const [kartMelliImg, setKartMelliImg] = useState(Store_Info.LPKimage[2] || '')
    const [ostan, setOstan] = useState(Store_Info.storeAddress.ostan || '')
    const [city, setCity] = useState(Store_Info.storeAddress.city || '')
    const storeName = useRef(null)
    const phoneNum1 = useRef(null)
    const phoneNum2 = useRef(null)
    const address = useRef(null)
    const siteUrl = useRef(null)
    const aboutStore = useRef(null)

    provincesList.current = provinces_cities_list.current.map(item => item.ostan)
    const ID = Store_Info.id || 1;

    useEffect(() => {
        storeName.current.value = Store_Info.storeName || ''
        phoneNum1.current.value = Store_Info.phoneNumbers[0] || ''
        phoneNum2.current.value = Store_Info.phoneNumbers[1] || ''
        aboutStore.current.value = Store_Info.aboutStore || ''
        address.current.value = Store_Info.storeAddress.address || ''
        setStoreImages(createImageList(Store_Info.images))
    }, [])

    const createImageList = (list, id = 1) => {
        return list.map((item, idx) => {
            return {
                id: idx + id,
                file: (typeof item === 'object') ? item : null,
                url: (typeof item === 'string') ? item : URL.createObjectURL(item),
            }
        })
    }

    const addStoreLogo = (e) => {
        setStoreLogo(URL.createObjectURL(e.target.files[0]))
    }
    const addKartMelli = (e) => {
        setKartMelliImg(URL.createObjectURL(e.target.files[0]))
    }
    const addParvaneKasb = (e) => {
        setParvaneImg(URL.createObjectURL(e.target.files[0]))
    }

    const addStoreImage = (e) => {
        let selectedIMG = Array.from(e.target.files)
        let newList = createImageList(selectedIMG, (storeImages.length + 1))
        setStoreImages([...storeImages, ...newList])
    }

    const removeStoreImage = (imgID) => {
        setStoreImages(prevent => prevent.filter(item => item.id != imgID))
    }

    const selectOstan = (value) => {
        if (value) {
            citiesList.current = provinces_cities_list.current.find(item => item.ostan == value).cities
            setOstan(value)
        } else {
            citiesList.current = []
            setCity('')
            setOstan('')
        }
    }

    const selectCity = (value) => {
        let user_city = value || '';
        setCity(user_city)
    }


    const linkPaymentHandler = () => {
        alert('اتصال به درگاه پرداخت برای پرداخت هزینه مربوط به قرار دادن لینک سایت فروشگاه خود در کاپوت')
        setAllowURL(true)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        form.append('ostan', ostan)
        form.append('city', city)
        if (!allowURL) form.set('siteURL', null)

        storeImages.map(i => {
            i.file ? form.append('storeImages', i.file) : form.append('storeImages', i.url)
        })

        // صرفا جهت نمایش اطلاعات فرم است
        for (const pair of form.entries()) {
            console.log(pair[0], pair[1]);
        }

        // اعتبار سنجی فرم هم سمت بک‌اند انجام میشود.
        // درصورت خالی بودن فیلد نام فیلد به همراه متن خطا در یک آبجکت بازگشت داده شود

        setStoreData()
    }

    const setStoreData = () => {// این تابع صرفا برای ثبت آزمایشی اطلاعات فروشگاه میباشد

        const data = {
            id: ID, // =>  ID will be generated in the back-end?
            userID: UserID,
            storeName: storeName.current.value,
            phoneNumbers: [phoneNum1.current.value],
            storeAddress: {
                ostan: ostan,
                city: city,
                address: address.current.value
            },
            siteURL: !allowURL ? siteUrl.current.value : '',
            LPKimage: [storeLogo, parvaneImg, kartMelliImg],
            images: storeImages.map(i => i.url),
            aboutStore: aboutStore.current.value
        }
        if (phoneNum2.current.value) data.phoneNumbers.push(phoneNum2.current.value);


        dispath(setStoreInfo(data))
        dispath(setUserInfo({ storeID: ID }))
        navigate('/userdashbord/store_panel', { preventScrollReset: true })
    }


    return (<>
        <div className="main-container_88">

            <form className="form_88" onSubmit={formSubmitHandler}>
                <div className="image-uploader_88 col-span_88 mb_88">
                    <div className="image-input_88">

                        <span>
                            تصویر کارت ملی فروشنده
                        </span>

                        <div className="upload-box_88">
                            <div hidden={kartMelliImg ? false : true}>
                                <img src={kartMelliImg} alt="کارت ملی فروشنده" />
                                <span className="remove-img_88" onClick={() => setKartMelliImg(null)} >
                                    حذف عکس
                                </span>
                            </div>
                            <div hidden={kartMelliImg ? true : false}>
                                <input type="file" id="kmUploader86" name='kartMelli' onChange={addKartMelli} />
                                <label htmlFor="kmUploader86" className="uploader-btn_88">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="image-input_88">

                        <span>
                            عکس پروانه کسب فروشگاه
                        </span>

                        <div className="upload-box_88">
                            <div hidden={parvaneImg ? false : true}>
                                <img src={parvaneImg} alt="پروانه کسب فروشگاه" />
                                <span className="remove-img_88" onClick={() => setParvaneImg(null)} >
                                    حذف عکس
                                </span>
                            </div>
                            <div hidden={parvaneImg ? true : false}>
                                <input type="file" name='parvaneKasb' id="parvaneUploader86" onChange={addParvaneKasb} />
                                <label htmlFor="parvaneUploader86" className="uploader-btn_88">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </div>

                        </div>

                    </div>

                    <div className="image-input_88">
                        <span>
                            لوگوی فروشگاه
                        </span>
                        <div className="upload-box_88">

                            <div hidden={storeLogo ? false : true} >
                                <img src={storeLogo} alt="Store Logo" />
                                <span className="remove-img_88" onClick={() => setStoreLogo(null)} >
                                    حذف لوگو
                                </span>
                            </div>
                            <div hidden={storeLogo ? true : false} >
                                <input type="file" id="logoUploader86" name='storeLogo' onChange={addStoreLogo} />
                                <label htmlFor="logoUploader86" className="uploader-btn_88">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="image-input_88 col-span_88">
                        <span> عکس فروشگاه خودرا وارد کنید </span>

                        <ImageUploader_Multi
                            size={'6rem'}
                            onUpload={addStoreImage}
                            imageList={storeImages}
                            deleteAction={removeStoreImage}
                            multiple
                        />
                    </div>
                </div>

                <Input
                    ref={storeName}
                    label='نام فروشگاه'
                    name='storeName'
                    error={error['name']}
                />

                <Input
                    ref={phoneNum1}
                    type='number'
                    label='شماره تماس ۱'
                    name='firstPhone'
                    error={error['firstPhone']}
                />

                <Input
                    ref={phoneNum2}
                    type='number'
                    label='شماره تماس ۲'
                    name='secondPhone'
                    error={error['secondPhone']}
                />

                <Selection
                    className="col-row-13_88"
                    label='استان خود را انتخاب کنید'
                    firstValue='انتخاب استان'
                    value={ostan}
                    optionList={provincesList.current}
                    onSelect={selectOstan}
                    error={error['emptyOstan']}
                    menuHeight='15rem'
                />

                <Selection
                    label='شهر خود را انتخاب کنید'
                    firstValue='انتخاب شهر'
                    value={city}
                    optionList={citiesList.current}
                    onSelect={selectCity}
                    error={error['emptyCity']}
                    menuHeight='15rem'
                />

                <Input
                    ref={address}
                    label='آدرس فروشگاه'
                    name='address'
                    error={error['address']}
                />

                <Input
                    ref={siteUrl}
                    className="link-input_88"
                    label='لینک سایت فروشگاه'
                    name='siteURL'
                    readOnly={!allowURL}
                />

                <div className="link-dis_88">
                    <p>
                        با اتصال سایت فروشگاه خود به کاپوت میتوانید لینک مربوط به محصولی که آگهی میکنید را در آگهی قرار دهید تا خریداران از سایت خودتون اقدام به خرید نماییند.
                    </p>
                    <p>
                        هزینه اتصال سایت به کاپوت <b>۱۰۰ هزار </b>  تومان میباشد.
                        <a onClick={linkPaymentHandler}>
                            پرداخت
                        </a>
                    </p>
                </div>

                <TextArea
                    ref={aboutStore}
                    className="adout-input_88 col-span_88"
                    label='درباره فروشگاه'
                    helpText='خلاصه‌ای مختصر درباره فروشگاه خود بنویسید... '
                    name='aboutStore'
                    error={error['aboutStore']}
                />

                <div className="form-buttons_88">
                    <button type="submit" className="btn btn-animate submit-btn_88">
                        ذخیره
                    </button>
                    <Link to={'/userdashbord/store_panel'} className="btn cancel-btn_88">
                        انصراف
                    </Link>
                </div>

            </form>
        </div>

    </>)
}

export default EditStorePanel