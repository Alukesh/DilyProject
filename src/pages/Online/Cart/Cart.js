import React, {useState} from 'react';
import img from "./iphone11.png"
import {useNavigate} from "react-router-dom";
import CardCart from "./CartCard/CardCart";
import {useSelector} from "react-redux";
import Sell from "../../Buying/Sell/Sell";

const Cart = () => {
    const user = useSelector(s => s.user.user);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="container">
                <h2 className="cart__title">Корзина</h2>
                <div className="cart__content">

                    <div className={'cart__content-column'}>

                        {
                                user?.cart && user?.cart[0]?
                                user.cart.map(item => (
                                <div key={item.id}>
                                    <CardCart id={item.id} image={item.image} title={item.title} price={item.price}/>
                                </div>
                                ))
                                    :
                                <div>
                                    <p>В корзине нет товаров,выберите что-нибудь из каталога</p>
                                </div>

                        }

                    </div>


                    <div className="cart__total">
                        <div className="cart__total-content">
                            <input placeholder="Промокод" type="text" className="cart__input"/>
                            <button className="cart__total-btn greenBtn">Применить</button>
                        </div>
                        <div className="cart__sale">
                            <p className="cart__text">Скидки и бонусы</p>
                            <p className="cart__sale-num">- 5400 ₽</p>
                        </div>
                        <div className="cart__result">
                            <p className="cart__sale-num">Всего</p>
                            <p className="cart__only">70 000 ₽</p>
                        </div>
                    </div>
                </div>
                {
                    user?.cart && user?.cart[0] ?
                        <button className="cart__figuration greenBtn" onClick={() => navigate("../Formalize")}>Перейти к
                            оформлению
                        </button>
                        :
                        <button className="cart__figuration greenBtn" onClick={() => {navigate("../online"); window.scrollTo('pageYOffset', 0);}}>Перейти в каталог
                        </button>

                }

            </div>
        </div>
    );
};

export default Cart;