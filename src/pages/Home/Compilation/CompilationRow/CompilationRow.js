import React from 'react';
import phone1 from "../phone1.png";
import face1 from "../face.png";
import phone2 from "../phone2.png";
import phone3 from "../phone3.png";
import CompilationCard from "../CompilationCard/CompilationCard";

const CompilationRow = ({products}) => {



    return (
        <div className={'compilation__row'}>
            {/*<CompilationCard title={'Телефон Xiaomi Redmi'} price={'10 000 ₽'} img={phone1} city={'Москва'} creator={face1}/>*/}
            {
                products.filter((el, idx)=> idx <= 4 ).map(item =>(
                    <CompilationCard title={item.title} price={item.price} img={item.image} city={item.city} creator={face1}/>
                ))
            }


        </div>
    );
};

export default CompilationRow;