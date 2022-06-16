import React, {useState} from 'react';
import Format from "../Format/Format";
import Period from "../Period/Period";

const SideMenu = () => {
    const [category, setCategory] = useState('Все категории');
    const [slide, setSlide] = useState(false);


    return (
        <div className={'shadow-box phones__aside'}>
                <ul className={'phones__aside-category-list'}>
                    <li className={'phones__aside-category-title'} onClick={() => setSlide(!slide)}>{category}</li>
                    {
                        slide &&
                            <>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Все категории')}}>Все категории</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Смартфоны')}}>Смартфоны</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Мобильные телефоны')}}>Мобильные телефоны</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Кнопочные телефоны')}}>Кнопочные телефоны</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Запчасти  для мобильных телефонов')}}>Запчасти  для мобильных телефонов</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Наушники и гарнитуры')}}>Наушники и гарнитуры</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Зарядные устройста')}}>Зарядные устройста</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Кабели и адаптеры')}}>Кабели и адаптеры</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Внешние аккумуляторы')}}>Внешние аккумуляторы</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Чехлы ')}}>Чехлы </li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Держатели')}}>Держатели</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Стилусы')}}>Стилусы</li>
                            <li className={'phones__aside-category'} onClick={() =>{ setSlide(false); setCategory('Пленки')}}>Пленки</li>
                            </>
                    }
                </ul>

            <div className={'phones__aside-change'}>
                <p>Цена</p>
                <div className={'phones__aside-stopPrice'}>
                    <input placeholder={'от'} type="number"/>
                    <input placeholder={'до'} type="number"/>
                </div>
                <p className={'phones__aside-priceSlider'}>
                    <span className={'phones__aside-priceProgress'}> </span>
                </p>



                <Format/>
                <Period/>

            </div>


        </div>
    );
};

export default SideMenu;