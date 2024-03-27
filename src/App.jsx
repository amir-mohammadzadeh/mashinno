import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HelpWidget from './components/HelpWidget/HelpWidget'


function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer  />
      <HelpWidget />
    </>
  )
}

export default App
