import React from 'react';
import './HomeComponent.css';
import backgroundImage from './images/background.png'; // Import the image

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={backgroundImage} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h2>Explore a vast collection of <br /> plants sitting at home!</h2>
          <h5>plants starting ₹199   ⚪  Healthy premium plants</h5>
        </div>
      </div>
      <div className="content">
        <h1>Plants</h1>
        <p>Plants make for the best house companions, suitable for all your moods and every aesthetic. Green-hub brings you the widest variety of plants to choose from so you can buy plants online sitting at home.</p>
        <section className="plants-grid">
          {/* Replace these with dynamic content */}
          <div className="plant-card">
            <img src="https://m.media-amazon.com/images/I/615Rdc1mLTL._AC_UF1000,1000_QL80_.jpg" alt="Snake Plant" />
            <h3>Snake Plant</h3>
            <p>Low maintenance indoor plant</p>
            <span>$15.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/files/1_cc65c975-7a6f-43d6-bb81-b56520e29bc7.jpg?v=1717308876" alt="Fiddle Leaf Fig" />
            <h3>Fiddle Leaf Fig</h3>
            <p>Popular indoor tree with large leaves</p>
            <span>$29.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://leafculture.co.uk/cdn/shop/files/Succulent-Mix-A-Single-Succulent-Leaf-Culture-101724811.jpg?v=1704821570&width=3840" alt="Succulent Mix" />
            <h3>Succulent Mix</h3>
            <p>Assorted succulent plants</p>
            <span>$12.99</span>
            <button className="view-product-button">View Product</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeComponent;
