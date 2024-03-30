import React from 'react'
import './ProductCard.css' // Code =>31
import { useNavigate } from 'react-router-dom'
import { LikeButton } from '../../ToggleButtons/ToggleButtons'
import { useSeparate } from '../../../Hook/useNumbers'


const ProductCard = ({ noChange = false }) => {
    let count = 1; // اگر موجودی محصول 0 باشد به جای قیمت، عبارت " ناموجود " نمایش داده میشود 
    const Product_Price = useSeparate('1230000',',') // => قیمت محصول را دریافت و ۳ رقم ۳ رقم جدا کرده و به فارسی بر میگرداند
    const navigate = useNavigate()
    const cardClick = (e) => {
        navigate('/product-detailes/2', { preventScrollReset: true, state: 'test' })
    }
    const onBookmark = (event, payload) => {
        event.stopPropagation()
        // if payload is true => this product can added to bookmarks or favorites 
        console.log(payload)
    }
    
    return (
        <div className={`product-card_31 ${!noChange && 'card-R-1'}`} onClick={cardClick}>

            <LikeButton className='icon_31' type='bookmark' onClick={onBookmark} />

            <div className={`product-image_31 ${!noChange && 'card-R-2'}`}>
                <img src="/public/Images/no-image.webp" alt="" />
            </div>
            <div className="card-body_31">
                <span className="card-title_31">
                    عنوان محصول
                </span>
                <div className="price_31">
                    {count == 0 ? <span> ناموجود </span>
                        : <>
                            {Product_Price}
                            <span>
                                تومان
                            </span>
                        </>}
                </div>
            </div>

        </div>
    )
}

export default ProductCard