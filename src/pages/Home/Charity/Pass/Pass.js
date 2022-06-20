import React from 'react';
import img from './1.png';
import img2 from './2.png';
import img3 from './3.png';

const Pass = () => {
    return (
        <div className="pass">
            <div className="container">
                <h2 className="pass__title">Как я могу помочь?</h2>
                <div className="pass__content">
                    <div className="pass__card">
                        <h4 className="pass__text">Сдать ненужную одежду</h4>
                        <img src={img} alt="" className="pass__img"/>
                        <p className="pass__descr">Чистую, без пятен и дырок, <br/>
                        одежда должна быть в хорошем <br/>
                        состоянии</p>
                    </div>
                    <div className="pass__card">
                        <h4 className="pass__text">Сдать полезные вещи</h4>
                        <img src={img2} alt="" className="pass__img"/>
                        <p className="pass__descr">Детские игрушки, канцелярию <br/>
                        и книги,развивающие игры, <br/>
                        спортивный инвентарь, <br/>
                        велосипеды и т.д</p>
                    </div>
                    <div className="pass__card">
                        <h4 className="pass__text">Сдать ненужную обувь</h4>
                        <img src={img3} alt="" className="pass__img"/>
                        <p className="pass__descr">Чистую, без дырок, в хорошем <br/>
                        состоянии</p>
                    </div>
                </div>
                <button className="pass__btn greenBtn">Выбери свой способ помочь</button>
            </div>
        </div>
    );
};

export default Pass;