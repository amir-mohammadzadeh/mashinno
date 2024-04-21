import React, { useEffect, useRef, useState } from 'react'
import './EditStorePanel.css' //Code => 86
import { MdAddAPhoto, MdNoPhotography } from 'react-icons/md'
import { Input, TextArea } from '../../components/Inputs/Inputs'
import Selection from '../../components/Selection/Selection'
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها
import { Link } from 'react-router-dom'

const EditStorePanel = () => {
    const list = Array.from(Array(5).keys())
    const [profileImg, setProfileImg] = useState('/Images/NoPhoto.jpg')//   
    const provinces_cities_list = useRef(ProvincesCities)
    const [provincesList, setProvincesList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [ostan, setOstan] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        setProvincesList(provinces_cities_list.current.map(item => item.ostan))
        provinces_cities_list.current.map(item => item.ostan == ostan && setCitiesList(item.cities))
        if (ostan == '') {
            setCitiesList([]);
            setCity('')
        }
    }, [ostan])

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

    return (<>
        <div className="main_container_86">

            <form className="form_86">
                <div className="image-uploader_86">

                    <div className="image-input_86 ">

                        <span>
                            لوگوی فروشگاه خودرا وارد کنید
                        </span>

                        <div className="upload-box_86">
                            {profileImg ? <>
                                <img src={profileImg} alt="User Profile" />
                                <span className="remove-logo_86" >
                                    حذف لوگو
                                </span>
                            </> : <>
                                <input type="file" id="imageUploader86" />
                                <label htmlFor="imageUploader86" className="uploader-btn_86">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </>
                            }
                        </div>

                    </div>

                    <div className="image-input_86">
                        <span> عکس فروشگاه خودرا وارد کنید </span>
                        <div className="image-list_86">


                            <div className="upload-box_86">
                                <input type="file" id="imageUploader86" />
                                <label htmlFor="imageUploader86" className="uploader-btn_86">
                                    <MdAddAPhoto size={40} />
                                </label>
                            </div>
                            <ul className="img-name-list_86 no-scrollbar">

                                {list.map(i =>
                                <li className="img-name_86">
                                    <span className="remove-name_86" >
                                        &#10006;
                                    </span>
                                    <span className="line-limit-1"> اسم فایل </span>
                                </li>
                                   
                                )}


                            </ul>
                        </div>
                    </div>

                </div>

                <Input

                    label='نام فروشگاه'
                    name='storeName'
                    error={''}
                />

                <Input
                    type='number'
                    label='شماره تماس ۱'
                    name=''
                    error={''}
                />
                <Input
                    type='number'
                    label='شماره تماس ۲'
                    name=''
                    error={''}
                />
                <Selection
                    className="col-row-13_86"
                    label='استان خود را انتخاب کنید'
                    firstValue='انتخاب استان'
                    value={ostan}
                    optionList={provincesList}
                    onSelect={selectOstan}
                    error={''}
                    menuHeight='15rem'
                />


                <Selection

                    label='شهر خود را انتخاب کنید'
                    firstValue='انتخاب شهر'
                    value={city}
                    optionList={citiesList}
                    onSelect={selectCity}
                    error={''}
                    menuHeight='15rem'
                />

                <Input


                    label='آدرس فروشگاه'
                    name='address'
                    error={''}
                />

                <Input
                    className="link-input_86"
                    label='لینک سایت فروشگاه'
                    name='address'
                    error={''}
                    readOnly={true}
                />

                <div className="link-dis_86">
                    <p>
                        با اتصال سایت فروشگاه خود به کاپوت میتوانید لینک مربوط به محصولی که آگهی میکنید را در آگهی قرار دهید تا خریداران از سایت خودتون اقدام به خرید نماییند.
                    </p>
                    <p>
                        هزینه اتصال سایت به کاپوت ۱۰۰ هزار تومان میباشد.
                        <a onClick={linkPaymentHandler}>
                            پرداخت
                        </a>
                    </p>
                </div>

                <TextArea
                    className="adout-input_86"
                    label='ٔدرباره فروشگاه'
                    helpText='خلاصه‌ای مختصر درباره فروشگاه خود بنویسید... '
                    name='address'
                    error={''}
                />

                <div className="form-buttons_82">

                    <button type="submit" className="btn btn-animate submit-btn_82">
                        ذخیره
                    </button>
                    <Link to={'/userdashbord/profile'} className="btn cancel-btn_82">
                        انصراف
                    </Link>
                </div>

            </form>
        </div>

    </>)
}

export default EditStorePanel