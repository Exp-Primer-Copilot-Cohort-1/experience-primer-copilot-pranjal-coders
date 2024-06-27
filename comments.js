// Create web server
const express = require('express');
const app = express();

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request for /comments');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request for /comments');
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT request for /comments');
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request for /comments');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});