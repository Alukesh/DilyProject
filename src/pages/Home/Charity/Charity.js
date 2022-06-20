import React from 'react';
import Help from "./Help/Help";
import Pass from "./Pass/Pass";
import Organization from "./Organization/Organization";


const Charity = () => {
    return (
        <div>
            <div className="charity shadow-box">
                <div className="container">
                    <h3 className="charity__title">
                        Отдай, если можешь <br/>
                        Прими,если хочешь
                    </h3>
                    <p className="charity__subtitle">
                        Мы помогаем людям,одновременно <br/>
                        решая социальные и экологические <br/>
                        проблемы
                    </p>
                    <button className="charity__btn greenBtn">Помочь сейчас</button>
                </div>
            </div>
            <Help/>
            <Pass/>
            <Organization/>
        </div>
    );
};

export default Charity;