import React from 'react';
import Layout from "../commponent/layout/Layout.jsx";
import found404 from '../assets/images/404.svg'

const NotFound = () => {
    return (
        <Layout>
            <div className="mx-auto col-lg-4 ">
                <img src={found404} alt="404"/>
            </div>
        </Layout>
    );
};

export default NotFound;