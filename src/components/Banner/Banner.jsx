import React from 'react'
import './Banner.css' // Code => 12
import SliderContent from '../Slider/SliderContent';
import SliderCard from '../SliderCard/SliderCard';
import { NextArrow, PrevArrow } from './SliderCustomArrow';

const Exampel_BannerList = new Array(8).fill().map((e, i) => ({ id: `bnr:${i + 1}`, imgURL: `banner-T0${i + 1}.jpg` }))

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
                    {Exampel_BannerList.map(banner =>

                        <div key={banner.id} className='banner-image_12'>
                            <img src={`/Banners/${banner.imgURL}`} alt="فروش قطعات خودرویی کاپوت" />
                        </div>

                    )}

                </SliderContent>
            </div>
        </div>

    )
}

export default Banner