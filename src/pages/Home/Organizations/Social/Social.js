import React from 'react';
import img from "./illustration charity детские дома (1).png"
import Aid from "../../Orphanage/Aid/Aid";
import Relations from "../../Orphanage/Relations/Relations";
import Regulations from "../../Orphanage/Regulations/Regulations";
import Requisites from "../../Orphanage/Requisites/Requisites";
import Vend from "../../Charity/Vend/Vend";

const Social = () => {
    return (
        <div>
            <div className="social">
                <div className="container shadow-box">
                    <h2 className="social__title">Социальный бизнес-проект “Добрые вещи”</h2>
                    <div className="social__content">
                        <div className="social__left">
                            <img src={img} alt="" className="social__img"/>
                        </div>
                        <div className="social__right">
                            <h4 className="social__subtitle">О нас</h4>
                            <p className="social__text">
                                Социальный бизнес-проект «Добрые вещи» был основан в феврале <br/>
                                2016 года. Мы начинали с адресной помощи детям с ограниченными <br/>
                                возможностями: государственные центры реабилитации <br/>
                                предоставляли нам данные по детям, которые нуждались в <br/>
                                специальных тренажёрах, креслах, корсетах и других средствах <br/>
                                реабилитации. По мере развития проекта мы начали расширять круг <br/>
                                тех, кому мы помогаем. Сегодня мы бесплатно выдаем вещи <br/>
                                нуждающимся через магазины наших партнеров.
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

export default Social;