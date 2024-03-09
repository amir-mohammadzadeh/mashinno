import React from 'react'

const SubNav = ({ list, grid = false, active = false }) => {
    let isActive;
    active ? isActive = 'sub-menu-active' : ''
    
    return (
        <ul className={grid ? `nav-sub-menu-grid ${isActive}` : `nav-sub-menu ${isActive}`}>
            {list.map((item, index) =>
                <li key={index} className="sub-menu-item">
                    <a href="">
                        آیتم  {item+1}
                    </a>
                </li>
            )}

        </ul>
    )
}

export default SubNav