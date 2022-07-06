import React from 'react';
import img from "../iphone11.png";
import {findUser} from "../../../../redux/reducers/user";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";





const CardCart = ({image, title, price, id}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    console.log(user.cart.filter(item => item.id === id)[0]);


    const addCount = () => {
        localStorage.setItem('user', JSON.stringify({...user, cart:
                user.cart.map((el) => {
                    if ( el.id !== id) return el;
                        return {...el, count: +el.count + 1}
                })
        } ));
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };
    const decrCount = () => {
        localStorage.setItem('user', JSON.stringify({...user, cart:
                user.cart.map((el) => {
                    if ( el.id !== id) return el;

                    if (el.count === 1) return el;
                    return {...el, count: +el.count - 1}
                })
        } ));
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };


    const deleteCard = () => {
        localStorage.setItem('user', JSON.stringify({...user, cart:
                [...user.cart.filter((el) => el.id !== id)]
        } ));
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };



    return (
        <div className={'cart__card'}>
            <Link to={`/product/${id}`} className={'cart__card-link'}>
                {/*<img src={image} alt="" className="cart__img"/>*/}
                <div className={'cart__img'} style={{background: `url(${image}) center/contain no-repeat`}}/>
                <div className="cart__product">
                    <p className="cart__phone">Смартфон</p>
                    <h3 className="cart__device"> {title}</h3>
                </div>
            </Link>

            <div className={'cart__card-info'}>
                <div className="cart__amount">
                    <button className="cart__amount-btn"
                    onClick={decrCount}>-</button>
                    <input type="text" readOnly={true} className={'cart__amount-num'} value={
                        user.cart.filter(item => item.id === id)[0] ?
                            user?.cart?.filter(item => item.id === id)[0].count :
                            1
                    }/>
                    <button className="cart__amount-btn"
                    onClick={addCount}>+</button>
                </div>
                <p className="cart__sum">{price} ₽</p>
                <span className="cart__basket" onClick={deleteCard}>
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_5828_4867" fill="white"><rect x="1.61035" y="4" width="12" height="13" rx="1"/></mask>
                        <rect x="1.61035" y="4" width="12" height="13" rx="1" stroke="#DADCDC" strokeWidth="3" mask="url(#path-1-inside-1_5828_4867)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.64554 0C4.31118 0 3.99895 0.167101 3.81349 0.4453L3.27702 1.25H1.11035C0.696138 1.25 0.360352 1.58579 0.360352 2C0.360352 2.41421 0.696138 2.75 1.11035 2.75H14.1104C14.5246 2.75 14.8604 2.41421 14.8604 2C14.8604 1.58579 14.5246 1.25 14.1104 1.25H11.9437L11.4072 0.4453C11.2218 0.167101 10.9095 0 10.5752 0H4.64554Z"
                              fill="#DADCDC"/>
                    </svg>
                </span>
            </div>

        </div>

    );
};

export default CardCart;