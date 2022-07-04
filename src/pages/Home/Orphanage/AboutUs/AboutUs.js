import React from 'react';
import img from "./illustration charity детские дома.png"
import Aid from "../Aid/Aid";
import Relations from "../Relations/Relations";
import Regulations from "../Regulations/Regulations";
import Requisites from "../Requisites/Requisites";
import Vend from "../../Charity/Vend/Vend";

const AboutUs = () => {
    return (
        <div>
            <div className="aboutUs">
                <div className="container shadow-box">
                    <h3 className="aboutUs__title">Детский дом №18 г. Москва</h3>
                    <div className="aboutUs__content">
                        <div className="aboutUs__left">
                            <img src={img} alt="" className="aboutUs__img"/>
                        </div>
                        <div className="aboutUs__right">
                            <h4 className="aboutUs__text">О нас</h4>
                            <p className="aboutUs__descr">
                                Специальный (коррекционный) Детский дом №18 находится в <br/>
                                Южном Административном Округе г. Москвы, в районе <br/>
                                Бирюлево-Восточное. Он был открыт  06 ноября 1996 года для <br/>
                                детей-сирот с отклонениями в развитии. В детском доме  постоянно  <br/>
                                проживают 50 – 60 детей в возрасте от 4 до 18 лет.
                                <br/>
                                <br/>
                                <br/>
                                Колочество наших воспитанников в настоящий момент: 57
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Aid/>
            <Relations/>
            <Regulations/>
            <Requisites/>
            <Vend/>
        </div>
    );
};

export default AboutUs;