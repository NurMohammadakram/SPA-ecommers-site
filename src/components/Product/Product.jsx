import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Product = ({handleAddtoCart, product}) => {
    const {img, name, price, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-infos'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <div className='pd'>
                    <p>Manufracturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button className='cart-btn' onClick={() => handleAddtoCart(product)}>Add to cart <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
};

export default Product;