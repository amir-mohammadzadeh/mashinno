import './Header.css' // Code => 01
import { BsPlusCircleDotted, BsGeoAlt, BsPersonCheckFill, BsPersonCircle, BsPlus, BsPlusLg, BsCart3 } from "react-icons/bs";
import Navigation from '../Navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { openCityModal } from '../../redux/CityReducer/CitySlice';
import CitySelectModal from '../CitySelectModal/CitySelectModal';
import CartSideBar from '../Cart.SideBar/CartSideBar';
import { openCartMenu } from '../../redux/CartReducer/CartSlice';

const Header = () => {
    const cityModalStatus = useSelector(state => state.citySolector.value)
    const isLogin = useSelector(state => state.userInfo.isLogin)
    const Cities_List = useSelector(state => state.citiesList)
    const cart_sideMenu = useSelector(state => state.cartSideMenuStatus.value)
    const cart_length = useSelector(state => state.cart.length)

    //const Cities_List = useSelector(st)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const profileClickHandler = () => {
        navigate('/userdashbord/profile')
    }
    const addNewPostClick = () => {
        navigate('/new-post')
    }
    const openCartSideMenu = () => {
        dispatch(openCartMenu())
    }

    const citySelectorOpen = () => {
        dispatch(openCityModal())
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
                                    کاپوت من
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
                        <div className="button_01" onClick={openCartSideMenu} >
                            <BsCart3 size={22} />
                            <span className='counter_01'>
                                {cart_length}
                            </span>
                        </div>
                        <div className="button_01 city-selector_01" onClick={citySelectorOpen} >
                            <BsGeoAlt size={22} />
                            <span className={`title_01 ${Cities_List.length != 0 && 'bg-red_01'}`}>
                                {Cities_List.length == 0 ? ' انتخاب شهر' :
                                    Cities_List.length > 1 ? `${Cities_List.length}   تا شهر` : Cities_List[0]
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>

            {cityModalStatus && <CitySelectModal />}
            {cart_sideMenu && <CartSideBar />}

        </>
    )
}

export default Header