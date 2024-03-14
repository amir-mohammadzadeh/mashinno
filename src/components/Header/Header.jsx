import React from 'react'
import './Header.css' // Code 01
import { BsCart3, BsInfoCircle, BsPersonCircle, BsSearch, BsShop } from "react-icons/bs";
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    const inputFocusHandler = () => {
        window.innerWidth <= 992 && console.log('Search input is onFocus...')
    }

    return (
        <>
            <header className='Header-01'>
                <div className="container header_container">

                    <div className="header-logo-01">
                        <Link to='/' >
                            <img src="/public/logo.webp" alt="Logo" />
                        </Link>
                    </div>
                    <div className="search-box">


                        <input type="search" className='search-input' placeholder='جستجوی محصولات' onFocus={inputFocusHandler} />
                        <span className='search-icon btn-primary'>
                            <BsSearch size={20} />
                        </span>

                    </div>
                    <div className="header-button-group">
                        <div className="header-btn-01">
                            <BsPersonCircle size={22} />
                            <span className='title'>
                                ورود
                            </span>
                        </div>
                        <div className="header-btn-01">
                            <BsInfoCircle size={22} />
                        </div>
                        <div className="header-btn-01">
                            <BsCart3 size={22} />
                            <span className='cart-couner'>
                                0
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