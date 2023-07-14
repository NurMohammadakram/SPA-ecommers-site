import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav className='navbar'>
                <Link to="/">
                    <li>Shop</li>
                </Link>
                <Link to="order">
                    <li>Order</li>
                </Link>
                <Link to="inventory">
                    <li>Inventory</li>
                </Link>
                <Link to="login">
                    <li>Login</li>
                </Link>
            </nav>
        </div>
    );
};

export default Header;