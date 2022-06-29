import React from 'react';

const ProductTabs = () => {
    return (
        <div className={'product__tabs'}>
            <div className={'product__tabs-top shadow-box'}>
                <span className={'product__tabs-btn active'}>Описание</span>
                <span className={'product__tabs-btn'}>Характеристики</span>
                <span className={'product__tabs-btn'}>Аксессуары</span>
                <span className={'product__tabs-btn'}>Отзывы</span>
                <span className={'product__tabs-btn'}>Рассрочка и кредит</span>
                <span className={'product__tabs-btn active'}>Наличие и доставка</span>
            </div>
        </div>
    );
};

export default ProductTabs;