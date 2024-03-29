import React, { useState } from 'react';
import advise1 from './images/advice1.png'
import advise2 from './images/advice2.png'
import advise3 from './images/advice3.png'
import advise4 from './images/advice4.png'
import advise5 from './images/advice5.png'
import img from './images/bg2.png'
import star from './images/star.png'
import Sell from "./Sell/Sell";
import TradeSteps from "./TradeSteps/TradeSteps";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Options from "../Service/FirstBanner/Options/Options";
import Vend from "../Home/Charity/Vend/Vend";

const Buying = () => {
    const [overlay, setOverlay] = useState(false);
    const user = useSelector(s => s.user.user);
    const navigate = useNavigate();
    console.log(user);

    return (
        <div className={'buying'}>
            <section className="buying__start">
                <div className="container">
                    <div className={'buying__start-info'}>
                        <h2 className={'buying__start-title'}>Скупка Дили-самая выгодня скупка
                            в Москве</h2>
                        <p className={'buying__start-text'}>Купим любые товары и б/у технику очень выгодно. Оставьте заявку на выкуп прямо сейчас!</p>

                        <button className={'buying__start-btn'} onClick={() => { user?.email?.length || user?.phoneNumber?.length ? setOverlay(!overlay) : navigate('/auth') }}>Узнать цену сейчас</button>
                    </div>
                </div>
            </section>

            {overlay &&
                <>
                    <div className={'buying__overlay'} onClick={() => setOverlay(!overlay)}> </div>
                    <div className="buying__popup">
                        <div className={'buying__popup-close'} onClick={() => setOverlay(!overlay)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.6838 12.5735C15.2491 13.179 15.2491 14.1608 14.6838 14.7663L14.3168 15.1593C13.7515 15.7648 12.8348 15.7648 12.2694 15.1593L8.00019 10.5868L3.73094 15.1593C3.16557 15.7648 2.24893 15.7648 1.68357 15.1593L1.31662 14.7663C0.75125 14.1608 0.751249 13.179 1.31662 12.5735L5.58587 8.00105L1.3166 3.4286C0.751236 2.82308 0.751237 1.84134 1.3166 1.23582L1.68355 0.842811C2.24892 0.237293 3.16556 0.237292 3.73093 0.84281L8.00019 5.41527L12.2695 0.84281C12.8348 0.237292 13.7515 0.237293 14.3168 0.842811L14.6838 1.23582C15.2492 1.84134 15.2492 2.82308 14.6838 3.4286L10.4145 8.00105L14.6838 12.5735Z" fill="#00C65E" />
                            </svg>

                        </div>
                        <Sell />
                    </div>
                </>

            }

            <TradeSteps />

            <section className={'buying__advices'}>
                <div className="container">
                    <div className="buying__advices-wrapper">
                        <div className="buying__advices-block buying__advices-block1">
                            <div className={'shadow-box buying__advices-card buying__advices-card1'}>
                                <img className={'buying__advices-card_img'} src={advise1} alt="" />
                                <p className={'buying__advices-card_text buying__advices-card_text1'}>Выплачиваем больше на 15–20%, чем в других пунктах скупки.</p>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card3'}>
                                <img className={'buying__advices-card_img'} src={advise3} alt="" />
                                <img src={star} alt="" />
                                <p className={'buying__advices-card_text'}>Cразу забираем товар
                                    и отдаем всю сумму наличными – все честно и прозрачно</p>
                            </div>
                        </div>


                        <div className="buying__advices-block buying__advices-block2">
                            <div className={'shadow-box buying__advices-card buying__advices-card2'}>
                                <img className={'buying__advices-card_img'} src={advise2} alt="" />
                                <p className={'buying__advices-card_text'}> Быстро и безопасно избавляетесь от вещей, которыми давно не пользуетесь</p>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card4'}>
                                <img className={'buying__advices-card_img'} src={advise4} alt="" />
                                <p className={'buying__advices-card_text'}>По желанию клиентов наш специалист приезжает по указанному адресу</p>
                            </div>
                        </div>


                        <div className="buying__advices-block buying__advices-block3">
                            <div className={' buying__advices-card buying__advices-card6'}>
                                <div className={'buying__advices-card_text buying__advices-card_title'}>ИЗБАВЛЯЙТЕСЬ <br />
                                    ОТ НЕНУЖНЫХ ВЕЩЕЙ <br />
                                    <p>ВЫГОДНО </p>
                                    <p className={'buying__advices-card_title-last'}>И С ПОЛЬЗОЙ</p>
                                </div>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card5'}>
                                <img style={{ marginRight: '40px' }} className={'buying__advices-card_img'} src={advise5} alt="" />
                                <p className={'buying__advices-card_text'}>Заботимся об окружающей среде, давая вторую жизнь вашим вещам</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="buying__things">
                <div className="container">
                    <div className="buying__things-content">
                        <div className="buying__things-text">
                            <h2 className="buying__things-title">У вас есть вещи,которыми вы не пользуетесь?</h2>
                            <p className="buying__things-subtitle">Сообщите нам и мы купим по самой выгодной цене!</p>
                        </div>
                        <button className="buying__things-btn greenBtn">Узнать примерную стоимость</button>
                    </div>
                </div>

            </section>

            <div className={'container'}>
                <div className={'service__options'}>
                    <h2 className={'service__options-title'}>Что мы покупаем?</h2>
                    <Options />
                </div>
            </div>

            <section className="buying__request">
                <div className="container">
                    <div className="buying__request-content">
                        <div className="buying__request-left">
                            <h2 className="buying__request-title">
                                Оставьте заявку для оценки <br />
                                вашего устройства
                            </h2>
                            <button className="buying__request-btn greenBtn">Узнать цену</button>
                        </div>
                        <div className="buying__request-right">
                            <img src={img} alt="" className="buying__request-img" />
                        </div>
                    </div>
                </div>
            </section>

            <Vend />
        </div>
    );
};

export default Buying;