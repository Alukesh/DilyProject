import React from 'react';
import ServiceSubmenu from './ServiceSubmenu';

const ServiceMenu3 = ({ items }) => {
    const submenuItems = [
        {
            label: 'Lorem 1',
            link: '/',
        },
        {
            label: 'Lorem 2',
            link: '/',
        },
        {
            label: 'Lorem 3',
            link: '/',
        },
        {
            label: ' Lorem 4',
            link: '/',
        },
        {
            label: 'Lorem 5',
            link: '/',
        },
        {
            label: ' Lorem 6',
            link: '/',
        },
        {
            label: ' Lorem 7',
            link: '/',
        },
        {
            label: 'Lorem 8',
            link: '/',
        },
        {
            label: 'iLorem 9',
            link: '/',
        },
        {
            label: 'iLorem2 ipsum',
            link: '/',
        },
    ]
    return (
        <ServiceSubmenu items={submenuItems}/> 
    );
};

export default ServiceMenu3;