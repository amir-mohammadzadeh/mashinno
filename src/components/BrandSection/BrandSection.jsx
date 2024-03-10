import React, { useState } from 'react'
import './BrandSection.css' // Code =>  22
import Data from '../../assets/Data/Brands.json'

const BrandSection = () => {
  const [brandsList, setBrandsList] = useState(Data)

  return (
    <div className='brannd_section'>
      <div className="container brand_container-22">
        <div className="header-22">
          <h4>
            برند ها
          </h4>
          <span>
            برند خودروی خود را انتخاب کنید
          </span>
        </div>
        <div className="brands-holder-22">
          <ul className="">
            {brandsList.map(brand =>
              <li key={brand.id} className="">
                <a href="">
                  <div className="brand-image-22">
                    <img src="/public/Images/no-image.webp" alt={brand.name} />
                  </div>
                  <span className="brand-name-22">
                    {brand.name}
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BrandSection