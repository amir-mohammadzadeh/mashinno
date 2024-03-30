import { useState } from 'react'
import './BrandSection.css' // Code =>  16
import Data from '../../assets/Data/Brands.json'
import { Link } from 'react-router-dom'

const BrandSection = () => {
  const [brandsList, setBrandsList] = useState(Data)

  return (
    <div className='brannd_section' id='Brands_Section'>
      <div className="container brand_container_16">
        <div className="header_16">
          <h4>
            برند ها
          </h4>
          <span>
            برند خودروی خود را انتخاب کنید
          </span>
        </div>
        <div className="brands-holder_16">
          <ul className="">
            {brandsList.map(brand =>
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
        </div>
      </div>
    </div>
  )
}

export default BrandSection