import React from 'react';
import face1 from "../face.png";
import CompilationCard from "../CompilationCard/CompilationCard";
import Skeleton from '@mui/material/Skeleton';

const CompilationRow = ({products, compilationCount = 5, sell, countInRow, creator}) => {
    const loading = products?.length === 0


    return (
        <div className={'compilation__row'}>
            {
                loading ?
                Array.from(new Array(5)).map((item, index) => (
                    <Skeleton key={index} variant="rectangular" className='compilation__card' height={240} />
                ))
                :
                products.filter((el, idx) => creator ? el.creator === creator : el && idx < compilationCount  ).map(item =>(
                    <React.Fragment key={item.id}>
                        <CompilationCard
                            id={item.id}
                            sell={sell}
                            countInRow={countInRow}
                            title={item.title}
                            price={item.price}
                            img={item.image}
                            city={item.city}
                            creatorImage={face1}
                            stars={item.comments}
                            comments={item?.comments?.length + 1}
                        />
                    </React.Fragment>
                ))

            }


        </div>
    );
};

export default CompilationRow;