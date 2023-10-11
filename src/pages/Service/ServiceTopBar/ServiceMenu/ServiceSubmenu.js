import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSubmenu = ({ items }) => {
    return (
        <ul className={'shadow-box header-under__menu header-under__menu1'}>
            {
                items.map(el => (
                    <li style={{minWidth:'140px'}}>
                        <Link to={el.link} className={'header-under__menu-link'} onMouseEnter={''}>
                            <span className={'header-under__menu-text'}> {el.label}
                                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.54765 4.97811L1.85389 8.802C1.59886 9.06599 1.18538 9.066 0.930355 8.80201C0.675331 8.53801 0.675341 8.10997 0.930363 7.84598L4.16243 4.50017L0.930033 1.15403C0.675008 0.890034 0.675018 0.461998 0.93004 0.198002C1.18506 -0.0659952 1.59855 -0.0660048 1.85357 0.197994L5.53265 4.00654C5.53781 4.01155 5.54261 4.01686 5.54766 4.02208C5.77048 4.25307 5.79858 4.60984 5.63132 4.87208C5.60739 4.90958 5.57954 4.9451 5.54765 4.97811Z" fill="#363A45" />
                                </svg>
                            </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default ServiceSubmenu;