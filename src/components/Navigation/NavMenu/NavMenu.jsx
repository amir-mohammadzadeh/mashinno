import React, { useRef } from 'react'
import './NavMenu.css'
import SubNav from './SubNav'
import Data from '../../../assets/Data/Brands.json'
import { Link } from 'react-router-dom'

//______ Create Fack Data for example ________________
const Lavazem_List = new Array(5).fill().map((e, id) => ({ name: 'دسته لوازم مصرفی ' + id, id }))
const Accessory_List = new Array(10).fill().map((e, id) => ({ name: 'دسته اکسسوری ' + id, id }))

const NavMenu = () => {
  const Brand_List = useRef(Data)

  return (
    <div className='nav-menu_container'>
      <ul className='menu-content'>
        <li className="menu-item">
          <a href='#Brands_Section' className='menu-title'>
            برند خودرو
          </a>
          <SubNav list={Brand_List.current} grid={true} active={true} />
        </li>
        <li className="menu-item">
          <Link className='menu-title'>
            لوازم مصرفی
          </Link>
          <SubNav list={Lavazem_List} />

        </li>
        <li className="menu-item">
          <Link className='menu-title'>
            اکسسوری خودرو
          </Link>
          <SubNav list={Accessory_List} />

        </li>
        <li className="menu-item">
          <Link className='menu-title'>
            لوازم جانبی خودرو
          </Link>
          <SubNav list={[]} />

        </li>
        <li className="menu-item">
          <Link className='menu-title'>
            نگهداری خودرو
          </Link>
          <SubNav list={[]} />

        </li>
      </ul>
    </div>
  )
}

export default NavMenu



