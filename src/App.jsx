import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HelpWidget from './components/HelpWidget/HelpWidget'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  return (
    <>
      <Provider store={store} >
        <Header />
        <Outlet />
        <Footer />
        <HelpWidget />
      </Provider>
    </>
  )
}

export default App
