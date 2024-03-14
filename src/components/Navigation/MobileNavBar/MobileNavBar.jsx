import React, { useRef, useState } from 'react'
import './MobileNavBar.css' // Cose  23
import SideBar from '../../SideBar/SideBar'
import { BsPersonCircle, BsHouseDoor, BsBasket, BsGrid, BsPlus, BsPlusCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const MobileNavBar = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <>
            <nav className="mobile-navbar_container">
                <ul className="mobile-navbar">
                    <li className="mobile-nav-item">
                        <Link to={'/'}>
                            <span className='icon-23'>
                                <BsHouseDoor />
                            </span>
                            <span className='lab-23'>
                                صفحه اصلی
                            </span>
                        </Link>
                    </li>
                    <li className="mobile-nav-item">
                        <div onClick={() => setOpenSideBar(true)}>
                            <span className="icon-23">
                                <BsGrid />
                            </span>
                            <span className='lab-23'>
                                دسته‌بندی
                            </span>
                        </div>
                    </li>
                    <li className="mobile-nav-item">
                        <div>
                            <span className="icon-23">
                                <BsPlusCircle />
                            </span>
                            <span className='lab-23'>
                                ثبت آگهی
                            </span>
                        </div>
                    </li>
                    <li className="mobile-nav-item">
                        <Link to={''}>
                            <span className="icon-23">
                            <BsBasket />
                            </span>
                            <span className='lab-23'>
                                سبد خرید
                            </span>
                        </Link>
                    </li>
                    <li className="mobile-nav-item">
                        <Link to={''}>
                            <span className="icon-23">
                                <BsPersonCircle />
                            </span>
                            <span className='lab-23'>
                                کاپوت من
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            {openSideBar && <SideBar onClose={() => setOpenSideBar(false)} />}

        </>
    )
}

export default MobileNavBar