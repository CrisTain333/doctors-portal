import DashboardLayout from "../Layout/DashBoard Layout/DashboardLayout";
import Layout from "../Layout/Layout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PasswordReset from "../Pages/Login/PasswordReset";
import SingUp from "../Pages/Login/SingUp";
import MyAppointment from "../Pages/Dashboard/My Appoinment/MyAppointment";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Dashboard/All Users/Users";
import DisplayError from "../Shared/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../Pages/Dashboard/Add Doctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/Manage Doctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element:<Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
      {
        path: "/passwordreset",
        element: <PasswordReset />,
      }
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children:[
        {
            path:'/dashboard',
            element:<MyAppointment></MyAppointment>
        },
        {
          path:'/dashboard/users',
          element: <AdminRoute><Users/> </AdminRoute>

        },
        {
          path:'/dashboard/add/doctor',
          element:<AdminRoute> <AddDoctor /></AdminRoute>
        },
        {
          path:'/dashboard/manage/doctors',
          element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute> 

        }
        ,{
          path:'/dashboard/payment/:id',
          loader: async({params})=>fetch(`https://doctor-portal-server-three.vercel.app/bookings/${params.id}`),
          element: <Payment></Payment>
        }
    ]
  },
]);
export default router;
