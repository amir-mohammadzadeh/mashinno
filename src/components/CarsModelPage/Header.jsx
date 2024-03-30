import { BsCheck2Circle } from 'react-icons/bs'
import './Header.css' // Code  => 24
import { useRef, useState } from 'react'

const Header = ({ listOfCars, updateList }) => {
    //const orginal_Data = useRef(listOfCars)
    const [orginal_Data , setd] = useState(listOfCars)
    const optionsList = Array.from(new Set(orginal_Data.map(car => car.category)))
    const [filter, setFilter] = useState('All')

    const onChange = (filterValue) => {
        filterValue == "All" ?
            updateList(orginal_Data)
            : updateList(orginal_Data.filter(car => car.category == filterValue));
        setFilter(filterValue)
    }

    return (
        <>
            <header className="Header_24">
                <div className="container header-content_24">

                    <div className="header-title_24">
                        <span className='h4'>
                            مدل های خودرو
                        </span>
                        <span>
                            بر روی مدل خودروی خود کلیک کنید
                        </span>
                    </div>
                    <div className="header-body">
                        <ul className="filters_24">
                            <li
                                className={filter == "All" ? "filter-item_24 active-filter_24" : "filter-item_24"}
                                onClick={() => onChange('All')}
                            >
                                <span className="filter-icon_24">
                                    <BsCheck2Circle size={'100%'} />
                                </span>
                                <span>
                                    همه خودروها
                                </span>
                            </li>
                            {optionsList.map(option =>
                                <li
                                    key={option}
                                    className={filter == option ? "filter-item_24 active-filter_24" : "filter-item_24"}
                                    onClick={() => onChange(option)}
                                >
                                    <span className="filter-icon_24">
                                        <BsCheck2Circle size={'100%'} />
                                    </span>
                                    <span>
                                        {option}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header