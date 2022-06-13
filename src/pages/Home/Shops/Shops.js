import React from 'react';
import Slider from "../../Board/Slider/Slider";
import img1 from "../../Board/Banner/banner shops shops.svg";
import img2 from "../../Board/Banner/banner shops tarif.png";
import TopShops from "./TopShops/TopShops";


const Shops = () => {
    return (
        <div className={'shops'}>
            <Slider/>

            <div className="container">
                <div className={'shops__banner'}>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                </div>
            </div>


            <TopShops/>


        </div>
    );
};

export default Shops;