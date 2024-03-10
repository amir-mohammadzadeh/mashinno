import React from 'react'
import './Header.css'
import { BsCart3, BsInfoCircle, BsPersonCircle, BsSearch, BsShop } from "react-icons/bs";

const Header = () => {
    const inputFocusHandler = () => {
        window.innerWidth <= 992 && console.log('Search input is onFocus...')
    }

    return (
        <>
            <header className='nav-header'>
                <div className="nav-img-content">
                    <img src="/public/logo.webp" alt="Logo" />
                </div>
                <div className="search-box">
                    <input type="search" className='search-input' placeholder='جستجوی محصولات' onFocus={inputFocusHandler} />
                    <span className='search-icon btn-primary'>
                        <BsSearch size={20} />
                    </span>
                </div>
                <div className="header-button-group">
                    <div className="header-btn">
                        <BsPersonCircle size={22} />
                        <span className='title'>
                            ورود
                        </span>
                    </div>
                    <div className="header-btn">
                        <BsInfoCircle size={22} />
                    </div>
                    <div className="header-btn">
                        <BsCart3 size={22} />
                        <span className='cart-couner'>
                            0
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header