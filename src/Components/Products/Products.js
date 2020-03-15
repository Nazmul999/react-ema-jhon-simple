import React from 'react';
import './products.css'
const Products = (props) => {
    return (
        <div>
            <h1>this is tut</h1>
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Products;