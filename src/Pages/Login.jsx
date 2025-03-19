import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Auth.css';
import logo from '../Navbar/logo.png';

function Login() {
    return (
        <div>
            <Navbar />
            <div className="page-auth">
                <div className="container-auth">
                    <div className="container-auth-header">
                        <img src={logo} />
                        <h2>Log in</h2>
                    </div>
                    <div className="container-auth-body">
                        <div className="container-auth-form">
                            <input type="text" className="container-auth-form-input" placeholder="Email or phone number *" />
                            <input type="text" className="container-auth-form-input" placeholder="Password *" />
                            <h6>Forgot password?</h6>
                            <button type="button" className="container-auth-form-button">LOGIN</button>
                            <h5>Don't have an account? <NavLink to="/signup"><h7>Register</h7></NavLink></h5> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
