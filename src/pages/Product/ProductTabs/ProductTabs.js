import React, { useState } from 'react';
import ProductTabsDescr from "./ProductTabsDescr/ProductTabsDescr";
import ProductTabsInfo from "./ProductTabsInfo/ProductTabsInfo";
import ProductTabsAccessories from "./ProductTabsAccessories/ProductTabsAccessories";
import ProductTabsComment from "./ProductTabsComment/ProductTabsComment";
import { FormControl, MenuItem, Select } from '@mui/material';

const ProductTabs = ({ productName }) => {
    const handleChange = (event) => {
        setAge(event.target.value);
        setTab(event.target.value)
    };
    const [tab, setTab] = useState(1);
    const [age, setAge] = React.useState(1);


    return (
        <div className={'product__tabs'}>
            <div className={'product__tabs-top shadow-box'}>
                <span className={`product__tabs-btn ${tab === 1 && 'active'}`}
                    onClick={() => { setTab(1); window.scrollTo('pageYOffset', 300) }}>Описание
                </span>

                <span className={`product__tabs-btn ${tab === 2 && 'active'}`}
                    onClick={() => { setTab(2); window.scrollTo('pageYOffset', 470) }}>Характеристики
                </span>

                <span className={`product__tabs-btn ${tab === 3 && 'active'}`}
                    onClick={() => { setTab(3); window.scrollTo('pageYOffset', 440) }}>Аксессуары
                </span>

                <span className={`product__tabs-btn ${tab === 4 && 'active'}`}
                    onClick={() => { setTab(4); window.scrollTo('pageYOffset', 460) }}>Отзывы
                </span>

                <span className={`product__tabs-btn ${tab === 5 && 'active'}`}
                    onClick={() => { setTab(5); window.scrollTo('pageYOffset', 300) }}>Рассрочка и кредит
                </span>

                <span className={`product__tabs-btn ${tab === 6 && 'active'}`}
                    onClick={() => { setTab(6); window.scrollTo('pageYOffset', 300) }}>Наличие и доставка
                </span>

            </div>

            <div className='tabs-select'>
                <FormControl sx={{ m: 1, width: 250 }}>
                    <Select
                        style={{ width: '100%', padding: 0 }}
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={1} className={`product__tabs-btn ${tab === 1 && 'active'}`}>Описание</MenuItem>

                        <MenuItem value={2} style={{ width: '100%' }} className={`product__tabs-btn ${tab === 2 && 'active'}`} >Характеристики</MenuItem>

                        <MenuItem value={3} style={{ width: '100%' }} className={`product__tabs-btn ${tab === 3 && 'active'}`} >Аксессуары</MenuItem>

                        <MenuItem value={4} style={{ width: '100%' }} className={`product__tabs-btn ${tab === 4 && 'active'}`} >Отзывы</MenuItem>

                        <MenuItem value={5} style={{ width: '100%' }} className={`product__tabs-btn ${tab === 5 && 'active'}`} >Рассрочка и кредит</MenuItem>

                        <MenuItem value={6} style={{ width: '100%' }} className={`product__tabs-btn ${tab === 6 && 'active'}`} >Наличие и доставка</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={'product__tabs-bot shadow-box'}>
                {
                    tab === 1 ?
                        <ProductTabsDescr /> :
                        tab === 2 ?
                            <ProductTabsInfo /> :
                            tab === 3 ?
                                <ProductTabsAccessories /> :
                                tab === 4 ?
                                    <ProductTabsComment productName={productName} /> :
                                    ''
                }
            </div>
        </div>
    );
};

export default ProductTabs;