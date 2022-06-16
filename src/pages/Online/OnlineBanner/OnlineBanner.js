import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper";
import sams from './samsung.png'
import logo from '../../../Layout/Header/logo.svg'

const OnlineBanner = () => {
    return (
        <div className={'online__banner'}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="online__banner-slide online__banner-slide1">
                        <div className={'online__banner-slide1-info container'}>
                            <p className={'online__banner-slide1-title'}> Скидки от
                                <img src={logo} alt=""/></p>
                            <p className={'online__banner-slide1-text'}>На смартфоны Samsung</p>
                            <button className={'online__banner-slide1-btn greenBtn'}>Подробнее</button>
                        </div>


                        <img src={sams} alt=""/>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="online__banner-slide online__banner-slide1">
                        <div className={'online__banner-slide1-info container'}>
                            <p className={'online__banner-slide1-title'}> Для
                                <img src={logo} alt=""/></p>
                            <p className={'online__banner-slide1-text'}>На смартфоны Samsung</p>
                            <button className={'online__banner-slide1-btn greenBtn'}>Подробнее</button>
                        </div>


                        <img src={sams} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OnlineBanner;