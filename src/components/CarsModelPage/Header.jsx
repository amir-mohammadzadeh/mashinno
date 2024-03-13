import { BsCheck2Circle } from 'react-icons/bs'
import './Header.css' // Code  => 34

const Header = ({optionsList , onSelect, value}) => {
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
                                className={value == "All" ? "filter-item-34 active-filter-34" : "filter-item-34"}
                                onClick={() => onSelect('All')}
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
                                    className={value == option ? "filter-item-34 active-filter-34" : "filter-item-34"}
                                    onClick={() => onSelect(option)}
                                >
                                    <span className="filter-icon-34">
                                        <BsCheck2Circle size={'100%'} />
                                    </span>
                                    <span>
                                        سری الف {option}
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