import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {FaTelegramPlane} from 'react-icons/fa'
import HomeTopBar from "../../pages/Home/HomeTopBar/HomeTopBar";
import ServiceTopBar from "../../pages/Service/ServiceTopBar/ServiceTopBar";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../redux/reducers/user";
import {findUser} from "../../redux/reducers/user";
import OnlineTopbar from "../../pages/Online/OnlineTopbar/OnlineTopbar";
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
    const [section, setSection] = useState(1);

    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <header>
            <div className='header__top'>

            </div>
            <div className='container'>
                <nav className='header__nav'>
                    <div className='header__nav-left'>
                        <Link to={'/'} onClick={() => setSection(1)} className='header__nav-title'>
                            <svg width="72" height="31" viewBox="0 0 72 31" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 9.3315H7.10074V25.5331H10.1531C17.0021 25.5331 20.4253 22.2054 20.4227 15.5499C20.4227 9.03044 17.2445 5.77189 10.8881 5.77428H9.60581V0.5L10.5226 0.5C15.99 0.5 20.2379 1.81201 23.2662 4.43603C26.2944 7.06004 27.8072 10.7134 27.8045 15.3961C27.8045 20.3817 26.2369 24.1985 23.1015 26.8463C19.9661 29.4942 15.4278 30.8265 9.48639 30.8432H0V9.3315Z"
                                    fill="#00C65E"/>
                                <path d="M7.10475 0.5H0V6.82985H7.10475V0.5Z" fill="#00C65E"/>
                                <path
                                    d="M34.5967 12.8477H32.1621V21.6719H34.5967V12.8477ZM34.7725 10.334C34.7725 9.92969 34.6406 9.5957 34.3857 9.34961C34.1221 9.10352 33.7705 8.98047 33.3311 8.98047C32.9268 8.98047 32.6016 9.10352 32.3555 9.34961C32.1094 9.5957 31.9863 9.92969 31.9863 10.334C31.9863 10.7383 32.1006 11.0635 32.3467 11.3096C32.5928 11.5557 32.918 11.6787 33.3311 11.6787C33.7705 11.6787 34.1221 11.5557 34.3857 11.3096C34.6406 11.0635 34.7725 10.7383 34.7725 10.334ZM39.5537 9.06836H37.1191V21.6719H39.5537V9.06836ZM44.0537 22.208C43.7637 22.876 43.2539 23.2012 42.5244 23.2012C42.1641 23.2012 41.8652 23.1484 41.6279 23.0254V25.1787L41.8037 25.2402C41.9268 25.293 42.1113 25.3369 42.375 25.3809C42.6299 25.4336 42.8936 25.4512 43.1572 25.4512C44.6338 25.4512 45.7676 24.3701 46.5762 22.208L50.083 12.8477H47.5693L45.4951 18.7012L43.4297 12.8477H40.9072L44.3262 21.584L44.0537 22.208ZM49.9775 20.5029C49.9775 20.8633 50.1182 21.1797 50.3994 21.4434C50.6807 21.7158 51.0146 21.8477 51.4189 21.8477C51.8145 21.8477 52.1572 21.7158 52.4385 21.4434C52.7197 21.1797 52.8604 20.8633 52.8604 20.5029C52.8604 20.1426 52.7197 19.8262 52.4385 19.5537C52.1572 19.29 51.8145 19.1494 51.4189 19.1494C51.0146 19.1494 50.6807 19.29 50.3994 19.5537C50.1182 19.8262 49.9775 20.1426 49.9775 20.5029ZM60.0586 12.7598H59.6982C59.2148 12.7598 58.7578 12.874 58.3184 13.085C57.8789 13.3047 57.5977 13.4805 57.4658 13.6123C57.3428 13.7441 57.2373 13.8496 57.167 13.9287V12.8477H54.7412V21.6719H57.167V17.4443C57.167 16.6885 57.3604 16.1084 57.7295 15.7041C58.0986 15.2998 58.6084 15.0977 59.2412 15.0977C59.6016 15.1064 59.874 15.1416 60.0498 15.2031L60.0586 12.7598ZM67.3535 21.6719H69.7793V12.8477H67.3535V17.5322C67.3535 18.2002 67.1865 18.71 66.8613 19.0615C66.5361 19.4219 66.0967 19.5977 65.5518 19.5977C65.0596 19.5977 64.6465 19.4395 64.3213 19.1143C63.9961 18.7979 63.8379 18.3848 63.8379 17.8926V12.8477H61.4121V18.1299C61.4121 19.2549 61.7285 20.1602 62.3613 20.8369C62.9941 21.5137 63.8203 21.8477 64.8311 21.8477C65.3057 21.8477 65.7627 21.751 66.2021 21.5576C66.6416 21.3643 66.9229 21.2061 67.0547 21.083C67.1777 20.96 67.2832 20.8633 67.3535 20.7754V21.6719Z"
                                    fill="#00C65E"/>
                            </svg>
                        </Link>
                        <ul className='header__nav-list'>
                            <Link to={'/'} className={`header__nav-item  ${section === 1 && 'header__nav-item-active'}`}
                                  onClick={() => setSection(1)}>Доска объявлений</Link>
                            <Link to={'/service'}
                                  className={`header__nav-item ${section === 2 && 'header__nav-item-active'}`}
                                  onClick={() => setSection(2)}>Сервисный центр</Link>
                            <Link to={'/online'} className={`header__nav-item ${section === 3 && 'header__nav-item-active'}`}
                                onClick={() => setSection(3)}>Интернет-магазин Dily.ru
                            </Link>
                            <Link to={'/buying'}
                                  className={`header__nav-item ${section === 4 && 'header__nav-item-active'}`}
                                  onClick={() => setSection(4)}>Скупка</Link>
                        </ul>
                    </div>
                    <div className='header__nav-right'>
                        <div className="control has-icons-left">
                            <div className='header__nav-city'>
                                <div className="icon is-left">
                                    <FaTelegramPlane/>
                                </div>
                                <select className='header__nav-select'>
                                    <option>Москва</option>
                                    <option>Не россия</option>
                                </select>
                            </div>
                        </div>

                        {
                            user.email?.length || user.phoneNumber?.length
                                ?
                                <span style={{display:'flex', columnGap:'10px'}}>
                                    <Link to='user' className='header__nav-auth'>
                            <span>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M1.95703 12.0908C1.95703 12.0908 0.957031 12.0908 0.957031 11.0908C0.957031 10.0908 1.95703 7.09082 6.95703 7.09082C11.957 7.09082 12.957 10.0908 12.957 11.0908C12.957 12.0908 11.957 12.0908 11.957 12.0908H1.95703ZM6.95703 6.09082C7.75268 6.09082 8.51574 5.77475 9.07835 5.21214C9.64096 4.64953 9.95703 3.88647 9.95703 3.09082C9.95703 2.29517 9.64096 1.53211 9.07835 0.9695C8.51574 0.406891 7.75268 0.0908203 6.95703 0.0908203C6.16138 0.0908203 5.39832 0.406891 4.83571 0.9695C4.2731 1.53211 3.95703 2.29517 3.95703 3.09082C3.95703 3.88647 4.2731 4.64953 4.83571 5.21214C5.39832 5.77475 6.16138 6.09082 6.95703 6.09082Z"
                                    fill="#00C65E"/>
                        </svg>
                        </span> {user.email || user.phoneNumber}</Link> / <span className='header__nav-auth' onClick={() => {
                                    if (window.confirm('log out?')) {
                                        dispatch(logOutUser());
                                        localStorage.removeItem('user');
                                        navigate('auth')
                                    } return
                                }}> Выйти</span>
                                </span>
                                :
                                <span style={{display:'flex', columnGap:'10px'}}>
                                    <Link to='login' className='header__nav-auth'>
                            <span>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M1.95703 12.0908C1.95703 12.0908 0.957031 12.0908 0.957031 11.0908C0.957031 10.0908 1.95703 7.09082 6.95703 7.09082C11.957 7.09082 12.957 10.0908 12.957 11.0908C12.957 12.0908 11.957 12.0908 11.957 12.0908H1.95703ZM6.95703 6.09082C7.75268 6.09082 8.51574 5.77475 9.07835 5.21214C9.64096 4.64953 9.95703 3.88647 9.95703 3.09082C9.95703 2.29517 9.64096 1.53211 9.07835 0.9695C8.51574 0.406891 7.75268 0.0908203 6.95703 0.0908203C6.16138 0.0908203 5.39832 0.406891 4.83571 0.9695C4.2731 1.53211 3.95703 2.29517 3.95703 3.09082C3.95703 3.88647 4.2731 4.64953 4.83571 5.21214C5.39832 5.77475 6.16138 6.09082 6.95703 6.09082Z"
                                    fill="#00C65E"/>
                        </svg>
                        </span> Вход </Link> / <Link to='register' className='header__nav-auth'> регистрация</Link>

                                </span>

                        }

                    </div>
                </nav>
            </div>


            <div className='header-under'>
                <div className="container">
                    <div className='header-under__content'>


                        {
                            section === 1 ?
                                <HomeTopBar/> :
                                section === 2 ?
                                    <ServiceTopBar/>
                                    :
                                    section === 3 ?
                                     <OnlineTopbar/>
                                    : ''

                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;