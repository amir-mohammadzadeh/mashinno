import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MdAddAPhoto, MdNoPhotography } from "react-icons/md";
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

    const name_input = useRef(null)
    const lastName_input = useRef(null)
    const phoneNumber1_input = useRef(null)
    const phoneNumber2_input = useRef(null)
    const address_input = useRef(null)
    const [profileImg, setProfileImg] = useState('')//  /Images/NoPhoto.jpg
    const [ostan, setOstan] = useState('')
    const [city, setCity] = useState('')
    const [error, setError] = useState({})

    useLayoutEffect(() => {
        name_input.current.value = User_Info.name || ''
        lastName_input.current.value = User_Info.lastName || ''
        phoneNumber1_input.current.value = User_Info.phoneNumber[0] || ''
        phoneNumber2_input.current.value = User_Info.phoneNumber[1] || ''
        address_input.current.value = User_Info.address.address || ''

    }, [])

    useEffect(() => {
        provinces_cities_list.current.map(item => item.ostan == ostan && setCitiesList(item.cities))
        if (ostan == '') {
            setCitiesList([]);
            setCity('')
        }
    }, [ostan])

    useEffect(() => {
        setProvincesList(provinces_cities_list.current.map(item => item.ostan))
        setOstan(User_Info.address.ostan)
        setCity(User_Info.address.city)
    }, [])



    const validation = () => {
        let errors = {}
        if (!name_input.current.value) errors['name'] = 'این قسمت نباید خالی بماند!';
        if (!lastName_input.current.value) errors['lastName'] = 'این قسمت نباید خالی بماند!';
        if (!address_input.current.value) errors['address'] = 'این قسمت نباید خالی بماند!';
        if(phoneNumber1_input.current.value.length != 11) errors['phone1'] ='شماره تلفن صحیح نیست!';
        if(phoneNumber2_input.current.value && phoneNumber2_input.current.value.length != 11) errors['phone2'] ='شماره تلفن صحیح نیست!';
        if (!ostan) errors['emptyOstan'] = 'لطفا استان خود را انتخاب کنید!';
        if (!city) errors['emptyCity'] = 'لطفا شهر خود را انتخاب کنید!';

        return Object.keys(errors).length == 0 ? null : errors;
    }

    const selectOstan = (value) => {
        let user_ostan = value || '';
        setOstan(user_ostan)
    }
    const selectCity = (value) => {
        let user_city = value || '';
        setCity(user_city)
    }

    const selectProfileImage = (e) => {
        setProfileImg(e.target.files[0])
    }

    const submitHandler = (e) => {
        e.preventDefault()
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
        if (phoneNumber2_input.current.value) data.phoneNumber.push(phoneNumber2_input.current.value)
        const result = validation(data)


        if (result) {
            setError(result)
            return
        } else setError({})

        dispath(setUserInfo(data))
        alert('پس از ذخیره شدن این داده ها در state\nاطلاعات دریافت شده از طریق API به سرور ارسال میشوند تا در دیتابیس ذخیره شود...')
        navigate('/userdashbord/profile')
    }

    return (<>
        <div className="main-container_88">

            <form className="form_88" onSubmit={submitHandler}>

                <div className="image-input_88 col-s2_88 mb_88">
                    <span> عکس پروفایل خودرا وارد کنید </span>
                    <div className="upload-box_88">
                        {profileImg ? <>
                            <img src={URL.createObjectURL(profileImg)} alt="User Profile" />
                            <span className="remove-img_88" onClick={() => setProfileImg('')} >
                                حذف پروفایل
                            </span>
                        </> : <>
                            <input type="file" id="imageUploader82" onChange={selectProfileImage} />
                            <label htmlFor="imageUploader82" className="uploader-btn_88">
                                <MdAddAPhoto size={40} />
                            </label>
                        </>
                        }
                    </div>

                </div>

                <Input
                    ref={name_input}
                    label='نام'
                    name='userName'
                    error={error['name']}
                />
                <Input
                    ref={lastName_input}
                    label='نام خانوادگی'
                    name='userLastName'
                    error={error['lastName']}

                />
                <Input
                    type='number'
                    label='شماره موبایل ۱'
                    name='phoneNum1'
                    ref={phoneNumber1_input}
                    error={error['phone1']}
                    />
                <Input
                    type='number'
                    label='شماره موبایل ۲'
                    name='phoneNum2'
                    ref={phoneNumber2_input}
                    error={error['phone2']}
                />


                <Selection
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
                    ref={address_input}
                    className="col-s2_88"
                    label='آدرس'
                    helpText='آدرس خودرا وارد کنید'
                    name='phoneNum2'
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