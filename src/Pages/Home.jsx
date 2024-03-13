import React from 'react'
import Banner from '../components/Banner/Banner'
import BrandSection from '../components/BrandSection/BrandSection'
import Organizations from '../components/Organizations/Organizations'
import WeblogSection from '../components/WeblogSection/WeblogSection'
import SiteFeatuers from '../components/SiteFeatuers/SiteFeatuers'


const Home = () => {
    return (
        <>
            <main>
                {/*  <SliderCard />  */}
                <Banner />
                <BrandSection />
                <Organizations />
                <WeblogSection />
                <SiteFeatuers />
            </main>
        </>
    )
}

export default Home