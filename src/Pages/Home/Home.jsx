import React from 'react'
import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
import StoryContainer from '../../components/StoryContainer/StoryContainer'
import ProductsGridLayout from '../../components/ProductsGridLayout/ProductsGridLayout'
import { NavItemsContent } from '../../components/Navigation/Navigation'


const Home = () => {
    
    return (
        <>
            <main>
                <StoryContainer />
                <Banner />
                <NavItemsContent className="navbar-on-mobile_02" />
                <BrandSection />
                <div className="container my-2">
                    <ProductsGridLayout />
                </div>
            </main>
        </>
    )
}

export default Home