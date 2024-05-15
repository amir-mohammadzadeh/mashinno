import React from 'react'
import NavMenu from './NavMenu/NavMenu'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import { BsCarFront, BsInfoCircle, BsShop, BsTools } from "react-icons/bs";
import { FaHandHoldingUsd, FaExclamation } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import './Navigation.css' // Code => 02
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <nav>
                <div className="container navbar-content">
                    <div className="menu-button_02">
                        <div className="btn btn-primary btn-animate">
                            <TfiMenuAlt size={20} />
                            <span>
                                منوی اصلی
                            </span>
                        </div>
                        <NavMenu />
                    </div>

                    <NavItemsContent className='navbar_02' />


                </div>
                <MobileNavBar />
            </nav>
        </>
    )
}

export default Navigation

export function NavItemsContent({className}) {
    return (
        <>
            <ul className={className}>
                <li className="nav_link_02">
                    <Link to="">
                        <BsCarFront size={20} />
                        <span>
                            خدمات خودرویی
                        </span>
                    </Link>
                </li>
                <li className="nav_link_02">
                    <Link to="">
                        <FaHandHoldingUsd size={20} />
                        <span>
                            خدمات بیمه
                        </span>
                    </Link>
                </li>
                <li className="nav_link_02">
                    <Link to="/store">
                        <BsShop size={20} />
                        <span>
                            فروشگاه‌ها
                        </span>
                    </Link>
                </li>
                <li className="nav_link_02">
                    <Link to="">
                        <BsTools size={20} />
                        <span>
                            تعمیرگاه‌ها
                        </span>
                    </Link>
                </li>
                <li className="nav_link_02">
                    <Link to="">
                        <span className="snapp-icon_02">
                            <FaExclamation size={'100%'} />
                        </span>
                        <span>
                            اسنپ
                        </span>
                    </Link>
                </li>
                <li className="nav_link_02">
                    <Link to="/about-us">
                        <BsInfoCircle size={20} />
                        <span>
                            درباره ما
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}