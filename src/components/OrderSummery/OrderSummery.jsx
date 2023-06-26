import React, { useState } from 'react';
import './OrderSummery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderSummery = ({cart}) => {
    const [sum, setSum] = useState(0)

    for (const pd of cart) {
        console.log(pd)
    }
    return (
        <div className='orderSummary'>
            <h3 style={{textAlign: 'center'}}>Order summary</h3>
            <div>
                <p>Selected items: ${cart.length}</p>
                <p>Total price: $</p>
                <p>Shipping charge: $</p>
                <p>Tax: $</p>
                <p>Grand total: $</p>
            </div>
            <button className='delete-cart-btn'>Clear cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='review-btn'>Review order <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    );
};

export default OrderSummery;