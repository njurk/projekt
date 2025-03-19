import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './FAQ.css';

function FAQ() {
    return (
        <> 
            <Navbar />
            <div className="page-faq">
                <div className="container-faq-header">
                    <h1>Got questions? We've got answers.</h1>
                    <div className="faq-search">
                        <input type="text" className="faq-search-input" placeholder="What would you like to know?" />
                        <button className="faq-search-button"></button>
                    </div>
                </div>
                <div className="container-faq-body">
                    <h2>OUR PRODUCTS</h2>
                    <div className="faq-question">
                        <button className="faq-question-button">What kind of ingredients do you use in your products?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">Are all Bloom products 100% vegan?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">My skin is sensitive. Are your products safe for me?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">How long will it take to see results from using your products?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">What are the benefits of using vegan skincare?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <h2>SHIPPING</h2>
                    <div className="faq-question">
                        <button className="faq-question-button">Do you ship to my country?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">How much does the shipping cost?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">How long will it take to receive my order?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">What happens if my order is damaged in transit?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <h2>RETURNS</h2>
                    <div className="faq-question">
                        <button className="faq-question-button">Can I return an item if I'm not satisfied?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">Do I have to pay for return shipping?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">How long will it take to process a return?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">Can I exchange an item for a different product?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <h2>PAYMENT</h2>
                    <div className="faq-question">
                        <button className="faq-question-button">How can I pay for my order?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">What currency can I use to pay?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">What should I do if my payment gets declined?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">Will I be charged sales tax?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                    <div className="faq-question">
                        <button className="faq-question-button">Do you offer any buy-now-pay-later options?</button>
                        <button className="faq-question-button-icon" alt="" />
                    </div>
                </div>
                <div className="container-faq-ask">
                    <h1>Didn't find what you were looking for?</h1>
                    <h2>Don't worry! You can contact us <NavLink to="/contact">here</NavLink>.</h2>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FAQ;