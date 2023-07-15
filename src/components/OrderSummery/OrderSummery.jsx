import React, { useState } from 'react';
import './OrderSummery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';


const OrderSummery = ({cart}) => {
    // console.log(cart);
    let quantity = 0;
    let priceSum = 0;
    let shippingSum = 0;
    let taxSum = 0;
    let grandTotal = 0;
    for (const pd of cart) {
        pd.quantity = pd.quantity || 1;// i think problem is in this line.
        priceSum += pd.price * pd.quantity;
        shippingSum += pd.shipping;
        taxSum += parseInt((pd.price * 7/100).toFixed(2) * pd.quantity);
        grandTotal = priceSum + shippingSum + taxSum;
        quantity += pd.quantity;// i think problem is in this line.
    }
    return (
        <div className='orderSummary'>
            <h2 style={{textAlign: 'center'}}>Order summary</h2>
            <div>
                <p>Selected items: {quantity}</p>
                <p>Total price: ${priceSum}</p>
                <p>Shipping charge: ${shippingSum}</p>
                <p>Tax: ${taxSum}</p>
                <h3 style={{marginBottom: '40px'}}>Grand total: ${grandTotal}</h3>
            </div>
            <button className='delete-cart-btn'>Clear cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='review-btn'>Review order <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    );
};

export default OrderSummery;