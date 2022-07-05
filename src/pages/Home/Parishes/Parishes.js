import React from 'react';
import ParishesCard from "./ParishesCards/ParishesCard";
import Pass from "../Charity/Pass/Pass";
import Broadcast from "../Charity/Broadcast/Broadcast";
import Request from "../Charity/Request/Request";
import Vend from "../Charity/Vend/Vend";

const Parishes = () => {
    return (
        <div>
            <div className="parishes">
                <div className="container">
                    <h3 className="parishes__title">Церковные приходы</h3>
                    <p className="parishes__subtitle">У вас есть вещи, которые стали <br/>
                        не нужны или почему-то не подошли? <br/>
                        Отдав их, вы можете помочь детям <br/>
                        своего города или всей страны </p>
                    <button className="parishes__btn greenBtn">Помочь сейчас</button>
                </div>
            </div>
            <div className="text">
                <div className="container">
                        «Дили» позволяет каждому помочь людям и избавить свои шкафы от ненужных вещей. Мы <br/>
                        сотрудничаем с детскими домами, церковными приходами и благотворительными фондами на <br/>
                        территории России.  Просто выберите из списка тех,кому вы хотите помочь, и отдайте им свои вещи.
                </div>
            </div>
            <ParishesCard/>
            <Pass/>
            <Broadcast/>
            <Request/>
            <Vend/>
        </div>
    );
};

export default Parishes;