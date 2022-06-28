import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Sell from "../../../Buying/Sell/Sell";
import {useSelector} from "react-redux";

const Formalize = () => {

    const [overlay, setOverlay] = useState(false);
    const user = useSelector(s => s.user.user);

    const navigate = useNavigate();

    return (
        <div className="formalize">
           <div className="container">
               <h2 className="formalize__title">
                   <span onClick={() => navigate("../Cart")}>
                   <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.54887 13.8281L11.1704 24.45C11.9037 25.1833 13.0927 25.1833 13.826 24.45C14.5594 23.7167 14.5593 22.5277 13.826 21.7944L4.53213 12.5005L13.827 3.20565C14.5603 2.47231 14.5603 1.28333 13.8269 0.550007C13.0936 -0.183317 11.9046 -0.183346 11.1713 0.549984L0.592018 11.1293C0.577161 11.1432 0.563356 11.1579 0.548848 11.1724C-0.0918764 11.8141 -0.172665 12.8051 0.308288 13.5336C0.377088 13.6377 0.457176 13.7364 0.54887 13.8281Z" fill="#DADCDC"/>
</svg>
               </span> Оформление заказа
               </h2>
               <div className="formalize__content">
                   <div className="formalize__compound">
                       <p className="formalize__order">Состав заказа</p>
                       <p className="formalize__change">Изменить</p>
                   </div>
                   <div className="formalize__model">
                       <div className="formalize__svg">
                           <p className="formalize__text"> Смартфон Apple Iphone 12 mini 64 GB Green
                           </p>
                           <span><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.525391" y="2.29688" width="2" height="13.8122" rx="1" transform="rotate(-45 0.525391 2.29688)" fill="#DADCDC"/>
<rect width="2" height="13.8122" rx="1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.525391 10.5703)" fill="#DADCDC"/>
</svg>
</span> <p className="formalize__num">1</p>
                       </div>
                       <p className="formalize__price">70 000 ₽</p>
                   </div>
                   <div className="formalize__total">
                       <p className="formalize__total-text">Всего</p>
                       <p className="formalize__result">70 000 ₽</p>
                   </div>
               </div>
               <div className="formalize__content">
                   <p className="formalize__orders">Способ получения в Москве</p>
                   <div className="formalize__btns">
                       <button className="formalize__btn">Доставка </button>
                       <button className="formalize__button">Самовывоз</button>
                   </div>
                   <div className="formalize__inputs">
                       <h4 className="formalize__city">Город доставки</h4>
                       <select name="city" className="formalize__select">
                           <option className="formalize__option">Не выбрано</option>
                           <option className="formalize__option">Москва</option>
                           <option className="formalize__option">Питер</option>
                           <option className="formalize__option">Сочи</option>
                           <option className="formalize__option">Новосибирск</option>
                           <option className="formalize__option">Сургут</option>
                           <option className="formalize__option">Не Россия</option>
                       </select>
                       <div className="formalize__period">
                           <div className="formalize__date">
                               <h4 className="formalize__date-title">Дата</h4>
                               <select className="formalize__data">
                                   <option className="formalize__option">30 июня</option>
                                   <option className="formalize__option">30 июля</option>
                                   <option className="formalize__option">30 мая</option>
                                   <option className="formalize__option">30 сентября</option>
                                   <option className="formalize__option">30 декабря</option>
                               </select>
                           </div>
                           <div className="formalize__time">
                               <h4 className="formalize__clock">Время</h4>
                               <select className="formalize__tense">
                                   <option className="formalize__option">с 18:00 до 21:00 </option>
                                   <option className="formalize__option">с 17:00 до 20:00 </option>
                                   <option className="formalize__option">с 16:00 до 19:00 </option>
                                   <option className="formalize__option">с 15:00 до 18:00 </option>
                                   <option className="formalize__option">с 14:00 до 17:00 </option>
                               </select>
                           </div>
                       </div>
                       <div className="formalize__house">
                           <div className="formalize__home">
                               <h4 className="formalize__street">Улица/корпус/дом</h4>
                               <input placeholder="Орджоникидзе, 35,к.2" type="text" className="formalize__input"/>
                           </div>
                           <div className="formalize__apartment">
                               <h4 className="formalize__flat">Квартира </h4>
                               <input placeholder="35" type="text" className="formalize__input"/>
                           </div>
                       </div>
                       <h3 className="formalize__courier">Комментарий курьеру</h3>
                       <input placeholder="Домофон" type="text" className="formalize__comment"/>
                   </div>
               </div>
               <button className="formalize__btn-white">Далее</button>
               <div className="formalize__content">
                   <h3 className="formalize__way">Способ оплаты</h3>
                   <div className="formalize__cards">
                       <div className="formalize__card">
                           <div className="formalize__render">
                               <span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2.5" width="12" height="12" rx="6" fill="white" stroke="#00C65E" strokeWidth="4"/>
</svg>
</span>
                               <h4 className="formalize__payment">Онлайн</h4>
                           </div>
                               <p className="formalize__descr">Картами Visa, Mastercard, МИР</p>
                       </div>
                       <div className="formalize__card">
                           <div className="formalize__render">
                                <span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="15" rx="7.5" fill="white" stroke="#DADCDC"/>
</svg>
</span>
                               <h4 className="formalize__payment">Рассрочка онлайн</h4>
                           </div>
                               <p className="formalize__descr">
                                   Список банков партнеров
                               </p>
                           <p className="formalize__link">Заполнить анкету на сайте</p>
                       </div>
                       <div className="formalize__card">
                           <div className="formalize__render">
                              <span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="15" rx="7.5" fill="white" stroke="#DADCDC"/>
</svg>
</span>
                               <h4 className="formalize__payment">При получении</h4>
                           </div>
                               <p className="formalize__descr">Наличными или картой </p>
                       </div>
                       <div className="formalize__card">
                           <div className="formalize__render">
                               <span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="15" rx="7.5" fill="white" stroke="#DADCDC"/>
</svg>
</span>
                               <h4 className="formalize__payment">Электронными деньгами</h4>
                           </div>
                               <p className="formalize__descr">ЮMoney, QIWI Wallet</p>
                       </div>
                   </div>
               </div>
               <button className="formalize__btn-white">Далее</button>
               <div className="formalize__content">
                   <h3 className="formalize__information">Данные получателя</h3>
                   <div className="formalize__record">
                       <div className="formalize__facts">
                           <p className="formalize__name">Имя</p>
                           <input placeholder="Петр" type="text" className="formalize__name-input"/>
                       </div>
                       <div className="formalize__facts">
                           <p className="formalize__name">Фамилия</p>
                           <input placeholder="Иванов" type="text" className="formalize__name-input"/>
                       </div>
                   </div>
                   <div className="formalize__record">
                       <div className="formalize__facts">
                           <p className="formalize__name">Телефон</p>
                           <input placeholder="+ 7 (123)-456-78-90" type="text" className="formalize__name-input"/>
                       </div>
                       <div className="formalize__facts">
                           <p className="formalize__name">E- mail</p>
                           <input placeholder="name@inbox.ru" type="email" className="formalize__name-input"/>
                       </div>
                   </div>
               </div>
               <div className="formalize__bottom">
                   <button type='button' className="formalize__Btn greenBtn" onClick={() =>  {
                       navigate('/');
                       user.email.length ? localStorage.setItem('order', true ) : navigate('/auth');
                       window.scrollTo('pageYOffset', 0);
                   } }>Оформить заказ</button>
                   <p className="formalize__bottom-text">
                       Нажимая кнопку оформить вы подтверждаете свое <br/>
                       согласие с <span className="formalize__condition">условиями продажи в интернет-магазине Dily</span>
                   </p>
               </div>
           </div>
        </div>
    );
};

export default Formalize;