import React from 'react';
import Header from "../../Layout/Header/Header";
import img from "./Frame 915.png"
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <img style={{margin: "50px 0 0 380px"}} src={img} alt=""/>
            <button className="greenBtn" style={{display:  "block", margin: "100px auto 0", padding: "7px 36px"}} onClick={()  => navigate('/')}>Перейти на главную страницу</button>
        </div>
    );
};

export default NotFound;