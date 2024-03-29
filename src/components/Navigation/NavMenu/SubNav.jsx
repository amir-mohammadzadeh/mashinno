import React from 'react'
import { Link } from 'react-router-dom';

const SubNav = ({ list, grid = false, active = false }) => {
    let isActive;
    active ? isActive = 'sub-menu-active' : ''
    
    return (
        <ul className={grid ? `nav-sub-menu-grid ${isActive}` : `nav-sub-menu ${isActive}`}>
            {list.map((item, index) =>
                <li key={index} className="sub-menu-item">
                    <Link to={`/brand/${item.slug}`}>
                        {item.name} 
                    </Link>
                </li>
            )}

        </ul>
    )
}

export default SubNav