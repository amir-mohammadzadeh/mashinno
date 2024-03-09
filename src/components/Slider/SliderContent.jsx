import './SliderContent.css'
import './CustomStyles.css'
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SliderContent = ({ arrow = true, dots = false, autoPlaySpeed = 3000, fade = false, children }) => {

    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoPlaySpeed,
        fade: fade,
        arrows: arrow,
        nextArrow: <Nex />,
        prevArrow: <Pre />
    }
        
    return (
        <Slider className='custom_wrapper' {...settings}  >
            {children}
        </Slider>
    )
}

export default SliderContent

function Dots({...po}){
    console.log(po)
    return(
        <div className="">
            fd
        </div>
    )
}

function Nex({ onClick }) {
    return (
        <div className="custom_next-btn" onClick={onClick} >
            <MdArrowForwardIos size={24} />
        </div>

    )
}
function Pre({ onClick }) {
    return (
        <div className="custom_prev-btn" onClick={onClick}>
            <MdArrowBackIosNew size={24} />
        </div>
    )
}