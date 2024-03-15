import React from 'react'
import './ProductDetailesPage.css'  //  Code =>  51
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import ModalContainer from '../../ModalContainer/ModalContainer'

const exampel_imageList = new Array(10).fill().map((e,i)=>'/public/Images/no-image.webp' )

const ProductDetailesPage = () => {
    console.log(exampel_imageList)
    return (
        <>
        <main className="container ">

            <div className="product-detailes-51">
                <ImageGallery className='img-gallery-51' imageList={exampel_imageList} />
                <div className="product-content-51">
                    <div className="title-51">
                        <h3>
                            عنوان محصول
                        </h3>
                        <div className="car-info-51">
                            <span>  خودروی </span>
                            کیا
                            <span>  مدل </span>
                            فلان 
                        </div>
                    </div>
                </div>
            </div>
       </main>

        
       
        </>
    )
}

export default ProductDetailesPage