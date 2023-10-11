import React from 'react';
import ipad from '../Apple/ipad.png'
import img1 from "../Apple/pro.jpg";
import img2 from "../Apple/air.png";
import img3 from "../Apple/mini.jpg";
// import Options from "../FirstBanner/Options/Options";

const ServiceIpad = () => {
    return (
        <>
            <div className={'serviceIpad'}>
                <div className={'serviceBanner__slider swiper-slider'}>
                    <div className={'serviceBanner__slide'}>
                        <div className="container">
                            <div className="serviceIpad__slide">
                                <div className={'serviceBanner__slide-info'}>
                                    <h2 className={'serviceBanner__slide-title'}>Ремонт Ipad </h2>
                                    <p className={'serviceBanner__slide-text'}>Ремонт планшетов любой сложности неисправности: от замены кнопок до материнской платы.</p>
                                    <div className={'serviceBanner__slide-btns'}>
                                        <button className={'serviceBanner__slide-btn greenBtn'}>Оставить заявку</button>
                                    </div>
                                </div>
                                <img src={ipad} alt="Ipad" loading='lazy'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={'container'}>
                <div className={'service__options'}>
                    <h2 className={'service__options-title'}>Модели</h2>
                    <div className={'container service__options-row'}>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img1} alt="Apple"/>
                            iPad Pro
                        </div>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img2} alt="Телефоны"/>
                            iPad Air
                        </div>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img3} alt="Телефоны"/>
                            iPad mini
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ServiceIpad;