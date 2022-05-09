import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <nav bg="primary">

            <Link to="/home">
                <img src={logo} />
            </Link>
            <Link to="/home">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>




        </nav>
    );
};

export default Header;