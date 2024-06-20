require('dotenv').config();
const cors = require('cors'); 
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, getDBConnectionStatus } = require('./config/db');
const Plant = require('./model/Plants'); // Import the Plant model

const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cors()); 

app.get('/ping', (req, res) => {
  res.send('pong');
});

// Endpoint to check database connection status
app.get('/check-db', (req, res) => {
  if (getDBConnectionStatus()) {
    res.status(200).json({ message: 'Connected to DB successfully', status: 200 });
  } else {
    res.status(500).json({ message: 'Failed to connect to DB', status: 500 });
  }
});

// Define the /plants route directly in server.js
app.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.find(); // Fetch all plants from the database
    res.json(plants); // Send the fetched plants as JSON response
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({ error: 'Internal server error' }); // Send 500 error response if there's an error
  }
});

// POST endpoint to create a new plant
app.post('/plants', async (req, res) => {
  try {
    // Create a new plant based on the request body
    const newPlant = new Plant(req.body);
    // Save the new plant to the database
    const savedPlant = await newPlant.save();
    res.status(201).json(savedPlant); // Send the saved plant as JSON response with status 201 (Created)
  } catch (error) {
    console.error('Error creating plant:', error);
    res.status(500).json({ error: 'Internal server error' }); // Send 500 error response if there's an error
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
