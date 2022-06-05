import React from 'react';
import Banner from "./Announcement/Banner/Banner";
import Slider from "./Slider/Slider";
import Compilation from "./Compilation/Compilation";
import TradeSteps from "../Buying/TradeSteps/TradeSteps";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Slider/>
            <Compilation/>
            <TradeSteps shadow={'shadow-box'}/>
        </div>
    );
};

export default Home;