import './App.css'
import Banner from './components/Banner/Banner'
import BlogSliderCard from './components/BlogSliderCard/BlogSliderCard'
import BrandSection from './components/BrandSection/BrandSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Organizations from './components/Organizations/Organizations'
import SideBar from './components/SideBar/SideBar'
import SiteFeatuers from './components/SiteFeatuers/SiteFeatuers'
import SliderCard from './components/SliderCard/SliderCard'
import WeblogSection from './components/WeblogSection/WeblogSection'

function App() {


  return (
    <>
      <Header />
      <main>
        {/*  <SliderCard />  */}
        <Banner />
        <BrandSection />
        <Organizations />
        <WeblogSection />
        <SiteFeatuers />
        
      </main>
      <Footer  />

    </>
  )
}

export default App
