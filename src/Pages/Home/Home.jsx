import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
import StoryContainer from '../../components/StoryContainer/StoryContainer'
import ProductsGridLayout from '../../components/ProductsGridLayout/ProductsGridLayout'
import { NavItemsContent } from '../../components/Navigation/Navigation'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import { getPosts } from '../../assets/Data/postGenerator'

const Home = () => {
  const [postsList, setPostsList] = useState(getPosts(150))
    
    return (
        <>
            <main>
                <StoryContainer />
                <Banner />
                <NavItemsContent className="navbar-on-mobile_02" />
                <BrandSection />
                <div className="container my-2">
                    <ProductsGridLayout itemList={postsList} />
                </div>
            </main>
            <SupportWidget />
        </>
    )
}

export default Home