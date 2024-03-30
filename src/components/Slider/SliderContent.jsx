import './SliderContent.css'
import Slider from 'react-slick';

const SliderContent = ({ setting, children }) => {

    const Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        ...setting
    }
        
    return (
        <Slider {...Settings}  >
            {children}
        </Slider>
    )
}

export default SliderContent