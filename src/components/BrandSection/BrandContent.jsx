import { useState } from 'react'
import Data from '../../assets/Data/Brands.json'
import { Link } from 'react-router-dom'

const BrandContent = ({ limitValue }) => {
    const [brandsList, setBrandsList] = useState(Data)
    let itemCountToShow = limitValue || brandsList.length ;
    const [limit, setLimit] = useState(itemCountToShow)

    const showMoreClick = () => {
        limit == brandsList.length ? setLimit(itemCountToShow) : setLimit(brandsList.length);
    }

    return (
        <>
            <ul className="brands-holder_16">
                {brandsList.slice(0, limit).map(brand =>
                    <li key={brand.id} className="">
                        <Link to={'/brand/' + brand.slug} >
                            <div className="brand-image_16">
                                <img src="/public/Images/no-image.webp" alt={brand.name} />
                            </div>
                            <span className="brand-name_16">
                                {brand.name}
                            </span>
                        </Link>
                    </li>
                )}
            </ul>
            {limitValue &&
                <button className="btn more-btn_11" onClick={showMoreClick}>
                    {limit == brandsList.length ? 'نمایش کمتر' : 'نمایش بیشتر'}
                </button>
            }
        </>
    )
}

export default BrandContent