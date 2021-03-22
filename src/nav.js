import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={{ color: 'white' }} to="/">
                    <li>Home</li>
                </Link>
                <Link style={{ color: 'white' }} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={{ color: 'white' }} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;