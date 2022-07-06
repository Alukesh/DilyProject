import React from 'react';
import ShopCard from "./ShopCard";
import {Link} from 'react-router-dom'
import shop1 from '../AllShops/shopМ-ВИДЕО.png'
import shop2 from '../AllShops/shopКОТОБОРМОТ.png'
import shop3 from '../AllShops/shopXIAOMI.png'
import shop4 from '../AllShops/shopДИВАНЫ ТУТ.png'
import shop5 from '../AllShops/shopДЕТСКИЙ.png'

const TopShops = () => {
    return (
        <div className={'container'}>
            <div className={'compilation__chapter'}>
                <h2>Популярные магазины</h2>
                <span className={'compilation__show_all'}>Смотреть все</span>
            </div>

            <div className="shops__top-row">

                <Link className={'shops__top-card'} to={'/shop/М-ВИДЕО'} style={{backgroundColor: '#F5253A'}} onClick={() => {window.scrollTo('pageYOffset', 0)}}>
                    <ShopCard img={shop1} name={'М-ВИДЕО'}/>
                </Link>
                <Link className={'shops__top-card'} to={'/shop/КОТ-ОБОРМОТ'} style={{backgroundColor: '#FC9024'}} onClick={() => {window.scrollTo('pageYOffset', 0)}}>
                    <ShopCard img={shop2} name={'КОТ-ОБОРМОТ'} />
                </Link>
                <Link className={'shops__top-card'} to={'/shop/XIAOMI'} style={{backgroundColor: '#00C65E'}} onClick={() => {window.scrollTo('pageYOffset', 0)}}>
                    <ShopCard img={shop3} name={'XIAOMI'} />
                </Link>
                <Link className={'shops__top-card'} to={'/shop/Диваны тут'} style={{backgroundColor: '#1EAE8B'}} onClick={() => {window.scrollTo('pageYOffset', 0)}}>
                    <ShopCard img={shop4} name={'ДИВАНЫ ТУТ'} />
                </Link>
                <Link className={'shops__top-card'} to={'/shop/ДЕТСКИЙ МИР'} style={{backgroundColor: '#01C1FB'}} onClick={() => {window.scrollTo('pageYOffset', 0)}}>
                    <ShopCard img={shop5} name={'ДЕТСКИЙ МИР'} />
                </Link>

            </div>

        </div>
    );
};

export default TopShops;