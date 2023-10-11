import React from 'react';
import ServiceSubmenu from './ServiceSubmenu';

const ServiceMenu1 = () => {
    const submenuItems = [
        {
            label: 'Apple Watch',
            link: '/',
        },
        {
            label: 'Iphone',
            link: '/',
        },
        {
            label: 'IPad',
            link: '/',
        },
        {
            label: 'Thunderbolt Display',
            link: '/',
        },
        {
            label: 'Airpods',
            link: '/',
        },
        {
            label: 'Mac Pro',
            link: '/',
        },
        {
            label: 'Apple TV',
            link: '/',
        },
        {
            label: 'Macbook',
            link: '/',
        },
        {
            label: 'iPod',
            link: '/',
        },
        {
            label: 'iMac',
            link: '/',
        },
    ]
    return (
        <ServiceSubmenu items={submenuItems}/>
    );
};

export default ServiceMenu1;