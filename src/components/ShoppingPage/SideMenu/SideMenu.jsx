import './SideMenu.css' // Code => 32
import { BsChevronLeft, BsXLg } from 'react-icons/bs'
import { useOutClicker } from '../../../Hook/useOutsideClick'
import { useEffect, useState } from 'react'
import { useSeparate } from '../../../Hook/useNumbers'

const SideMenu = ({ valueList, openSideMenu, closeAction, onSelect }) => {
    const separate = useSeparate
    const [openPriceRange, setPriceRange] = useState(false)
    const [priceRangeFilter, setPriceRangeFilter] = useState({ min: '', max: '' })
    const [elem_ref, outSideClickHandler] = useOutClicker(closeAction) //=> Custom Hook to close menu
    useEffect(() => {
        openSideMenu
            ? document.documentElement.style.overflowY = "hidden"
            : document.documentElement.style.overflowY = "auto";
    }, [openSideMenu])

    const priceRangeChange = (e) => {
        const [name, value] = [e.target.name, e.target.value]
        setPriceRangeFilter(prevent => ({ ...prevent, [name]: value }) )
    }

    const priceFilterHandler = () => {
        setPriceRange(false)
    }

    return (
        <>
            <div className={`sidemenu_container_32 ${openSideMenu && 'open-sidemenu_32'}`} onClick={outSideClickHandler}>
            </div>
            <div ref={elem_ref} className="sidemenu_32 no-scrollbar">

                <header className="sideMenu-header_32">
                    <span>
                        فیلترها
                    </span>
                    <span onClick={() => closeAction(false)}>
                        <BsXLg cursor='pointer' />
                    </span>
                </header>
                <div className="price-range_32">
                    <span className="range-label_32" onClick={() => setPriceRange(!openPriceRange)}>
                        قیمت
                        <span className={openPriceRange ? 'rang-icon-down' : ''} > <BsChevronLeft /> </span>
                    </span>
                    {openPriceRange &&
                        <div className="rang-content_32">
                            <input type="number" name='min' value={priceRangeFilter.min} onChange={priceRangeChange} placeholder='حداقل قیمت' />
                            <input type="number" name='max' value={priceRangeFilter.max} onChange={priceRangeChange} placeholder='حداکثر قیمت' />
                            <button className="btn range-btn_32" onClick={priceFilterHandler}>
                                اعمال فیلتر
                            </button>
                        </div>
                    }
                </div>
                <div>
                    <span className="h5">
                        دسته بندی‌ها
                    </span>
                    <ul className="categories_32">

                        {valueList.map(item =>
                            <li key={item.id} className="item_32">
                                <input type="checkbox" id={"check-" + item.id} onChange={() => onSelect(item)} />
                                <label htmlFor={"check-" + item.id}>
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