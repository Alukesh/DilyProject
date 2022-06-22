import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {AiOutlineSearch} from 'react-icons/ai'



const TopbarSearch = () => {
    const products = useSelector(s => s.products.products);
    const [search, setSearch] = useState('');



    return (
        <div className='header-under__cont'>
            <span className='header-under__icon'><AiOutlineSearch/></span>
            <input className='header-under__search' placeholder='Я хочу купить' type="text" onChange={(e) => setSearch(e.target.value)}/>
            {
                search &&
                    <>
                        <div className={'overlay'} onClick={() => setSearch('')}> </div>
                        <div className={'shadow-box header-under__search-block'}>

                            {
                                products.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).length ?
                                    products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                                        .map(el => (
                                            <div className={'header-under__search-card'}>
                                                <img className={'header-under__search-img'} src={el.image} alt="search"/>
                                                <div className={'header-under__search-info'}>
                                                    <p>{el.title}</p>
                                                    <p>{el.price} ₽</p>
                                                </div>
                                            </div>
                                        )) :
                                    'не найдено'
                            }

                        </div>
                    </>

            }
            <button className='header-under__btn'>Найти</button>
        </div>
    );
};

export default TopbarSearch;