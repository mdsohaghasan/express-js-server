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
      const program = client.db('mokhter').collection('program');
      const consultancy = client.db('mokhter').collection('consultancy');
      const event = client.db('mokhter').collection('event');
      const lecture = client.db('mokhter').collection('lecture');
      const blog = client.db('mokhter').collection('blog');
      const contact = client.db('mokhter').collection('contact');

      console.log('Database Connect Hoise')
      // DATABASE CONNECTION END

    //  api route ------------------
    app.get('/title',  async (req, res) => {
      const users = await sample.find().toArray();
      res.send(users);
  });
      

  // api routes /////////////////////////
  // Program api route  
  // Consultancy  api route 
  // Event  api route
  // Lecture  api route
  // Blog  api route
  // Contact   api route




  // Program api route  .......................
  app.get('/program',  async (req, res) => {
    const defultEmail = "sohag@gmail.con";
    const decodedEmail = req.headers.authorization;
    console.log(decodedEmail);
    if (defultEmail === decodedEmail) {
        const programList = await program.find().toArray();
        res.send(programList);
    }
    else {
        return res.status(403).send({ message: 'forbidden access' });
    }
});


// Consultancy  api route ...................
app.get('/consultancy',  async (req, res) => {
  const defultEmail = "sohag@gmail.com";
  const decodedEmail = req.headers.authorization;
  console.log(decodedEmail);
  if (defultEmail === decodedEmail) {
      const consultancyList = await consultancy.find().toArray();
      res.send(consultancyList);
  }
  else {
      return res.status(403).send({ message: 'forbidden access' });
  }
});



// Event  api route  ..............................
  app.get('/event',  async (req, res) => {
    const eventList = await event.find().toArray();
    res.send(eventList);
  });




// Lecture  api route .................................
  app.get('/lecture',  async (req, res) => {
    const lectureList = await lecture.find().toArray();
    res.send(lectureList);
  });



// Blog  api route  ...................................
  app.get('/blog',  async (req, res) => {
    const blogList = await blog.find().toArray();
    res.send(blogList);
  });


// Contact   api route  ..............................
  app.get('/contact',  async (req, res) => {
    const defultEmail = "sohag@gmail.com";
    const decodedEmail = req.headers.authorization;
    console.log(decodedEmail);
    if (defultEmail === decodedEmail) {
        const contactList = await contact.find().toArray();
        res.send(contactList);
    }
    else {
        return res.status(403).send({ message: 'forbidden access' });
    }
  });


  }
  catch (error) {
    console.error('Database not Connected and Error fetching data: ', error);
   
  }
  // finally {

  // }

}
run().catch(console.dir);
//  



// Your API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Welcome to Express Js Server 5000 Port' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`); 
});
 
