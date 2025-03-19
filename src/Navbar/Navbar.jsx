import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo' >
                <NavLink to="/"><button className='nav-logo-button'></button></NavLink>
            </div>
            <div className="nav-search">
                <input type="text" className="nav-search-input" placeholder="Search..." />
                <button className="nav-search-button"></button>
            </div>
            <ul className='nav-menu'>
                <li><NavLink to="/home">HOME</NavLink></li>
                <li><NavLink to="/Products">PRODUCTS</NavLink></li>
                <li><NavLink to="/about" >ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <li><NavLink to="/FAQ">FAQ</NavLink></li>
                
            </ul>
            <NavLink to="/login">
                <button className='nav-login-button'>SIGN IN</button>
            </NavLink>
        </div>
    )
}

export default Navbar;