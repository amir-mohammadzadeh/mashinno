import React from 'react'
import Banner from '../components/Banner/Banner'
import BrandSection from '../components/BrandSection/BrandSection'
import Organizations from '../components/Organizations/Organizations'
import MultiSlider from '../components/MultiSlider/MultiSlider'
import SiteFeatuers from '../components/SiteFeatuers/SiteFeatuers'
import BlogSliderCard from '../components/BlogSliderCard/BlogSliderCard'


const Home = () => {
    const list = Array.from(Array(20).keys())
    return (
        <>
            <main>
                {/*  <SliderCard />  */}
                <Banner />
                <BrandSection />
                <Organizations />
                <MultiSlider headerTitle={'در وبلاگ ما'} headerBtnLink={'#'}>
                    {list.map(item =>
                        <div key={item}>
                            <BlogSliderCard />
                        </div>
                    )}
                </MultiSlider>
            </main>
        </>
    )
}

export default Home