import { useEffect, useState } from 'react'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import Header from '../../components/CarsModelPage/Header'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'
import Data from '../../assets/Data/Brands.json'

const CarsModelPage = () => {
    const [brandInfo, setBrandInfo] = useState(null)
    const [carsList, setCarsList] = useState(null)
    const params = useParams()
    const location = useLocation()
    
    useEffect(() => {
        window.scrollTo(0,0)
        document.title = 'لوازم یدکی ' + params.brandName + ' - فروشگاه آملاین لوازم یدکی کاپوت'
        setBrandInfo(Data.find(b=> b.slug == params.brandName))
    }, [location])


    useEffect(() => {
        brandInfo &&
            setCarsList(brandInfo.cars)
    }, [brandInfo])


    if (!brandInfo || !carsList ) return <h1> Loading...</h1>
    return (
        <main>
            <Header listOfCars={carsList} updateList={setCarsList} />
            <Category valueList={carsList} brandName={brandInfo.name}  />
            <InformationBox  />
        </main>
    )
}
export default CarsModelPage