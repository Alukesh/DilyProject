import React, {useState} from 'react';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'
import img8 from './img8.png'
import img9 from './img9.png'
import img10 from './img10.png'
import img11 from './img11.png'
import img12 from './img12.png'

const Options = () => {
    const [more, setMore] = useState(false);

    return (
        <>
        <div className={'service__options-row'}>
            <div className={'shadow-box service__options-card'}>
                <img src={img1} alt="Apple"/>
                Apple
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img2} alt="Телефоны"/>
                Телефоны
            </div>
             <div className={'shadow-box service__options-card'}>
                <img src={img3} alt="Планшеты"/>
                 Планшеты
            </div>

            <div className={'shadow-box service__options-card'}>
                <img src={img4} alt="Ноутбуки"/>
                Ноутбуки
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img5} alt="Моноблоки"/>
                Моноблоки
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img6} alt="Мониторы"/>
                Мониторы
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img7} alt="ТВ, аудио"/>
                ТВ, аудио
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img8} alt="Бытовая техника"/>
                Бытовая техника
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img9} alt="Фото и видео"/>
                Фото и видео
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img10} alt="Орг техника"/>
                Орг техника
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img11} alt="Оборудование"/>
                Оборудование
            </div>
            <div className={'shadow-box service__options-card'}>
                <img src={img12} alt="Инструменты"/>
                Инструменты
            </div>

            {
                more &&
                    <>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img7} alt="ТВ, аудио"/>
                            ТВ, аудио
                        </div>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img1} alt="Apple"/>
                            Apple
                        </div>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img10} alt="Орг техника"/>
                            Орг техника
                        </div>
                        <div className={'shadow-box service__options-card'}>
                            <img src={img9} alt="Фото и видео"/>
                            Фото и видео
                        </div>
                    </>
            }



        </div>
            <button className="service__options-button" onClick={() => setMore(!more)} >Показать еще
                <span>
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.56599 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/></svg>
                        </span>
            </button>
        </>

    );
};

export default Options;