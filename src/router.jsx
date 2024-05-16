import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";
import AgahyhaPage from "./Pages/AgahyhaPage/AgahyhaPage";
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
import EditProfile from "./Pages/Dashbord.EditForms/EditProfile";
import EditStorePanel from "./Pages/Dashbord.EditForms/EditStorePanel";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import PageNotFound from "./Pages/404Page/PageNotFound";
import AddNewPost from "./Pages/AddNewPost/AddNewPost";
import PostManagement from "./Pages/PostManagement/PostManagement";
import PostPreview from "./Pages/PostManager.preview/PostPreview";
import PellePromote from "./Pages/PostManager.pelleTab/PellePromote";
import PostUpgrate from "./Pages/PostManager.PostUpgrate/PostUpgrate";
import SpecifitionsPage from "./Pages/SpecifitionsPage/SpecifitionsPage";
import CartPage from "./Pages/CartPage/CartPage";
import OrderDetails from "./Pages/CartPage/OrderDetails/OrderDetails";
import CartContent from "./Pages/CartPage/CartContent/CartContent";
import Stores from "./Pages/StoresPage/Stores";
import MyOrders from "./Pages/Dashbord.MyOrders/MyOrders";

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
                path: 'posters/:brandName/:carModel',
                element: <CategoryPage />
            },
            {
                path: 'posters/:brandName/:carModel/category',
                element: <AgahyhaPage />
            },
            {
                path: 'pd/:productID',
                element: <ProductDetailesPage />
            },
            {
                path: 'specifications/:brandName/:carModel',
                element: <SpecifitionsPage />
            },
            {
                path: 'new-post',
                element: <AddNewPost />
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
                path: 'page-not-found',
                element: <PageNotFound />
            },
            {
                path: 'store',
                element: <Stores />
            },
            {
                path: 'store/:storeID/panel',
                element: <StorePanel />
            },
            {
                element: <PrivetRoute />,
                children: [
                    {
                        path: '/userdashbord/',
                        element: <Dashbord />,
                        children: [
                            {
                                path: 'profile',
                                element: <Profile />
                            },
                            {
                                path: 'profile/edit',
                                element: <EditProfile />
                            },
                            {
                                path: 'orders',
                                element: <MyOrders />
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
                            {
                                path: 'user_posts',
                                element: <Posts />
                            },
                            {
                                path: 'user_posts/management/:postID/',
                                element: <PostManagement />,
                                children: [
                                    {
                                        path: 'preview',
                                        element: <PostPreview />
                                    },
                                    {
                                        path: 'pelle-promote',
                                        element: <PellePromote />
                                    },
                                    {
                                        path: 'promote',
                                        element: <PostUpgrate />
                                    },
                                    {
                                        path: 'edit',
                                        element: <AddNewPost />
                                    },

                                ]
                            },

                        ]
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/page-not-found' />
    }
])
export default routes