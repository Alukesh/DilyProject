import React from 'react';
import img from "./AdobeStock_278170634 1.png"

const Aid = () => {
    return (
        <div className="aid">
            <div className="container shadow-box" style={{background: "#CCEFD8"}}>
                <h3 className="aid__title">Чем помочь?</h3>
                <div className="aid__content">
                    <ul className="aid__list">
                        <li className="aid__list-item">Мы с радостью примем в помощь:</li>
                        <li className="aid__item">• Детскую одежду</li>
                        <li className="aid__item">• Детские игркшки</li>
                        <li className="aid__item">• массажеры (любые)</li>
                        <li className="aid__item">• мячи среднего размера</li>
                        <li className="aid__item">• гимнастические деревянные палки</li>
                        <li className="aid__item">• обручи</li>
                        <li className="aid__item">• батут</li>
                        <li className="aid__item">• Поливитамины любые</li>
                        <li className="aid__item">• Жаропинижающие сиропы</li>
                        <li className="aid__item">• Успокаивающие сиропы</li>
                        <li className="aid__item">• Сироп шиповника</li>
                        <li className="aid__item">• Аэрозоли для орошения горла</li>
                        <li className="aid__item">• Биовитальгель</li>
                        <li className="aid__item">• Облепиховое мвсло</li>
                        <li className="aid__item">• Аудио и видео аппаратура</li>
                    </ul>
                    <div className="aid__img">
                        <img src={img} alt="" className="aid__image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aid;