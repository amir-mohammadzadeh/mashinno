import React from 'react'
import './Banner.css'
import './Slider.css'
import SliderContent from '../Slider/SliderContent';



const Banner = () => {

    return (
        <div className='banner_container'>
            <header className='banner-header'>
                <a href="" className='banner-header_link'>
                    <img src="/public/Images/header-story_1.webp" alt="" />
                    <span>
                        ایزی پی
                    </span>
                </a>
                <a href="" className='banner-header_link'>
                    <img src="/public/Images/header-story_2.webp" alt="" />
                    <span>
                        تالی
                    </span>
                </a>
                <a href="" className='banner-header_link'>
                    <img src="/public/Images/header-story_3.webp" alt="" />
                    <span>
                        تارا
                    </span>
                </a>
            </header>

            <div className="sliders-content">


                <div className="slider-2">
                    <SliderContent arrow={false} >
                        <div className="">
                            <h1>Card 1</h1>
                        </div>
                        <div className="">
                            <h1>Card 2</h1>
                        </div>
                        <div className="">
                            <h1>Card 3</h1>
                        </div>
                    </SliderContent>
                </div>

                <div className="slider-wrapper">
                    <SliderContent fade={true}  >
                        <div className='img-c'>
                            <a href="">
                                <img src="/public/Banners/baner_1.webp" alt="" />
                            </a>
                        </div>
                        <div className='img-c'>
                            <a href="">
                                <img src="/public/Banners/baner_2.webp" alt="" />
                            </a>
                        </div>
                        <div className='img-c'>
                            <a href="">
                                <img src="/public/Banners/baner_3.webp" alt="" />
                            </a>
                        </div>
                        <div className='img-c'>
                            <a href="">
                                <img src="/public/Banners/baner_4.webp" alt="" />
                            </a>
                        </div>
                    </SliderContent>
                </div>
            </div>
        </div>
    )
}

export default Banner
