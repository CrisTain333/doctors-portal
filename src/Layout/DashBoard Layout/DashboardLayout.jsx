import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../Context/Context";
import useAdmin from "../../Hooks/useAdmin";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ml-6 mr-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side dark:bg-gray-900 dark:text-gray-100">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 rounded text-base-content h-screen">
            <li className="bg-gradient-to-r my-3  from-primary to-secondary text-white rounded">
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && <>
              <li className="bg-gradient-to-r my-3 from-primary to-secondary text-white rounded">
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li className="bg-gradient-to-r my-3 from-primary to-secondary text-white rounded">
                <Link to="/dashboard/add/doctor">Add A Doctor</Link>
              </li>
              <li className="bg-gradient-to-r my-3 from-primary to-secondary text-white rounded">
                <Link to="/dashboard/manage/doctors">Manage Doctors</Link>
              </li>
              </>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
