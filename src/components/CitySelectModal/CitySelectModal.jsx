import { useRef, useState } from 'react'
import ModalContainer from '../../ModalContainer/ModalContainer'
import './CitySelectModal.css' // Code => 07
import { BsChevronLeft } from 'react-icons/bs'
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json'
import { useDispatch, useSelector } from 'react-redux'
import { setCitiesList } from '../../redux/CityReducer/CitySlice'
import { useOutClicker } from '../../Hook/useOutsideClick'

const CitySelectModal = ({ closeAction }) => {
    const [modal_ref, outClicker] = useOutClicker(closeHandler)
    const dispatch = useDispatch()
    const Provinces_Cities_list = useRef(ProvincesCities)
    const Cities_List = useSelector(state => state.citiesList)
    const [selectList, setSelectList] = useState(Cities_List)

    const openDropDown = (e) => {
        e.currentTarget.parentElement.classList.toggle('active-item_07')
    }

    const selectCity = (e) => {
        e.target.checked ?
            setSelectList(prevent => [...prevent, e.target.name])
            : removeSelection(e.target.name)
    }

    const selectCityAll = (e, ostanID) => {
        let ostan = Provinces_Cities_list.current.find(i => i.id == ostanID)
        e.target.checked ?
            setSelectList([...ostan.cities])
            : setSelectList(selectList.filter(i => !ostan.cities.includes(i)))
    }

    const removeSelection = (item) => {
        item == 'all' ? setSelectList([])
            : setSelectList(selectList.filter(i => i != item))
    }

    const confirmSelection = () => {
        dispatch(setCitiesList(selectList))
        closeHandler()
    }
    
    function closeHandler() {
        setTimeout(() => closeAction(false), 310)
        modal_ref.current.classList.toggle('close-it_07')
    }

    return (
        <>
            <ModalContainer onClick={outClicker}>
                <div ref={modal_ref} className="modal_07">
                    <div className="modal-header">
                        <span className="h5">
                            انتخاب شهر
                        </span>
                        <div>
                            {selectList.length == 0 ?
                                <span className="empty-list_07">
                                    حداقل یک شهر انتخاب کنید
                                </span>
                                :
                                <ul className="select-list_07">
                                    {selectList.slice(0, 3).map((item, idx) =>

                                        <li key={idx} className="selected-item_07">
                                            <span>
                                                {item}
                                            </span>
                                            <span className="remove-icon_07" onClick={() => removeSelection(item)}>
                                                &#10006;
                                            </span>
                                        </li>

                                    )}
                                    {selectList.length > 3 &&
                                        <li className="selected-item_07">
                                            <span>
                                                و {selectList.length - 3} شهر دیگر
                                            </span>
                                            <span className="remove-icon_07" onClick={() => removeSelection('all')}>
                                                &#10006;
                                            </span>
                                        </li>
                                    }

                                </ul>
                            }
                        </div>
                    </div>
                    <div className="modal-containert_07">
                        <ul className="list-ostanha_07">
                            {Provinces_Cities_list.current.map(item =>
                                <li key={item.id}>
                                    <div className="ostan-item_07" onClick={openDropDown}>
                                        <span> {item.ostan} </span>
                                        <span className="arrow-icon_07"> <BsChevronLeft /> </span>
                                    </div>

                                    <ul className="list-shahrha_07">
                                        <li className="city-item_07">
                                            <input type="checkbox" name="all" id={`check_AC${item.id}`} checked={item.cities.every(i => selectList.includes(i))} onChange={(e) => selectCityAll(e, item.id)} />
                                            <label htmlFor={`check_AC${item.id}`}> همه شهر‌های {item.ostan} </label>
                                        </li>
                                        {item.cities.map((city, idx) =>
                                            <li key={idx} className="city-item_07">
                                                <input type="checkbox" name={city} id={`check_C${idx}${item.id}`} checked={selectList.includes(city) ? true : false} onChange={selectCity} />
                                                <label htmlFor={`check_C${idx}${item.id}`}> {city} </label>
                                            </li>
                                        )}

                                    </ul>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="modal-buttons_07">
                        <button className="btn btn-animate ok-btn_07" onClick={confirmSelection} >
                            تایید
                        </button>
                        <button className="btn cancel-btn_07" onClick={closeHandler}>
                            انصراف
                        </button>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default CitySelectModal