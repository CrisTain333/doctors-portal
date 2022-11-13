import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './layout.css'
const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='layout'> 
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Layout;