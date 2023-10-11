import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import ServiceMenu1 from "./ServiceMenu/ServiceMenu1";
import ServiceMenu3 from "./ServiceMenu/ServiceMenu3";
import TopbarSearch from '../../../components/HomeTopBar/TopbarSearch/TopbarSearch';
import apple from './ServiceMenuIcons/icon1.svg'
import engine from './ServiceMenuIcons/icon2.svg'
import tools from './ServiceMenuIcons/icon3.svg'
import phones from './ServiceMenuIcons/icon4.svg'
import orgTech from './ServiceMenuIcons/icon5.svg'
import photos from './ServiceMenuIcons/icon6.svg'
import houseTech from './ServiceMenuIcons/icon7.svg'
import tv from './ServiceMenuIcons/icon8.svg'
import monitors from './ServiceMenuIcons/icon9.svg'
import monoblock from './ServiceMenuIcons/icon10.svg'
import notebook from './ServiceMenuIcons/icon11.svg'
import tablet from './ServiceMenuIcons/icon12.svg'
import wefix from './ServiceMenuIcons/wefix.svg'
import { useRef, useEffect } from 'react';

const ServiceTopBar = () => {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubmenu] = useState('');
    const fullSearch = useRef(null)
    const handleTaggleFullSearch = () => {
        fullSearch.current.classList.toggle('isShown')
    }
    useEffect(() => {
        const handleEsc = ({ key }) => {
            if (key === 'Escape') {
                fullSearch.current.classList.remove('isShown')
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () =>  window.removeEventListener('keydown', handleEsc)
    }, [])
    const underMenuList = [
        {
            icon: apple,
            label: 'Apple',
            submenu: 'subMenu1',
            action: '',
        },
        {
            icon: engine,
            label: 'Оборудование',
            submenu: 'subMenu2',
            action: '',
        },
        {
            icon: tools,
            label: 'Инструменты',
            submenu: 'subMenu3',
            action: '',
        },
        {
            icon: phones,
            label: 'Телефоны',
            submenu: 'subMenu4',
            action: '',
        },
        {
            icon: orgTech,
            label: 'Орг техника',
            submenu: 'subMenu5',
            action: '',
        },
        {
            icon: photos,
            label: 'Фото и видео',
            submenu: 'subMenu6',
            action: '',
        },
        {
            icon: houseTech,
            label: 'Бытовая техника',
            submenu: 'subMenu7',
            action: '',
        },
        {
            icon: tv,
            label: 'Тв, аудио',
            submenu: 'subMenu8',
            action: '',
        },
        {
            icon: monitors,
            label: 'Мониторы',
            submenu: 'subMenu9',
            action: '',
        },
        {
            icon: monoblock,
            label: 'Моноблоки',
            submenu: 'subMenu10',
            action: '',
        },
        {
            icon: notebook,
            label: 'Ноутбуки',
            submenu: 'subMenu11',
            action: '',
        },
        {
            icon: tablet,
            label: 'Планшеты',
            submenu: 'subMenu11',
            action: '',
        },
    ]
    return (
        <>
            {
                menu &&
                <>
                    {
                        subMenu === 'subMenu1' ?
                            <ServiceMenu1 /> :
                            subMenu === 'subMenu2' ?
                                <ServiceMenu3 /> :
                                subMenu === 'subMenu3' ?
                                    <ServiceMenu3 /> :
                                    ''
                    }
                    <ul className={'shadow-box header-under__menu'}>
                        {
                            underMenuList.map(el => (
                                <li>
                                    <span className={'header-under__menu-link'} onMouseEnter={() => setSubmenu(el.submenu)}>
                                        <img src={el.icon} alt={el.label} />
                                        <span className={'header-under__menu-text'}> {el.label}
                                            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.54765 4.97811L1.85389 8.802C1.59886 9.06599 1.18538 9.066 0.930355 8.80201C0.675331 8.53801 0.675341 8.10997 0.930363 7.84598L4.16243 4.50017L0.930033 1.15403C0.675008 0.890034 0.675018 0.461998 0.93004 0.198002C1.18506 -0.0659952 1.59855 -0.0660048 1.85357 0.197994L5.53265 4.00654C5.53781 4.01155 5.54261 4.01686 5.54766 4.02208C5.77048 4.25307 5.79858 4.60984 5.63132 4.87208C5.60739 4.90958 5.57954 4.9451 5.54765 4.97811Z" fill="#363A45" />
                                            </svg>
                                        </span>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={'overlay'} onMouseEnter={() => setSubmenu(false)} onClick={() => setMenu(false)}> </div>
                </>
            }


            <ul className={'header-under__list'}>
                <li className={'header-under__item'} onClick={() => setMenu(true)}>
                    <span>
                        <img src={wefix} alt='we fix' />
                    </span> Что мы чиним
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.23466 5.00741L1.5409 8.83129C1.28588 9.09529 0.872391 9.0953 0.617367 8.8313C0.362343 8.5673 0.362353 8.13927 0.617374 7.87527L3.84944 4.52947L0.617045 1.18333C0.36202 0.919331 0.36203 0.491295 0.617052 0.227299C0.872074 -0.0366984 1.28556 -0.0367079 1.54058 0.227291L5.21966 4.03584C5.22483 4.04085 5.22963 4.04615 5.23467 4.05138C5.45749 4.28237 5.48559 4.63914 5.31833 4.90138C5.2944 4.93888 5.26655 4.9744 5.23466 5.00741Z" fill="#363A45" /></svg>
                </li>
                <li className={'header-under__item'}>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63399 0.557905L8.63397 0.557926L8.63748 0.5603L15.2249 5.01509C15.4068 5.13849 15.5443 5.31714 15.6168 5.52465L15.9472 5.40908L15.6168 5.52465C15.6894 5.73217 15.6934 5.95753 15.628 6.16743C15.5627 6.37734 15.4315 6.56066 15.254 6.69029C15.0764 6.81993 14.8619 6.88901 14.642 6.88732C14.5487 6.88661 14.459 6.92317 14.3928 6.98888C14.3266 7.05459 14.2893 7.14402 14.2893 7.23731V16.3607C14.2893 16.4407 14.2576 16.5174 14.201 16.574C14.1444 16.6306 14.0677 16.6624 13.9877 16.6624H2.13912H2.13907C2.05688 16.6624 1.97797 16.6301 1.91933 16.5725L1.67408 16.8222L1.91933 16.5725C1.8613 16.5155 1.82772 16.4382 1.82561 16.357V7.23731C1.82561 7.04415 1.66912 6.88751 1.47595 6.88731C1.25687 6.8871 1.04363 6.81665 0.867535 6.68632C0.691438 6.55599 0.561761 6.37264 0.497541 6.16318C0.433321 5.95372 0.43794 5.7292 0.510721 5.52256C0.583482 5.31598 0.720536 5.13815 0.901772 5.01518C0.901821 5.01514 0.901869 5.01511 0.901918 5.01508L7.48931 0.5603L7.48932 0.560321L7.4928 0.557905C7.66035 0.441615 7.85944 0.379297 8.06339 0.379297C8.26735 0.379297 8.46643 0.441615 8.63399 0.557905Z" stroke="#363A45" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.5635 8.67188C11.5635 11.3681 8.06348 14.9219 8.06348 14.9219C8.06348 14.9219 4.56348 11.3681 4.56348 8.67188C4.56348 7.67731 4.93223 6.72349 5.5886 6.02022C6.24498 5.31696 7.13522 4.92188 8.06348 4.92188C8.99173 4.92188 9.88197 5.31696 10.5384 6.02022C11.1947 6.72349 11.5635 7.67731 11.5635 8.67188Z" fill="#00C65E" />
                        <ellipse cx="8.06336" cy="8.73664" rx="1.87" ry="1.97883" fill="white" />
                    </svg>Адреса сервисов
                </li>

                <span className='header-under__cont' onClick={handleTaggleFullSearch}><AiOutlineSearch /> Поиск</span>
            </ul>

            <div ref={fullSearch} className='header-under__fullSearch '>
                <span className='header-under__icon'><AiOutlineSearch /></span>
                <TopbarSearch />
                <AiFillCloseCircle onClick={handleTaggleFullSearch} />
            </div>
            <div className={'header-under-left'}>
                <button className='header-under__add'>Заказать ремонт</button>
            </div>
        </>
    );
};

export default ServiceTopBar;