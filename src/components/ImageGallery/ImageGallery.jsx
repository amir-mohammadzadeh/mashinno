import React, { useEffect, useState } from 'react'
import './ImageGallery.css' // Code => 52
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const ImageGallery = ({ imageList, className, border = true }) => {
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
                <div className={"gallery-slider-52 "} style={{ borderWidth: border ? '1px' : '0' }}>

                    <img src={currentImage} alt="" />

                    <div className="next-arrow-52" onClick={() => changeImg(1)} >
                        <BsChevronLeft size={'100%'} />
                    </div>
                    <div className="prevent-arrow-52" onClick={() => changeImg(-1)} >
                        <BsChevronRight size={'100%'} />
                    </div>
                </div>

                <div className="img-content-52" onClick={() => console.log('hgfhf')}>
                    {imageList.map((img, index) =>
                        <div
                            key={index}
                            className={currentImage == img ? "gallery-item-52 selected-img-52" : "gallery-item-52"}
                            onClick={() => onSelectImg(img)}
                        >
                            <img src={img} alt="" />
                        </div>
                    )}


                </div>
            </div>
        </>
    )
}


function Next({ onClick }) {
    return (
        <div className="custom-next-arrow-52" onClick={onClick}>
            <BsChevronRight size={'100%'} />
        </div>
    )
}
function Prevent({ onClick }) {
    return (
        <div className="custom-prevent-arrow-52" onClick={onClick}>
            <BsChevronLeft size={'100%'} />
        </div>
    )
}