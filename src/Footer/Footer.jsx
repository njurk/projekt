import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Youtube from './youtube.png';
import Instagram from './instagram.png';
import Pinterest from './pinterest.png';
import Tiktok from './tiktok.png';

const Footer = () => {
    return (
        <div className="footer-body">
            <div className="footer-background">
                <div className="footer-container">
                    <div className="footer-container-left">
                        <div className="footer-column">
                            <h3>CONTACT US</h3>
                            <p>&#9873; 153 Example St, California, USA</p>
                            <p>&#9993; bloom@company.com</p>
                            <p>&#9742; +01 234 567 89</p>
                        </div>
                        <div className="footer-column">
                            <h3>LEGAL</h3>
                            <p>Terms and conditions</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                            <p>Copyright</p>
                            <p>Safety concerns</p>
                        </div>
                        <div className="footer-column">
                            <h3>NAVIGATE</h3>
                            <p><NavLink to="/home">HOME</NavLink></p>
                            <p><NavLink to="/products">PRODUCTS</NavLink></p>
                            <p><NavLink to="/about">ABOUT</NavLink></p>
                            <p><NavLink to="/contact">CONTACT</NavLink></p>
                            <p><NavLink to="/faq">FAQ</NavLink></p>
                        </div>
                    </div>
                    <div className="footer-container-right">
                        <h2>Newsletter</h2>
                        <p>Sign up to be the first to know about our special offers!</p>
                        <div className="newsletter-register">
                            <input type="text" className="newsletter-register-input" placeholder="Enter your email address" />
                            <button className="newsletter-register-button">SUBSCRIBE</button>
                        </div>
                        <div class="footer-icons">
                            <button className="footer-buttons">
                                <img src={Facebook} alt="" />
                            </button>
                            <button className="footer-buttons">
                                <img src={Youtube} alt="" />
                            </button>
                            <button className="footer-buttons">
                                <img src={Instagram} alt="" />
                            </button>
                            <button className="footer-buttons">
                                <img src={Twitter} alt="" />
                            </button>
                            <button className="footer-buttons">
                                <img src={Pinterest} alt="" />
                            </button>
                            <button className="footer-buttons">
                                <img src={Tiktok} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-container-bottom">
                    <hr class="solid" />
                    <div className="footer-copyright">
                        <p>Copyright &copy; 2024 All Rights Reserved. v1.0.0</p>
                    </div>
                </div>
                <img src='./footer.png' />
            </div>
        </div>
    )
}

export default Footer;