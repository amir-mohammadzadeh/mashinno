import React from 'react'
import './SliderCustomArrow.css'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

export const NextArrow = ({ onClick }) => {
    return (
        <div className="custom_next-btn" onClick={onClick} >
            <MdArrowForwardIos size={24} />
        </div>
    )
}

export const PrevArrow = ({ onClick }) => {
    return (
        <div className="custom_prev-btn" onClick={onClick}>
            <MdArrowBackIosNew size={24} />
        </div>
    )
}
