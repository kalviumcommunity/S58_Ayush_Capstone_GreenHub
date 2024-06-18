require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


const app = express();
const PORT = process.env.PORT || 5002;

app.use(bodyParser.json());

const users = [
  { email: process.env.USER_EMAIL, password: bcrypt.hashSync(process.env.USER_PASSWORD, 10) },
  // Add more users as needed
];

app.get('/ping', (req, res) => {
  res.send('pong');
});

// POST endpoint for user authentication
app.post('/login', [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log('Received email:', email);
  console.log('Received password:', password);

  // Find user by email
  const user = users.find(user => user.email === email);

  if (!user) {
    // User not found
    console.log('User not found');
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if password matches
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }

    if (!isMatch) {
      // Password does not match
      console.log('Incorrect password');
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Authentication successful
    console.log('Authentication successful');
    res.json({ message: 'Authentication successful', user });
  });
});

// PUT endpoint for updating user password
app.put('/update-password', [
  check('email').isEmail(),
  check('newPassword').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, newPassword } = req.body;
  console.log('Received email for update:', email);
  console.log('Received new password:', newPassword);

  // Find user by email
  const user = users.find(user => user.email === email);

  if (!user) {
    // User not found
    console.log('User not found for update');
    return res.status(404).json({ error: 'User not found' });
  }

  // Hash the new password
  bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }

    // Update user password
    user.password = hashedPassword;

    console.log('Password updated successfully');
    res.json({ message: 'Password updated successfully' });
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
