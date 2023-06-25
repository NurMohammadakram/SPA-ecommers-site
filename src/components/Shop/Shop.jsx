import React from 'react';
import Products from '../Products/Products';
import OrderSummery from '../OrderSummery/OrderSummery';

const Shop = () => {
    return (
        <div>
            <div className="products">
                <Products/>
            </div>
            <div className="order-summery">
                <OrderSummery/>
            </div>
        </div>
    );
};

export default Shop;