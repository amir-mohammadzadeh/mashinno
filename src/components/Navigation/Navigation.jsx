import React from 'react'
import NavMenu from './NavMenu/NavMenu'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import { BsCarFront, BsInfoCircle, BsShop } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import './Navigation.css' // Code => 02
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
        <nav>
            <div className="container navbar-content">
                <ul className='navbar'>
                    <li className="menu-button_02">
                        <div className="btn btn-primary btn-animate">
                            <TfiMenuAlt size={20} />
                            <span>
                                منوی اصلی
                            </span>
                        </div>
                        <NavMenu />
                    </li>
                    <li className="nav_link_02">
                        <Link to="">
                            <BsCarFront size={20} />
                            <span>
                                سامانه خودرو
                            </span>
                        </Link>
                    </li>
                    <li className="nav_link_02">
                        <Link to="">
                            <BsCarFront size={20} />
                            <span>
                                خرید آنلاین بیمه نامه
                            </span>
                        </Link>
                    </li>
                    <li className="nav_link_02">
                        <Link to="">
                            <BsShop size={20} />
                            <span>
                                فروشنده شو
                            </span>
                        </Link>
                    </li>
                    <li className="nav_link_02">
                        <Link to="">
                            <BsInfoCircle size={20} />
                            <span>
                                درباره ما
                            </span>
                        </Link>
                    </li>
                </ul>

            </div>
            <MobileNavBar />
        </nav>
        </>
    )
}

export default Navigation