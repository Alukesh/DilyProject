import React from 'react';
import img from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

const Jobs = () => {
    return (
        <div className="jobs">
            <div className="container">
                <h2 className="jobs__title">Виды работ</h2>
                <div className="jobs__content">
                    <div className="jobs__card">
                        <img src={img} alt="" className="shadow-box"/>
                        <ul className="jobs__list">
                            <li className="jobs__list-item">Модульный ремонт</li>
                            <li className="jobs__item">Замена блока питания</li>
                            <li className="jobs__item">Чистка от пыли</li>
                            <li className="jobs__item">Замена кнопок громкости</li>
                            <li className="jobs__item">Замена кнопки Home (домой)</li>
                            <button className="jobs__list-btn">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
                                </svg>
                            </button>
                        </ul>
                        <button className="jobs__btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.3929" cy="12.3933" r="11.1067" transform="rotate(-90 12.3929 12.3933)" fill="white" stroke="#00C65E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3143 12.9769L10.6409 17.6506C10.3182 17.9732 9.79505 17.9733 9.47238 17.6506C9.14972 17.3279 9.14973 16.8048 9.47239 16.4821L13.5617 12.3928L9.47197 8.30306C9.14931 7.9804 9.14932 7.45724 9.47198 7.13458C9.79464 6.81192 10.3178 6.81191 10.6405 7.13457L15.2954 11.7895C15.3019 11.7956 15.308 11.8021 15.3143 11.8085C15.5963 12.0908 15.6318 12.5268 15.4202 12.8473C15.3899 12.8932 15.3547 12.9366 15.3143 12.9769Z" fill="#00C65E"/>
                            </svg>

                        </button>
                    </div>
                    <div className="jobs__card">
                        <img src={img2} alt="" className="shadow-box"/>
                        <ul className="jobs__list">
                            <li className="jobs__list-item">Аппаратный ремонт</li>
                            <li className="jobs__item">Ремонт датчика Face ID</li>
                            <li className="jobs__item">Замена шлейфа</li>
                            <li className="jobs__item">Ремонт сканера отпечатков Touch ID</li>
                            <li className="jobs__item">Замена разъема наушников</li>
                            <button className="jobs__list-btn">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
                                </svg>
                            </button>
                        </ul>
                        <button className="jobs__btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.3929" cy="12.3933" r="11.1067" transform="rotate(-90 12.3929 12.3933)" fill="white" stroke="#00C65E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3143 12.9769L10.6409 17.6506C10.3182 17.9732 9.79505 17.9733 9.47238 17.6506C9.14972 17.3279 9.14973 16.8048 9.47239 16.4821L13.5617 12.3928L9.47197 8.30306C9.14931 7.9804 9.14932 7.45724 9.47198 7.13458C9.79464 6.81192 10.3178 6.81191 10.6405 7.13457L15.2954 11.7895C15.3019 11.7956 15.308 11.8021 15.3143 11.8085C15.5963 12.0908 15.6318 12.5268 15.4202 12.8473C15.3899 12.8932 15.3547 12.9366 15.3143 12.9769Z" fill="#00C65E"/>
                            </svg>

                        </button>
                    </div>
                    <div className="jobs__card">
                        <img src={img3} alt="" className="shadow-box"/>
                        <ul className="jobs__list">
                            <li className="jobs__list-item">Компонентный ремонт</li>
                            <li className="jobs__item">Замена Wi-Fi модуля</li>
                            <li className="jobs__item">Замена шлейфа</li>
                            <li className="jobs__item">Замена контроллера цепи питания</li>
                            <li className="jobs__item">Замена контроллера питания
                                U7 (U2)</li>
                            <button className="jobs__list-btn">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
                                </svg>
                            </button>
                        </ul>
                        <button className="jobs__btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.3929" cy="12.3933" r="11.1067" transform="rotate(-90 12.3929 12.3933)" fill="white" stroke="#00C65E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3143 12.9769L10.6409 17.6506C10.3182 17.9732 9.79505 17.9733 9.47238 17.6506C9.14972 17.3279 9.14973 16.8048 9.47239 16.4821L13.5617 12.3928L9.47197 8.30306C9.14931 7.9804 9.14932 7.45724 9.47198 7.13458C9.79464 6.81192 10.3178 6.81191 10.6405 7.13457L15.2954 11.7895C15.3019 11.7956 15.308 11.8021 15.3143 11.8085C15.5963 12.0908 15.6318 12.5268 15.4202 12.8473C15.3899 12.8932 15.3547 12.9366 15.3143 12.9769Z" fill="#00C65E"/>
                            </svg>

                        </button>
                    </div>
                    <div className="jobs__card">
                        <img src={img4} alt="" className="shadow-box"/>
                        <ul className="jobs__list">
                            <li className="jobs__list-item">Программный ремонт</li>
                            <li className="jobs__item">Снятие пароля Apple id</li>
                            <li className="jobs__item">Восстановление True Tone</li>
                            <li className="jobs__item">Восстановление информации</li>
                            <li className="jobs__item">Диагностика</li>
                            <button className="jobs__list-btn">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
                                </svg>
                            </button>
                        </ul>
                        <button className="jobs__btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.3929" cy="12.3933" r="11.1067" transform="rotate(-90 12.3929 12.3933)" fill="white" stroke="#00C65E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3143 12.9769L10.6409 17.6506C10.3182 17.9732 9.79505 17.9733 9.47238 17.6506C9.14972 17.3279 9.14973 16.8048 9.47239 16.4821L13.5617 12.3928L9.47197 8.30306C9.14931 7.9804 9.14932 7.45724 9.47198 7.13458C9.79464 6.81192 10.3178 6.81191 10.6405 7.13457L15.2954 11.7895C15.3019 11.7956 15.308 11.8021 15.3143 11.8085C15.5963 12.0908 15.6318 12.5268 15.4202 12.8473C15.3899 12.8932 15.3547 12.9366 15.3143 12.9769Z" fill="#00C65E"/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;