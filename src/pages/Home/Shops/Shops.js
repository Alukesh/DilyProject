import React from 'react';
import Slider from "../../Board/Slider/Slider";
import img1 from "../../Board/Banner/banner shops shops.svg";
import img2 from "../../Board/Banner/banner shops tarif.png";
import TopShops from "./TopShops/TopShops";
import{useParams} from 'react-router-dom'


const Shops = () => {
    const params = useParams();
    console.log(params.id);

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