import React from 'react'
import './Advertising.css' // Code 004

const Advertising = ({ row }) => {
    return (
        <aside className='advertising_004' style={{ gridRow: row }}>
            <div className="ads_004">
                <img src="/Banners/baner_4.webp" alt="" />
            </div>
            <div className="ads_004">
                <img src="/Banners/baner_3.webp" alt="" />
            </div>
        </aside>
    )
}

export default Advertising