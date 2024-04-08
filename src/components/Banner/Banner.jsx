import React from 'react'
import './Banner.css' // Code => 12
import SliderContent from '../Slider/SliderContent';
import SliderCard from '../SliderCard/SliderCard';
import { NextArrow, PrevArrow } from './SliderCustomArrow';



const Banner = () => {

    const BannerSlider_Settings = {
        className: 'banner-slider-21',
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    }

    return (
        <div className='container sliders-holder_12'>

            <div className="pruducts-slider_12">
                <SliderContent setting={{ arrows: false }} >
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                </SliderContent>
            </div>

            <div className="banner-slider_12">
                <SliderContent setting={BannerSlider_Settings}  >
                    <div className='banner-image_12'>
                        <a href="">
                            <img src="/public/Banners/baner_1.webp" alt="" />
                        </a>
                    </div>
                    <div className='banner-image_12'>
                        <a href="">
                            <img src="/public/Banners/baner_2.webp" alt="" />
                        </a>
                    </div>
                    <div className='banner-image_12'>
                        <a href="">
                            <img src="/public/Banners/baner_3.webp" alt="" />
                        </a>
                    </div>
                    <div className='banner-image_12'>
                        <a href="">
                            <img src="/public/Banners/baner_4.webp" alt="" />
                        </a>
                    </div>
                </SliderContent>
            </div>
        </div>

    )
}

export default Banner
