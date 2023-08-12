const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');

// Enable CORS AND BASE ROUTE
app.use(cors())
app.use(express.json())


// Database Connection Code Start 

const mongoURI = 'mongodb+srv://tarbiyahshoaib:fhQnrf3EbJHkSFLK@cluster0.rzdo1wc.mongodb.net/'; // Change this to your MongoDB connection URI
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
  try {
      await client.connect();
      const sample = client.db('mokhter').collection('blog');
      console.log('Database Connect Hoise')
      // DATABASE CONNECTION END

    //  api route ------------------
    app.get('/title',  async (req, res) => {
      const users = await sample.find().toArray();
      res.send(users);
  });
      
  }
  finally {

  }

}
run().catch(console.dir);
// gjyg ----------------



// Your API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Welcome to Express Js Server 5000 Port' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`); 
});
 
