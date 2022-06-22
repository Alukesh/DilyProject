import React from 'react';
import image from "./avatar.png";
import image2 from "./avatar (1).png";
import image3 from "./avatar (2).png";
import image4 from "./avatar (3).png";
import img from "./Frame 149.png"
import {useNavigate} from "react-router-dom";

const Misery = () => {

    const navigate = useNavigate();

    return (
        <div className="misery">
            <div className="container">
                <h2 className="misery__title">Нам нужна помощь</h2>
                <div className="misery__content">
                    <div className="misery__card">
                        <div className="misery__person">
                            <img src={image} alt="" className="misery__img"/>
                            <div className="misery__people">
                                <h3 className="misery__name">Иван Петров</h3>
                                <p className="misery__city">Москва</p>
                            </div>
                        </div>
                        <ul className="misery__list">
                            <li className="misery__list-item">Что случилось?</li>
                            <li className="misery__item">Потеря работы</li>
                            <li className="misery__list-item">Какая помощь нужна?</li>
                            <li className="misery__item">Одежда,еда</li>
                            <button className="misery__btn greenBtn">Подробнее</button>
                        </ul>
                </div>
                    <div className="misery__card">
                        <div className="misery__person">
                            <img src={image2} alt="" className="misery__img"/>
                            <div className="misery__people">
                                <h3 className="misery__name">Настя Мамонтова</h3>
                                <p className="misery__city">Москва</p>
                            </div>
                        </div>
                        <ul className="misery__list">
                            <li className="misery__list-item">Что случилось?</li>
                            <li className="misery__item">Муковисцидоз</li>
                            <li className="misery__list-item">Какая помощь нужна?</li>
                            <li className="misery__item">Финансовая-95 000 ₽</li>
                            <button className="misery__btn greenBtn">Подробнее</button>
                        </ul>
                </div>
                    <div className="misery__card">
                        <div className="misery__person">
                            <img src={image3} alt="" className="misery__img"/>
                            <div className="misery__people">
                                <h3 className="misery__name">Аня Васильева</h3>
                                <p className="misery__city">Москва</p>
                            </div>
                        </div>
                        <ul className="misery__list">
                            <li className="misery__list-item">Что случилось?</li>
                            <li className="misery__item">Врожденный порок сердца, <br/>
                                нужна операция</li>
                            <li className="misery__list-item">Какая помощь нужна?</li>
                            <li className="misery__item">Финансовая-250 000 ₽</li>
                            <button className="misery__btn greenBtn">Подробнее</button>
                        </ul>
                </div>
                    <div className="misery__card">
                        <div className="misery__person">
                            <img src={image4} alt="" className="misery__img"/>
                            <div className="misery__people">
                                <h3 className="misery__name">Семья Филатовых</h3>
                                <p className="misery__city">Москва</p>
                            </div>
                        </div>
                        <ul className="misery__list">
                            <li className="misery__list-item">Что случилось?</li>
                            <li className="misery__item">Умер отец</li>
                            <li className="misery__list-item">Какая помощь нужна?</li>
                            <li className="misery__item">Одежда, еда, книги, игрушки, <br/>
                            финансовая помощь</li>
                            <button className="misery__btn greenBtn" onClick={() => navigate("../data")}>Подробнее</button>
                        </ul>
                </div>
            </div>
                <button className="misery__button">Показать еще
                    <span><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.02189 4.80888L0.198002 1.11512C-0.0659942 0.860095 -0.0660046 0.44661 0.197994 0.191586C0.461993 -0.0634387 0.890028 -0.0634287 1.15402 0.191593L4.49983 3.42366L7.84597 0.191264C8.10997 -0.0637608 8.538 -0.0637508 8.802 0.191271C9.066 0.446293 9.066 0.859778 8.80201 1.1148L4.99346 4.79388C4.98845 4.79904 4.98314 4.80385 4.97792 4.80889C4.74693 5.03171 4.39016 5.05981 4.12792 4.89255C4.09042 4.86862 4.0549 4.84077 4.02189 4.80888Z" fill="#363A45"/>
</svg>
</span>
                </button>
                    <img style={{width: '100%'}} src={img} alt=""/>
        </div>
    </div>
    );
};

export default Misery;