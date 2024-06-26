import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import { useSelector } from 'react-redux'

const CarsModelPage = () => {
    const Brands_List = useSelector(state => state.brands)
    const [brandInfo, setBrandInfo] = useState(null)
    const [carsList, setCarsList] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        window.scroll({ behavior: 'instant', top: 0, left: 0 })
        setBrandInfo(Brands_List.find(b => b.url == params.brandName))
        return () => window.scroll({ behavior: 'instant', top: 0, left: 0 })
    }, [location])


    useEffect(() => {
        if (brandInfo) {
            document.title = 'لوازم یدکی ' + brandInfo.title + ' - فروشگاه آملاین لوازم یدکی کاپوت'
            setCarsList(brandInfo.cars)
        }
    }, [brandInfo])


    if (!brandInfo || !carsList) return <h1> Loading...</h1>
    return (
        <>
            <BreadCrumbs />
            <main>
                <Category valueList={carsList} brandName={brandInfo.title} />
                <InformationBox />
            </main>
            <SupportWidget scrollBtn={false} />
        </>
    )
}
export default CarsModelPage