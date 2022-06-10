import React from 'react';
import phone1 from './phone1.png'
import phone2 from './phone2.png'
import face1 from './face.png'
import CompilationRow from "./CompilationRow/CompilationRow";
import {useSelector} from "react-redux";

const Compilation = ({title, reducer}) => {
const products = useSelector(s => s.products.products);
console.log(products)


    return (
        <section className={'compilation'}>
            <div className="container">
                <div className={'compilation__chapter'}>
                    <h2>Подборка для вас</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow products={products}/>


                 <div className={'compilation__chapter'}>
                    <h2>Подборка от Dily</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow products={products.filter(el => el.creator == 1)}/>

            </div>
        </section>
    );
};

export default Compilation;