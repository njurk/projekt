import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Products.css';

function Products() {
    return (
        <>
            <Navbar />
            <div className="page-products">
                <div id="container-products" className="bg-green">
                    <div className="container-products-new">
                        <div id="container-products-new-column">
                            <div className="tag-new">NEW!</div>
                            <h1>Bloom's Flawless Serum</h1>
                        </div>
                        <img src="../public/product.png" className="container-products-new" alt="" />
                        <div id="container-products-new-column">
                            <p>Struggling with dullness and uneven texture? Our
                                newest Flawless Serum is your answer!</p>
                            <button type="button" className="red">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <div id="container-products">
                    <div className="container-products-categories">
                        <div className="container-products-categories-grid">
                            <div className="container-products-categories-grid-row">
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/serums.png" className="products-category-photo" />
                                    </div>
                                    <h3>Serums</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/moisturizers_creams.png" className="products-category-photo" />
                                    </div>
                                    <h3>Moisturizers & creams</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/masks_peelings.png" className="products-category-photo" />
                                    </div>
                                    <h3>Masks & peelings</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/mists_sprays.png" className="products-category-photo" />
                                    </div>
                                    <h3>Mists & sprays</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/acne_treatments.png" className="products-category-photo" />
                                    </div>
                                    <h3>Acne treatments</h3>
                                </div>
                            </div>
                            <div className="container-products-categories-grid-row">
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/body.png" className="products-category-photo" />
                                    </div>
                                    <h3>Body care</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/hands_nails.png" className="products-category-photo" />
                                    </div>
                                    <h3>Hands & nails care</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/lip_care.png" className="products-category-photo" />
                                    </div>
                                    <h3>Lip care</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/kits_bundles.png" className="products-category-photo" />
                                    </div>
                                    <h3>Kits & bundles</h3>
                                </div>
                                <div className="products-category">
                                    <div className="products-category-photo">
                                        <img src="../public/new_arrivals.png" className="products-category-photo" />
                                    </div>
                                    <h3>New arrivals</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="container-products" className="bg-blue">
                    <h1 className="container-bestsellers">BESTSELLERS</h1>
                    <div className="container-products-bestsellers">
                        <div className="container-products-bestsellers-panel">
                            <img src="../public/product.png" alt="" />
                            <h3>Chaga Defense Serum (Antioxidant, protective)</h3>
                            <h2>$ 19.90</h2>
                            <h4>$ 29.99</h4>
                        </div>
                        <div className="container-products-bestsellers-panel">
                            <img src="../public/product.png" alt="" />
                            <h3>Green Tea Balancing Toner (Oil control, purifying)</h3>
                            <h2>$ 29.99</h2>
                            <h4>$ 40.99</h4>
                        </div>
                        <div className="container-products-bestsellers-panel">
                            <img src="../public/product.png" alt="" />
                            <h3>Moonlight Glow Lotion (Hydrating, illuminating)</h3>
                            <h2>$ 35.99</h2>
                            <h4>$ 45.99</h4>
                        </div>
                        <div className="container-products-bestsellers-panel">
                            <img src="../public/product.png" alt="" />
                            <h3>Overnight Renewal Nectar (Restorative, overnight treatment)</h3>
                            <h2>$ 40.99</h2>
                            <h4>$ 60.99</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Products;
