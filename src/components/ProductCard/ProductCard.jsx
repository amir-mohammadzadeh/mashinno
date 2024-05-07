import React from 'react'
import './ProductCard.css' // Code =>31
import { useNavigate } from 'react-router-dom'
import { LikeButton } from '../ToggleButtons/ToggleButtons'
import { useSeparate } from '../../Hook/useNumbers'
import { useDispatch } from 'react-redux'
import { addUserFavorites, removeUserFavorites } from '../../redux/UserReducer/userSlice'


const ProductCard = ({ id, userID, title, price, noChange = false }) => {
    const Product_Price = useSeparate(price, ',') // => قیمت محصول را دریافت و ۳ رقم ۳ رقم جدا کرده و به فارسی بر میگرداند
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const cardClick = (id) => {
        navigate(`/pd/${id}`)
    }

    const onBookmark = (event, payload) => {
        event.stopPropagation()
        payload ? dispatch(addUserFavorites(id)) : dispatch(removeUserFavorites(id));
    }

    return (
        <div className={`card product-card_31 ${!noChange && 'card-R-1'}`} onClick={() => cardClick(id)}>

            <LikeButton className='icon_31' type='bookmark' onClick={onBookmark} />

            <div className={`product-image_31 ${!noChange && 'card-R-2'}`}>
                <img src="/Images/no-image.webp" alt="" />
            </div>
            <div className="card-body_31">
                <span className="card-title_31 line-limit-2">
                    {title}
                </span>
                <span className="store-name_31" >
                    فروشگاه فلان
                </span>
                <div className="price_31">
                    {Product_Price}
                    <span>
                        تومان
                    </span>
                </div>
            </div>
            <div className="off-content_31">
                30%
            </div>
        </div>
    )
}

export default ProductCard