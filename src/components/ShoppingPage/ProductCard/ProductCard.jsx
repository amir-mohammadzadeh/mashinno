import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import {LikeButton} from '../../ToggleButtons/ToggleButtons'


const ProductCard = ({ noChange = false }) => {
    const navigate = useNavigate()
    const cardClick = (e) => {
        navigate('/product-detailes/2', { preventScrollReset: true, state: 'test' })
    }
    const onBookmark = (event,payload) => {
        event.stopPropagation()
        // if payload is true => this product can added to bookmarks or favorites 
        console.log(payload)
    }
    return (
        <div className={`product-card-46 ${!noChange && 'card-R-1'}`} onClick={cardClick}>

            <LikeButton className='icon-46' type='bookmark' onClick={onBookmark} />

            <div className={`product-image-46 ${!noChange && 'card-R-2'}`}>
                <img src="/public/Images/no-image.webp" alt="" />
            </div>
            <div className="card-body-46">
                <span className="card-title-46">
                    عنوان محصول
                </span>
                <div className="price-46">
                    ۲۳۰۰۰۰
                    <span>
                        تومان
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ProductCard