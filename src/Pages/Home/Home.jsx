import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
import StoryContainer from '../../components/StoryContainer/StoryContainer'
import ProductsGridLayout from '../../components/ProductsGridLayout/ProductsGridLayout'
import { NavItemsContent } from '../../components/Navigation/Navigation'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import { useSelector } from 'react-redux'

const Home = () => {
    const Get_Posts = useSelector(state => state.posts) // دریافت تمام آگهی ها از استیت ریداکس

    return (<>
        <main>
            <StoryContainer />
            <Banner />
            <NavItemsContent className="navbar-on-mobile_02" />
            <BrandSection />
            <div className="container my-2">
                <ProductsGridLayout itemList={Get_Posts} />
            </div>
        </main>
        <SupportWidget />
    </>)
}

export default Home