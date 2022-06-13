import React from 'react';
import shopIcon from './shop.png'
import SideMenu from "../../../Phones/SideMenu/SideMenu";
import CompilationRow from "../../Compilation/CompilationRow/CompilationRow";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const Shop = () => {
    const products = useSelector(s => s.products.products);


    return (
        <div className={'container'}>
            <div className="shop">

                <div className="shop__banner">
                    <div className="shop__banner-left">
                        <img src={shopIcon} alt=""/>
                        <p className={'shop__banner-descr'}>
                            <span className={'shop__banner-title'}>Диваны тут</span>
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
                            <p className="phones__main-link phones__main-link_active" > Диваны тут </p>
                        </div>


                        <CompilationRow products={products} compilationCount={4} countInRow={4}/>
                        <CompilationRow products={products} compilationCount={34} countInRow={4}/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Shop;