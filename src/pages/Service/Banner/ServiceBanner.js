import React from 'react';
import bg from '../bg.png'

const ServiceBanner = () => {
    return (
        <div className={'serviceBanner'}>
            <div className={'serviceBanner__slider swiper-slider'}>
                <div className={'serviceBanner__slide'}>
                    <div className="container">
                        <div className={'serviceBanner__slide-info'}>
                            <h2 className={'serviceBanner__slide-title'}>Просто решаем сложные проблемы</h2>
                            <p className={'serviceBanner__slide-text'}>Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!</p>
                            <div className={'serviceBanner__slide-btns'}>
                                <button className={'serviceBanner__slide-btn greenBtn'}>Оставить заявку</button>
                                <button className={'serviceBanner__slide-btn shadow-box serviceBanner__slide-whiteBtn'}>Узнать статус ремонта</button>
                            </div>
                        </div>
                    </div>

                    {/*<img src={bg} alt=""/>*/}
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;