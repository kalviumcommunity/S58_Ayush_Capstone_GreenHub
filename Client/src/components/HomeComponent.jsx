import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeComponent.css';
import backgroundImage from './images/background.png'; // Import the image

const HomeComponent = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/plants')
      .then(response => {
        setPlants(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the plants!", error);
      });
  }, []);

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
          {plants.map(plant => (
            <div key={plant._id} className="plant-card">
              <img src={plant.imageUrl} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <span>${plant.price.toFixed(2)}</span>
              <button className="view-product-button">View Product</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeComponent;
