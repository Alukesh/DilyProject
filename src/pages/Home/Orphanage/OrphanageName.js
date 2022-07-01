import React from 'react';
import {useNavigate} from "react-router-dom";

const OrphanageName = ({name}) => {

    const navigate = useNavigate();

    return (
        <div className={'shadow-box charity__orphanages-card'}>
            <p className={'charity__orphanages-text'}>{name}</p>
            <button className={'charity__orphanages-btn greenBtn'} onClick={() => navigate("../aboutUs")}>Подробнее</button>
        </div>
    );
};

export default OrphanageName;