import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Invoice from "./Pages/Invoice/Invoice";
import New from "./Pages/Invoice/New";

const App = () => {
    // return <RouterProvider router={router}/>;
    // return <Invoice/>
    return <New/>
};

export default App;
