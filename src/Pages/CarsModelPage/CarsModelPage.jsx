import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/CarsModelPage/Header'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'
import Data from '../../assets/Data/Brands.json'

const CarsModelPage = () => {
    const [brandInfo, setBrandInfo] = useState(null)
    const [carsList, setCarsList] = useState(null)
    const params = useParams()

    useEffect(() => {
        document.title = 'لوازم یدکی ' + params.brandName + ' - فروشگاه آملاین لوازم یدکی کاپوت'
        setBrandInfo(Data.find(b=> b.slug == params.brandName))
    }, [])

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