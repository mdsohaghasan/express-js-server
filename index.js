const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
// const mongoURI = 'mongodb://localhost:27017/your-database-name'; // Change your-database-name
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Your API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, Welcome to Express Js Server 5000 Port' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
 
