import React from 'react';
import './styles.css';

function Nav() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src="images\logo.svg" alt="logo" width="250"/>
            </div>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">MENU</a>
                </li>
                <li>
                    <a href="/contact">RESERVATION</a>
                </li>
                <li>
                    <a href="/contact">ABOUT</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;