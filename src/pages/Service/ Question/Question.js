import React from 'react';


const Question = () => {
    return (
        <div className="question">
            <div className="container">
                <h2 className="question__title">Остались вопросы?</h2>
                <p className="question__text">Оставьте заявку и нам менеджер свяжется с вами</p>
                <div className="question__content">
                    <p className="question__descr">Телефон</p>
                    <input type="number" className="question__input" placeholder="+ 7 (123)-456-78-90"/>
                    <button className="question__btn greenBtn">Заказать звонок</button>
                    <div className="question__call">
                        <p className="question__connect">Или позвоните сами</p>
                        <p className="question__phone">
                        <span>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0786 15.255C8.6064 12.7813 6.24051 9.91536 7.37345 8.78242C8.99395 7.16192 10.4066 6.16181 7.53284 2.5864C4.66064 -0.987446 2.7448 1.75818 1.17587 3.32867C-0.63684 5.14138 1.07898 11.8984 7.75631 18.5773C14.4352 25.2546 21.1922 26.9657 23.0049 25.1515C24.577 23.581 27.321 21.6745 23.7472 18.8023C20.1733 15.9285 19.1732 17.3396 17.5512 18.9633C16.4182 20.0915 13.5523 17.7272 11.0786 15.255Z" fill="#00C65E"/>
</svg>
                    </span>  +7 (968) 430-88-20
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Question;