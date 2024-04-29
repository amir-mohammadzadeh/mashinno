import { useDispatch, useSelector } from 'react-redux'
import './Dashbord.css' // Code => 8
import { useEffect, useRef } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaUserTie, FaScroll, FaOutdent } from "react-icons/fa";
import { IoExitOutline, IoStorefrontOutline, IoDocumentTextOutline, IoHeartOutline, IoReloadSharp } from "react-icons/io5";
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import { setUserLogin } from '../../redux/UserReducer/userSlice';

const Dashbord = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const sidePanel_ref = useRef(null)
  const closeBtn_ref = useRef(null)
  const USER = useSelector(state => state.userInfo)
  const STORE = useSelector(state => state.storeInfo)

  useEffect(() => {
    document.title = 'کاپوت من';
  }, [])


  const active_link = (link) => {
    return link.isActive ? 'active_8' : ''
  }

  const openPanel = (e) => {
    if (window.innerWidth <= 992) {
      closeBtn_ref.current.classList.toggle('close-btn_8')
      sidePanel_ref.current.classList.toggle('panel-open_8')
    }
  }

  const closePanel = (e) => {
    let elem = sidePanel_ref.current.children[0]
    if (e.target != elem && !elem.contains(e.target)) {
      openPanel()
    }
  }
  const logOut=()=>{
    dispatch(setUserLogin({value:false,tokan:null}))
    localStorage.removeItem('tokan')
    navigate('/')
  }

  return (
    <>
      <div className="container main_8">

        <header className="main-header_8">
          <div ref={closeBtn_ref} className="panel-toggle_8" onClick={openPanel}>
            <span>
              <FaOutdent size={20} />
            </span>
            <span>
              &#10006;
            </span>
          </div>
          <span className='h4'>
            کاپوت من
          </span>
        </header>

        <aside ref={sidePanel_ref} className="sidepanel_8" onClick={closePanel} >
          <div className="panel-content_8" >
            <ul className="no-scrollbar">
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/profile'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <FaUserTie size={25} /> </span>
                  پروفایل من
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/user_posts'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <FaScroll size={25} /> </span>
                  آگهی‌های من
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/favorites'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <IoHeartOutline size={25} /> </span>
                  نشان شده‌ها
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/user_nots'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <IoDocumentTextOutline size={25} /> </span>
                  یاداشت‌ها
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/last_seen'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <IoReloadSharp size={25} /> </span>
                  بازدید‌های اخیر
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/store_panel'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <IoStorefrontOutline size={25} /> </span>
                  پنل فروشگاه
                </NavLink>
              </li>
              <li className="panel-item_8">
                <NavLink
                  to={'/userdashbord/store_panel/edit'}
                  className={link => active_link(link)}
                  onClick={openPanel}
                >
                  <span className="icon_8"> <IoStorefrontOutline size={25} /> </span>
                  ثبت نام فروشگاه
                </NavLink>
              </li>
            </ul>
            <div className="panel-item_8 logout-btn_8" onClick={logOut}>
              <span className="icon_8"> <IoExitOutline size={25} /> </span>
              خروج از حساب کاربری
            </div>
          </div>
        </aside>
        <main className="main-container_8">
          <Outlet />
        </main>
      </div>
      <SupportWidget scrollBtn={false} />
    </>
  )
}

export default Dashbord