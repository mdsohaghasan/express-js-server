const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());



// Your API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Welcome to Express Js Server 5000 Port' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`); 
});
 
