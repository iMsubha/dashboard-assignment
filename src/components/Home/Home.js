import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Navigation from '../Navigation/Navigation';
const Home = () => {
    return (
        <div className="d-flex">
        <Navigation/>
        <Dashboard/>
        </div>
    );
};

export default Home;