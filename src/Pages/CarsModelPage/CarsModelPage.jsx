import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'
import Data from '../../assets/Data/Brands.json'
import UserLocation from '../../components/UserLocation/UserLocation'
import SupportWidget from '../../components/SupportWidget/SupportWidget'

const CarsModelPage = () => {
    const [brandInfo, setBrandInfo] = useState(null)
    const [carsList, setCarsList] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        setBrandInfo(Data.find(b => b.slug == params.brandName))
        return () => window.scroll({ behavior: 'instant', top: 0, left: 0 })
    }, [location])


    useEffect(() => {
        if (brandInfo) {
            document.title = 'لوازم یدکی ' + brandInfo.name + ' - فروشگاه آملاین لوازم یدکی کاپوت'
            setCarsList(brandInfo.cars)
        }
    }, [brandInfo])


    if (!brandInfo || !carsList) return <h1> Loading...</h1>
    return (
        <>
            <UserLocation />
            <main>
                <Category valueList={carsList} brandName={brandInfo.name} />
                <InformationBox />
            </main>
            <SupportWidget scrollBtn={false} />
        </>
    )
}
export default CarsModelPage