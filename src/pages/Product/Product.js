import React from 'react';
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductSlider from "./ProductSlider/ProductSlider";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Vend from "../Home/Charity/Vend/Vend";
import ProductTabs from "./ProductTabs/ProductTabs";
import CompilationRow from "../Home/Compilation/CompilationRow/CompilationRow";

const Product = () => {
    const params = useParams();
    const products = useSelector(s => s.products.products);
    const product = products?.filter(item => item.id === params.id)[0] ;
    console.log(product);

    return (
        <div className={'container'}>
            <div className={'product'}>
                <div className="product__info shadow-box">
                    <h2 className={'product__title'}> {product?.title}</h2>
                    <div className={'product__top'}>

                        <div className={'product__slider'}>
                            <ProductSlider/>
                        </div>


                        <div className={'product__characteristics'}>
                            <div className="product__characteristics-first">
                                <p className={'product__characteristics-first-title'}>Объем памяти</p>
                                <span className={'product__characteristics-first-btn shadow-box'}>64</span>
                                <span className={'product__characteristics-first-btn shadow-box'}>128</span>
                                <span className={'product__characteristics-first-btn shadow-box'}>256</span>
                            </div>

                            <div className="product__characteristics-second">
                                <p className={'product__characteristics-first-title'}>Цвет</p>
                                <span className={'product__characteristics-second-btn'} style={{backgroundColor:'#C4C4C4'}}> </span>
                                <span className={'product__characteristics-second-btn'} style={{backgroundColor:'#CCEFDB'}}> </span>
                                <span className={'product__characteristics-second-btn'} style={{backgroundColor:'#363A45'}}> </span>
                                <span className={'product__characteristics-second-btn'} style={{backgroundColor:'#FFB762'}}> </span>

                            </div>

                            <div className="product__characteristics-third">
                                <p className={'product__characteristics-first-title'}>Характеристики</p>
                                <p className={'product__characteristics-third-text'}>Диагональ: <span>5 дюймов</span></p>
                                <p className={'product__characteristics-third-text'}>Объем встроенной памяти: <span>32 ГБ</span></p>
                                <p className={'product__characteristics-third-text'}>Объем оперативной памяти:<span>3 ГБ</span></p>
                            </div>
                            <p className={'product__characteristics-third-drop'}>Все характеристики</p>
                        </div>


                        <div className={'product__price-column'}>
                            <ProductPrice id={product?.id} img={product?.image} title={product?.title} price={product?.price}/>
                            <button className={'product__price-column-btn greenBtn'}>Подробнее про доставку и оплату
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.29103 6.58451L2.11976 11.6405C1.76273 11.9896 1.18385 11.9896 0.826814 11.6406C0.46978 11.2915 0.469794 10.7255 0.826824 10.3765L5.35171 5.95258L0.826362 1.52823C0.469328 1.17917 0.469342 0.613209 0.826373 0.264148C1.1834 -0.0849142 1.76228 -0.0849274 2.11932 0.264138L7.27002 5.29988C7.27726 5.30651 7.28398 5.31352 7.29104 5.32043C7.60299 5.62585 7.64232 6.09758 7.40816 6.44431C7.37466 6.4939 7.33567 6.54087 7.29103 6.58451Z" fill="white"/></svg>
                            </button>
                        </div>
                    </div>

                    <ProductTabs productName={product?.title}/>



                    <div className="container">
                        <div className={'compilation__chapter'}>
                            <h2>Вместе с этим товаром покупают</h2>
                            <span className={'compilation__show_all'}>Смотреть все</span>
                        </div>
                        <CompilationRow sell={true} products={products} creator={'Apple'} />

                    </div>


                </div>


                <Vend/>
            </div>
        </div>
    );
};

export default Product;