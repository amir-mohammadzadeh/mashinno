import React from 'react'
import './Banner.css' // Code => 21
import SliderContent from '../Slider/SliderContent';
import SliderCard from '../SliderCard/SliderCard';
import { NextArrow, PrevArrow } from './SliderCustomArrow';



const Banner = () => {

    const BannerSlider_Settings ={
        className:'banner-slider-21',
        fade:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow  />,
    }

    return (
        <div className='container'>
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

            <div className="sliders-holder-21">


                <div className="pruducts-slider">
                    <SliderContent setting={{arrows:false}} >
                        <SliderCard />
                        <SliderCard />
                        <SliderCard />
                    </SliderContent>
                </div>

                <div className="banner-slider">
                    <SliderContent setting={BannerSlider_Settings}  >
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
