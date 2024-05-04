import { useEffect, useState } from 'react'
import './Selection.css' // Code => 06
import { BsChevronRight } from 'react-icons/bs'
import useOutsideClick from '../../Hook/useOutsideClick'
import { Input } from '../Inputs/Inputs'

const Selection = ({ optionList, onSelect, label, firstValue, value, error, children, menuHeight, searchArea = false, className = '' }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [menuItems, setMenuItems] = useState(optionList)
    const menu_ref = useOutsideClick(setOpenMenu)

    const SELECTION_SETTINGS = {
        '--border-color': error ? 'var(--red-700)' : 'var(--gray-300)',
        '--menu-max-height': menuHeight || 'auto',
        zIndex: openMenu ? '20' : '5',
    }
    
    useEffect(()=>{
        setMenuItems(optionList)
    },[openMenu])

    const selectHandler = (payload) => {
        setOpenMenu(false)
        onSelect(payload)
    }
    const onSearch = (e) => {
        const text = e.target.value
        setMenuItems(optionList.filter(i => i.includes(text)))
    }

    return (<>
        <div className={`selection-wrapper_06 ${className}`} style={SELECTION_SETTINGS} >
            {label &&
                <span className="label_06">
                    {label}
                </span>
            }
            <div className="selection-head_06" onClick={() => setOpenMenu(!openMenu)} >
                <span>
                    {value || firstValue}
                </span>
                <span className="icon_06">
                    <BsChevronRight />
                </span>
            </div>
            {openMenu &&
                <div ref={menu_ref} className="menu_06">
                    {searchArea &&
                        <div className="search-box_06">
                            <Input
                                className="search-input_06"
                                helpText='جستجو...'
                                type='search'
                                onChange={onSearch}
                            />
                        </div>
                    }
                    <ul className="options_06">
                        <li className="option_06" onClick={() => selectHandler(null)}>
                            {firstValue}
                        </li>
                        {menuItems.map((item, index) =>
                            <li key={index} className="option_06" onClick={() => selectHandler(item)}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            }
            {error && !openMenu &&
                <div className="error_06">
                    {error}
                </div>
            }
        </div>
    </>)
}

export default Selection