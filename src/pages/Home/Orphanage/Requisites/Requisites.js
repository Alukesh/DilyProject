import React from 'react';
import img from "./Illustration hand.png"

const Requisites = () => {
    return (
        <div className="requisites">
            <div className="container shadow-box">
                <h2 className="requisites__title">
                    Если вы хотите помочь нашим детям материально,воспользуйтесь <br/>
                нашими банковскими реквизитами
                </h2>
                <div className="requisites__content">
                    <div className="requisites__left">
                        <p className="requisites__subtitle">Реквизиты для помощи </p>
                        <ul className="requisites__list">
                            <li className="requisites__item">Получатель платежа</li>
                            <li className="requisites__item-list">Детский дом №18</li>
                            <li className="requisites__item">Адрес получателя</li>
                            <li className="requisites__item-list">115598, г. Москва, ул. Лебедянская,д. 26, корп. 3, </li>
                            <li className="requisites__item"> ОГРН 1127799008611</li>
                            <li className="requisites__item"> ИНН 7722400642</li>
                            <li className="requisites__item">КПП 770401001</li>
                            <li className="requisites__item"> Филиал «Центральный» Банка ВТБ (ПАО) в г. Москве </li>
                            <li className="requisites__item">Расчетный счет 4070381020006000012</li>
                            <li className="requisites__item">БИК 0445255411</li>
                            <li className="requisites__item-list">ОКПО 00032520</li>
                            <li className="requisites__item-list">к/с 30101810145250000411 в ГУ Банка России по ЦФО г. Москва</li>
                            <li className="requisites__item">Назначение платежа</li>
                            <li className="requisites__item-list">Благотворительное пожертвование для детского дома</li>
                        </ul>
                    </div>
                    <div className="requisites__right">
                        <img src={img} alt="" className="requisites__img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requisites;