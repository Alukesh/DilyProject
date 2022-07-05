import React from 'react';
import img from "./1.png";
import {NavLink, useNavigate} from "react-router-dom";

const Send = () => {

    const navigate = useNavigate();

    return (
        <div className="send">
            <div className="container">
                <div className="send__list">
                    <h2 className="send__title">Нужна помощь?</h2>
                    <p className="send__subtitle">
                        Если вам нужна помощь, пожалуйста отправьте заявку. Постарайтесь <br/>
                        представить полную и честную информацию- в этом случае наша помощь <br/>
                        будет максимально эффективной. Будьте готовы предоставить документы <br/>
                        по нашему запросу.
                    </p>
                    <p className="send__text">ФИО <span style={{color: "#00C65E"}}>*</span></p>
                    <input placeholder="Иванов Иван" type="text" className="send__input"/>
                    <div className="send__content">
                        <div className="send__inputs">
                            <p className="send__text">Телефон <span style={{color: "#00C65E"}}>*</span></p>
                            <input placeholder="+ 7 (123)-456-78-90" type="text" className="send__inputs-input"/>
                        </div>
                        <div className="send__inputs">
                            <p className="send__text">E-mail <span style={{color: "#00C65E"}}>*</span></p>
                            <input placeholder="name@inbox.ru" type="email" className="send__inputs-input"/>
                        </div>
                    </div>
                        <p className="send__text">Помощь нужна лично Вам? <span style={{color: "#00C65E"}}>*</span></p>
                        <div className="send__checkbox">
                            <div className="send__item">
                                <input className="checkbox" type="radio" name="gender"/> <span className="send__choice">Да</span>
                            </div>
                            <div className="send__item">
                                <input className="checkbox" type="radio" name="gender"/> <span className="send__choice">Нет</span>
                            </div>
                        </div>
                        <p className="send__text">Что случилось? <span style={{color: "#00C65E"}}>*</span></p>
                        <textarea placeholder="Опишите ситуацию" className="send__textarea" name="comment" cols="85" rows="3"/>
                        <p className="send__descr">Опишите проблему, почему и какая помощь нужна (7-10 предложений)</p>
                        <p className="send__text send__photo">Фотографии</p>
                        <div className="send__images">
                            <img src={img} alt="" className="send__img"/>
                            <p className="send__text2">Перетащите фото или <label htmlFor={'file'} className={'advertisement__form-addPhoto_link'} >выберите их на своем компьютере</label></p>
                        </div>
                        <p className="send__descr">Здесь вы можете  загрузить фото профиля и фото документов</p>
                        <p className="send__text send__city">Выберите ваш город</p>
                        <select className="send__select">
                            <option value="" className="send__option">Не выбрано</option>
                            <option value="" className="send__option">Москва</option>
                            <option value="" className="send__option">Питер</option>
                            <option value="" className="send__option">Сочи</option>
                            <option value="" className="send__option">Новосибирск</option>
                            <option value="" className="send__option">Сургут</option>
                            {/*<option value="" className="send__option">Бишкек</option>*/}
                            {/*<option value="" className="send__option">Баткен</option>*/}
                            {/*<option value="" className="send__option">Джалал-Абад</option>*/}
                            {/*<option value="" className="send__option">Ош</option>*/}
                            {/*<option value="" className="send__option">Талас</option>*/}
                            {/*<option value="" className="send__option">Исык-Куль</option>*/}
                            {/*<option value="" className="send__option">Нарын</option>*/}
                        </select>
                        <div className="send__agree">
                            <div className="send__item">
                                <input type="checkbox"/> <span className="send__text2">
                            Я согласен с условиями обработки <br/>
                            персональных данных
                    </span>
                            </div>
                            <button className="send__btn greenBtn" onClick={() => navigate("../Charity")}>Отправить заявку</button>
                        </div>

                    <NavLink style={{paddingTop: "15px",  borderTop: "1px solid gray"}} to={"../Charity"} className="data__link">Вернуться</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Send;