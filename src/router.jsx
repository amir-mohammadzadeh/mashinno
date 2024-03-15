import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
import ProductDetailesPage from "./Pages/ProductDetailesPage/ProductDetailesPage";


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
        ]
    }
])
export default routes