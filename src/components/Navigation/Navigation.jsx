import React from 'react'
import NavMenu from './NavMenu/NavMenu'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import { BsCarFront, BsShop } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import Header from '../Header/Header';
import './Navigation.css'

const Navigation = () => {

    return (
        <>
        <nav className='Navigatiopn_container'>
            <Header />

            <div className="navbar-content">
                <ul className='navbar'>
                    <li className="navbar_menu-btn">
                        <div className="nav_link btn-primary">
                            <TfiMenuAlt size={20} />
                            <span>
                                منوی اصلی
                            </span>
                        </div>
                        <NavMenu />
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
            <MobileNavBar />
        </nav>
        </>
    )
}

export default Navigation