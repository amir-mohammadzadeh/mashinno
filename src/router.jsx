import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import CarsModelPage from "./Pages/CarsModelPage/CarsModelPage";


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
                path: 'pages/:brandName',
                element: <CarsModelPage />
            }
        ]
    }
])
export default routes