import React, {useState} from 'react';
import addPh from "../../Advertisement/addPhoto.png";
import {useForm} from "react-hook-form";
import {createProduct} from "../../../firebase/firebaseFunction";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../redux/reducers/products";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../../firebase/firebase";


const Sell = () => {
    const user = useSelector(s => s.user.user);

    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);

    // const addProductHandler = async (data) =>{
    //    await createProduct(data.image[0], setProgress, {...data, creator : user.email === 'admin123@mail.ru' ? 1 : user.uid}, dispatch, user);
    //
    //     await reset()
    // };
     const addProductHandler = async (data) =>{
       await createProduct(data.image[0], setProgress, {...data, creator : data.creator}, dispatch, user);

        await reset()
    };


    console.log(user);

    return (
        <div>
            <h2 className={'sell__title'}>Продать нам</h2>
            <form onSubmit={handleSubmit(addProductHandler)} className={'sell__form'}>
                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Название товара</h3>
                        <input {...register("title")} className={'sell__form-input'} placeholder={'Введите название'} type="text"/>
                </div>

                <div className={'sell__form-row sell__form-row_double'}>
                    <div>
                        <h3 className={'sell__form-title important'}>Состояние</h3>
                        <select {...register("state")} className={'sell__form-input sell__form-input_half'} >
                            <option style={{display: 'none'}} value="">Не выбрано</option>
                            <option value="Новое">Новое</option>
                            <option value="Хорошее">Хорошее</option>
                            <option value="По хуже">По хуже</option>
                        </select>
                    </div>
                    <div>
                        <h3 className={'sell__form-title important'}>Цена</h3>
                        <input {...register("price")} className={'sell__form-input sell__form-input_half'} placeholder={'1000'} type="number"/>
                        <span> ₽</span>
                    </div>
                </div>

                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Описание товара </h3>
                    <input {...register("description")} className={'sell__form-input'} placeholder={'Введите название'} type="text"/>
                </div>

                <div className={'sell__form-row sell__form-row_double'}>
                    <div>
                        <h3 className={'sell__form-title important'}>Телефон</h3>
                        <input className={'sell__form-input sell__form-input_half'} placeholder={'+ 7 (123)-456-78-90'} type="text"/>
                    </div>
                    <div>
                        <h3 className={'sell__form-title important'}>E- mail</h3>
                        <input className={'sell__form-input sell__form-input_half'} placeholder={'name@inbox.ru'} type="text"/>
                    </div>
                </div>

                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Выберите ваш город</h3>
                    <select {...register("city")} className={'sell__form-input'} >
                        <option style={{display: 'none'}} value="">Не выбрано</option>
                        <option value="Бишкек">Бишкек</option>
                        <option value="Москва">Москва</option>
                        <option value="Тула">Тула</option>
                        <option value="Стамбул">Стамбул</option>
                    </select>
                </div>

                  <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>creator</h3>
                    <select {...register("creator")} className={'sell__form-input'} >
                        <option style={{display: 'none'}} value="">Не выбрано</option>
                        <option value="Диваны тут">Диваны тут</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="М-ВИДЕО">М-ВИДЕО</option>
                        <option value="ДЕТСКИЙ МИР">ДЕТСКИЙ МИР</option>
                        <option value="Apple">Apple</option>
                    </select>
                </div>



                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'} >Фото/ видео</h3>
                    <div className={'sell__form-block'}>
                        <p className={'sell__form-addPhoto_top'}>Перетащите фото или <label htmlFor={'file'} className={'advertisement__form-addPhoto_link'} >выберите их на своем компьютере</label></p>
                        <input {...register("image")} style={{display:'none'}} type="file" id={'file'}/>
                        <img className={'sell__form-addPh'} src={addPh} alt=""/>            {progress}

                    </div>
                </div>


                <div className={'sell__form-row'}>
                    <div className={'sell__form-bottom'}>
                        <div className={'sell__form-check'}>
                            <input id={'check'} type="checkbox"/>
                            <label htmlFor="check"><span  className={'sell__form-label'} >Я согласен с условиями обработки
                                персональных данных</span></label>
                        </div>
                        <button className={'sell__form-btn'}>Узнать цену</button>
                    </div>

                </div>



            </form>
        </div>
    );
};

export default Sell;