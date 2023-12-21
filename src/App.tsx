import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login";
import CompanySelection from "./Pages/Login/companyselection";
import RootLayout from "./Pages/Layouts/rootlayout";
import Home from "./Pages/Home/home";
import InvPage from "./Pages/Invoice/InvPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index path="" element={<Login />} />
      <Route path="companyselection" element={<CompanySelection />} />
      <Route path="invoice" element={<InvPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
