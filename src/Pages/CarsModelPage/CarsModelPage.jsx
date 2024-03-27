import { useEffect, useState } from 'react'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import Header from '../../components/CarsModelPage/Header'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'
import Data from '../../assets/Data/Brands.json'
import UserLocation from '../../components/UserLocation/UserLocation'

const CarsModelPage = () => {
    const [brandInfo, setBrandInfo] = useState(null)
    const [carsList, setCarsList] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        document.title = 'لوازم یدکی ' + params.brandName + ' - فروشگاه آملاین لوازم یدکی کاپوت'
        setBrandInfo(Data.find(b => b.slug == params.brandName))
        return () => window.scroll({ behavior: 'instant', top: 0, left: 0 })
    }, [location])


    useEffect(() => {
        brandInfo &&
            setCarsList(brandInfo.cars)
    }, [brandInfo])


    if (!brandInfo || !carsList) return <h1> Loading...</h1>
    return (
        <>
            <UserLocation />
            <main>
                <Header listOfCars={carsList} updateList={setCarsList} />
                <Category valueList={carsList} brandName={brandInfo.name} />
                <InformationBox />
            </main>
        </>
    )
}
export default CarsModelPage