import React from 'react';
import Fund from "./Fund/Fund";

const Organizations = () => {
    return (
        <div>
            <div className="organizations">
                <div className="container">
                    <h2 className="organizations__title">Благотворительные организации</h2>
                    <p className="organizations__subtitle">У вас есть вещи, которые стали не <br/>
                        нужны или почему-то не подошли? <br/>
                        Отдав их, вы можете помочь детям <br/>
                        своего города или всей страны </p>
                    <button className="organizations__btn greenBtn">Помочь сейчас</button>
                </div>
            </div>
            <div className="text">
                <div className="container">
                    «Дили» позволяет каждому помочь людям и избавить свои шкафы от  ненужных вещей. Мы <br/>
                    сотрудничаем с детскими домами, церковными приходами и благотворительными фондами на <br/>
                    территории России.  Просто выберите из списка тех,кому вы хотите помочь, и отдайте им свои вещи.
                </div>
            </div>
            <Fund/>
        </div>
    );
};

export default Organizations;