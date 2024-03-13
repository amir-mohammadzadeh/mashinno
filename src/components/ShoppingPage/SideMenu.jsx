import React from 'react'
import './SideMenu.css' // Code => 45

const SideMenu = () => {
    return (
        <aside className="sidemenu-45">
            <span className="h5">
                دسته بندی‌ها
            </span>
            <ul className="categories-45">
                <li className="item-45">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">
                        دسته {1}
                    </label>
                </li>
                <li className="item-45">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">
                        دسته {1}
                    </label>
                </li>
            </ul>
        </aside>
    )
}

export default SideMenu