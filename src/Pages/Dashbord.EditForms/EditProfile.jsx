import { useEffect, useRef, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import { Input } from '../../components/Inputs/Inputs';
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها
import Selection from '../../components/Selection/Selection';
import './EditForms.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../redux/UserReducer/userSlice';

const EditProfile = () => {
    const User_Info = useSelector(state => state.userInfo)
    const dispath = useDispatch()
    const navigate = useNavigate()
    const provinces_cities_list = useRef(ProvincesCities)
    const [provincesList, setProvincesList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [error, setError] = useState({})

    const name_input = useRef(null)
    const lastName_input = useRef(null)
    const phoneNumber1_input = useRef(null)
    const phoneNumber2_input = useRef(null)
    const address_input = useRef(null)
    const [profileImg, setProfileImg] = useState(User_Info.image || '')
    const [ostan, setOstan] = useState(User_Info.address.ostan || '')
    const [city, setCity] = useState(User_Info.address.city || '')

    useEffect(() => {
        provinces_cities_list.current.map(item => item.ostan == ostan && setCitiesList(item.cities))
        if (ostan == '') {
            setCitiesList([]);
            setCity('')
        }
    }, [ostan])

    useEffect(() => {
        setProvincesList(provinces_cities_list.current.map(item => item.ostan))
        name_input.current.value = User_Info.name || '';
        lastName_input.current.value = User_Info.lastName || '';
        phoneNumber1_input.current.value = User_Info.phoneNumber[0] || '';
        phoneNumber2_input.current.value = User_Info.phoneNumber[1] || '';
        address_input.current.value = User_Info.address.address || '';
    }, [])


    const selectOstan = (value) => {
        let user_ostan = value || '';
        setOstan(user_ostan)
    }

    const selectCity = (value) => {
        let user_city = value || '';
        setCity(user_city)
    }

    const selectProfileImage = (e) => {
        setProfileImg(URL.createObjectURL(e.target.files[0]))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        if (profileImg == '') form.set('profileImg', '')
        form.append('ostan', ostan)
        form.append('city', city)

        // صرفا جهت نمایش اطلاعات فرم است
        for (const pair of form.entries()) {
            console.log(pair[0], pair[1]);
        }

        // اعتبار سنجی فرم هم سمت بک‌اند انجام میشود.
        // در پاسخ درخواست کل اطلاعات کاربر بازگشت داده شود و در استیت کاربر ذخیره شود
        // درصورت خالی بودن فیلد نام فیلد به همراه متن خطا در یک آبجکت بازگشت داده شود
        setUserData()
    }


    const setUserData = () => {// این تابع صرفا برای ثبت آزمایشی اطلاعات کاربر میباشد

        const data = {
            name: name_input.current.value,
            lastName: lastName_input.current.value,
            phoneNumber: [phoneNumber1_input.current.value],
            address: {
                ostan: ostan,
                city: city,
                address: address_input.current.value
            },
            image: profileImg
        }
        if (phoneNumber2_input.current.value) data.phoneNumber.push(phoneNumber2_input.current.value);

        dispath(setUserInfo(data))
        navigate('/userdashbord/profile')
    }

    return (<>
        <div className="main-container_88">

            <form className="form_88" onSubmit={submitHandler}>

                <div className="image-input_88 col-span_88 mb_88">
                    <span> عکس پروفایل خودرا وارد کنید </span>
                    <div className="upload-box_88">
                        <div hidden={profileImg ? false : true} >
                            <img src={profileImg} alt="User Profile" />
                            <span className="remove-img_88" onClick={() => setProfileImg('')} >
                                حذف پروفایل
                            </span>
                        </div>

                        <div hidden={profileImg ? true : false} >
                            <input type="file" name='profileImg' id="proUploader82" onChange={selectProfileImage} />
                            <label htmlFor="proUploader82" className="uploader-btn_88">
                                <MdAddAPhoto size={40} />
                            </label>
                        </div>
                    </div>
                </div>

                <Input
                    ref={name_input}
                    label='نام'
                    name='name'
                    error={error['name']}
                />

                <Input
                    ref={lastName_input}
                    label='نام خانوادگی'
                    name='lastName'
                    error={error['lastName']}

                />

                <Input
                    type='number'
                    label='شماره موبایل ۱'
                    name='firstPhone'
                    ref={phoneNumber1_input}
                    error={error['firstPhone']}
                />

                <Input
                    type='number'
                    label='شماره موبایل ۲'
                    name='secondPhone'
                    ref={phoneNumber2_input}
                    error={error['firstPhone']}
                />

                <Selection
                    label='استان خود را انتخاب کنید'
                    firstValue='انتخاب استان'
                    value={ostan}
                    optionList={provincesList}
                    onSelect={selectOstan}
                    error={error['ostan']}
                    menuHeight='15rem'
                />

                <Selection
                    label='شهر خود را انتخاب کنید'
                    firstValue='انتخاب شهر'
                    value={city}
                    optionList={citiesList}
                    onSelect={selectCity}
                    error={error['city']}
                    menuHeight='15rem'
                />

                <Input
                    ref={address_input}
                    className="col-span_88"
                    label='آدرس'
                    helpText='آدرس خودرا وارد کنید'
                    name='address'
                    error={error['address']}
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

export default EditProfile