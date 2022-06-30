import React from 'react';
import {useSelector} from "react-redux";
import CompilationRow from "../../../Home/Compilation/CompilationRow/CompilationRow";

const ProductTabsAccessories = () => {
    const products = useSelector(s => s.products.products);



    return (
        <div>
            <CompilationRow sell={true} products={products} creator={'Apple'} />
            <CompilationRow sell={true} products={products} creator={'Apple'} />
        </div>
    );
};

export default ProductTabsAccessories;