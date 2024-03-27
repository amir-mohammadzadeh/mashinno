import React from 'react'
import './SliderCard.css'
import { CardTimer } from './CardTimer'
import { BsArrowLeft, BsStarFill } from 'react-icons/bs'

const SliderCard = () => {
    return (
        <>
            <div className="s-product-card">
                <div className="card-timer">
                    <CardTimer />
                    <div className="timer-progress"></div>
                </div>
                <div className="card-image">
                    <img src="/public/Images/no-image.webp" alt="" />
                </div>
                <div className="card-body">
                    <span className='title'>
                        <a href="">
                            بلبرینگ تسمه‌تایم شاخکدار ام‌وی‌ام
                        </a>
                    </span>
                    <div className="berannd">
                        <small>
                            کاپوت
                        </small>
                        <div className="raitting">
                            <span>
                                (+25)4.1
                            </span>
                            <BsStarFill size={20} />
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <div className="price">
                        <span>
                            120,000 تومان
                        </span>
                        <del>
                            250,000
                        </del>
                    </div>
                    <div className="button btn-primary btn-animate">
                        مشاهده
                        <BsArrowLeft />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderCard