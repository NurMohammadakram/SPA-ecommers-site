import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({handleAddtoCart}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className='products-container'>
            {
                products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}/>)
            }
        </div>
    );
};

export default Products;