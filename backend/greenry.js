const mongoose = require('mongoose');
const Plant = require('./model/Plants');

const mongoURI = 'mongodb+srv://ayushsingh:Duster2004@cluster0.mw44ja5.mongodb.net/GreenHub?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');

    // Data to be inserted
    const plants = [
      {
        name: 'Areca Palm Plant',
        description: 'Perfect for adding a tropical feel to your home',
        price: 24.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/files/medium-gropot-ivory-areca-palm-plant-32515461578884.jpg?v=1710162127'
      },
      {
        name: 'Monstera Deliciosa Plant',
        description: 'Known for its unique and attractive leaf patterns',
        price: 34.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/files/1_44713654-fadc-43c3-868b-966b8c624bbf.jpg?v=1706608270'
      },
      {
        name: 'Peperomia Green Plant',
        description: 'Compact and easy-to-care-for with beautiful green leaves',
        price: 14.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/products/GroPot_4b6b2ac9-aba9-4077-9d36-7c1c6265efe9.jpg?v=1707727788'
      },
      {
        name: 'Bamboo Palm Plant',
        description: 'Easy to care for and great for air purification',
        price: 22.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/products/GroPot_cff1f8cf-e233-4cbf-9cfa-8ef815e851dd.jpg?v=1696240355'
      },
      {
        name: 'Ficus Lyrata Bambino - XL',
        description: 'A smaller version of the popular fiddle leaf fig',
        price: 49.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927'
      },
      {
        name: 'Aglaonema Pink Beauty Plant',
        description: 'A beautiful plant with striking pink and green leaves',
        price: 29.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958'
      },
      {
        name: 'Jade Plant Mini',
        description: 'A small and easy-to-care-for succulent',
        price: 9.99,
        category: 'Indoor',
        image: 'https://www.ugaoo.com/cdn/shop/products/GroPot_87e3e981-500e-4df2-bff3-d618431f96c9.jpg?v=1680418283'
      },

    ];
   

    // Insert data into MongoDB
    Plant.insertMany(plants)
      .then(() => {
        console.log('Data inserted');
        mongoose.connection.close(); // Close connection after inserting data
      })
      .catch(err => {
        console.log('Error inserting data:', err);
        mongoose.connection.close(); // Close connection on error
      });
  })
  .catch(err => console.log('Error connecting to MongoDB:', err));
