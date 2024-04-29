import Banner from '../../components/Banner/Banner'
import BrandSection from '../../components/BrandSection/BrandSection'
import StoryContainer from '../../components/StoryContainer/StoryContainer'
import PostsGridLayout from '../../components/PostsGridLayout/PostsGridLayout'
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
                <PostsGridLayout itemList={Get_Posts} />
            </div>
        </main>
        <SupportWidget />
    </>)
}

export default Home