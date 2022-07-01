import React from 'react';

const ProductTabsInfo = () => {
    return (
        <div className={'product__tabs-info'}>
            <h2 className={'product__tabs-info-title'}>Характеристики</h2>
            <h3 className={'product__tabs-info-subtitle'}>Основные характеристики</h3>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Память </span>
                <span className={'product__tabs-info-right'}> 128 ГБ</span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Цвет </span>
                <span className={'product__tabs-info-right'}> зеленый</span>
            </p>



            <h3 className={'product__tabs-info-subtitle'}>Процессор</h3>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Процессор </span>
                <span className={'product__tabs-info-right'}> А 14 Bionic </span>
            </p>



            <h3 className={'product__tabs-info-subtitle'}>Дисплей</h3>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Диагональ </span>
                <span className={'product__tabs-info-right'}> 6,1’’ </span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Технологии дисплея </span>
                <span className={'product__tabs-info-right'}> True Tone</span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Тип пикселя </span>
                <span className={'product__tabs-info-right'}> OLED </span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Плотность пикселей на дюйм </span>
                <span className={'product__tabs-info-right'}> 460 пикс/дюйм</span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Контрастность </span>
                <span className={'product__tabs-info-right'}> 2000000:1</span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Яркость </span>
                <span className={'product__tabs-info-right'}> 625кд/м2 </span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Разрешение </span>
                <span className={'product__tabs-info-right'}> 253*1170 </span>
            </p>



            <h3 className={'product__tabs-info-subtitle'}>Камера</h3>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Разрешение камеры </span>
                <span className={'product__tabs-info-right'}> 12 Мп </span>
            </p>
            <div className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Тип объектива </span>
                <span className={'product__tabs-info-right'}> <p>широкоугольный</p>  <p>сверхширокоугольный</p></span>
            </div>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Диафрагма </span>
                <span className={'product__tabs-info-right'}> широкоугольная: ƒ/1.6, сверхшироко­угольная: ƒ/2.4 </span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Стабилизация изображения </span>
                <span className={'product__tabs-info-right'}> оптическая</span>
            </p>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Зум (фото) </span>
                <span className={'product__tabs-info-right'}> цифровой 5x оптический 2x (на уменьшение)</span>
            </p>
            <div className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Количество линз </span>
                <span className={'product__tabs-info-right'}> <p>пятилинзовый</p> <p>семилинзовый</p> </span>
            </div>
            <p className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Защита объектива </span>
                <span className={'product__tabs-info-right'}> сапфировое стекло </span>
            </p>
            <div className={'product__tabs-info-row'}>
                <span className={'product__tabs-info-left'}>Функции камеры </span>
                <span className={'product__tabs-info-right'}>
                    <ul>
                        <li>вспышка True Tone с функцией Slow Sync</li>
                        <li>режим «Портрет» с улучшенным эффектом боке</li>
                        <li>и функцией «Глубина»</li>
                        <li>автоматическая стабилизация изображения</li>
                        <li>функция Smart HDR 3</li>
                        <li>ночной режим</li>
                        <li>панорамная съёмка</li>
                        <li>серийная съëмка</li>
                        <li>режим таймера</li>
                        <li>привязка фотографий к месту съёмки</li>
                        <li>портретное освещение</li>
                        <li>коррекция искажений объектива</li>
                        <li>технология Deep Fusion</li>
                        <li>поддержка Focus Pixels на всей матрице</li>
                        <li>форматы изображений: HEIF и JPEG</li>
                        <li>Широкий цветовой диапазон для фотографий и Live Photos</li>
                        <li>передовая система устранения эффекта красных глаз</li>
                    </ul>
                </span>
            </div>


        </div>
    );
};

export default ProductTabsInfo;