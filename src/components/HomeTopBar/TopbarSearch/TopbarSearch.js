import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { AiOutlineSearch } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';



const TopbarSearch = () => {
    const products = useSelector(s => s.products.products);
    const [search, setSearch] = useState('');
    const foundBySearch = products.length ? products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .map(el => (
            <div key={el.id} className={'header-under__search-card'}>
                <LazyLoadImage effect='blur' className={'header-under__search-img'} src={el.image} alt="search" />
                <div className={'header-under__search-info'}>
                    <p>{el.title}</p>
                    <p>{el.price} ₽</p>
                </div>
            </div>
        )) : 'Поиск'


    return (
        <>
            <span className='header-under__icon'><AiOutlineSearch /></span>
            <input className='header-under__' placeholder='Я хочу купить' type="text" onChange={({ target }) => setSearch(target.value)} />
            {
                search &&
                <>
                    <div className={'overlay'} onClick={() => setSearch('')}> </div>
                    <div className={'shadow-box header-under__search-block'}>
                        {
                            foundBySearch[0] || !products.length ? foundBySearch :
                                'не найдено'
                        }
                    </div>
                </>

            }
            {/* <button className='header-under__btn'>Найти</button> */}
        </>
    );
};

export default TopbarSearch;