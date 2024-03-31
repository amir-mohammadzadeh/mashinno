import './Header.css' // Code => 01
import { BsCart3, BsGeoAlt, BsPersonCheckFill, BsPersonCircle } from "react-icons/bs";
import Navigation from '../Navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { closeCartMenu, openCartMenu } from '../../redux/CartReducer/CartSlice';
import ModalContainer from '../../ModalContainer/ModalContainer';
import CartSideBar from '../CartSideBar/CartSideBar';
import { useState } from 'react';

const Header = () => {
    //const [openCartSidebar, setOpenCartSidebar] = useState(false)
    const [name, isLogin,openCartSidebar ] = useSelector((state) =>{
        return [
            `${state.userInfo.name} ${state.userInfo.lastName}`,
             state.userInfo.isLogin,
             state.cartMenuStatus.value
            ]
        })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const profileClickHandler = () => {
        //isLogin ? navigate('userdashbord/'+ userID ) : navigate('/login')
        navigate('/userdashbord' )
    }
    const cartClickHandler = () => {
        console.log('Open Cart....')
        dispatch(openCartMenu())
        
    }
    const citySelectorOpen = () => {
        console.log('Open City selector....')
    }

    return (
        <>
            <header className='Header_01'>
                <div className="container header_container">
                    <div className="header-logo_01">
                        <Link to='/' >
                            <img src="/public/logo.webp" alt="kapoot" />
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
                        <div className="button_01" onClick={cartClickHandler} >
                            <BsCart3 size={22} />
                            <span className='cart-couner_01'>
                                0
                            </span>
                        </div>
                        <div className="button_01 city-selector_01" onClick={citySelectorOpen} >
                            <BsGeoAlt size={22} />
                            <span className='title_01'>
                                انتخاب شهر
                            </span>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>

            {openCartSidebar && <CartSideBar /> }
        
        </>
    )
}

export default Header