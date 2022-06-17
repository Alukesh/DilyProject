import React from 'react';
import face1 from "../face.png";
import CompilationCard from "../CompilationCard/CompilationCard";

const CompilationRow = ({products, compilationCount = 5, sell, countInRow, creator}) => {



    return (
        <div className={'compilation__row'}>
            {
                creator ?
                products.filter(item => item.creator === creator).filter((el, idx)=> idx < compilationCount ).map(item =>(
                    <>
                        <CompilationCard sell={sell} countInRow={countInRow} title={item.title} price={item.price} img={item.image} city={item.city} creator={face1}/>
                    </>
                ))
                    :
                    products.filter((el, idx)=> idx < compilationCount ).map(item =>(
                        <>
                            <CompilationCard sell={sell} countInRow={countInRow} title={item.title} price={item.price} img={item.image} city={item.city} creator={face1}/>
                        </>
                    ))

            }


        </div>
    );
};

export default CompilationRow;