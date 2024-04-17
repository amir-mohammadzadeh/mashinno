import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
import ProductDetailesPage from "./Pages/ProductDetailesPage/ProductDetailesPage";
import Login from "./Pages/LoginPage/Login";
import Dashbord from './Pages/Dashbord/Dashbord'
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Profile from "./Pages/Dashbord.Profile/Profile";
import Posts from "./Pages/Dashbord.Posts/Posts";
import Favorites from "./Pages/Dashbord.Favorites/Favorites";
import NotBook from "./Pages/Dashbord.NotBook/NotBook";
import LastSeens from "./Pages/Dashbord.LastSeens/LastSeens";
import StorePanel from "./Pages/Dashbord.StorePanel/StorePanel";


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
                element: <PrivetRoute/>,
                children:[
                    {
                        path: '/userdashbord/',
                        element:<Dashbord />,
                        children:[
                            {
                                path: 'profile',
                                element: <Profile />
                            },
                            {
                                path: 'user_posts',
                                element: <Posts />
                            },
                            {
                                path: 'favorites',
                                element: <Favorites />
                            },
                            {
                                path: 'user_nots',
                                element: <NotBook />
                            },
                            {
                                path: 'last_seen',
                                element: <LastSeens />
                            },
                            {
                                path: 'store_panel',
                                element: <StorePanel />
                            },

                        ]
                    },
                ]
            },
            
        ]
    }
])
export default routes