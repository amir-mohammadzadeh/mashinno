import React, { useState } from 'react'
import './Selection.css' // Code =>  1
import { BsChevronDown } from 'react-icons/bs'
import useOutsideClick from '../../Hook/useOutsideClick'

const Selection = ({ optionList, onSelect, label,value, menuHeight = 'auto', className = '' }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const menu_ref = useOutsideClick(setOpenMenu)

    const MENU_SETTINGS = {
        maxHeight: menuHeight
    }
    const selectHandler = (payload) => {
        setOpenMenu(false)
        onSelect(payload)
    }

    return (
        <>
            <div className={`selection-wrapper-1 ${className}`}>
                <div className="selection-head-1" onClick={() => setOpenMenu(!openMenu)} >
                    <span>
                        {value|| label}
                    </span>
                    <span className="icon-1">
                        <BsChevronDown />
                    </span>
                </div>
                {openMenu &&
                    <div ref={menu_ref} className="menu-1" style={MENU_SETTINGS}>
                        <ul className="options-1">
                            <li className="option-1" onClick={() => selectHandler(null)}>
                                {label}
                            </li>
                            {optionList.map((item, index) =>
                                <li key={index} className="option-1" onClick={() => selectHandler(item)}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Selection