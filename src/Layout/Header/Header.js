import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaTelegramPlane } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/reducers/user";
// import { findUser } from "../../redux/reducers/user";
import { FaUserAlt } from "react-icons/fa";
import { ImArrowUp, } from 'react-icons/im';
import logo from '../../assets/logo.svg'
import cartIcon from '../../assets/cartIcon.svg'
import HomeTopBar from "../../pages/Home/HomeTopBar/HomeTopBar";
import ServiceTopBar from "../../pages/Service/ServiceTopBar/ServiceTopBar";
import OnlineTopbar from "../../pages/Online/OnlineTopbar/OnlineTopbar";


const Header = () => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [section, setSection] = useState(1);
    const [y, setY] = useState(0);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (200 < window.scrollY) {
            setY(1)
        } else {
            setY(0)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation)
        }
    }, []);
    const userIsLogged = (
        user?.email?.length ||
        user?.phoneNumber?.length
    )
    const handleLogOut = () => {
        if (window.confirm('log out?')) {
            dispatch(logOutUser());
            localStorage.removeItem('user');
            navigate('auth')
        }
    }


    return (
        <header>
            <div id='header' className='color-line header__top' />

            <div className='container'>
                <nav className='header__nav'>
                    <div className='header__nav-left'>
                        <Link to={'/'} onClick={() => setSection(1)}
                            className='header__nav-title'>
                            <img src={logo} alt='Dily' width={72} />
                        </Link>

                        <ul className='header__nav-list'>
                            <NavLink to={'/'} onClick={() => setSection(1)}
                                className={`header__nav-item ${section === 1 ? 'active' : ''} `}>
                                Доска объявлений
                            </NavLink>

                            <NavLink to={'/service'} onClick={() => setSection(2)}
                                className={`header__nav-item ${section === 2 ? 'active' : ''}`}>
                                Сервисный центр
                            </NavLink>

                            <NavLink to={'/online'} onClick={() => setSection(3)}
                                className={`header__nav-item ${section === 3 ? 'active' : ''}`}>
                                Интернет-магазин Dily.ru
                            </NavLink>

                            <NavLink to={'/buying'} onClick={() => setSection(4)}
                                className={`header__nav-item ${section === 4 ? 'active' : ''}`}>
                                Скупка
                            </NavLink>
                        </ul>

                    </div>
                    <div className='header__nav-right'>
                        <div className="control has-icons-left">
                            <div className='header__nav-city'>
                                <div className="icon is-left">
                                    <FaTelegramPlane />
                                </div>
                                <select className='header__nav-select'>
                                    <option>Москва</option>
                                    <option>Нарын</option>
                                    <option>Талас</option>
                                    <option>Бишкек</option>
                                    <option>Баткен</option>
                                    <option>Ош</option>
                                    <option>Иссык Куль</option>
                                </select>
                            </div>
                        </div>
                        {
                            (userIsLogged) ?
                                <div style={{ display: 'flex', columnGap: '10px' }}>
                                    <Link to={'cart'} className={'header__nav-icon'}>
                                        <img alt='cart' src={cartIcon} width={18}/>
                                        <sub>
                                            {user?.cart?.length}
                                        </sub>
                                    </Link>
                                    <Link to='user' className='header__nav-auth'>
                                        <span>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.95703 12.0908C1.95703 12.0908 0.957031 12.0908 0.957031 11.0908C0.957031 10.0908 1.95703 7.09082 6.95703 7.09082C11.957 7.09082 12.957 10.0908 12.957 11.0908C12.957 12.0908 11.957 12.0908 11.957 12.0908H1.95703ZM6.95703 6.09082C7.75268 6.09082 8.51574 5.77475 9.07835 5.21214C9.64096 4.64953 9.95703 3.88647 9.95703 3.09082C9.95703 2.29517 9.64096 1.53211 9.07835 0.9695C8.51574 0.406891 7.75268 0.0908203 6.95703 0.0908203C6.16138 0.0908203 5.39832 0.406891 4.83571 0.9695C4.2731 1.53211 3.95703 2.29517 3.95703 3.09082C3.95703 3.88647 4.2731 4.64953 4.83571 5.21214C5.39832 5.77475 6.16138 6.09082 6.95703 6.09082Z" fill="#00C65E" /></svg>
                                        </span>  {user?.email || user?.phoneNumber}
                                    </Link>
                                    / <span className='header__nav-auth'
                                        onClick={handleLogOut}>
                                        Выйти
                                    </span>
                                </div>
                                :
                                <div style={{ display: 'flex', columnGap: '10px' }}>
                                    <Link to='login' className='header__nav-auth'>
                                        <span>
                                            <FaUserAlt style={{ color: '00C65E' }} />
                                        </span> Вход </Link> / <Link to='register' className='header__nav-auth'> регистрация</Link>
                                </div>
                        }


                    </div>
                </nav>
            </div>


            <div className='header-under'>
                <div className="container">
                    <div className='header-under__content'>
                        {
                            section === 1 ?
                                <HomeTopBar /> :
                                section === 2 ?
                                    <ServiceTopBar />
                                    :
                                    section === 3 ?
                                        <OnlineTopbar />
                                        : ''
                        }
                    </div>
                </div>
            </div>



            <div>
                <a href="#header" className={`goTop ${y ? 'goTop_active' : ''}`}>
                    <ImArrowUp />
                </a>
            </div>
        </header>
    );
};

export default Header;