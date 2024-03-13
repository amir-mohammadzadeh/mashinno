import React from 'react'
import './Category.css'//____________ Code =>  35
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Category = ({ valueList }) => {
   
    return (
        <>
            <div className="container models-holder-35">
                <ul className="content-35">
                    {valueList.map(item =>
                        <li className="model-item-35">
                            <div className="card-35">
                                <div className="image-35">
                                    <img src="/public/Images/no-image.webp" alt="" />
                                </div>
                                <div className="card-body-35">
                                    <span>
                                        {item}
                                    </span>
                                    <div className="card-btn-35">
                                        <Link to={`/shop/5/5`}>
                                            مشاهده
                                            <span className='icon'>
                                                <BsChevronDoubleLeft />
                                            </span>
                                        </Link>
                                    </div>
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