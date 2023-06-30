import React from 'react';
import ServiceBanner from "./Banner/ServiceBanner";
import Faults from "./FirstBanner/Faults/Faults";
import Price from "./FirstBanner/Price/Price";
import Jobs from "./FirstBanner/Jobs/Jobs";
import Confidence from "./FirstBanner/Confidence/Сonfidence"
import Question from "./FirstBanner/Question/Question";
import {useParams} from "react-router-dom";
import Vend from "../Home/Charity/Vend/Vend";
import ServiceIpad from "./Apple/ServiceIpad";

const Service = () => {
    const params = useParams();


    return (
        <div className={'service'}>
            {
                params.category === 'ipad' ?
                    <ServiceIpad/>
                    :
                    <ServiceBanner/>

            }

            <Faults/>
            <Price/>
            <Jobs/>
            <Confidence/>
            <Question/>
            <Vend/>
        </div>
    );
};

export default Service;