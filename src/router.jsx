import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";


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
        ]
    }
])
export default routes