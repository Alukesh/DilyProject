import React from 'react';
import {useNavigate} from "react-router-dom";

const Request = () => {

    const  navigate  = useNavigate();

    return (

        <div className="request">
            <div className="container">
                <h2 className="request__title">Вам тоже нужна помощь?</h2>
                <p className="request__text">Оставьте заявку и нам менеджер свяжется с вами <br/>
                    Мы помогаем всем нуждающимся!</p>
                <button className="request__btn" onClick={() => navigate('../send')}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Request;