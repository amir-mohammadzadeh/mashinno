import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/CarsModelPage/Header'
import Category from '../../components/CarsModelPage/Category'
import InformationBox from '../../components/CarsModelPage/InformationBox'

const CarsModelPage = () => {
    const filterList = Array.from(Array(3).keys())
    const modelList = Array.from(Array(10).keys())
    const [filter, setFilter] = useState('All')
    const params = useParams()

    useEffect(() => {
        console.log(params)
    }, [])

    return (
        <main>
            <Header optionsList={filterList} onSelect={setFilter} value={filter} />
            <Category valueList={modelList}  />
            <InformationBox  />
        </main>
    )
}
export default CarsModelPage