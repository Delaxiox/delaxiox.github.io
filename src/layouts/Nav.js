// Nav.js

import React from 'react';
import { NavLink} from 'react-router-dom';

function Nav() {
    return <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/credits">Credits</NavLink>
                    <NavLink to="/fursonacon">FursonaCon (Temp)</NavLink>
                </ul>
            </nav>;
}

export default Nav;