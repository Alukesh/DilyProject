import React, {useState} from 'react';
import ProductTabsDescr from "./ProductTabsDescr/ProductTabsDescr";
import ProductTabsInfo from "./ProductTabsInfo/ProductTabsInfo";
import ProductTabsAccessories from "./ProductTabsAccessories/ProductTabsAccessories";
import ProductTabsComment from "./ProductTabsComment/ProductTabsComment";

const ProductTabs = ({productName}) => {
    const [tab, setTab] = useState(1);


    return (
        <div className={'product__tabs'}>
            <div className={'product__tabs-top shadow-box'}>
                <span className={`product__tabs-btn ${tab === 1 && 'active'}`}
                onClick={() => {setTab(1); window.scrollTo('pageYOffset', 300)}}>Описание
                </span>

                <span className={`product__tabs-btn ${tab === 2 && 'active'}`}
                onClick={() =>{ setTab(2); window.scrollTo('pageYOffset', 470)}}>Характеристики
                </span>

                <span className={`product__tabs-btn ${tab === 3 && 'active'}`}
                onClick={() =>{ setTab(3); window.scrollTo('pageYOffset', 440)}}>Аксессуары
                </span>

                <span className={`product__tabs-btn ${tab === 4 && 'active'}`}
                onClick={() =>{ setTab(4); window.scrollTo('pageYOffset', 460)}}>Отзывы
                </span>

                <span className={`product__tabs-btn ${tab === 5 && 'active'}`}
                onClick={() =>{ setTab(5); window.scrollTo('pageYOffset', 300)}}>Рассрочка и кредит
                </span>

                <span className={`product__tabs-btn ${tab === 6 && 'active'}`}
                onClick={() => {setTab(6); window.scrollTo('pageYOffset', 300)}}>Наличие и доставка
                </span>

            </div>


            <div className={'product__tabs-bot shadow-box'}>
                {
                    tab === 1 ?
                    <ProductTabsDescr/> :
                    tab === 2 ?
                    <ProductTabsInfo/> :
                    tab === 3 ?
                    <ProductTabsAccessories/> :
                    tab === 4 ?
                    <ProductTabsComment productName={productName}/> :
                    ''
                }
            </div>
        </div>
    );
};

export default ProductTabs;