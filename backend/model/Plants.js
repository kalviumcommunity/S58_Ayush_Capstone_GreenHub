const mongoose = require('mongoose');

// Define the schema
const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  in_stock: { type: Boolean, default: true },
  imageUrl: { type: String, required: true } // Add the image field
});

// Create the model
const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
