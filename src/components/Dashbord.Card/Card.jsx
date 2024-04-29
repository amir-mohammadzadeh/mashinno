import React from 'react'
import './Card.css' // Code => .85
import { BsFillShareFill, BsTrash3Fill } from "react-icons/bs";
import useDateGenerator from '../../Hook/useDateGenerator';
import { useSeparate } from '../../Hook/useNumbers';
import { useSelector } from 'react-redux';

const Card = ({ postID, noteDate, noteText, className, share = true }) => {
    const Post = useSelector(state => state.posts.find(p => p.id == postID))
    const date = noteDate || Post.creatDate ;
    
    const shareHandel = (e) => {
        e.stopPropagation()
        navigator.share({
            title: 'tilte',
            url: `${window.location.origin}/product-detailes/${postID}`
        })
    }

    const onDelete = (e) => {
        e.stopPropagation()
        console.log('Deleting this card...')
    }

    return (<>
            <div className="card card_85">
                <div className="image_85">
                    <img src="/Images/no-image.webp" alt="" />
                </div>
                <div className="body_85">
                    <span className="title_85 line-limit-2">
                        {Post.title}
                    </span>
                    <span className="date-loc_85">
                        <span> {useDateGenerator(date)}</span> {/*=> 3/29/2024, 11:00:12 AM */}
                        {!noteText &&
                            <span> در {'تبریز'}</span>
                        }
                    </span>
                    {!noteText &&
                        <span className="price_85">
                            {useSeparate(Post.price)}
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
    </>)
}

export default Card