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
import NoteBook from "./Pages/Dashbord.NoteBook/NoteBook";
import StorePanel from "./Pages/Dashbord.StorePanel/StorePanel";
import RecentlySeen from "./Pages/Dashbord.RecentlySeen/RecentlySeen";
import MyPostDetailes from "./Pages/Dashbord.MyPostDetailes/MyPostDetailes";
import EditProfile from "./Pages/Dashbord.EditForms/EditProfile";
import EditStorePanel from "./Pages/Dashbord.EditForms/EditStorePanel";
import AboutUs from "./Pages/AboutUs/AboutUs";

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
                path: 'about-us',
                element: <AboutUs />
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
                                path: 'profile/edit',
                                element: <EditProfile />
                            },
                            {
                                path: 'user_posts',
                                element: <Posts />
                            },
                            {
                                path: 'user_posts/preview/:postID',
                                element: <MyPostDetailes />
                            },
                            {
                                path: 'favorites',
                                element: <Favorites />
                            },
                            {
                                path: 'user_nots',
                                element: <NoteBook />
                            },
                            {
                                path: 'last_seen',
                                element: <RecentlySeen />
                            },
                            {
                                path: 'store_panel',
                                element: <StorePanel />
                            },
                            {
                                path: 'store_panel/edit',
                                element: <EditStorePanel />
                            },

                        ]
                    },
                ]
            },
            
        ]
    }
])
export default routes