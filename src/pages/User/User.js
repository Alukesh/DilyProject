import React, {useState} from 'react';
import {CgArrowsExchange} from "react-icons/cg";
import {IoMdEye} from "react-icons/io";
import {Link} from "react-router-dom";
import InputMask from "react-input-mask"


const User = () => {

    const [tab, setTab] = useState(false);
    const [userChange, setUserChange] = useState(false);
    const {user, setUser} = useState('');


    return (
        <div className="user">
            <div className="container">
                <div className="user__date">
                    <h2 className="user__title">Личные данные</h2>
                    <div className="user__btns">
                        <Link onClick={() => setTab(1)}
                              className={`user__btn ${tab === 1 && "user__btn_active"}`} to={"/order"}>История заказов</Link>
                        <Link onClick={() => setTab(2)}
                              className={`user__btn ${tab === 2 && "user__btn_active"}`} to={"/user"}>Настройки</Link>
                    </div>
                </div>
                <div className="user__content shadow-box">
                    <p className="user__change">
                        <span className="user__change" onClick={() => setUserChange(!userChange)}>
                            {userChange ? 'Отменить' : <span> <CgArrowsExchange/> Изменить</span>}
                        </span>
                    </p>
                    <div className="user__other">
                        <div className="user__name">
                            <p className="user__text">Имя и фамилия</p>
                            <input placeholder="Петр Иванов" type="text" className="user__input"/>
                        </div>
                        <div className="user__phone">
                            <p className="user__text">Телефоны</p>
                            {userChange ? <InputMask   type="text" className="user__input"/> : ""}
                        </div>
                        <div className="user__email">
                            <p className="user__text">E-mail</p>
                            <input placeholder="Ivan@inbox.ru" type="email" className="user__input"/>
                        </div>
                        <div className="user__login">
                            <p className="user__text">Login</p>
                            <input placeholder="IvanPP" type="text" className="user__input"/>
                        </div>
                        <div className="user__city">
                            <p className="user__text">Город</p>
                            <input placeholder="Москва" type="text" className="user__input"/>
                        </div>
                        <div className="user__password">
                            <p className="user__text">Смена пароля</p>
                            <div className="user__inputs">
                                <p className="user__text">Текущий пароль <span className="user__span">*</span></p>
                                <input style={{marginBottom: "10px"}} placeholder="********" type="password" className="user__input"/>
                                {/*<span className="user__icon"><IoMdEye/></span>*/}
                                <p className="user__text">Новый пароль  <span className="user__span">*</span></p>
                                <input type="password" className="user__input"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;