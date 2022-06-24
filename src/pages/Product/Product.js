import React from 'react';

const Product = () => {
    return (
        <div className={'container'}>
            <div className={'product'}>
                <div className="product__info shadow-box">
                    <h2 className={'product__title'}>Смартфон Apple iPhone 11 128GB с новой комплектацией (зеленый)</h2>
                    <div className={'product__top'}>
                        <div className={'product__slider'}> </div>


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

                            </div>

                        </div>


                        <div className={'product__price'}> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;