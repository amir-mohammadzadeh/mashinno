import React from 'react'
import './ProductCard.css'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const ProductCard = () => {
    const navigate = useNavigate()
    const cardClick = (e) => {
        if (e.target.tagName == 'svg' || e.target.className == 'icon-46') {
          console.log('icon')
        } else {
          console.log('carrd')
          //navigate('/product/ProductID')
        }
      }
    return (
        <div className="product-card-46" onClick={cardClick}>
            <div className="icon-46" >
                <BsBookmarkHeart size={25} />
            </div>
            <div className="product-image-46">
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