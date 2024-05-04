import { useRef } from 'react'
import './NavMenu.css' // Code => 21
import SubNav from './SubNav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//______ Create Fack Data for example ________________
const Lavazem_List = new Array(5).fill().map((e, id) => ({ id, title: 'دسته لوازم مصرفی ' + id, link: '' }))
const Accessory_List = new Array(10).fill().map((e, id) => ({ id, title: 'دسته اکسسوری ' + id, link: '' }))

const NavMenu = () => {
  const brands = useSelector(state => state.brands)
  const Brand_List = useRef([])
  const menu_ref = useRef(null)

  // برای هر زیر مجموعه یک لیست ایجاد میشود
  Brand_List.current = brands.map(brand => {
    return {
      id: brand.id,
      title: brand.name,
      link: `/brand/${brand.slug}`
    }
  })


  const onHoverHandler = (e) => {
    for (let menuItem of menu_ref.current.children) {
      menuItem.classList.remove('active_21')
    }
    e.target.parentElement.classList.add('active_21')
  }

  return (
    <div className='menu_container_21'>
      <ul ref={menu_ref} className='content_21'>
        <li className="menu-item_21 active_21">
          <Link to='#Brands_Section' className='title_21' onMouseOver={onHoverHandler}>
            برند خودرو
          </Link>

          <SubNav list={Brand_List.current} />

        </li>

        <li className="menu-item_21">
          <Link className='title_21' onMouseOver={onHoverHandler}>
            لوازم مصرفی
          </Link>
          <SubNav list={Lavazem_List} />

        </li>
        <li className="menu-item_21">
          <Link className='title_21' onMouseOver={onHoverHandler}>
            اکسسوری خودرو
          </Link>
          <SubNav list={Accessory_List} />

        </li>
        <li className="menu-item_21">
          <Link className='title_21' onMouseOver={onHoverHandler}>
            لوازم جانبی خودرو
          </Link>

        </li>
        <li className="menu-item_21">
          <Link className='title_21' onMouseOver={onHoverHandler}>
            نگهداری خودرو
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu



