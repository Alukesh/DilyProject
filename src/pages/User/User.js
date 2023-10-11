import React, {useState} from 'react';
import {CgArrowsExchange} from "react-icons/cg";
import {Link} from "react-router-dom";
import InputMask from "react-input-mask"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {getAllProducts} from "../../redux/reducers/products";


const User = () => {

    const [tab, setTab] = useState(false);
    const [userChange, setUserChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(s => s.user.user);

    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        },
        watch
    } = useForm({
            mode: 'onBlur'
        }

    );
    console.log(watch, setPasswordChange);
    const changeUser = (data) => {
        updateDoc(doc(db, "users", user.id), {
            ...user
        });
        getDocs(collection(db, 'users'))
            .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id: el.id}))})));
        reset()
    };

    return (
        <div className="user">
            <div className="container">
                <div className="user__date">
                    <h2 className="user__title">Личные данные</h2>
                    <div className="user__btns">
                        <Link onClick={() => setTab(1)}
                              className={`user__btn ${tab === 1 && "user__btn_active"}`} to={"/order"}>История заказов</Link>
                        <Link className="user__btn" to={"/user"}>Настройки</Link>
                    </div>
                </div>
                <div className="user__content shadow-box">
                    <p className="user__change">
                        <span className="user__change" onClick={() => setUserChange(!userChange)}>
                            {userChange ? 'Отменить' : <span> <CgArrowsExchange/> Изменить</span>}
                        </span>
                    </p>
                    <form onSubmit={handleSubmit(changeUser)} className="user__other">
                        <div className="user__phone">
                            <p className="user__text">Телефон</p>
                            {userChange ? <InputMask className="user__input" {...register ('phone')} mask={`+\\9\\96(999)99-99-99`} defaultValue={user.phoneNumber} type="tel"/> : user.phoneNumber}
                        </div>
                        <div className="user__email">
                            <p className="user__text">E-mail</p>
                            {userChange ?  <input {...register('email')} defaultValue={user.email} type="email" className="user__input"/> : user.email}
                        </div>
                        <div className="user__login">
                            <p className="user__text">Login</p>
                            {userChange ? <input className="user__input" {...register('login')} defaultValue={user.login} type="text"/> : user.login}
                        </div>
                        <div className="user__city">
                            <p className="user__text">Город</p>
                            <input placeholder="Москва" type="text" className="user__input"/>
                        </div>
                        <div className="user__password">
                            <p className="user__text">Смена пароля</p>
                            <div className="user__inputs">
                                {
                                    passwordChange ?  <div>
                                        <p className="user__text">Новый пароль  <span className="user__span">*</span></p>
                                        <input {...register('password', {
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 6,
                                                message:"Password must have at least 6 characters"
                                            }
                                        })} type="password" className="user__input"/>
                                        {errors?.password && <p>{errors?.password?.message}</p>}
                                        {/*<p className="user__text">*/}
                                        {/*    <span className="user__text">Подтвердите пароль</span>*/}
                                        {/*    <input className="user__input" {...register('confirmPwd', {*/}
                                        {/*        validate: (val) => {*/}
                                        {/*            if (watch('password') != val) {*/}
                                        {/*                return'Your passwords do no match';*/}
                                        {/*            }*/}
                                        {/*        }*/}
                                        {/*    })} type="password"/>*/}
                                        {/*    {errors?.confirmPwd && <p>{errors?.confirmPwd?.message }</p>}*/}
                                        {/*</p>*/}
                                    </div> : ''
                                }
                                <div>
                                    <p className="user__text">Текущий пароль <span className="user__span">*</span></p>
                                    {userChange ? <input style={{marginBottom: "10px"}} {...register('password')} defaultValue={user.password} type="password" className="user__input"/> : user.password}
                                </div>
                                {/*<span className="user__icon"><IoMdEye/></span>*/}
                            </div>
                            {userChange ? <button className="user__btn" type="submit">Сохранить изменения</button> : ''}

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;