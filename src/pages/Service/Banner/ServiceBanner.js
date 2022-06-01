import React from 'react';
import bg from '../bg.png'

const ServiceBanner = () => {
    return (
        <div className={'serviceBanner'}>
            <div className={'serviceBanner__slider swiper-slider'}>
                <div className={'serviceBanner__slide'}>
                    <div className="container">
                        <div className={'serviceBanner__slide-info'}>
                            <h2>Просто решаем сложные проблемы</h2>

                        </div>
                    </div>

                    <img src={bg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;