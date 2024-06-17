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
          {/* Plant Data */}
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
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/products/GroPot_cff1f8cf-e233-4cbf-9cfa-8ef815e851dd.jpg?v=1696240355" alt="Bamboo Palm Plant" />
            <h3>Bamboo Palm Plant</h3>
            <p>Easy to care for and great for air purification</p>
            <span>$22.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/products/GroPot_87e3e981-500e-4df2-bff3-d618431f96c9.jpg?v=1680418283" alt="Jade Plant Mini" />
            <h3>Jade Plant Mini</h3>
            <p>A small and easy-to-care-for succulent</p>
            <span>$9.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/files/medium-gropot-ivory-areca-palm-plant-32515461578884.jpg?v=1710162127" alt="Areca Palm Plant" />
            <h3>Areca Palm Plant</h3>
            <p>Perfect for adding a tropical feel to your home</p>
            <span>$24.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/files/1_44713654-fadc-43c3-868b-966b8c624bbf.jpg?v=1706608270" alt="Monstera Deliciosa Plant" />
            <h3>Monstera Deliciosa Plant</h3>
            <p>Known for its unique and attractive leaf patterns</p>
            <span>$34.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/products/GroPot.jpg?v=1704867612" alt="Peace Lily Plant" />
            <h3>Peace Lily Plant</h3>
            <p>Easy to grow and known for its beautiful white blooms</p>
            <span>$19.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958" alt="Aglaonema Pink Beauty Plant" />
            <h3>Aglaonema Pink Beauty Plant</h3>
            <p>A beautiful plant with striking pink and green leaves</p>
            <span>$29.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/files/DSC_1048.jpg?v=1695228127" alt="Anthurium Red Plant" />
            <h3>Anthurium Red Plant</h3>
            <p>Known for its bright red flowers and glossy leaves</p>
            <span>$39.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927" alt="Ficus Lyrata Bambino - XL" />
            <h3>Ficus Lyrata Bambino - XL</h3>
            <p>A smaller version of the popular fiddle leaf fig</p>
            <span>$49.99</span>
            <button className="view-product-button">View Product</button>
          </div>
          <div className="plant-card">
            <img src="https://www.ugaoo.com/cdn/shop/products/GroPot_4b6b2ac9-aba9-4077-9d36-7c1c6265efe9.jpg?v=1707727788" alt="Peperomia Green Plant" />
            <h3>Peperomia Green Plant</h3>
            <p>Compact and easy-to-care-for with beautiful green leaves</p>
            <span>$14.99</span>
            <button className="view-product-button">View Product</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeComponent;
