import React from 'react';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

const Options = () => {
    return (
        <div className={'service__options-row'}>
            <div className={'shadow-box service__options-card'}>
                <img src={img1} alt=""/>
                Apple
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img2} alt=""/>
                Apple
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img3} alt=""/>
                Apple
            </div>

        </div>
    );
};

export default Options;