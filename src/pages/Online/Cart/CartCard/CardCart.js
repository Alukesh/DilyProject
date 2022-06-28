import React from 'react';
import img from "../iphone11.png";
import {findUser} from "../../../../redux/reducers/user";
import {useDispatch, useSelector} from "react-redux";

const CardCart = ({image, title, price, id}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();



    return (
        <div className={'cart__card'}>
            <img src={image} alt="" className="cart__img"/>
            <div className="cart__product">
                <p className="cart__phone">Смартфон</p>
                <h3 className="cart__device"> {title}</h3>
            </div>
            <div className="cart__amount">
                <button className="cart__amount-btn">-</button>
                <p className="cart__amount-num">1</p>
                <button className="cart__amount-btn">+</button>
            </div>
            <p className="cart__sum">{price} ₽</p>
            <span className="cart__basket" onClick={() => {
                localStorage.setItem('user', JSON.stringify({...user, cart:
                        [...user.cart.filter((el) => el.id !== id)]
                } ));
                dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));

            }}>
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_5828_4867" fill="white">
                        <rect x="1.61035" y="4" width="12" height="13" rx="1"/>
                        </mask>
                        <rect x="1.61035" y="4" width="12" height="13" rx="1" stroke="#DADCDC" strokeWidth="3"
                              mask="url(#path-1-inside-1_5828_4867)"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.64554 0C4.31118 0 3.99895 0.167101 3.81349 0.4453L3.27702 1.25H1.11035C0.696138 1.25 0.360352 1.58579 0.360352 2C0.360352 2.41421 0.696138 2.75 1.11035 2.75H14.1104C14.5246 2.75 14.8604 2.41421 14.8604 2C14.8604 1.58579 14.5246 1.25 14.1104 1.25H11.9437L11.4072 0.4453C11.2218 0.167101 10.9095 0 10.5752 0H4.64554Z"
                              fill="#DADCDC"/>
                        </svg>

                        </span>
        </div>

    );
};

export default CardCart;