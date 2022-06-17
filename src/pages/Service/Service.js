import React from 'react';
import ServiceBanner from "./Banner/ServiceBanner";
import Advantage from "./Advantage/Advantage";
import Faults from "./Faults/Faults";
import Price from "./Price/Price";
import Jobs from "./Jobs/Jobs";
import Confidence from "./Confidence/Сonfidence"
import Question from "./ Question/Question";

const Service = () => {
    return (
        <div className={'service'}>
            <ServiceBanner/>
            <Advantage/>
            <Faults/>
            <Price/>
            <Jobs/>
            <Confidence/>
            <Question/>
        </div>
    );
};

export default Service;