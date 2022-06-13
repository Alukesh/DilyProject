import React from 'react';
import ShopCard from "./ShopCard";
import shop1 from '../shopМ-ВИДЕО.png'
import shop2 from '../shopКОТОБОРМОТ.png'
import shop3 from '../shopXIAOMI.png'
import shop4 from '../shopДИВАНЫ ТУТ.png'
import shop5 from '../shopДЕТСКИЙ.png'

const TopShops = () => {
    return (
        <div className={'container'}>
            <div className={'compilation__chapter'}>
                <h2>Популярные магазины</h2>
                <span className={'compilation__show_all'}>Смотреть все</span>
            </div>

            <div className="shops__top-row">
                <ShopCard img={shop1} name={'М-ВИДЕО'} color={'#F5253A'}/>
                <ShopCard img={shop2} name={'КОТ-ОБОРМОТ'} color={'#FC9024'}/>
                <ShopCard img={shop3} name={'XIAOMI'} color={'#00C65E'}/>
                <ShopCard img={shop4} name={'ДИВАНЫ ТУТ'} color={'#1EAE8B'}/>
                <ShopCard img={shop5} name={'ДЕТСКИЙ МИР'} color={'#01C1FB'}/>
            </div>

        </div>
    );
};

export default TopShops;