import React from 'react';

const OrphanageName = ({name}) => {
    return (
        <div className={'shadow-box charity__orphanages-card'}>
            <p className={'charity__orphanages-text'}>{name}</p>
            <button className={'charity__orphanages-btn greenBtn'}>Подробнее</button>
        </div>
    );
};

export default OrphanageName;