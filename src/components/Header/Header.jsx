import './Header.css' // Code => 01
import { BsPlusCircleDotted, BsGeoAlt, BsPersonCheckFill, BsPersonCircle, BsPlus, BsPlusLg } from "react-icons/bs";
import Navigation from '../Navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { openCartMenu } from '../../redux/CartReducer/CartSlice';
import { useState } from 'react';
import CitySelectModal from '../CitySelectModal/CitySelectModal';

const Header = () => {
    const [openCityModal, setOpenCityModal] = useState(false)
    const [name, isLogin, Cities_List] = useSelector((state) => {
        return [
            `${state.userInfo.name} ${state.userInfo.lastName}`,
            state.userInfo.isLogin,
            state.citiesList,
        ]
    })
    //const Cities_List = useSelector(st)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const profileClickHandler = () => {
        navigate('/userdashbord/profile')
    }
    const addNewPostClick = () => {
        dispatch(openCartMenu())
    }

    const citySelectorOpen = () => {
        setOpenCityModal(true)
    }

    return (
        <>
            <header className='Header_01'>
                <div className="container header_container">
                    <div className="header-logo_01">
                        <Link to='/' >
                            <img src="/logo.webp" alt="kapoot" />
                        </Link>
                    </div>

                    <SearchBox className='search-box_01' />

                    <div className="header-button-group">
                        <div className="button_01" onClick={profileClickHandler} >
                            {isLogin ? <>
                                <BsPersonCheckFill size={22} />
                                <span className='title_01'>
                                    {name}
                                </span>

                            </> : <>
                                <BsPersonCircle size={22} />
                                <span className='title_01'>
                                    ورود
                                </span>
                            </>}

                        </div>
                        <div className="button_01" onClick={addNewPostClick} >
                            <BsPlusCircleDotted size={22} />
                            <span className='title_01'>
                                ثبت آگهی
                            </span>
                        </div>
                        <div className="button_01 city-selector_01" onClick={citySelectorOpen} >
                            <BsGeoAlt size={22} />
                            <span className={`title_01 ${Cities_List.length !=0 && 'bg-red_01'}`}>
                                {Cities_List.length == 0 ? ' انتخاب شهر' :
                                    Cities_List.length > 1 ? `${Cities_List.length}   تا شهر` : Cities_List[0]
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>

            {openCityModal && <CitySelectModal closeAction={setOpenCityModal} />}
        </>
    )
}

export default Header