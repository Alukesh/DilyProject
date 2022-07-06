import React from 'react';
import shopIcon1 from './shop.png'
import shopIcon2 from './shop.png'

import SideMenu from "../../../Phones/SideMenu/SideMenu";
import CompilationRow from "../../Compilation/CompilationRow/CompilationRow";
import {useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom'
import Vend from "../../Charity/Vend/Vend";

const Shop = ({back = 'grey'}) => {
    const products = useSelector(s => s.products.products);
    const params = useParams();



    return (
        <div className={'container'}>
            <div className="shop">

                <div className="shop__banner" style={{backgroundColor:
                        params.id === 'Диваны тут' ? '#00C65E' :
                            params.id === 'ДЕТСКИЙ МИР' ? '#000' : back
                }}>
                    <div className="shop__banner-left">
                        <img src={
                            params.id === 'Диваны тут' ? shopIcon1 :
                                params.id === 'ДЕТСКИЙ МИР' ? shopIcon1 : ''
                        } alt=""/>
                        <p className={'shop__banner-descr'}>
                            <span className={'shop__banner-title'}>{params.id}</span>
                            <span className={'shop__banner-subtitle'}>Дата регистрации: 22 июля 2015 года</span>
                        </p>
                    </div>
                    <div className="shop__banner-right">

                    </div>
                </div>

                <div className={'shop__main'}>
                    <SideMenu/>


                    <div className={'phones__main'}>
                        <div className="phones__main-links">
                            <Link to={'/'} className="phones__main-link" >  Главная страница   <span> ></span></Link>
                            <Link to={'/shops'} className="phones__main-link" > Магазины <span> > </span> </Link>
                            <p className="phones__main-link phones__main-link_active" >{params.id} </p>
                        </div>


                        {/*<CompilationRow products={products} compilationCount={4} countInRow={4}/>*/}
                        <CompilationRow products={products} compilationCount={34} creator={params.id} countInRow={4}/>
                    </div>

                </div>

                <Vend/>
            </div>
        </div>
    );
};

export default Shop;