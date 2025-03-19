import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container-home">
                <div className="container-home-background">
                    <img src='blob.png' alt="" />
                    <div className="container-home-background-image">
                        <img src='bathtub.png' alt="" />
                    </div>
                </div>
                <div className="container-home-content">
                <h1>Welcome to Bloom</h1>
                    <h2>Discover the power of vegan skincare.</h2>
                    <p>Unlock your skin's natural potential. Crafted with love
                        from botanical extracts, our vegan skincare products
                        nurture and protect, revealing a radiant, healthy glow.
                        Embrace a beauty routine that aligns with your values -
                        kind to you, kind to the planet! Learn more by visiting
                        our <NavLink to="/about" className="custom-navlink">About </NavLink>
                        and <NavLink to="/products" className="custom-navlink">Products</NavLink>.</p>
                    <div className="image-home">
                        <img src='certificates.png' alt="" />
                    </div>
                </div>
            </div>
            <div className="container-home-reviews">
            <h1>Popular reviews</h1>
                <div className="card">
                    <img className="card-image" src="face1.png" alt=""></img>
                    <h2 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                    <p className="card-text">" I've been using Bloom's vegan hyaluronic acid serum
                        for a month now, and I'm obsessed! My skin feels so much plumper and more
                        hydrated, especially during the dry winter months. "</p>
                </div>
                <div className="card">
                    <img className="card-image" src="face2.png" alt=""></img>
                    <h2 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                    <p className="card-text">" Been using Bloom's entire line for a few weeks now and I'm
                        obsessed! My skin has never been clearer and the natural ingredients feel so good.
                        Highly recommend! "</p>
                </div>
                <div className="card">
                    <img className="card-image" src="face3.png" alt=""></img>
                    <h2 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                    <p className="card-text">" After switching to Bloom's Nourishing Cream,
                        I've noticed a significant improvement in my skin's texture! It's deeply
                        hydrating without being greasy, and I wake up glowing every morning. Love
                        this brand! "</p>
                </div>
                <div className="card">
                    <img className="card-image" src="face4.png" alt=""></img>
                    <h2 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                    <p className="card-text">" Switched to Bloom a month ago and my skin feels amazing!
                        It's so glowy and hydrated, and I love knowing it's vegan and cruelty-free.
                        #BloomSkincare "</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
