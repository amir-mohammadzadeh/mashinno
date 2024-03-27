import React, { useEffect, useState } from 'react'
import './ImageGallery.css' // Code => 51
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const ImageGallery = ({ productName, imageList, className, onImgClick=undefined }) => {
    const [currentImage, setCurrentImage] = useState(imageList[0])

    const changeImg = (n) => {
        const current_index = imageList.indexOf(currentImage)
        if (current_index + n < 0) {
            setCurrentImage(imageList[imageList.length - 1])
        } else if (current_index + n > imageList.length - 1) {
            setCurrentImage(imageList[0])
        } else {
            setCurrentImage(imageList[current_index + n])
        }
    }

    const onSelectImg = (imgURL) => {
        setCurrentImage(imgURL)
    }

    return (
        <>
            <div className={className} >
                <div className={"img-slider-51 "}>
                    <div onClick={onImgClick} >
                        <img src={currentImage} alt={productName} />
                    </div>

                    <div className="next-arrow-51" onClick={() => changeImg(1)} >
                        <BsChevronLeft size={'100%'} />
                    </div>
                    <div className="prevent-arrow-51" onClick={() => changeImg(-1)} >
                        <BsChevronRight size={'100%'} />
                    </div>
                </div>

                <div className="img-content-51">
                    {imageList.map((img, index) =>
                        <div
                            key={index}
                            className={currentImage == img ? "gallery-item-51 selected-img-51" : "gallery-item-51"}
                            onClick={() => onSelectImg(img)}
                        >
                            <img src={img} alt={productName + ' _ ' + index} />
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}


function Next({ onClick }) {
    return (
        <div className="custom-next-arrow-51" onClick={onClick}>
            <BsChevronRight size={'100%'} />
        </div>
    )
}
function Prevent({ onClick }) {
    return (
        <div className="custom-prevent-arrow-51" onClick={onClick}>
            <BsChevronLeft size={'100%'} />
        </div>
    )
}