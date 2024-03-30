import { useState } from 'react'
import './ImageGallery.css' // Code => 51
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const ImageGallery = ({ productName, imageList, className, onImgClick = undefined }) => {
    const frist_image = imageList.length != 0 ? imageList[0] : '/public/Images/no-image.webp' ;
    const [currentImage, setCurrentImage] = useState(frist_image)

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
                <div className={"img-slider_51 "}>
                    <div onClick={onImgClick} >
                        <img src={currentImage} alt={productName} />
                    </div>

                    <div className="next-arrow_51" onClick={() => changeImg(1)} >
                        <BsChevronLeft size={'100%'} />
                    </div>
                    <div className="prevent-arrow_51" onClick={() => changeImg(-1)} >
                        <BsChevronRight size={'100%'} />
                    </div>
                </div>

                <div className="img-content_51">
                    {imageList.map((img, index) =>
                        <div
                            key={index}
                            className={currentImage == img ? "gallery-item_51 selected-img_51" : "gallery-item_51"}
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