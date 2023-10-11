import React, { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './image 124.png'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductSlider = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // console.log(product);
    // const [prodImg, setProdImg] = useState('');


    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                // Mousewheel={false}
                spaceBetween={100}
                slidesPerView={1}

                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 nurik"
            >
                <SwiperSlide>
                    <div className={'product__slider-box'}>
                        <img className={'product__slider-Img'} src={product?.image} alt={''} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className={'product__slider-Img'} src={img1} alt={''} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className={'product__slider-Img'} src={img1} alt={''} />
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                breakpoints={{
                    300: {
                        slidesPerView: 3
                    },
                    420: {
                        slidesPerView: 5
                    },
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper swiper-nurs product"
            >
                <div className='swiper__opacity'>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={product?.image} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'} src={img1} alt={''} />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default ProductSlider;