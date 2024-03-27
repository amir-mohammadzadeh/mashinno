import React from 'react'
import './Header.css' // Code 01
import { BsCart3, BsGeoAlt, BsPersonCheckFill, BsPersonCircle } from "react-icons/bs";
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector } from 'react-redux';

const Header = () => {
    const [name, isLogin] = useSelector((state) => [`${state.userInfo.name} ${state.userInfo.lastName}`, state.userInfo.isLogin])
    return (
        <>
            <header className='Header-01'>
                <div className="container header_container">

                    <div className="header-logo-01">
                        <Link to='/' >
                            <img src="/public/logo.webp" alt="Logo" />
                        </Link>
                    </div>

                    <SearchBox className='search-box-01' />

                    <div className="header-button-group">
                        <div className="header-btn-01">
                            {isLogin ? <>
                                <BsPersonCheckFill size={22} />
                                <span className='title'>
                                    {name}
                                </span>

                            </> : <>
                                <BsPersonCircle size={22} />
                                <span className='title'>
                                    ورود
                                </span>
                            </>}

                        </div>

                        <div className="header-btn-01">
                            <BsCart3 size={22} />
                            <span className='cart-couner'>
                                0
                            </span>
                        </div>
                        <div className="header-btn-01">
                            <BsGeoAlt size={22} />
                            <span className='title'>
                                انتخاب شهر
                            </span>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>
        </>
    )
}

export default Header