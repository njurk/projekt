import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Auth.css';
import logo from '../Navbar/logo.png';

function Signup() {
    return (
        <div>
            <Navbar />
            <div className="page-auth">
                <div className="container-auth">
                    <div className="container-auth-header">
                        <img src={logo} />
                        <h2>Register</h2>
                    </div>
                    <div className="container-auth-body">
                        <div className="container-auth-form">
                            <input type="text" className="container-auth-form-input" placeholder="Full name *" />
                            <input type="text" className="container-auth-form-input" placeholder="Email *" />
                            <input type="text" className="container-auth-form-input" placeholder="Phone number (optional)" />
                            <input type="text" className="container-auth-form-input" placeholder="Password *" />
                            <input type="text" className="container-auth-form-input" placeholder="Confirm password *" />
                            <div className="container-auth-form-checkbox">
                                <input type="checkbox" />
                                <label>I've read and accept the Terms and Conditions *</label>
                            </div>
                            <button type="button" className="container-auth-form-button">REGISTER</button>
                            <h5>Already have an account? <NavLink to="/login"><h7>Log in</h7></NavLink></h5> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Signup;
