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
      },
      {
        name: "Bamboo Palm Plant",
        description: "Easy to care for and great for air purification",
        price: 22.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/products/GroPot_cff1f8cf-e233-4cbf-9cfa…"
      },
      {
        name: "Jade Plant Mini",
        description: "A small and easy-to-care-for succulent",
        price: 9.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/products/GroPot_87e3e981-500e-4df2-bff3…"
      },
      {
        name: "Areca Palm Plant",
        description: "Perfect for adding a tropical feel to your home",
        price: 24.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/files/medium-gropot-ivory-areca-palm-pl…"
      },
      {
        name: "Monstera Deliciosa Plant",
        description: "Known for its unique and attractive leaf patterns",
        price: 34.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/files/1_44713654-fadc-43c3-868b-966b8c6…"
      },
      {
        name: "Peace Lily Plant",
        description: "Easy to grow and known for its beautiful white blooms",
        price: 19.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/products/GroPot.jpg?v=1704867612"
      },
      {
        name: "Aglaonema Pink Beauty Plant",
        description: "A beautiful plant with striking pink and green leaves",
        price: 29.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08…"
      },
      {
        name: "Anthurium Red Plant",
        description: "Known for its bright red flowers and glossy leaves",
        price: 39.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/files/DSC_1048.jpg?v=1695228127"
      },
      {
        name: "Ficus Lyrata Bambino - XL",
        description: "A smaller version of the popular fiddle leaf fig",
        price: 49.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99…"
      },
      {
        name: "Peperomia Green Plant",
        description: "Compact and easy-to-care-for with beautiful green leaves",
        price: 14.99,
        category: "Indoor",
        in_stock: true,
        image: "https://www.ugaoo.com/cdn/shop/products/GroPot_4b6b2ac9-aba9-4077-9d36…"
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
