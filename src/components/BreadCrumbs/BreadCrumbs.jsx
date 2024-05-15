import { useEffect, useState } from 'react'
import './BreadCrumbs.css' // Code => 03
import { BsChevronLeft } from 'react-icons/bs'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BreadCrumbs = () => {
    let brand;
    const params = useParams()
    const location = useLocation()
    const Brands = useSelector(state => state.brands)
    const home_page = { title: 'صفحه اصلی', url: '/' };
    const [itemsList, setItemsList] = useState([home_page])
    const patchs = location.pathname.split('/').filter(i => i !== '')

    useEffect(() => {
        switch (patchs[0]) {
            case 'brand':
                brand = Brands.find(b => b.slug == patchs[1])
                setItemsList([home_page, {
                    title: 'لوازم یدکی ' + brand?.name,
                    url: location.pathname
                }])
                break
            case 'shop':
                brand = Brands.find(b => b.name == params.brandName.replaceAll('_', ' '))
                setItemsList([home_page,
                    {
                        title: 'لوازم یدکی ' + params.brandName.replaceAll('_', ' '),
                        url: `/brand/${brand?.slug}`
                    },
                    {
                        title: 'لوازم یدکی ' + params.carModel,
                        url: null
                    }])

                break
            case 'pd':
                setItemsList([home_page])
                /*
                let b = location.state.brandName || '';
                let m = location.state.carModel || ''
                setItemsList([home_page,
                    {
                        title: `لوازم یدکی ${b.replaceAll('_', ' ')} ${m}`,
                        url: `/posters/${location.state.brandName}/${location.state.carModel}`
                    },
                    {
                        title: location.state.postTitle,
                        url: null
                    }])
                    */
                break
            case 'about-us':
                setItemsList([home_page, { title: 'درباره کاپوت', url: null }])
                break
        }

    }, [location])

    return (
        <nav className='container my-1'>
            <div className="location-content_03 no-scrollbar">
                {itemsList.map((item, idx) => item.url ?
                    <Link to={item.url} className="item_03" key={idx} >
                        <span>
                            {item.title}
                        </span>
                        <span className="icon_03">
                            <BsChevronLeft />
                        </span>
                    </Link>
                    :
                    <div className="item_03" key={idx} >
                        <span>
                            {item.title}
                        </span>
                        <span className="icon_03">
                            <BsChevronLeft />
                        </span>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default BreadCrumbs