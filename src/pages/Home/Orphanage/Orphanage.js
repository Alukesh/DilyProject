import React from 'react';
import OrphanageName from "./OrphanageName";

const Orphanage = () => {
    return (
        <div className={'charity__orphanage'}>

            <section className={'charity__banner'}>
                <div className="container">
                    <h2 className={'charity__banner-title'}>Детские дома</h2>
                    <p className={'charity__banner-text'}>У вас есть вещи, которые стали не
                        нужны или почему-то не подошли?
                        Отдав их, вы можете помочь детям
                        своего города или всей страны
                    </p>
                    <button className={'charity__banner-btn greenBtn'}>Помочь сейчас</button>
                </div>
            </section>

            <div className="container charity__text">
                «Дили» позволяет каждому помочь людям и избавить свои шкафы от ненужных вещей. Мы
                сотрудничаем с детскими домами, церковными приходами и благотворительными фондами на
                территории России.  Просто выберите из списка тех,кому вы хотите помочь, и отдайте им свои вещи.
            </div>


            <section className={'charity__orphanages'}>
                <div className="container">
                    <h2 className={'charity__orphanages-title'}>Детские дома, которым вы можете помочь</h2>
                    <div className={'charity__orphanages-row'}>
                        <OrphanageName name={'Центр для мам с детьми  “Теплый Дом”'}/>
                        <OrphanageName name={'Детский дом №5 г. Москва'}/>
                        <OrphanageName name={'Детский дом №27 г. Москва'}/>
                        <OrphanageName name={'Детский дом №27 г. Москва'}/>
                        <OrphanageName name={'Центр для мам с детьми “Теплый Дом”'}/>
                        <OrphanageName name={'Детский дом №5 г. Москва'}/>
                        <OrphanageName name={'Детский дом №27 г. Москва'}/>
                        <OrphanageName name={'Детский дом №27 г. Москва'}/>
                    </div>
                    <p className={'charity__orphanages-showBtn'}>Показать еще <span>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.02189 5.54033L0.198002 1.84656C-0.0659942 1.59154 -0.0660046 1.17806 0.197994 0.923031C0.461993 0.668007 0.890028 0.668017 1.15402 0.923039L4.49983 4.1551L7.84597 0.922709C8.10997 0.667684 8.538 0.667695 8.802 0.922716C9.066 1.17774 9.066 1.59122 8.80201 1.84625L4.99346 5.52532C4.98845 5.53049 4.98314 5.53529 4.97792 5.54034C4.74693 5.76316 4.39016 5.79125 4.12792 5.62399C4.09042 5.60007 4.0549 5.57222 4.02189 5.54033Z" fill="#363A45"/>
</svg>
</span></p>
                </div>
            </section>




        </div>
    );
};

export default Orphanage;