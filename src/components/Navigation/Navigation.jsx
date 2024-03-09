import React from 'react'
import './Navigation.css'
import NavMenu from './NavMenu/NavMenu'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import { BsCarFront, BsInfoCircle, BsPersonCircle, BsSearch, BsShop } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";

const Navigation = () => {
    
    return (
        <nav className='Navigatiopn_container'>
            <header className='nav-header'>
                <div className="nav-img-content">
                    <img src="/public/logo.webp" alt="Logo" />
                </div>
                <div className="search-box">
                    <input dir='auto' type="search" name="" id="" className='search-input' placeholder='جستجوی محصولات' />
                    <span className='search-icon'>
                        <BsSearch size={20} />
                    </span>
                </div>
                <div className="header-button-group">
                    <div className="header-btn">
                        <BsPersonCircle   />
                        <span className='btn-title'>
                            ورود
                        </span>
                    </div>
                    <div className="header-btn">
                        <BsInfoCircle  />
                    </div>
                    <div className="header-btn">
                        <BsShop  />
                        <span className='cart-couner'>
                            0
                        </span>
                    </div>
                </div>
            </header>

            <div className="navbar-content">
                <ul className='navbar'>
                    <li className="navbar_menu-btn">
                        <a href="" className="nav_link">
                            <TfiMenuAlt size={20} />
                            <span>
                                منوی اصلی
                            </span>
                        </a>
                        <NavMenu  />
                    </li>
                    <li className="">
                        <a href="" className="nav_link">
                            <BsCarFront size={20} />
                            <span>
                                سامانه خودرو
                            </span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="nav_link">
                            <BsCarFront size={20} />
                            <span>
                                خرید آنلاین بیمه نامه
                            </span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="nav_link">
                            <BsShop size={20} />
                            <span>
                                فروشنده شو
                            </span>
                        </a>
                    </li>
                </ul>
                
            </div>
            <MobileNavBar  />
        </nav>
    )
}

export default Navigation