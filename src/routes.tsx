import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Login from "./Pages/Login";

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
    }
])