import React, { useState } from 'react'
import './MobileNavBar.css' // Cose  23
import SideBar from '../../SideBar/SideBar'
import { BsPersonCircle, BsHouseDoor, BsBasket, BsGrid, BsPlus, BsPlusCircle } from "react-icons/bs";


const MobileNavBar = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <>
            <nav className="mobile-navbar_container">
                <ul className="mobile-navbar">
                    <li className="mobile-nav-item">
                        <a href="">
                            <span className='icon-23'>
                                <BsHouseDoor />
                            </span>
                            <span className='lab-23'>
                                صفحه اصلی
                            </span>
                        </a>
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
                        <a href="">
                            <span className="icon-23">
                            <BsBasket />
                            </span>
                            <span className='lab-23'>
                                سبد خرید
                            </span>
                        </a>
                    </li>
                    <li className="mobile-nav-item">
                        <a href="">
                            <span className="icon-23">
                                <BsPersonCircle />
                            </span>
                            <span className='lab-23'>
                                کاپوت من
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            {openSideBar && <SideBar onClose={() => setOpenSideBar(false)} />}

        </>
    )
}

export default MobileNavBar