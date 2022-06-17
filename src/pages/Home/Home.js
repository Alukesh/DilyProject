import React from 'react';
import Banner from "../Board/Banner/Banner";
import Slider from "../Board/Slider/Slider";
import Compilation from "./Compilation/Compilation";
import TradeSteps from "../Buying/TradeSteps/TradeSteps";
import TopShops from "./Shops/TopShops/TopShops";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Slider/>
            <Compilation/>
            <TopShops/>

            <TradeSteps shadow={'shadow-box'}/>
        </div>
    );
};

export default Home;