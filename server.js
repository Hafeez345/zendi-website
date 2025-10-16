const express = require('express');
const path = require('path'); // path module add kiya
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // path.join use kiya
app.use(express.urlencoded({ extended: true })); // Form data parse karne ke liye
app.use(express.json()); // JSON data parse karne ke liye

// Route: Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // path.join use kiya
});

// Route: Form Data Handle Karna (POST request)
app.post('/submit', (req, res) => {
  console.log('Form Data:', req.body); // Terminal mein print hoga
  res.send('Form submitted! Check terminal for data.');
});

// API Example: Custom Data Send Karna
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from Node.js API!',
    timestamp: new Date()
  };
  res.json(data); // JSON response bhejna
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
