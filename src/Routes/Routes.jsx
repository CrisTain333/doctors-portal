import DashboardLayout from "../Layout/DashBoard Layout/DashboardLayout";
import Layout from "../Layout/Layout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PasswordReset from "../Pages/Login/PasswordReset";
import SingUp from "../Pages/Login/SingUp";
import MyAppointment from "../Pages/Dashboard/My Appoinment/MyAppointment";
import PrivateRoute from "./PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
    ],
  },
  {
    path: "/passwordreset",
    element: <PasswordReset />,
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
        {
            path:'/dashboard',
            element: <MyAppointment></MyAppointment>
        }
    ]
  },
]);
export default router;
