import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Contact.css';
import '../Footer/Footer.css';
import Facebook from '../Footer/facebook.png';
import Twitter from '../Footer/twitter.png';
import Youtube from '../Footer/youtube.png';
import Instagram from '../Footer/instagram.png';
import Pinterest from '../Footer/pinterest.png';
import Tiktok from '../Footer/tiktok.png';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="page-contact">
                <div className="container-contact-header">
                    <h1>CONTACT US</h1>
                    <hr></hr>
                    <h2>We'd love to help!</h2>
                    <h3>We try our best to answer as fast as possible. Describe your problem thoroughly.</h3>
                </div>
                <div className="container-contact-body">
                    <div className="container-contact-body-left">
                        <input type="text" className="contact-form" placeholder="Full name *" />
                        <input type="text" className="contact-form" placeholder="Email *" />
                        <input type="text" className="contact-form" placeholder="Phone number (optional)" />
                        <textarea rows="5" className="contact-textarea" placeholder="Message"></textarea>
                        <div className="container-contact-body-left-icons">
                            <img src="attach-file.png" />
                            <img src="attach-photo.png" />
                        </div>
                        <div className="contact-captcha">
                            <input type="checkbox" />
                            <label>I'm not a robot</label>
                            <img src="captcha.png" />
                        </div>
                        <div className="contact-send">
                            <button className="contact-send-button">SEND</button>
                        </div>
                    </div>
                    <div className="container-contact-body-right">
                        <div className="container-contact-body-right-info">
                            <div className="container-contact-body-right-info-line">
                                <img src="location.png" alt="" />
                                <h3>153 Example St, California CA 94086, USA</h3>
                            </div>
                            <div className="container-contact-body-right-info-line">
                                <img src="mail.png" alt="" />
                                <h3>bloom@company.com</h3>
                            </div>
                            <div className="container-contact-body-right-info-line">
                                <img src="phone.png" alt="" />
                                <h3>+01 234 567 89</h3>
                            </div>
                        </div>
                        <hr></hr>
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
            </div>
        </>

    );
}

export default Contact;
