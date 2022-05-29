import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <Navbar />
                </div>
                <div className="col-lg-10">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Layout;