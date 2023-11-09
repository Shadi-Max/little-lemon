import React from 'react';

function Nav() {
    return (
        <nav>
            <img src="little-lemon\public\images\logo.svg" alt="logo" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">Menu</a>
                </li>
                <li>
                    <a href="/contact">Reservation</a>
                </li>
                <li>
                    <a href="/contact">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;