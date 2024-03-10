import React from 'react'
import './WeblogSection.css' // Code -33
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsGrid } from 'react-icons/bs'
import SliderContent from '../Slider/SliderContent'
import BlogSliderCard from '../BlogSliderCard/BlogSliderCard'

const WeblogSection = () => {
    const list = Array.from(Array(20).keys())

    const responsive = [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                centerMode:true
            }
        }
    ]

    const Slider_setting = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: responsive,
        swipeToSlide: true,
        nextArrow: <Next breakpoints={responsive} />, //  Defined in line " 92 "
        prevArrow: <Prev />,
    }

    return (
        <div className='container'>
            <div className="weblog-header-33">
                <div className="font-lg flex-33" >
                    <BsGrid size={25} />
                    <span>
                        در وبلاگ ما
                    </span>
                </div>
                <div className="header-btn-33">
                    <a href="" className='flex-33'>
                        مشاهده همه
                        <BsChevronDoubleLeft />
                    </a>
                </div>
            </div>
            <div className="weblog-slider_contaner-33">

                <SliderContent setting={Slider_setting} >

                    {list.map(item =>
                        <div key={item}>
                            <BlogSliderCard />
                        </div>
                    )}

                </SliderContent>

            </div>

        </div>
    )
}

export default WeblogSection

function Next({ onClick, currentSlide, slideCount , breakpoints}) {
    let n ;
    breakpoints.map(i => {
        if(i.breakpoint >= window.innerWidth )  n = i.settings.slidesToShow ;
    })
    return (
        <>
            <div className={`custom-next-btn_33 ${currentSlide == slideCount - n && 'slider-btn-disable'}`} onClick={onClick} >
                <BsChevronRight size={25} />
            </div>
        </>
    )
}
function Prev({ onClick, currentSlide }) {
    return (
        <>
            <div className={`custom-prevent-btn_33 ${currentSlide == 0 && 'slider-btn-disable'}`} onClick={onClick} >
                <BsChevronLeft size={25} />
            </div>
        </>
    )
}