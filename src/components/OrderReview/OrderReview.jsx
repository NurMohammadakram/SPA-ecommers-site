import React, { useState } from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
import './OrderReview.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleDelete = (id) => {
        const remaining = cart.filter(c => c.id !== id);
        console.log(remaining)
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='order-review-container'>
            <div className='cart-container'>
                {
                    cart.map(c => <Cart key={c.id} cart={c} handleDelete={handleDelete}/>)
                }
            </div>
            <div className="order-summary-container">
                <OrderSummery cart={cart}/>
            </div>
        </div>
    );
};

export default OrderReview;