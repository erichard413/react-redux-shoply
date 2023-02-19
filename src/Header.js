import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const cartCount = useSelector(state => state.cart).length;
    return (
        <div className="Header">
            <div className="Header-left">
                <h1>Welcome to the Store.</h1>
            </div>
            <div className="Header-right">
                <Link to="/"><p>Listings</p></Link>
                <Link to="/cart"><p>Cart: {cartCount}</p></Link>
            </div>
        </div>
    )
}

export default Header;