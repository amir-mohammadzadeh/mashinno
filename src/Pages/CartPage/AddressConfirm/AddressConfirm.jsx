import React, { useEffect, useRef, useState } from 'react'
import './AddressConfirm.css' // Code => 63
import { Input, TextArea } from '../../../components/Inputs/Inputs'
import Selection from '../../../components/Selection/Selection'
import { useNavigate } from 'react-router-dom'
import ProvincesCities from '../../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها

const AddressConfirm = () => {
    const navigate = useNavigate()
    const provinces_cities_list = useRef(ProvincesCities)
    const [provincesList, setProvincesList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [username, setUsername] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [codeposty, setCodeposty] = useState('')
    const [ostan, setOstan] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        setProvincesList(provinces_cities_list.current.map(item => item.ostan))
        provinces_cities_list.current.map(item => item.ostan == ostan && setCitiesList(item.cities))
        ostan == '' && setCitiesList([]), setCity('');
    }, [ostan])

    const selectOstan = (value) => {
        let user_ostan = value || '';
        setOstan(user_ostan)
    }
    const selectCity = (value) => {
        let user_city = value || '';
        setCity(user_city)
    }
    const submitHandler = () => {
        navigate('/cart/order-details#3')
    }
    return (
        <div>

            <form action="" className="address-form_63" onSubmit={submitHandler} >
                <Input
                    name='username'
                    label='نام گیرنده'
                    helpText='نام و نام‌خانوادگی'
                    value={username}
                    onChange={setUsername}
                    required={false}
                />
                <TextArea
                    className="address-input_63"
                    name='useraddress'
                    label='آدرس گیرنده'
                    helpText='لطفا آدرس کامل خود را وارد کنید...'
                    value={address}
                    onChange={setAddress}
                    required={false}
                />
                <Input
                    className="codeposty-input_63"
                    name='codeposty'
                    label='کد پستی'
                    type='number'
                    helpText='(اختیاری)'
                    value={codeposty}
                    onChange={setCodeposty}
                    required={false}
                />
                <Input
                    className=""
                    name='phonenumber'
                    label='شماره تماس'
                    type='number'
                    helpText='شماره تماس گیرنده'
                    value={phonenumber}
                    onChange={setPhonenumber}
                    required={false}
                />
                <div className="selection_63">
                    <label>
                        استان خود را انتخاب کنید
                    </label>
                    <Selection
                        value={ostan}
                        onSelect={selectOstan}
                        label='انتخاب استان'
                        optionList={provincesList}
                    />
                </div>
                <div className="selection_63">
                    <label>
                        شهر خود را انتخاب کنید
                    </label>
                    <Selection
                        value={city}
                        onSelect={selectCity}
                        label='انتخاب شهر'
                        optionList={citiesList}
                    />
                </div>

                <button type="submit" className="btn btn-animate form-btn_63">
                    تایید آدرس و ادامه
                </button>
            </form>
        </div>

    )
}

export default AddressConfirm