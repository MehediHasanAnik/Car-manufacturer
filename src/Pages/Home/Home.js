import React from 'react';
import AboutUs from '../AboutUS/AboutUs';
import Banner from '../Banner/Banner';
import LatestTool from '../LatestTool/LatestTool';
import Reviews from '../Reviews/Reviews';
import Summery from '../Summery/Summery';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Summery />
            <AboutUs />
            <Reviews />
            <LatestTool />
        </div>
    );
};

export default Home;