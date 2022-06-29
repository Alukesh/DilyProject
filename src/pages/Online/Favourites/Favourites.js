import React, {useState} from 'react';
import {Link} from "react-router-dom";
import empty from './empty.png'
import {useSelector} from "react-redux";
import CompilationCard from "../../Home/Compilation/CompilationCard/CompilationCard";
import CompilationCardRowType from "../../Home/Compilation/CompilationCard/CompilationCardRowType";

const Favourites = () => {
    const [cardsRow, setCardsRow] = useState('blocks');
    const user = useSelector(s => s.user.user );
console.log( user);

    return (
        <div className={'container'}>
            <div className="favourites">
                <div className="phones__main-links">
                    <Link to={'/'} className="phones__main-link" >  Главная страница   </Link>
                    <p className="phones__main-link phones__main-link_active" > <span> ></span> Избранное </p>
                </div>

                <div className={'shadow-box favourites__main'}>
                    <div className={'favourites__main-top'}>
                        <h2>Избранное</h2>
                        <div className={'favourites__main-sort'}>
                            <p className={'favourites__main-sortType'}>Сортировать по
                                <span className={'favourites__main-sort-text'}>Новизне
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.20548 5.30888L0.381596 1.61512C0.1176 1.36009 0.117589 0.94661 0.381588 0.691586C0.645587 0.436561 1.07362 0.436571 1.33762 0.691593L4.68342 3.92366L8.02956 0.691264C8.29356 0.436239 8.7216 0.436249 8.98559 0.691271C9.24959 0.946293 9.2496 1.35978 8.9856 1.6148L5.17705 5.29388C5.17204 5.29904 5.16674 5.30385 5.16151 5.30889C4.93052 5.53171 4.57375 5.55981 4.31152 5.39255C4.27401 5.36862 4.23849 5.34077 4.20548 5.30888Z" fill="#363A45"/></svg>
                                </span>
                            </p>
                            <p className={'favourites__main-display'}>
                                <svg onClick={() => setCardsRow('blocks')} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.18359 6.46154H4.18359C4.73359 6.46154 5.18359 5.97692 5.18359 5.38462V1.07692C5.18359 0.484615 4.73359 0 4.18359 0H1.18359C0.633594 0 0.183594 0.484615 0.183594 1.07692V5.38462C0.183594 5.97692 0.633594 6.46154 1.18359 6.46154ZM1.18359 14H4.18359C4.73359 14 5.18359 13.5154 5.18359 12.9231V8.61539C5.18359 8.02308 4.73359 7.53846 4.18359 7.53846H1.18359C0.633594 7.53846 0.183594 8.02308 0.183594 8.61539V12.9231C0.183594 13.5154 0.633594 14 1.18359 14ZM7.18359 14H10.1836C10.7336 14 11.1836 13.5154 11.1836 12.9231V8.61539C11.1836 8.02308 10.7336 7.53846 10.1836 7.53846H7.18359C6.63359 7.53846 6.18359 8.02308 6.18359 8.61539V12.9231C6.18359 13.5154 6.63359 14 7.18359 14ZM13.1836 14H16.1836C16.7336 14 17.1836 13.5154 17.1836 12.9231V8.61539C17.1836 8.02308 16.7336 7.53846 16.1836 7.53846H13.1836C12.6336 7.53846 12.1836 8.02308 12.1836 8.61539V12.9231C12.1836 13.5154 12.6336 14 13.1836 14ZM7.18359 6.46154H10.1836C10.7336 6.46154 11.1836 5.97692 11.1836 5.38462V1.07692C11.1836 0.484615 10.7336 0 10.1836 0H7.18359C6.63359 0 6.18359 0.484615 6.18359 1.07692V5.38462C6.18359 5.97692 6.63359 6.46154 7.18359 6.46154ZM12.1836 1.07692V5.38462C12.1836 5.97692 12.6336 6.46154 13.1836 6.46154H16.1836C16.7336 6.46154 17.1836 5.97692 17.1836 5.38462V1.07692C17.1836 0.484615 16.7336 0 16.1836 0H13.1836C12.6336 0 12.1836 0.484615 12.1836 1.07692Z" fill={`${cardsRow === 'blocks' ? '#00C65E' : '#DADCDC'}`}/>
                                </svg>
                                <svg onClick={() => setCardsRow('rows')} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.18359 8.5H1.18359C0.909736 8.5 0.683594 8.27386 0.683594 8V6C0.683594 5.72614 0.909736 5.5 1.18359 5.5H3.18359C3.45745 5.5 3.68359 5.72614 3.68359 6V8C3.68359 8.27386 3.45745 8.5 3.18359 8.5ZM3.18359 13.5H1.18359C0.909736 13.5 0.683594 13.2739 0.683594 13V11C0.683594 10.7261 0.909736 10.5 1.18359 10.5H3.18359C3.45745 10.5 3.68359 10.7261 3.68359 11V13C3.68359 13.2739 3.45745 13.5 3.18359 13.5ZM3.18359 3.5H1.18359C0.909736 3.5 0.683594 3.27386 0.683594 3V1C0.683594 0.726142 0.909736 0.5 1.18359 0.5H3.18359C3.45745 0.5 3.68359 0.726142 3.68359 1V3C3.68359 3.27386 3.45745 3.5 3.18359 3.5ZM16.1836 8.5H6.18359C5.90974 8.5 5.68359 8.27386 5.68359 8V6C5.68359 5.72614 5.90974 5.5 6.18359 5.5H16.1836C16.4575 5.5 16.6836 5.72614 16.6836 6V8C16.6836 8.27386 16.4575 8.5 16.1836 8.5ZM16.1836 13.5H6.18359C5.90974 13.5 5.68359 13.2739 5.68359 13V11C5.68359 10.7261 5.90974 10.5 6.18359 10.5H16.1836C16.4575 10.5 16.6836 10.7261 16.6836 11V13C16.6836 13.2739 16.4575 13.5 16.1836 13.5ZM5.68359 3V1C5.68359 0.726142 5.90974 0.5 6.18359 0.5H16.1836C16.4575 0.5 16.6836 0.726143 16.6836 1V3C16.6836 3.27386 16.4575 3.5 16.1836 3.5H6.18359C5.90974 3.5 5.68359 3.27386 5.68359 3Z" fill="white" stroke={`${cardsRow === 'blocks' ? '#DADCDC' : '#00C65E'}`}/>
                                </svg>
                            </p>
                        </div>
                    </div>


                    {
                            !user?.favourites?.length ?
                            <div className={'favourites__main-empty'}>
                                <p>В избранном пусто {user.email} </p>
                                <p>Добавляйте товары в избранное,чтобы просмотреть или купить их позже</p>
                                <img src={empty} alt="empty"/>
                            </div> :
                            <>
                                <div className={'favourites__main-items'}>
                                    {
                                        user.favourites
                                            .map(item => (
                                                cardsRow === 'blocks' ?
                                            <CompilationCard title={item.title} img={item.image} price={item.price} id={item.id}/> :
                                            <CompilationCardRowType title={item.title} img={item.image} price={item.price} id={item.id}/>
                                        ))
                                    }
                                </div>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Favourites;