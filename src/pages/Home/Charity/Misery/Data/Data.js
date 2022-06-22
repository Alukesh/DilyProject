import React from 'react';
import img from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import {NavLink} from "react-router-dom";

const Data = () => {
    return (
        <div className="data">
            <div className="container">
                <div className="data__content">
                    <img src={img} alt="" className="data__img"/>
                    <div className="data__person">
                        <h3 className="data__name">Семья Филатовых</h3>
                        <p className="data__city">Москва</p>
                    </div>
                    <button className="data__btn greenBtn">Написать сообщение</button>
                </div>
                <ul className="data__list">
                    <li className="data__list-item">Что случилось?</li>
                    <li className="data__item">В нашей семье умер отец, и на зарплату матери и пособия трудно содержать троих детей. Мы будем рады любой <br/>
                    помощи!  Мальчикам 11,7 и 3 года, нам очень нужна одежда на рост 87, 105 и 120 и обувь 25, 30 и 32 размера.</li>
                    <li className="data__list-item">Какая помощь нужна?</li>
                    <li className="data__item">Одежда, еда, книги, игрушки, финансовая помощь</li>
                    <li className="data__list-item">Контакты для связи реквизиты для помощи</li>
                    <li className="data__item">Одежда, еда, книги, игрушки, финансовая помощь</li>
                    <li className="data__list-item">Контакты для связи и реквизиты для помощи</li>
                    <li className="data__item">+ 7 (123) -456- 78 -00, перевод денежных средств по Сбербанк онлайн</li>
                    <li className="data__list-item">Документы, подтверждающие необходимость помощи </li>
                    <div className="data__images data__item">
                        <img src={img2} alt="" className="data__image"/>
                        <img src={img3} alt="" className="data__image"/>
                    </div>
                </ul>
                <NavLink className="data__link" to={"../Charity"}>Вернуться</NavLink>
            </div>
        </div>
    );
};

export default Data;