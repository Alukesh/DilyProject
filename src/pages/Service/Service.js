import React from 'react';
import ServiceBanner from "./Banner/ServiceBanner";
import Advantage from "./Advantage/Advantage";

const Service = () => {
    return (
        <div className={'service'}>
            <ServiceBanner/>

            <Advantage/>

        </div>
    );
};

export default Service;