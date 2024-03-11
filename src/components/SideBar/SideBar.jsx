import React, { useRef } from 'react'
import './SideBar.css' // Code => 12
import { BsChevronLeft, } from 'react-icons/bs'
import SubMenu from './SubMenu'
import ModalContainer from '../../ModalContainer/ModalContainer'


const SideBar = ({ onClose }) => {
    const SUBMENU_VALUES = n => Array.from(Array(n).keys())

    const sidebar_ref = useRef(null)

    const openDropDown = (event) => {
        event.target.classList.toggle('open-dropdown-12')
    }
    const outSideClickHandler = (e) => {
        if (e.target != sidebar_ref.current && !sidebar_ref.current.contains(e.target)) {
            onClose()
        }
    }

    return (
        <ModalContainer onClick={outSideClickHandler} >

            <aside ref={sidebar_ref} className="sidebar_container">
                <header>
                    <div className="sidebar-close-12">
                        <span>
                            فروشگاه اینترنتی کاپوت
                        </span>
                        <span className="close-icon-12" onClick={onClose}>
                            &#10005;
                        </span>
                    </div>
                    <div className="sidebar-image-12">
                        <img src="/public/logo.webp" alt="" />
                    </div>
                </header>
                <div>
                    <ul className="sidebar-menu-12">
                        <li onClick={openDropDown}>
                            <div className="sidebar-dropdown-12">
                                برند خودرو
                                <span className="icon-12">
                                    <BsChevronLeft />
                                </span>
                            </div>
                            <SubMenu valueList={SUBMENU_VALUES(10)} onClick={onClose} />

                        </li>
                        <li onClick={openDropDown}>
                            <div className="sidebar-dropdown-12">
                                آیتم 2
                                <span className="icon-12">
                                    <BsChevronLeft />
                                </span>
                            </div>
                            <SubMenu valueList={SUBMENU_VALUES(3)} onClick={onClose} />

                        </li>
                        <li onClick={openDropDown}>
                            <div className="sidebar-dropdown-12">
                                آیتم 3
                                <span className="icon-12">
                                    <BsChevronLeft />
                                </span>
                            </div>
                            <SubMenu valueList={SUBMENU_VALUES(6)} onClick={onClose} />
                        </li>
                        <li className="sidebar-link-12">
                            <a href="">
                                آیتم 4
                            </a>
                        </li>
                        <li className="sidebar-link-12">
                            <a href="">
                                آیتم 5
                            </a>
                        </li>
                        <li className="sidebar-link-12">
                            <a href="">
                                آیتم 6
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

        </ModalContainer>
    )
}

export default SideBar
