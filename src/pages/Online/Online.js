import React, {useState} from 'react';
import "swiper/css";
import "swiper/css/pagination";
import cash1 from "../../pages/Board/Banner/5.svg";
import cash2 from "../../pages/Board/Banner/3.svg";
import brand1 from './apple.png'
import brand2 from './sums.png'
import brand3 from './mi.png'
import brand4 from './honor.png'
import brand5 from './sony.png'
import brand6 from './tefal.png'

import OnlineBanner from "./OnlineBanner/OnlineBanner";
import CompilationRow from "../Home/Compilation/CompilationRow/CompilationRow";
import {useSelector} from "react-redux";



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
                    <CompilationRow products={products} compilationCount={more} creator={''}/>

                    <div className={'compilation__chapter'}>
                        <h2>Новинки</h2>
                        <span className={'compilation__show_all'}>Смотреть все</span>
                    </div>
                    <CompilationRow products={products} creator={1}/>

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
                <CompilationRow products={products} />
            </div>



            <div className={'container'}>
                <div className={'compilation__chapter'}>
                    <h2>Популярные бренды</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <div className={'online__brands'}>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand1} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand2} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand3} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand4} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand5} alt=""/>
                    </div>
                    <div className={'online__brands-card shadow-box'}>
                        <img src={brand6} alt=""/>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default Online;