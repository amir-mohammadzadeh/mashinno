import React from 'react'
import NavMenu from './NavMenu/NavMenu'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import { BsCarFront, BsInfoCircle, BsShop } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
        <nav>
            <div className="navbar-content">
                <ul className='navbar'>
                    <li className="navbar_menu-btn">
                        <div className="nav_link btn-primary btn-animate">
                            <TfiMenuAlt size={20} />
                            <span>
                                منوی اصلی
                            </span>
                        </div>
                        <NavMenu />
                    </li>
                    <li className="">
                        <Link to="" className="nav_link">
                            <BsCarFront size={20} />
                            <span>
                                سامانه خودرو
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="" className="nav_link">
                            <BsCarFront size={20} />
                            <span>
                                خرید آنلاین بیمه نامه
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="" className="nav_link">
                            <BsShop size={20} />
                            <span>
                                فروشنده شو
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="" className="nav_link">
                            <BsInfoCircle size={20} />
                            <span>
                                دباره ما
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