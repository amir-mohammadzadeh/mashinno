import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HelpWidget from './components/HelpWidget/HelpWidget'
import { Provider } from 'react-redux'
import store from './redux/store'
import { useEffect, useState } from 'react'
import Toast from './components/Toast/Toast'


function App() {
  const [connection,setConnection] = useState({on:false, off:false})
  useEffect(()=>{
    window.addEventListener('online',()=>setConnection({on:true, off:false}))
    window.addEventListener('offline',()=>setConnection({on:false, off:true}))
  },[])
  return (
    <>
      <Provider store={store} >
        <Header />
        <Outlet />
        <Footer />
        <HelpWidget />
        {connection.on && <Toast type='success' header=' ' msg='اتصال اینترنت برقرار شد :)' timer={3} onClose={()=> setConnection({on: false , off: false })} /> }
        {connection.off && <Toast type='warning' header=' ' msg='اتصال اینترنت قطع شد :(' timer={3} onClose={()=> setConnection({on: false , off: false })} /> }
      </Provider>
    </>
  )
}

export default App
