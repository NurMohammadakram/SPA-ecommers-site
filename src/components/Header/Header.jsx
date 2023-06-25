import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav className='navbar'>
                <a href="">
                    <li>Shop</li>
                </a>
                <a href="">
                    <li>Order</li>
                </a>
                <a href="">
                    <li>Inventory</li>
                </a>
                <a href="">
                    <li>Login</li>
                </a>
            </nav>
        </div>
    );
};

export default Header;