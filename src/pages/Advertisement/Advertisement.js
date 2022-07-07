import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import addPh from './addPhoto.png'
import Map from "./Map/Map";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../firebase/firebaseFunction";

const Advertisement = () => {
    const [textLength, setTextLength] = useState(0);
    const user = useSelector(s => s.user.user);
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);

    const [date, setDate] = useState(false);



    const addProductHandler = async (data) => {
        // await console.log({...data, creator: data.creator, comments: []})
      await createProduct(data.image[0], setProgress, {...data, creator: data.creator, description: data.description, comments: []}, dispatch, user);
      await reset()
    };
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


                        <form className={'shadow-box advertisement__form'} onSubmit={handleSubmit(addProductHandler)}>
                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Категория</h3>
                                <select {...register('category')} className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option value="Телефоны и планшеты">Телефоны и планшеты</option>
                                    <option value=" Личные вещи"> Личные вещи</option>
                                    <option value="Электроника">Электроника</option>
                                    <option value="Бытовая техник">Бытовая техника</option>
                                    <option value="Дом и сад">Дом и сад</option>
                                    <option value="Товары для детей">Товары для детей</option>
                                    <option value="Животные">Животные</option>
                                    <option value="Хобби и отдых">Хобби и отдых</option>
                                    <option value="Транспорт">Транспорт</option>
                                    <option value="Автотовары">Автотовары</option>
                                    <option value="Недвижимость">Недвижимость</option>
                                    <option value="Работа">Работа</option>
                                    <option value="Услуги">Услуги</option>
                                    <option value="Для бизнеса">Для бизнеса</option>
                                    <option value="Отдам даром">Отдам даром</option>
                                </select>
                                 <select {...register('subCategory')}  className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option style={{display:'none'}} value="Выберите подкатегорию">Выберите подкатегорию</option>
                                    <option value="Смартфоны">Смартфоны</option>
                                    <option value="Мобильные телефоны">Мобильные телефоны</option>
                                    <option value="Кнопочные телефоны">Кнопочные телефоны</option>
                                    <option value="Запчасти для мобильных телефонов">Запчасти  для мобильных  телефонов</option>
                                    <option value="Наушники и гарнитуры">Наушники и гарнитуры</option>
                                    <option value="Зарядные устройста">Зарядные устройста</option>
                                    <option value="Кабели и адаптеры">Кабели и адаптеры</option>
                                    <option value="Внешние аккумуляторы">Внешние аккумуляторы</option>
                                    <option value="Чехлы">Чехлы </option>
                                    <option value="Держатели">Держатели</option>
                                    <option value="Стилусы">Стилусы</option>
                                    <option value="Пленки">Пленки</option>
                                </select>

                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'} style={{marginBottom:'25px'}}>Название товара</h3>
                                <div style={{width:'100%'}}>
                                    <input  {...register('title')} required={true}  className={'advertisement__form-input'} placeholder={'Введите название'} type="text"/>
                                    <p className={'advertisement__form-prompt'}>Не более 50 символов</p>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Цена</h3>
                                <div>
                                    <input  {...register('price')} required={true} className={'advertisement__form-input'} placeholder={'1000'} type="text"/>
                                </div>
                                <span>₽</span>
                            </div>


                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Тип объявления</h3>
                                 <select  {...register('creator')} required={true}  className={'advertisement__form-input advertisement__form-select'}>
                                    <option style={{display:'none'}} value="">Не выбрано</option>
                                    <option value="Продаю свое">Продаю свое</option>
                                    <option value="Приобрел на продажу">Приобрел на продажу</option>
                                    <option value="Магазин">Магазин</option>
                                     <option value="Диваны тут">Диваны тут</option>
                                     <option value="Xiaomi">Xiaomi</option>
                                     <option value="М-ВИДЕО">М-ВИДЕО</option>
                                     <option value="ДЕТСКИЙ МИР">ДЕТСКИЙ МИР</option>
                                     <option value="Apple">Apple</option>
                                </select>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title'} style={{marginBottom:'25px'}}>Описание</h3>
                                <div style={{width:'100%'}}>
                                    <textarea  {...register('description')}  className={'advertisement__form-input advertisement__form-textarea'} maxLength={3000} onChange={(e) => setTextLength(e.target.value.length)} id="area" />
                                    <p className={'advertisement__form-prompt'}>Не более 3000 символов <span>{textLength}/ 3000</span></p>
                                </div>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'} style={{marginBottom:'25px'}}>Фотографии</h3>
                                <div style={{width:'100%'}}>
                                    <p className={'advertisement__form-addPhoto_top'}>Перетащите фото или <label htmlFor={'file'} className={'advertisement__form-addPhoto_link'} >выберите их на своем компьютере</label></p>
                                    <input  {...register('image')}  style={{display:'none'}} type="file" id={'file'}/>
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
                                    <input  {...register('city')}  className={'advertisement__form-input'} placeholder={'Москва'} type="text"/>
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
                                <select  {...register('auction')}  className={'advertisement__form-input advertisement__form-select'} name="select">
                                    <option style={{display:'none'}} value="Не выбрано">Не выбрано</option>
                                    <option value="true">Аукцион</option>
                                    <option value="false">Фиксированная цена</option>
                                </select>
                            </div>

                            <div className={'advertisement__form-row'}>
                                <h3 className={'advertisement__form-title important'}>Срок размещения</h3>
                                <div style={{width:'100%'}}>
                                    <select className={'advertisement__form-input advertisement__form-select'}
                                            style={{marginBottom:'30px'}} name="select"
                                    >
                                        <option style={{display:'none'}} value="value2">Не выбрано</option>
                                        <option value="3 дня">3 дня</option>
                                        <option value="5 дня">5 дней</option>
                                        <option value="7 дня">7 дней</option>
                                        <option value="10 дня">10 дней</option>
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


                            {progress} <button className="cart__figuration greenBtn" type='submit' onClick={() => {}}> Опубликовать объявление</button>


                        </form>
                    </div>






                    <div className={'advertisement__line'}> </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;