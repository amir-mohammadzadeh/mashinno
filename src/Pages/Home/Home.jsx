import React from 'react'
import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
import Organizations from '../../components/Organizations/Organizations'
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import BlogSliderCard from '../../components/BlogSliderCard/BlogSliderCard'
import StoryContainer from '../../components/StoryContainer/StoryContainer'
import ProductsGridLayout from '../../components/ProductsGridLayout/ProductsGridLayout'


const Home = () => {
    const list = Array.from(Array(20).keys())
    return (
        <>
            <main>
                <StoryContainer />
                <Banner />
                <BrandSection />
                <div className="container my-2">
                    <ProductsGridLayout />
                </div>
                {/*
                <MultiSlider headerTitle={'در وبلاگ ما'} headerBtnLink={'#'}>
                    {list.map(item =>
                        <div key={item}>
                            <BlogSliderCard />
                        </div>
                    )}
                </MultiSlider>
                        */}
            </main>
        </>
    )
}

export default Home