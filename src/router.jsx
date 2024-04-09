import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
import ProductDetailesPage from "./Pages/ProductDetailesPage/ProductDetailesPage";
import Login from "./Pages/LoginPage/Login";
import Dashbord from './Pages/Dashbord/Dashbord'
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'brand/:brandName',
                element: <CarsModelPage />
            },
            {
                path: 'shop/:brandName/:carModel',
                element: <ShoppingPage />
            },
            {
                path: 'product-detailes/:productID',
                element: <ProductDetailesPage />
            }, 
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'userdashbord',
                element: <PrivetRoute><Dashbord /></PrivetRoute>
            },
            
        ]
    }
])
export default routes