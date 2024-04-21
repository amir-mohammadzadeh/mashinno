import { useEffect, useRef, useState } from 'react'
import './EditForms.css'//Code => 86
import { MdAddAPhoto } from 'react-icons/md'
import { Input, TextArea } from '../../components/Inputs/Inputs'
import Selection from '../../components/Selection/Selection'
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها
import { Link } from 'react-router-dom'

const EditStorePanel = () => {
    const list = Array.from(Array(5).keys())
    const [error, setError] = useState({})
    const provinces_cities_list = useRef(ProvincesCities)
    const [provincesList, setProvincesList] = useState([])
    const [citiesList, setCitiesList] = useState([])

    const [storeLogo, setStoreLogo] = useState('')//   /Images/NoPhoto.jpg
    const [storeImages, setStoreImages] = useState([])//   /Images/NoPhoto.jpg
    const [ostan, setOstan] = useState('')
    const [city, setCity] = useState('')
    const storeName = useRef(null)
    const phoneNum1 = useRef(null)
    const phoneNum2 = useRef(null)
    const address = useRef(null)
    const siteUrl = useRef(null)
    const aboutStore = useRef(null)

    useEffect(() => {
        setProvincesList(provinces_cities_list.current.map(item => item.ostan))
        provinces_cities_list.current.map(item => item.ostan == ostan && setCitiesList(item.cities))
        if (ostan == '') {
            setCitiesList([]);
            setCity('')
        }
    }, [ostan])

    const removeStoreImage = (index) => {
        setStoreImages(prevent => prevent.filter(file => file !== index))
    }
    const selectOstan = (value) => {
        let user_ostan = value || '';
        setOstan(user_ostan)
    }
    const selectCity = (value) => {
        let user_city = value || '';
        setCity(user_city)
    }
    const linkPaymentHandler = () => {
        alert('اتصال به درگاه پرداخت برای پرداخت هزینه مربوط به قرار دادن لینک سایت فروشگاه خود در کاپوت')
    }
    const validation = () => {
        let errors = {}
        if (!storeName.current.value) errors['name'] = 'این قسمت نباید خالی بماند!';
        if (!address.current.value) errors['address'] = 'این قسمت نباید خالی بماند!';
        if (!aboutStore.current.value) errors['about'] = 'با معرفی فروشگاه خود اعتماد مشتری را جلب کنید';
        if (!phoneNum1.current.value && !phoneNum2.current.value) {
            errors['emptyPhone'] = 'حداقل یک شماره تلفن باید وارد شود!';
        }
        if (!ostan) errors['emptyOstan'] = 'لطفا استان خود را انتخاب کنید!';
        if (!city) errors['emptyCity'] = 'لطفا شهر خود را انتخاب کنید!';

        return Object.keys(errors).length == 0 ? null : errors;
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            storeName: storeName.current.value,
            phoneNumbers: [phoneNum1.current.value],
            storeAddress: {
                ostan: ostan,
                city: city,
                address: address.current.value
            },
            siteURL: siteUrl.current.value,
            logo: storeLogo,
            images: storeImages
        }
        if (phoneNum2.current.value) data.phoneNumbers.push(phoneNum2.current.value);

        const result = validation(data)

        if (result) {
            setError(result)
            return
        } else setError({})
        console.log(data)
    }

    return (<>
        <div className="main-container_88">

            <form className="form_88" onSubmit={formSubmitHandler}>
                <div className="image-uploader_88 col-s2_88">

                    <div className="image-input_88 flex-s-0">

                        <span>
                            لوگوی فروشگاه خودرا وارد کنید
                        </span>

                        <div className="upload-box_88">
                            {storeLogo ? <>
                                <img src={URL.createObjectURL(storeLogo)} alt="User Profile" />
                                <span className="remove-img_88" onClick={() => setStoreLogo(null)} >
                                    حذف لوگو
                                </span>
                            </> : <>
                                <input type="file" id="logoUploader86" onChange={(e) => setStoreLogo(e.target.files[0])} />
                                <label htmlFor="logoUploader86" className="uploader-btn_88">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </>
                            }
                        </div>

                    </div>

                    <div className="image-input_88 flex-g">
                        <span> عکس فروشگاه خودرا وارد کنید </span>
                        <div className="image-content_88">

                            <div className="upload-box_88">
                                <input type="file" multiple={true} id="imageUploader81" onChange={(e) => setStoreImages([...e.target.files])} />
                                <label htmlFor="imageUploader81" className="uploader-btn_88">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </div>
                            <ul className="img-name-list_88 no-scrollbar">

                                {storeImages.length > 0 && storeImages.map((file, idx) =>
                                    <li key={idx} className="img-name_88">
                                        <span className="remove-name_88" title='حذف عکس' onClick={() => removeStoreImage(file)} >
                                            &#10006;
                                        </span>
                                        <span className="line-limit-1"> {file.name} </span>
                                    </li>

                                )}


                            </ul>
                        </div>
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
                    name=''
                    error={error['emptyPhone']}
                />
                <Input
                    ref={phoneNum2}
                    type='number'
                    label='شماره تماس ۲'
                    name=''
                    
                />
                <Selection
                    className="col-row-13_88"
                    label='استان خود را انتخاب کنید'
                    firstValue='انتخاب استان'
                    value={ostan}
                    optionList={provincesList}
                    onSelect={selectOstan}
                    error={error['emptyOstan']}
                    menuHeight='15rem'
                />


                <Selection

                    label='شهر خود را انتخاب کنید'
                    firstValue='انتخاب شهر'
                    value={city}
                    optionList={citiesList}
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
                    name='address'
                    error={''}
                    readOnly={true}
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
                    className="adout-input_88 col-s2_88"
                    label='درباره فروشگاه'
                    helpText='خلاصه‌ای مختصر درباره فروشگاه خود بنویسید... '
                    name='address'
                    error={error['about']}
                />

                <div className="form-buttons_88">

                    <button type="submit" className="btn btn-animate submit-btn_88">
                        ذخیره
                    </button>
                    <Link to={'/userdashbord/profile'} className="btn cancel-btn_88">
                        انصراف
                    </Link>
                </div>

            </form>
        </div>

    </>)
}

export default EditStorePanel