import React from 'react';
import img from './banner.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from './banner shops shops.svg'
import img5 from './2.svg'
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper";
import img3 from "./banner shops tarif.png";
import img4 from "./1.svg";
import img6 from "./4.svg";
import img7 from "./5.svg";
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = () => {
    return (
        <section className='banner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                breakpoints={{
                    290: {
                        slidesPerView: 0.9,
                        spaceBetween: 3
                    },
                    690: {
                        slidesPerView: 2
                    },
                    790: {
                        slidesPerView: 2.3
                    },

                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                autoPlay={true}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to={'../service'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../shops'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img2} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../shops'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img3} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../shops'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img4} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../buying'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img5} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../shops'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img6} alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'../shops'} className='banner__content'><LazyLoadImage effect='blur' width={'100%'} height={220} src={img7} alt="img" /></Link>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;