import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({handleAddtoCart, products}) => {
    


    return (
        <div className='products-container'>
            {
                products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}/>)
            }
        </div>
    );
};

export default Products;