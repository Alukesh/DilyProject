import React, {useState} from 'react';
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from './image 124.png'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ProductSlider = () => {
    const params = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const product = useSelector(s => s.products.products);
    // console.log(product);
    // const [prodImg, setProdImg] = useState('');


    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                Mousewheel={false}
                spaceBetween={100}
                slidesPerView={1}

                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 nurik"
            >
                    <SwiperSlide>
                        <div className={'product__slider-box'}>
                            <img className={'product__slider-Img'} src={`${ product ? product.filter(item => item.id === params.id)[0]?.image : ''}`} alt={''}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={'product__slider-Img'} src={img1} alt={''}/>
                    </SwiperSlide>

                <SwiperSlide>
                    <img className={'product__slider-Img'} src={img1} alt={''}/>
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}

                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper swiper-nurs product"
            >
                <div className='swiper__opacity'><SwiperSlide>
                    <img className={'product__slider-miniImg'}  src={`${ product ? product.filter(item => item.id === params.id)[0]?.image : ''}`} alt={''}/>
                </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'}  src={img1} alt={''}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={'product__slider-miniImg'}  src={img1} alt={''}/>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default ProductSlider;