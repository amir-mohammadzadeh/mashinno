import React from 'react'
import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
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
            </main>
        </>
    )
}

export default Home