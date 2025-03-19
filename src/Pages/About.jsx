import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './About.css';

function About() {
    return (
        <>
            <Navbar />
            <div className="page-about">
                <div id="container-about">
                    <div className="container-about-text">
                        <h1>Our story</h1>
                        <p>Bloom wasn't born in a boardroom; it blossomed from a passion
                            project in a cozy kitchen. Tired of harsh chemicals and confusing
                            labels, we embarked on a mission to create skincare that felt good
                            on our skin and good for our conscience. We dreamt of a brand rooted
                            in nature's bounty, offering effective yet gentle vegan formulas that
                            celebrated the vibrant potential of botanical extracts.</p>
                    </div>
                    <hr></hr>
                    <img src="../public/about1.png" alt="" />
                </div>
                <div id="container-about-styled" className="green">
                    <div id="container-about" class="bg">
                        <img src="../public/about2.png" alt="" />
                        <hr></hr>
                        <div className="container-about-text">
                            <h1>Our principles</h1>
                            <p>At Bloom, we're deeply committed to ethical beauty. We meticulously source
                                only plant-derived ingredients, ensuring our products are 100% vegan. We
                                believe in pushing the boundaries of innovation without harming animals.
                                Animal testing has no place in our world, and we proudly champion cruelty-free
                                practices throughout our entire supply chain.</p>
                        </div>
                    </div>
                </div>
                <div id="container-about">
                    <div className="container-about-text">
                        <h1>Our certificates</h1>
                        <p>Our natural and eco-friendly formulas are suitable for all skin types, even sensitive
                            skin. We avoid harsh chemicals like sulfates, parabens, and alcohol, opting instead
                            for nourishing plant-based ingredients. Bloom is committed to clean beauty that's
                                good for your skin and kind to the planet.</p>
                    </div>
                    <img className="certificates" src="../public/certificates.png" alt="" />
                </div>
                <div id="container-about-styled" className="yellow">
                    <div id="container-about">
                        <img className="about3" src="../public/about3.png" alt="" />
                        <hr></hr>
                        <div className="container-about-text">
                            <h1>Recognition</h1>
                            <p>Bloom has been fortunate to receive recognition from the beauty community for our
                                unwavering commitment to vegan and cruelty-free practices, as well as the efficacy
                                of our products. We've been featured in esteemed publications like Vogue Beauty and
                                received the prestigious Green Beauty Award for our innovative approach to skincare.</p>
                        </div>
                    </div>
                </div>
                <div id="container-about-styled" className="green">
                    <div id="container-about">
                        <p>Influential beauty bloggers have also taken notice, praising our commitment to clean beauty
                            and raving about the visible results our products deliver.</p>
                        <hr/><hr/>
                        <h1>#Bloom</h1>
                    </div>
                    <div className="container-about-influencers"><img src="../public/about4.png" alt="" /></div>
                </div>
                <div id="container-about">
                    <div className="container-about-text">
                        <h1>A few words from our clients</h1>
                        <h5>"Bloom products have been a game-changer for my skin! They're gentle enough for my sensitive
                            skin, yet effective enough to tackle my pesky breakouts. Plus, I love knowing they're vegan
                            and cruelty-free." - Sarah M., Teacher</h5>
                        <h5>"Bloom has helped me simplify my skincare routine. Their products are multi-tasking heroes,
                            and I love knowing they're packed with good-for-you ingredients. Plus, the customer service
                            is top-notch! They were incredibly helpful in recommending the perfect products for my skin."
                            -  Olivia P.,  Accountant</h5>
                        <h5>"I used to think vegan skincare wouldn't be strong enough, but Bloom has proven me wrong! My
                            skin feels so plump and hydrated after using their products, and the natural scents are amazing.
                            It's a true indulgence for the senses." - Michael L., Graphic Designer</h5>
                        <h5>"Since switching to Bloom, my skin feels so much healthier and more radiant. The natural ingredients
                            leave my skin feeling nourished and refreshed, and the packaging is just beautiful!" - Emily K.,
                                Yoga Instructor</h5>
                    </div>
                </div>
                <div className="container-about-end">
                    <h2 className="about-end">Ready to experience the difference yourself? <NavLink to="/products" className="about-navlink">Shop now</NavLink> and
                        enjoy your journey to healthy, radiant skin that blooms from within!</h2>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
