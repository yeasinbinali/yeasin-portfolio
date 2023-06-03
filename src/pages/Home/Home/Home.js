import React from 'react';
import About from '../../About/About';
import Technologies from '../../Technologies/Technologies';
import HomeHeader from '../HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <About></About>
            <Technologies></Technologies>
        </div>
    );
};

export default Home;