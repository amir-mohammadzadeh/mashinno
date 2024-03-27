import './SideMenu.css' // Code => 45
import { BsXLg } from 'react-icons/bs'
import {  useOutClicker } from '../../../Hook/useOutsideClick'
import { useEffect } from 'react'

const SideMenu = ({ valueList, openSideMenu, closeAction , onSelect }) => {
    const [ elem_ref ,outSideClickHandler] = useOutClicker(closeAction) //=> Custom Hook to close menu
    useEffect(()=>{
        openSideMenu 
        ? document.documentElement.style.overflowY = "hidden"
        : document.documentElement.style.overflowY = "auto"; 
    },[openSideMenu])
    return (
        <>
            <div className={`sidemenu_container-45 ${openSideMenu && 'open-sidemenu-45'}`} onClick={outSideClickHandler}>
            </div>
            <div ref={elem_ref} className="sidemenu-45">

                <header className="sideMenu-header-45">
                    <span>
                        فیلترها
                    </span>
                    <span onClick={() => closeAction(false)}>
                        <BsXLg cursor='pointer' />
                    </span>
                </header>

                <div>
                    <span className="h5">
                        دسته بندی‌ها
                    </span>
                    <ul className="categories-45">

                        {valueList.map(item =>
                            <li key={item.id} className="item-45">
                                <input type="checkbox" id={"check-"+ item.id} onChange={()=>onSelect(item)} />
                                <label htmlFor={"check-"+ item.id}>
                                    {item.title}
                                </label>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default SideMenu