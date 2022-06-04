import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import addPh from './addPhoto.png'
import Map from "./Map/Map";

const Advertisement = () => {
    const [textLength, setTextLength] = useState(0);
    const [date, setDate] = useState(false);
    return (
        <div className={'advertisement'}>
            <div className="container">
                <div className={'advertisement__wrapper'}>

                    <div className={'advertisement__main'}>
                        <h2 className={'advertisement__title'}>
                            <Link to={'/'} >
                                <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.54887 13.8281L11.1704 24.45C11.9037 25.1833 13.0927 25.1833 13.826 24.45C14.5594 23.7167 14.5593 22.5277 13.826 21.7944L4.53213 12.5005L13.827 3.20565C14.5603 2.47231 14.5603 1.28333 13.8269 0.550007C13.0936 -0.183317 11.9046 -0.183346 11.1713 0.549984L0.592018 11.1293C0.577161 11.1432 0.563356 11.1579 0.548848 11.1724C-0.0918764 11.8141 -0.172665 12.8051 0.308288 13.5336C0.377088 13.6377 0.457176 13.7364 0.54887 13.8281Z" fill="#DADCDC"/></svg>
                            </Link> Новое объявление
                        </h2>


                        <form className={'shadow-box advertisement__form'}>
                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Категория</h3>
                                <select className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option value="value2">Телефоны и планшеты</option>
                                    <option value="value1"> Личные вещи</option>
                                    <option value="value3">Электроника</option>
                                    <option value="value4">Бытовая техника</option>
                                    <option value="value5">Дом и сад</option>
                                    <option value="value6">Товары для детей</option>
                                    <option value="value7">Животные</option>
                                    <option value="value8">Хобби и отдых</option>
                                    <option value="value9">Транспорт</option>
                                    <option value="value10">Автотовары</option>
                                    <option value="value11">Недвижимость</option>
                                    <option value="value12">Работа</option>
                                    <option value="value13">Услуги</option>
                                    <option value="value14">Для бизнеса</option>
                                    <option value="value15">Отдам даром</option>
                                </select>
                                 <select className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option style={{display:'none'}} value="value2">Выберите подкатегорию</option>
                                    <option value="value3">Смартфоны</option>
                                    <option value="value4">Мобильные телефоны</option>
                                    <option value="value5">Кнопочные телефоны</option>
                                    <option value="value6">Запчасти  для мобильных  телефонов</option>
                                    <option value="value7">Наушники и гарнитуры</option>
                                    <option value="value8">Зарядные устройста</option>
                                    <option value="value9">Кабели и адаптеры</option>
                                    <option value="value10">Внешние аккумуляторы</option>
                                    <option value="value11">Чехлы </option>
                                    <option value="value12">Держатели</option>
                                    <option value="value13">Стилусы</option>
                                    <option value="value14">Пленки</option>
                                </select>

                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'} style={{marginBottom:'25px'}}>Название товара</h3>
                                <div style={{width:'100%'}}>
                                    <input className={'advertisement__form-input'} placeholder={'Введите название'} type="text"/>
                                    <p className={'advertisement__form-prompt'}>Не более 50 символов</p>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Цена</h3>
                                <div>
                                    <input className={'advertisement__form-input'} placeholder={'1000'} type="text"/>
                                </div>
                                <span>₽</span>
                            </div>


                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Тип объявления</h3>
                                 <select className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option style={{display:'none'}} value="value2">Не выбрано</option>
                                    <option value="value3">Продаю свое</option>
                                    <option value="value7">Приобрел на продажу</option>
                                    <option value="value9">Магазин</option>
                                </select>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title'} style={{marginBottom:'25px'}}>Описание</h3>
                                <div style={{width:'100%'}}>
                                    <textarea className={'advertisement__form-input advertisement__form-textarea'} maxLength={3000} onChange={(e) => setTextLength(e.target.value.length)} name="discr" id="area" />
                                    <p className={'advertisement__form-prompt'}>Не более 3000 символов <span>{textLength}/ 3000</span></p>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'} style={{marginBottom:'25px'}}>Фотографии</h3>
                                <div style={{width:'100%'}}>
                                    <p className={'advertisement__form-addPhoto_top'}>Перетащите фото или <label htmlFor={'file'} className={'advertisement__form-addPhoto_link'} >выберите их на своем компьютере</label></p>
                                    <input style={{display:'none'}} type="file" id={'file'}/>
                                    <div className={'advertisement__form-addPhoto_row'}>
                                        <div className={'shadow-box advertisement__form-addPhoto'}>
                                            <img src={addPh} alt=""/>
                                            <p>Добавить</p>
                                        </div>
                                        <div className={'shadow-box advertisement__form-addPhoto'}>
                                            <img src={addPh} alt=""/>
                                            <p>Добавить</p>
                                        </div>
                                        <div className={'shadow-box advertisement__form-addPhoto'}>
                                            <img src={addPh} alt=""/>
                                            <p>Добавить</p>
                                        </div>
                                        <div className={'shadow-box advertisement__form-addPhoto'}>
                                            <img src={addPh} alt=""/>
                                            <p>Добавить</p>
                                        </div>
                                    </div>
                                    <p className={'advertisement__form-addPhoto_bot'}>Вы можете загрузить не более 10 фотографий</p>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'} >Местоположение</h3>
                                <div style={{width:'100%'}}>
                                    <input className={'advertisement__form-input'} placeholder={'Москва'} type="text"/>
                                    {/*<Map/>*/}
                                    <div className="advertisement__map-block" >
                                        <iframe className={'advertisement__map'}
                                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a7db89ad20c176deff8474ee3a110c428fa53be89670cd16695fdc0ad761a5f&amp;source=constructor"
                                                width="1070" height="480" frameBorder="0"> </iframe>
                                    </div>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Тип размещения</h3>
                                <select className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option style={{display:'none'}} value="value2">Не выбрано</option>
                                    <option value="value3">Аукцион</option>
                                    <option value="value9">Фиксированная цена</option>
                                </select>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Срок размещения</h3>
                                <div style={{width:'100%'}}>
                                    <select className={'advertisement__form-input advertisement__form-select'}
                                            style={{marginBottom:'30px'}} name="select"
                                    >
                                        <option style={{display:'none'}} value="value2">Не выбрано</option>
                                        <option value="value3">3 дня</option>
                                        <option value="value9">5 дней</option>
                                        <option value="value9">7 дней</option>
                                        <option value="value9">10 дней</option>
                                    </select>
                                    <div style={{marginBottom:'20px'}} className={'phones__aside-form-block'}>
                                        <input  onClick={(e) => setDate(false)} type="radio" id='format1' defaultChecked={true} name='format'/>
                                        <label className={'phones__aside-form-text'} htmlFor='format1'>Разместить сразу</label>
                                    </div>
                                    <div style={{marginBottom:'10px'}} className={'phones__aside-form-block'}>
                                        <input  onClick={(e) => setDate(true)} type="radio" id='format2' name='format'/>
                                        <label className={'phones__aside-form-text'} htmlFor='format2'>Настроить расписание размещения</label>
                                    </div>
                                    <div>
                                        <select disabled={!date} className={'advertisement__form-input advertisement__form-selectDate'}
                                                style={{marginBottom:'30px'}} name="select">
                                            <option style={{display:'none'}} value="value2">Не выбрано</option>
                                            <option value="value3">13 августа</option>
                                            <option value="value3">14 августа</option>
                                            <option value="value3">15 августа</option>
                                            <option value="value3">16 августа</option>
                                            <option value="value3">17 августа</option>
                                            <option value="value3">18 августа</option>
                                            <option value="value3">19 августа</option>
                                            <option value="value3">20 августа</option>
                                            <option value="value3">21 августа</option>
                                            <option value="value3">22 августа</option>
                                        </select>
                                         <select disabled={!date} className={'advertisement__form-input advertisement__form-selectTime'}
                                                style={{marginBottom:'30px'}} name="select">
                                            <option style={{display:'none'}} value="value2">12</option>
                                            <option value="value3">01</option>
                                            <option value="value3">02</option>
                                            <option value="value3">03</option>
                                            <option value="value3">04</option>
                                            <option value="value3">05</option>
                                            <option value="value3">06</option>
                                            <option value="value3">07</option>
                                            <option value="value3">08</option>
                                            <option value="value3">09</option>
                                            <option value="value3">10</option>
                                        </select>
                                         <select disabled={!date} className={'advertisement__form-input advertisement__form-selectTime'}
                                                style={{marginBottom:'30px'}} name="select">
                                            <option style={{display:'none'}} value="value2">00</option>
                                             <option value="value3">05</option>
                                             <option value="value3">10</option>
                                             <option value="value3">15</option>
                                             <option value="value3">20</option>
                                             <option value="value3">25</option>
                                             <option value="value3">30</option>
                                             <option value="value3">35</option>
                                             <option value="value3">40</option>
                                             <option value="value3">45</option>
                                            <option value="value3">50</option>
                                        </select>
                                         <select disabled={!date} className={'advertisement__form-input advertisement__form-selectTime'}
                                                style={{marginBottom:'30px'}} name="select">
                                            <option style={{display:'none'}} value="value2">AM</option>
                                            <option value="value3">AM</option>
                                            <option value="value3">PM</option>
                                        </select>

                                    </div>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>

                            </div>




                        </form>
                    </div>






                    <div className={'advertisement__line'}> </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;