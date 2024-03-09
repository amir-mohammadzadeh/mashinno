import React from 'react'
import './NavMenu.css'
import SubNav from './SubNav'

const NavMenu = () => {

  const Berand_List = Array.from(Array(25).keys())
  const Lavazem_List = Array.from(Array(5).keys())
  //<SecoundMenu list={Berand_List} grid={true} />

  return (
    <div className='nav-menu_container'>
      <ul className='menu-content'>
        <li className="menu-item">
          <a className='menu-title'>
            برند خودرو
          </a>
          <SubNav list={Berand_List} grid={true} active={true} />
        </li>
        <li className="menu-item">
          <a className='menu-title'>
            لوازم مصرفی
          </a>
          <SubNav list={Lavazem_List} />

        </li>
        <li className="menu-item">
          <a className='menu-title'>
            اکسسوری خودرو
          </a>
          <SubNav list={Lavazem_List} />

        </li>
        <li className="menu-item">
          <a className='menu-title'>
            لوازم جانبی خودرو
          </a>
          <SubNav list={[]} />

        </li>
        <li className="menu-item">
          <a className='menu-title'>
            نگهداری خودرو
          </a>
          <SubNav list={[]} />

        </li>
      </ul>
    </div>
  )
}

export default NavMenu



