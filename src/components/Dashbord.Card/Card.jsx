import React from 'react'
import './Card.css' // Code => .85
import { BsFillShareFill, BsTrash3Fill } from "react-icons/bs";
import useDateGenerator from '../../Hook/useDateGenerator';
import { useSeparate } from '../../Hook/useNumbers';

const Card = ({ postID, noteDate, noteText, className, share = true }) => {
    
    const shareHandel = (e) => {
        e.stopPropagation()
        navigator.share({
            title: 'tilte',
            url: `http://localhost:5173/product-detailes/${postID}`
        })
    }

    const onDelete = (e) => {
        e.stopPropagation()
        console.log('Deleting this card...')
    }

    return (
        <>
            <div className="card card_85">
                <div className="image_85">
                    <img src="/Images/no-image.webp" alt="" />
                </div>
                <div className="body_85">
                    <span className="title_85 line-limit-2">
                        عنوان محصول
                    </span>
                    <span className="date-loc_85">
                        <span> {useDateGenerator("3/29/2024, 11:00:12 AM")}</span>
                        {!noteText &&
                            <span> در {'تبریز'}</span>
                        }
                    </span>
                    {!noteText &&
                        <span className="price_85">
                            {useSeparate('123000')}
                            <span>تومان</span>
                        </span>
                    }

                    {noteText &&
                        <p> {noteText} </p>
                    }
                    
                </div>
                <div className="card-buttons_85">
                    {share &&
                        <span className="icon-btn_85" onClick={shareHandel} >
                            <BsFillShareFill size={'100%'} />
                        </span>
                    }

                    <span className="icon-btn_85" onClick={onDelete} >
                        <BsTrash3Fill size={'100%'} />
                    </span>

                </div>
            </div>
        </>
    )
}

export default Card