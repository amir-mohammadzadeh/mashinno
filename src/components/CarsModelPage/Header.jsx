import { BsCheck2Circle } from 'react-icons/bs'
import './Header.css' // Code  => 34
import { useRef, useState } from 'react'

const Header = ({ listOfCars, updateList }) => {
    //const orginal_Data = useRef(listOfCars)
    const [orginal_Data , setd] = useState(listOfCars)
    const optionsList = Array.from(new Set(orginal_Data.map(car => car.category)))
    const [filter, setFilter] = useState('All')

    const onChange = (filterValue) => {
        filterValue == "All" ?
            updateList(orginal_Data)
            : updateList(orginal_Data.filter(car => car.category != filterValue));
        setFilter(filterValue)
    }

    return (
        <>
            <header className="Header-34">
                <div className="container header-content-34">

                    <div className="header-title-34">
                        <span className='h4'>
                            مدل های خودرو
                        </span>
                        <span>
                            بر روی مدل خودروی خود کلیک کنید
                        </span>
                    </div>
                    <div className="header-body">
                        <ul className="filters-34">
                            <li
                                className={filter == "All" ? "filter-item-34 active-filter-34" : "filter-item-34"}
                                onClick={() => onChange('All')}
                            >
                                <span className="filter-icon-34">
                                    <BsCheck2Circle size={'100%'} />
                                </span>
                                <span>
                                    همه خودروها
                                </span>
                            </li>
                            {optionsList.map(option =>
                                <li
                                    key={option}
                                    className={filter == option ? "filter-item-34 active-filter-34" : "filter-item-34"}
                                    onClick={() => onChange(option)}
                                >
                                    <span className="filter-icon-34">
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