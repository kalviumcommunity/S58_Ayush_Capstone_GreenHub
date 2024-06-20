const express = require('express');
const router = express.Router();
const Plant = require('../model/Plants');

// GET endpoint to fetch all plants
router.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.find(); // Fetch all plants from the database
    res.json(plants); // Send the fetched plants as JSON response
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({ error: 'Internal server error' }); // Send 500 error response if there's an error
  }
});

// POST endpoint to create a new plant
router.post('/', async (req, res) => {
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

// Add more routes as needed

module.exports = router;
