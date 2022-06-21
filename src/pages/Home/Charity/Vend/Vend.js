////комментарии
import React from 'react';

const Vend = () => {
    return (
        <div className="vend">
            <div className="container">
                <h4 className="vend__title">Вы хотите продать или купить что-либо быстро и выгодно?</h4>
                <p className="vend__title text">
                    К вашим услугам доска бесплатных объявлений Dily.ru. На нашем портале вы найдёте всё, начиная от мелких бытовых приборов и заканчивая недвижимостью и автомобилями. А если вы продаёте товар, услугу, <br/>
                    сдаёте или снимаете жилье, мы поможем решить вашу задачу быстро и эффективно, для этого просто добавьте объявление бесплатно! <br/>
                    <br/>
                    Широким предложением товаров и услуг. Одежда и обувь, электроника и бытовая техника, недвижимость, автомобили, работа, предметы коллекционирования – здесь вы найдёте объявления <br/>
                    на любой вкус! Огромной аудиторией. Тысячи ваших потенциальных клиентов посещают наш сайт ежедневно. Не упускайте их, подайте объявление прямо сейчас! Удобством пользования. <br/>
                    Продуманная структура разделов и поиск объявлений помогут вам быстро найти нужные предложения. А разместить объявление вы сможете всего в несколько кликов.
                </p>
                <button className="vend__btn">развернуть
                    <span><svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.918457 1.19727L6.22712 6.19727L11.5358 1.19727" stroke="#9BA0A5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
                </button>
            </div>
        </div>
    );
};

export default Vend;