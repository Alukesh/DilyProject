import React from 'react';
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const TradeSteps = ({shadow}) => {
    return (

        <>
            {
                shadow ?
                    <div className={`container `}>
                            <div className={' shadow-box buying__row-shadow'}>
                                <h2 className={'buying__row-title'}>Продайте нам на раз - два - три</h2>
                                <div className={'buying__row-wrapper'}>
                                    <div className={'buying__row-card'}>
                                        <p className={'buying__row-num'}>1</p>
                                        <p className={'buying__row-text'}>Бесплатная онлайн-оценка</p>
                                        <img loading={"lazy"} className={'buying__row-img'} src={card1} alt="icon"/>
                                    </div>
                                    <div className={'buying__row-card'}>
                                        <p className={'buying__row-num'}>2</p>
                                        <p className={'buying__row-text'}>Привозите нам или вызовите специалиста</p>
                                        <img loading={"lazy"} className={'buying__row-img'} src={card2} alt="icon"/>
                                    </div>
                                    <div className={'buying__row-card'}>
                                        <p className={'buying__row-num'}>3</p>
                                        <p className={'buying__row-text'}>Подпишите договор и получите деньги</p>
                                        <img loading={"lazy"} className={'buying__row-img'} src={card3} alt="icon"/>
                                    </div>

                                </div>
                            </div>
                    </div>
                    :
                    <section className={`buying__row`}>
                        <div className={`container `}>
                            <h2 className={'buying__row-title'}>Продайте нам на раз - два - три</h2>
                            <div className={'buying__row-wrapper'}>
                                <div className={'buying__row-card'}>
                                    <p className={'buying__row-num'}>1</p>
                                    <p className={'buying__row-text'}>Бесплатная онлайн-оценка</p>
                                    <img className={'buying__row-img'} src={card1} alt="icon"/>
                                </div>
                                <div className={'buying__row-card'}>
                                    <p className={'buying__row-num'}>2</p>
                                    <p className={'buying__row-text'}>Привозите нам или вызовите специалиста</p>
                                    <img className={'buying__row-img'} src={card2} alt="icon"/>
                                </div>
                                <div className={'buying__row-card'}>
                                    <p className={'buying__row-num'}>3</p>
                                    <p className={'buying__row-text'}>Подпишите договор и получите деньги</p>
                                    <img className={'buying__row-img'} src={card3} alt="icon"/>
                                </div>

                            </div>
                        </div>
                    </section>
            }
        </>


    );
};

export default TradeSteps;