import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

import Invoice from "./Pages/Invoice/Invoice";
import Login from "./components/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <Error/>
    },
    {
        path: "/home",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/invoice",
        element: <Invoice/>,
        errorElement: <Error/>
    }
])