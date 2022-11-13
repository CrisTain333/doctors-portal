import Layout from "../Layout/Layout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:"/appointment",
                element: <Appointment />
            },
            {
                path:'/login',
                element:<Login/>

            },
            {
                path:'/singUp',
                element: <SingUp />

            }
        ]
    }

])
export default router;