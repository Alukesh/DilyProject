import React from 'react';
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";
import Compilation from "./Compilation/Compilation";

const Home = () => {
    return (
        <main>
            <Banner/>
            <Slider/>
            <Compilation/>
        </main>
    );
};

export default Home;