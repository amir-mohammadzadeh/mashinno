import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Toast from './components/Toast/Toast'
import Loading from './components/Loading/Loading'
import { useDispatch } from 'react-redux'
import { setBrands } from './redux/BrandsReducer/BrandSlice'
import { setPosts } from './redux/PostsReducer/PostsSlice'
import { setUserInfo } from './redux/UserReducer/userSlice'
import brands from './assets/Data/Brands.json'
import { getPosts } from './assets/Data/postGenerator'


function App() {
  const dispatch = useDispatch()
  const [connection, setConnection] = useState({ on: false, off: false })
  const [pendding, setPending] = useState(true) // تا زمان دریافت کامل اطلاعات از سرور لودینگ نمایش داده میشود

  useEffect(() => {
    window.addEventListener('online', () => setConnection({ on: true, off: false }))
    window.addEventListener('offline', () => setConnection({ on: false, off: true }))

    // دریافت لیست برند‌ها از سرور و ذخیره در ریداکس
    dispatch(setBrands(brands))

    // دریافت لیست تمام آگهی‌ها از سرور و ذخیره در ریداکس
    const postsList = getPosts(150)
    dispatch(setPosts(postsList))

    // بررسی لاگین بودن کاربر از طریق توکن
    const TOKAN = localStorage.getItem('tokan')
    if (TOKAN) {
      // در صورت لاگین بودن کاربر تمام اطلاعات مربوط به کاربر از سرور دریافت شده
      // و در ریداکس ذخیره میشود
      dispatch(setUserInfo({ isLogin: true, tokan: TOKAN }))
    }

    // بعد از دریافت تمام اطلاعات مورد نیاز از سرور لودینگ از بین میرود
    setPending(false)
  }, [])

  return (
    <>
      <Header />
      {pendding ? <Loading /> : <Outlet />}
      <Footer />
      {connection.on && <Toast type='success' header=' ' msg='اتصال اینترنت برقرار شد :)' timer={3} onClose={() => setConnection({ on: false, off: false })} />}
      {connection.off && <Toast type='warning' header=' ' msg='اتصال اینترنت قطع شد :(' timer={3} onClose={() => setConnection({ on: false, off: false })} />}
    </>
  )
}

export default App
