import React from 'react';
import CompilationRow from '../../components/ProductCompilation/CompilationRow/CompilationRow';
// import Format from "./Format/Format";
// import Period from "./Period/Period";
import {useSelector} from "react-redux";
import SideMenu from "./SideMenu/SideMenu";

const Phones = () => {
    const products = useSelector(s => s.products.products);


    return (
        <div className={'phones'}>
            <div className="container">
                <div className="phones__wrapper">

                   <SideMenu/>



                    <div className={'phones__main'}>
                        <div className="phones__main-links">
                            <p className="phones__main-link" >  Главная страница   <span> {'>'}</span></p>
                            <p className="phones__main-link" > Категории <span> {'>'} </span> </p>
                            <p className="phones__main-link phones__main-link_active" > Телефоны и аксессуары </p>
                        </div>
                        <h2 className="phones__main-title"> Телефоны и аксессуары</h2>
                        <h2 className="phones__main-subtitle"> Недавние объявления</h2>

                        <CompilationRow products={products} compilationCount={4} countInRow={4}/>


                        <h2 className="phones__main-subtitle"> Горячие скидки</h2>

                        <CompilationRow products={products} compilationCount={34} countInRow={4}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Phones;