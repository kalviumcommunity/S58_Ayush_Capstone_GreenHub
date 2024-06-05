const express = require('express');
const bodyParser =require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

const users = [
  { email: 'a.s.kshatriya99@gmail.com', password: 'Duster@2004' },
  // Add more users as needed
];

app.get('/ping', (req, res) => {
  res.send('pong');
});

// POST endpoint for user authentication
app.post('/login', (req, res) => {
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
  if (user.password !== password) {
    // Password does not match
    console.log('Incorrect password');
    return res.status(401).json({ error: 'Incorrect password' });
  }

  // Authentication successful
  console.log('Authentication successful');
  res.json({ message: 'Authentication successful', user });
});




const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
}); 