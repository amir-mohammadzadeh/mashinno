import React from 'react'
import './Banner.css' // Code => 15
import SliderContent from '../Slider/SliderContent';
import SliderCard from '../SliderCard/SliderCard';
import { NextArrow, PrevArrow } from './SliderCustomArrow';



const Banner = () => {

    const BannerSlider_Settings ={
        className:'banner-slider-21',
        fade:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow  />,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                }
            }
        ]
    }

    return (
        <div className='container my-1'>
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

            <div className="sliders-holder_15">

                <div className="pruducts-slider_15">
                    <SliderContent setting={{arrows:false}} >
                        <SliderCard />
                        <SliderCard />
                        <SliderCard />
                    </SliderContent>
                </div>

                <div className="banner-slider_15">
                    <SliderContent setting={BannerSlider_Settings}  >
                        <div className='banner-image_15'>
                            <a href="">
                                <img src="/public/Banners/baner_1.webp" alt="" />
                            </a>
                        </div>
                        <div className='banner-image_15'>
                            <a href="">
                                <img src="/public/Banners/baner_2.webp" alt="" />
                            </a>
                        </div>
                        <div className='banner-image_15'>
                            <a href="">
                                <img src="/public/Banners/baner_3.webp" alt="" />
                            </a>
                        </div>
                        <div className='banner-image_15'>
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
