import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import cash1 from "../../pages/Board/Banner/5.svg";
import cash2 from "../../pages/Board/Banner/3.svg";
import brand1 from './apple.png'
import brand2 from './sums.png'
import brand3 from './mi.png'
import brand4 from './honor.png'
import brand5 from './sony.png'
import brand6 from './tefal.png'
import slide1 from './slide1.png'

import OnlineBanner from "./OnlineBanner/OnlineBanner";
import CompilationRow from "../Home/Compilation/CompilationRow/CompilationRow";
import {useSelector} from "react-redux";
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import img2 from "../Board/Slider/img/2.svg";
import img3 from "../Board/Slider/img/3.svg";




const Online = () => {
    const products = useSelector(s => s.products.products);
    const [more, setMore] = useState(5);

    return (
        <div className={'online'}>
            <OnlineBanner/>
            {/*online shop*/}

            <div>
                <div className="container">
                    <div className={'compilation__chapter'}>
                        <h2>Хиты продаж</h2>
                        <span className={'compilation__show_all'} onClick={() => setMore(more + 5 < products.length ? more + 5 : 5 )}>{more + 5 < products.length ? 'Смотреть все' : 'убрать все' }</span>
                    </div>
                    <CompilationRow sell={true} products={products} compilationCount={more} creator={''}/>

                    <div className={'compilation__chapter'}>
                        <h2>Новинки</h2>
                        <span className={'compilation__show_all'}>Смотреть все</span>
                    </div>
                    <CompilationRow sell={true} products={products} creator={1}/>

                </div>
            </div>



            <div className="container">
                <div className="online__cashBack">
                    <img className={'online__cashBack-img'} src={cash1} alt=""/>
                    <img className={'online__cashBack-img'} src={cash2} alt=""/>
                </div>
            </div>

            <div className="container">
                <div className={'compilation__chapter'}>
                    <h2>Скидки</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow sell={true} products={products} />
            </div>



            <div className='online__slider'>
                <div className="container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 25000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        autoPlay={true}
                        keyboard={true}
                        navigation={true}
                        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={'shadow-box online__slide online__slide1'}>
                                <div className={'online__slide-info'}>
                                    <p className={'online__slide-title'}>Новый IPhone 12</p>
                                    <p className={'online__slide-subtitle'}>Теперь в новых цветах</p>
                                    <p className={'online__slide-text'}>Уже в продаже</p>
                                    <button className={'online__slide-btn greenBtn'}>Купить</button>
                                </div>
                                <img className={'online__slide-img greenBtn'} src={slide1} alt="slideImg"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide><div><img src={img2} alt="img"/><p className='slider__category'>Телефоны и аксессуары</p></div></SwiperSlide>
                        <SwiperSlide><div><img src={img3} alt="img"/><p className='slider__category'>Электроника</p></div></SwiperSlide>
                    </Swiper>
                </div>

            </div>



            <div className={'container'}>
                <div className={'compilation__chapter'}>
                    <h2>Популярные бренды</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <div className={'online__brands'}>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand1} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand2} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand3} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand4} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand5} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img className={'online__brands-img'} src={brand6} alt=""/>
                    </div>
                </div>

            </div>


            <div className="container">
                <div className={'compilation__chapter'}>
                    <h2>Популярные смартфоны</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow sell={true} products={products} />

            </div>







        </div>
    );
};

export default Online;