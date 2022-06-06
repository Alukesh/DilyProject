import React from 'react';
import img1 from './advantage1.png'
import img2 from './advantage2.png'
import img3 from './advantage3.png'
import img4 from './advantage4.png'

const Advantage = () => {
    return (
        <div className={'service__advantage'}>
            <div className="container">
                <div className="service__advantage-row">
                    <div className="service__advantage-card">
                        <p>Быстро</p>
                        <img src={img1} alt=""/>
                    </div>
                    <div className="service__advantage-card">
                        <p>С гарантией</p>
                        <img src={img2} alt=""/>
                    </div>
                    <div className="service__advantage-card">
                        <p>Профессионально</p>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="service__advantage-card">
                        <p>Отличная цена</p>
                        <img src={img4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;