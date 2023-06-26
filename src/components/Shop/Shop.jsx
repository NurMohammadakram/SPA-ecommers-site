import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import OrderSummery from '../OrderSummery/OrderSummery';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className='shop-container'>
            <Products handleAddtoCart={handleAddtoCart}/>
            <OrderSummery cart={cart}/>
        </div>
    );
};

export default Shop;