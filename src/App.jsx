import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import Toast from './components/Toast/Toast'
import BsicHoc from './HOC/BsicHoc/BsicHoc'
import Loading from './components/Loading/Loading'


function App({ loading }) {
  const [connection, setConnection] = useState({ on: false, off: false })
  useEffect(() => {
    window.addEventListener('online', () => setConnection({ on: true, off: false }))
    window.addEventListener('offline', () => setConnection({ on: false, off: true }))
  }, [])
  return (
    <>
      <Header />
      {loading ? <Loading /> : <Outlet />}
      <Footer />
      {connection.on && <Toast type='success' header=' ' msg='اتصال اینترنت برقرار شد :)' timer={3} onClose={() => setConnection({ on: false, off: false })} />}
      {connection.off && <Toast type='warning' header=' ' msg='اتصال اینترنت قطع شد :(' timer={3} onClose={() => setConnection({ on: false, off: false })} />}
    </>
  )
}

export default BsicHoc(App) 
