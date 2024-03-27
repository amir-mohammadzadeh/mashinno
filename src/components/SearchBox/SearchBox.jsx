import { useRef, useState } from 'react'
import './SearchBox.css' // Code => 15
import { BsArrowRight, BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

// Products Data get from API and set in variable:
const example = new Array(120).fill().map((e, i) => ({ name: 'نام محصول - ' + i }))

const SearchBox = ({ className = '' }) => {
    const orginalData = useRef(example)
    const [results, setResultes] = useState([])
    const Search_Ref = useRef(null)
    const navigate = useNavigate()

    const openResultBox = (value) => {
        if (value) {
            Search_Ref.current.style.setProperty('--display', 'block');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            Search_Ref.current.style.setProperty('--display', 'none');
            document.documentElement.style.overflowY = 'auto';
            Search_Ref.current.children[1].children[0].value = '';
        }
    }
    const inputChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (!searchValue && window.innerWidth >= 768) openResultBox(false)
        else openResultBox(true)
        // setRsultes()
        const pl = orginalData.current.filter(item => item.name.includes(searchValue))
        searchValue ? setResultes(pl) : setResultes([]) ;
    }

    const clickHandler = (payload) => {
        console.log('Cliked on search result => ' + payload)
        openResultBox(false)
        navigate('?search=' + payload)// The link of resulte will add here ...
    }
    return (
        <>
            <div ref={Search_Ref} className={`search-15 ${className}`}>
                <div className="back-icon-15" onClick={() => openResultBox(false)}>
                    <BsArrowRight size={20} />
                </div>
                <div className="search-input-15">

                    <input
                        type="search"
                        placeholder='جستجوی محصولات'
                        onChange={inputChange}
                    />
                    <span className='icon-15 btn-primary btn-animate'>
                        <BsSearch size={'100%'} />
                    </span>
                </div>
                <div className="result-content-15">
                    <div className="hedding-15">
                        {results.length != 0
                            ? <span> {results.length} تا پیدا شد!</span>
                            : <span> موردی یافت نشد </span>
                        }
                    </div>
                    <ul className="">
                        {results.map((res, index) =>
                            <li key={index} onClick={() => clickHandler(res.name)} >
                                {res.name}
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchBox