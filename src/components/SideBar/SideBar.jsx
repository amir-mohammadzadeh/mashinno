import React, { useRef } from 'react'
import './SideBar.css' // Code => 12
import { BsChevronLeft, } from 'react-icons/bs'
import SubMenu from './SubMenu'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'
import Data from '../../assets/Data/Brands.json'

//______ Create Fack Data for example ________________
const SUBMENU_VALUES = n => new Array(n).fill().map((e, id) => ({ name: 'زیرمجموعه - ' + id, id }))



const SideBar = ({ onClose }) => {
    const Brands_List = useRef(Data)
    const [sidebar_ref ,outSideClickHandler ] = useOutClicker(onClose)

    const openDropDown = (event) => {
        event.target.classList.toggle('open-dropdown-12')
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
                        <img src="/public/logo.webp" alt="Site Logo" />
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
                            <SubMenu valueList={Brands_List.current} onClick={onClose} />

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
