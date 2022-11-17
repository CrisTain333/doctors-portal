import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
            <li className="bg-gradient-to-r my-3  from-primary to-secondary text-white rounded" >
              <Link to='/dashboard'>My Appointments</Link>
            </li>
            <li className="bg-gradient-to-r from-primary to-secondary text-white rounded">
              <Link>All Users</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default DashboardLayout;