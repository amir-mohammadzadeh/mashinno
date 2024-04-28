import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BrandContent = ({ limit }) => {
    const brandsList = useSelector(state => state.brands)
    const [limitHeight, setLimitHeight] = useState(limit ? '16rem' : 'unset')

    const showMoreClick = () => {
        limitHeight == 'unset' ? setLimitHeight('16rem') : setLimitHeight('unset');
    }

    return (<>
        <ul className="brands-holder_16" style={{ maxHeight: limitHeight }}>
            {brandsList.map(brand =>
                <li key={brand.id} className="brand_16">
                    <Link to={'/brand/' + brand.slug}>
                        <div className="brand-image_16">
                            <img src="/Images/no-image.webp" alt={brand.name} />
                        </div>
                        <span className="brand-name_16">
                            {brand.name}
                        </span>
                    </Link>
                </li>
            )}
        </ul>
        {limit &&
            <button className="btn more-btn_11" onClick={showMoreClick}>
                {limitHeight == 'unset' ? 'نمایش کمتر' : 'نمایش بیشتر'}
            </button>
        }
    </>)
}

export default BrandContent