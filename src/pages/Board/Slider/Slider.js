import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './img/1.svg'
import img2 from './img/2.svg'
import img3 from './img/3.svg'
import img4 from './img/4.svg'
import img5 from './img/5.svg'
import img6 from './img/6.svg'
import img7 from './img/7.svg'
import img8 from './img/8.svg'
import img9 from './img/10.svg'
import img10 from './img/11.svg'
import img11 from './img/12.svg'
import img12 from './img/13.svg'
import img13 from './img/14.svg'
import img14 from './img/15.svg'
import img15 from './img/16.svg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Navigation, Mousewheel, Keyboard, Autoplay} from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slider = () => {

    return (
        <div className='slider'>
            <div className="">
                <h2 className='container slider__title'>Вы ищете: </h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 2
                        },
                        700: {
                            slidesPerView: 4
                        },
                        960: {
                            slidesPerView: 6
                        },
                        1100: {
                            slidesPerView: 8
                        },
                    }}
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
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img1} alt="img"/><p className='slider__category'>Личные вещи</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img2} alt="img"/><p className='slider__category'>Телефоны и аксессуары</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img3} alt="img"/><p className='slider__category'>Электроника</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img4} alt="img"/><p className='slider__category'>Бытовая техника</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img5} alt="img"/><p className='slider__category'>Дом и сад</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img6} alt="img"/><p className='slider__category'>Животные</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img7} alt="img"/><p className='slider__category'>Товары для детей</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img8} alt="img"/><p className='slider__category'>Хобби и отдых</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img9} alt="img"/><p className='slider__category'>Транспорт</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img10} alt="img"/><p className='slider__category'>Автотовары</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img11} alt="img"/><p className='slider__category'>Недвижимость</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img12} alt="img"/><p className='slider__category'>Работа</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img13} alt="img"/><p className='slider__category'>Услуги</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img14} alt="img"/><p className='slider__category'>Для бизнеса</p></div></SwiperSlide>
                    <SwiperSlide><div><LazyLoadImage effect='blur' width={120} src={img15} alt="img"/><p className='slider__category'>Отдам даром</p></div></SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Slider;