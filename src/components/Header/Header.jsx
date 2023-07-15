import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav className='navbar'>
                <ActiveLink to="/">
                    Shop
                </ActiveLink>
                <ActiveLink to="order-review">
                    Order
                </ActiveLink>
                <ActiveLink to="inventory">
                    Inventory
                </ActiveLink>
                <ActiveLink to="login">
                    Login
                </ActiveLink>
            </nav>
        </div>
    );
};

export default Header;