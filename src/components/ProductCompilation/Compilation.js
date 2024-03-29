import React, {useState} from 'react';
import CompilationRow from "./CompilationRow/CompilationRow";
import {useSelector} from "react-redux";

const Compilation = ({}) => {
const products = useSelector(s => s.products.products);
console.log(products);
    const [more, setMore] =useState(5);


    return (



        <section className={'compilation'}>
            <div className="container">
                <div className={'compilation__chapter'}>
                    <h2>Подборка для вас</h2>
                    <span className={'compilation__show_all'} onClick={() => setMore(more + 5 < products.length ? more + 5 : 5 )}>{more + 5 < products.length ? 'Смотреть все' : 'убрать все' }</span>
                </div>
                <CompilationRow products={products} compilationCount={more} creator={''}/>


                 <div className={'compilation__chapter'}>
                    <h2>Подборка от Dily</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow products={products} creator={1}/>

            </div>
        </section>
    );
};

export default Compilation;