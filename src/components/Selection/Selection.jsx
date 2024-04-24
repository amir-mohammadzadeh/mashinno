import { useState } from 'react'
import './Selection.css' // Code => 06
import { BsChevronRight } from 'react-icons/bs'
import useOutsideClick from '../../Hook/useOutsideClick'

const Selection = ({ optionList, onSelect, label, firstValue, value, error, children, menuHeight, className = '' }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const menu_ref = useOutsideClick(setOpenMenu)

    const SELECTION_SETTINGS = {
        '--border-color': error ? 'var(--red-700)' : 'var(--gray-300)',
        '--menu-max-height': menuHeight || 'auto',
        zIndex: openMenu ? '20' : '5',
    }
    const selectHandler = (payload) => {
        setOpenMenu(false)
        onSelect(payload)
    }

    return (
        <>
            <div className={`selection-wrapper-1 ${className}`} style={SELECTION_SETTINGS} >
                {label &&
                    <span className="label-1">
                        {label}
                    </span>
                }
                <div className="selection-head-1" onClick={() => setOpenMenu(!openMenu)} >
                    <span>
                        {value || firstValue}
                    </span>
                    <span className="icon-1">
                        <BsChevronRight />
                    </span>
                </div>
                {openMenu &&
                    <div ref={menu_ref} className="menu-1">
                        <ul className="options-1">
                            <li className="option-1" onClick={() => selectHandler(null)}>
                                {firstValue}
                            </li>
                            {optionList.map((item, index) =>
                                <li key={index} className="option-1" onClick={() => selectHandler(item)}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                }
                {error && !openMenu &&
                    <div className="error-1">
                        {error}
                    </div>
                }
            </div>
        </>
    )
}

export default Selection