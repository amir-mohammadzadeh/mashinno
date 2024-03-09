import React, { useState } from 'react'
import './MobileNavBar.css'
import SideBar from '../../SideBar/SideBar'
import { BsPersonCircle, BsHouseDoor, BsBasket, BsGrid } from "react-icons/bs";


const MobileNavBar = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <>
            <nav className="mobile-navbar_container">
                <ul className="mobile-navbar">
                    <li className="mobile-nav-item">
                        <a href="">
                            <BsHouseDoor />
                        </a>
                    </li>
                    <li className="mobile-nav-item">
                        <span onClick={() => setOpenSideBar(true)}>
                            <BsGrid />
                        </span>
                    </li>
                    <li className="mobile-nav-item">
                        <a href="">
                            <BsBasket />
                        </a>
                    </li>
                    <li className="mobile-nav-item">
                        <a href="">
                            <BsPersonCircle />
                        </a>
                    </li>
                </ul>
            </nav>
            {openSideBar && <SideBar onClose={() => setOpenSideBar(false)} />}

        </>
    )
}

export default MobileNavBar