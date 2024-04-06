import './Category.css'//____________ Code =>  22
import { FaMoneyBillTrendUp,FaWrench,FaScroll } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Category = ({ valueList, brandName }) => {
    const brand_name = brandName.split(' ').join('_')
    return (
        <>
            <div className="container models-holder_22">
                <ul className="content_22">
                    {valueList.map(car =>
                        <li key={car.id} className="model-item_22">
                            <div className="card_22">
                                <div className="image_22">
                                    <img src="/public/Images/no-image.webp" alt="" />
                                </div>

                                <span>
                                    {car.title} {car.id}
                                </span>
                                <div className="card-btn_22">
                                    
                                    <Link to={`/shop/${brand_name}/${car.title}`}>
                                        <span className='icon'>
                                            <FaWrench />
                                        </span>
                                        مشخصات فنی
                                    </Link>
                                    <Link to={`/shop/${brand_name}/${car.title}`} >
                                        <span className='icon'>
                                            <FaScroll />
                                        </span>
                                        مشاهده قطعات
                                    </Link>
                                </div>

                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Category