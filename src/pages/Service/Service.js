import React from 'react';
import ServiceBanner from "./Banner/ServiceBanner";
import Advantage from "./Advantage/Advantage";
import Faults from "./Faults/Faults";
import Price from "./Price/Price";
import Jobs from "./Jobs/Jobs";
import Confidence from "./Confidence/Сonfidence"
import Question from "./ Question/Question";
import {useParams} from "react-router-dom";
import Options from "./Options/Options";

const Service = () => {
    const params = useParams();


    return (
        <div className={'service'}>
            {
                params.category === 'ipad' ?
                    <div className={'container'}>
                        ipad kjaksjd
                    </div> :
                    <ServiceBanner/>

            }
            <Advantage/>
            <div className={'container'}>
                <div className={'service__options'}>
                    <h2 className={'service__options-title'}>Мы ремонтируем</h2>
                    <Options/>
                </div>
            </div>
            <Faults/>
            <Price/>
            <Jobs/>
            <Confidence/>
            <Question/>
        </div>
    );
};

export default Service;