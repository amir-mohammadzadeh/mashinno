import React from 'react'
import './Organizations.css'

const Organizations = () => {
    const Organizations_List = [
        { name: "ایزی پی", logo: "no-image.webp" },
        { name: "تعاونی اعتبار ایران خودرو", logo: "no-image.webp" },
        { name: "ثمین کارت", logo: "no-image.webp" },
        { name: "درگاه اعتباری آپسان", logo: "no-image.webp" },
    ]
    return (
        <div className='container organs_holder'>
            <div className="organization-header">
                سازمان‌های طرف قرارداد
            </div>
            <ul className="organization-content">
                {Organizations_List.map((organ, index) =>
                    <li key={index} className="organization">
                        <div className="image">
                            <img src={`/public/Images/${organ.logo}`} alt="" />
                        </div>
                        <span>
                            {organ.name}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Organizations