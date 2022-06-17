import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";

const Confidence = () => {
    return (
        <div className="confidence">
            <h2 className="confidence__title">Нам доверяют</h2>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                autoPlay={true}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
            <div className="container">
                    <SwiperSlide>
                        <div>
                            <div className="confidence__content">
                                <div className="confidence__comment">
                                    <p className="confidence__text">
                                        У меня сломался моноблок. Обзвонил много сервисов. Остановился на <br/>
                                        Dily и не прогадал. Порадовали сроки диагностики и ремонта. Отдал, <br/>
                                        через день получил, оказал перетерт шлейф. <br/>
                                        Спасибо!
                                    </p>
                                    <div className="confidence__person">
                                        <div className="confidence__people">
                                            <img src={img} alt="" className="confidence__img"/>
                                            <h3 className="confidence__name">Юрий</h3>
                                        </div>
                                        <p className="confidence__date">16.05.2021</p>
                                    </div>
                                </div>
                                <div className="confidence__comment">
                                    <p className="confidence__text">
                                        У меня сломался моноблок. Обзвонил много сервисов. Остановился на <br/>
                                        Dily и не прогадал. Порадовали сроки диагностики и ремонта. Отдал, <br/>
                                        через день получил, оказал перетерт шлейф. <br/>
                                        Спасибо!
                                    </p>
                                    <div className="confidence__person">
                                        <div className="confidence__people">
                                            <img src={img2} alt="" className="confidence__img"/>
                                            <h3 className="confidence__name">Иван</h3>
                                        </div>
                                        <p className="confidence__date">18.01.2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="confidence__content">
                                <div className="confidence__comment">
                                    <p className="confidence__text rest">
                                        «Спасибо, все сделали очень быстро и <br/>
                                        качественно »
                                    </p>
                                    <div className="confidence__person">
                                        <div className="confidence__people">
                                            <img src={img3} alt="" className="confidence__img"/>
                                            <h3 className="confidence__name">Елена</h3>
                                        </div>
                                        <p className="confidence__date">12.04.2021</p>
                                    </div>
                                </div>
                                <div className="confidence__comment">
                                    <p className="confidence__text rest">
                                        «Спасибо, все сделали очень быстро и <br/>
                                        качественно »
                                    </p>
                                    <div className="confidence__person">
                                        <div className="confidence__people">
                                            <img src={img4} alt="" className="confidence__img"/>
                                            <h3 className="confidence__name">Матвей</h3>
                                        </div>
                                        <p className="confidence__date">20.03.2021</p>
                                    </div>
                                </div>
                                <div className="confidence__comment">
                                    <p className="confidence__text rest">
                                        «Спасибо, все сделали очень быстро и <br/>
                                        качественно »
                                    </p>
                                    <div className="confidence__person">
                                        <div className="confidence__people">
                                            <img src={img5} alt="" className="confidence__img"/>
                                            <h3 className="confidence__name">Дмитрий</h3>
                                        </div>
                                        <p className="confidence__date">25.12.2020</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
            </div>
        </Swiper>
        </div>
    );
};

export default Confidence;