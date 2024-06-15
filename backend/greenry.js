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
        name: "Snake Plant",
        description: "Low maintenance indoor plant",
        price: 15.99,
        category: "Indoor",
        in_stock: true,
        image: "https://m.media-amazon.com/images/I/615Rdc1mLTL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        name: "Fiddle Leaf Fig",
        description: "Popular indoor tree with large leaves",
        price: 29.99,
        category: "Indoor",
        in_stock: false,
        image: "https://www.ugaoo.com/cdn/shop/files/1_cc65c975-7a6f-43d6-bb81-b56520e29bc7.jpg?v=1717308876"
      },
      {
        name: "Succulent Mix",
        description: "Assorted succulent plants",
        price: 12.99,
        category: "Indoor",
        in_stock: true,
        image: "https://leafculture.co.uk/cdn/shop/files/Succulent-Mix-A-Single-Succulent-Leaf-Culture-101724811.jpg?v=1704821570&width=3840"
      }
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
