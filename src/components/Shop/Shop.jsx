import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import OrderSummery from '../OrderSummery/OrderSummery';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    useEffect( () => {
        const cartIds = getShoppingCart();
        let savedCart = [];
        for (const cartId in cartIds) {
            const matchedPd = products.find(pd => pd.id == cartId);
            if(matchedPd) {
                const quantity = cartIds[cartId];
                matchedPd.quantity = quantity;
                savedCart.push(matchedPd);
            }
        }
        setCart(savedCart);
        
    },[products])

    const handleAddtoCart = (product) => {
        setCart([...cart, product]);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <Products handleAddtoCart={handleAddtoCart} products={products}/>
            <OrderSummery cart={cart}/>
        </div>
    );
};

export default Shop;