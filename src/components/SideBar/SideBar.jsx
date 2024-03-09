import React from 'react'
import './SideBar.css'

const SideBar = ({onClose}) => {

    return (
        <div className="aside-content">
            <aside className="sidebar_container">
                <header>
                    <div className="sidebar-close">
                        <span className="header-title">
                            فروشگاه اینترنتی ماشین نو
                        </span>
                        <span className="close-icon" onClick={onClose}>
                            &#10005;
                        </span>
                    </div>
                    <div className="sidebar-image">
                        <img src="/public/logo.webp" alt="" />
                    </div>
                </header>
                <div className="sidebar_links">
                    <ul className="linkes-content">
                        <li className="sidebar-link sidebar-dropdown">
                            آیتم 1
                            <span className="icon">
                                <i className="bi bi-chevron-left" ></i>
                            </span>
                        </li>
                        <li className="sidebar-link sidebar-dropdown">
                            آیتم 2
                            <span className="icon">
                                <i className="bi bi-chevron-left" ></i>
                            </span>
                        </li>
                        <li className="sidebar-link sidebar-dropdown">
                            آیتم 3
                            <span className="icon">
                                <i className="bi bi-chevron-left" ></i>
                            </span>
                        </li>
                        <li className="sidebar-link">
                            <a href="">
                                آیتم 4
                            </a>
                        </li>
                        <li className="sidebar-link">
                            <a href="">
                                آیتم 5
                            </a>
                        </li>
                        <li className="sidebar-link">
                            <a href="">
                                آیتم 6
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar