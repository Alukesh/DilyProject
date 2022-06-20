import React from 'react';
import img from './1.png';
import img2 from './2.png';
import img3 from './3.png';

const Organization = () => {
    return (
        <div className="organization">
            <div className="container">
                <h2 className="organization__title">Куда сдать вещи?</h2>
                <p className="organization__subtitle">Выберите,кому вы хотите помочь</p>
                <div className="organization__content">
                    <div className="organization__card">
                        <img src={img} alt="" className="organization__img"/>
                        <p className="organization__text">Детские дома</p>
                        <button className="organization__btn greenBtn">Помочь</button>
                    </div>
                    <div className="organization__card">
                        <img src={img2} alt="" className="organization__img"/>
                        <p className="organization__text">
                            Благотворительные <br/>
                            организации
                        </p>
                        <button className="organization__btn greenBtn">Помочь</button>
                    </div>
                    <div className="organization__card">
                        <img src={img3} alt="" className="organization__img"/>
                        <p className="organization__text">Церковные  приходы</p>
                        <button className="organization__btn greenBtn">Помочь</button>
                    </div>
                </div>
                <button className="organization__button">Все организации
                    <span><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.56599 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
</svg>
</span>
                </button>
            </div>
        </div>
    );
};

export default Organization;