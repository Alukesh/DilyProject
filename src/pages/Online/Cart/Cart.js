import React from 'react';
import img from "./iphone11.png"

const Cart = () => {

    return (
        <div className="cart">
            <div className="container">
                <h2 className="cart__title">Корзина</h2>
                <div className="cart__content">
                    <img src={img} alt="" className="cart__img"/>
                    <div className="cart__product">
                        <p className="cart__phone">Смартфон</p>
                        <h3 className="cart__device"> Apple Iphone 12 mini 64 GB Green</h3>
                    </div>
                    <div className="cart__amount">
                        <button className="cart__amount-btn">-</button>
                        <p className="cart__amount-num">1</p>
                        <button className="cart__amount-btn">+</button>
                    </div>
                    <p className="cart__sum">70 000 ₽</p>
                    <span className="cart__basket">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_5828_4867" fill="white">
<rect x="1.61035" y="4" width="12" height="13" rx="1"/>
</mask>
<rect x="1.61035" y="4" width="12" height="13" rx="1" stroke="#DADCDC" strokeWidth="3" mask="url(#path-1-inside-1_5828_4867)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.64554 0C4.31118 0 3.99895 0.167101 3.81349 0.4453L3.27702 1.25H1.11035C0.696138 1.25 0.360352 1.58579 0.360352 2C0.360352 2.41421 0.696138 2.75 1.11035 2.75H14.1104C14.5246 2.75 14.8604 2.41421 14.8604 2C14.8604 1.58579 14.5246 1.25 14.1104 1.25H11.9437L11.4072 0.4453C11.2218 0.167101 10.9095 0 10.5752 0H4.64554Z" fill="#DADCDC"/>
</svg>

                    </span>
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
                <button className="cart__figuration greenBtn">Перейти к оформлению</button>
            </div>
        </div>
    );
};

export default Cart;