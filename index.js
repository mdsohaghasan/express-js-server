const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");

// Enable CORS AND BASE ROUTE
app.use(cors());
app.use(express.json());

// Database Connection Code Start

const mongoURI =
  "mongodb+srv://tarbiyahshoaib:fhQnrf3EbJHkSFLK@cluster0.rzdo1wc.mongodb.net/"; // Change this to your MongoDB connection URI
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const programCollection = client.db("mokhter").collection("program");
    const consultancyCollection = client
      .db("mokhter")
      .collection("consultancy");
    const eventCollection = client.db("mokhter").collection("event");
    const lectureCollection = client.db("mokhter").collection("lecture");
    const blogCollection = client.db("mokhter").collection("blog");
    const contactCollection = client.db("mokhter").collection("contact");
    const podcastCollection = client.db("mokhter").collection("podcast");
    const galleryCollection = client.db("mokhter").collection("gallery");
    const bookCollection = client.db("mokhter").collection("book");

    console.log("Database Connect Hoise");
    // DATABASE CONNECTION END

    // api routes /////////////////////////
    // Program api route
    // Consultancy  api route
    // Event  api route
    // Lecture  api route
    // Blog  api route
    // Contact   api route
    // Podcast    api route
    // Gallery   api route
    // Book   api route

    // Program api route  .......................
    app.get("/program", async (req, res) => {
      const programList = await programCollection.find().toArray();
      res.send(programList);
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const programList = await programCollection.find().toArray();
      //     res.send(programList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access that was permission denided' });
      // }
    });

    // Blog Details
    app.get("/program/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await programCollection.findOne(query);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ message: "Program Not Found" });
      }
    });

    // POST Program
    app.post("/addProgram", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      const addProgram = req.body;
      const result = await programCollection.insertOne(addProgram);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ message: "Program Not Found" });
      }
    });

    // delete program
    app.delete("/program/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const programInfo = await programCollection.deleteOne(query);
      if (programInfo) {
        res.status(200).send(programInfo);
      } else {
        res.status(404).send({ message: "Program Not Found" });
      }
    });

    // Consultancy  api route ========================
    app.get("/consultancy", async (req, res) => {
      const consultancyList = await consultancyCollection.find().toArray();
      res.send(consultancyList);

      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const consultancyList = await consultancyCollection.find().toArray();
      //     res.send(consultancyList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access' });
      // }
    });

    // POST Consultancy
    app.post("/addConsultancy", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      const addConsultancy = req.body;
      const result = await consultancyCollection.insertOne(addConsultancy);
      res.send(result);
    });

    // delete Consultancy
    app.delete("/consultancy/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const consultancyInfo = await consultancyCollection.deleteOne(query);
      if (consultancyInfo) {
        res.status(200).send(consultancyInfo);
      } else {
        res.status(404).send({ message: "Consultancy Not Found" });
      }
    });

    // Event  api route  ================================
    app.get("/event", async (req, res) => {
      const eventList = await eventCollection.find().toArray();
      res.send(eventList);
    });

    // POST Event
    app.post("/addevent", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      const addBlog = req.body;
      console.log(addBlog);
      const eventInfo = await eventCollection.insertOne(addBlog);
      if (eventInfo) {
        res.status(200).send(eventInfo);
        console.log(eventInfo);
      } else {
        res.status(404).send({ message: "Event Not Added" });
      }
    });

    // delete event
    app.delete("/event/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const eventInfo = await eventCollection.deleteOne(query);
      if (eventInfo) {
        res.status(200).send(eventInfo);
      } else {
        res.status(404).send({ message: "Event Not Found" });
      }
    });

    // Lecture  api route =================================
    app.get("/lecture", async (req, res) => {
      const lectureList = await lectureCollection.find().toArray();
      res.send(lectureList);
    });

    // POST Lecture
    app.post("/addlecture", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addBlog = req.body;
      console.log(addBlog);
      const lectureInfo = await lectureCollection.insertOne(addBlog);
      if (lectureInfo) {
        res.status(200).send(lectureInfo);
        console.log(lectureInfo);
      } else {
        res.status(404).send({ message: "Lecture Not Added" });
      }
    });

    // delete Lecture
    app.delete("/lecture/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const lectureInfo = await lectureCollection.deleteOne(query);
      if (lectureInfo) {
        res.status(200).send(lectureInfo);
      } else {
        res.status(404).send({ message: "Lecture Not Found" });
      }
    });

    // Blog  api route ====================================
    app.get("/blog", async (req, res) => {
      const blogList = await blogCollection.find().toArray();
      res.send(blogList);
    });

    // Blog Details
    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const blogInfo = await blogCollection.findOne(query);
      if (blogInfo) {
        res.status(200).send(blogInfo);
      } else {
        res.status(404).send({ message: "Blog Not Found" });
      }
    });


    // update blog
    app.put("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log("from update api", data);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          title: data.title,
          author: data.author,
          date: data.date,
          category: data.category,
          url: data.url,
          des: data.des,
        },
      };
      const result = await blogCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });


    // POST Blog
    app.post("/addBlog", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addBlog = req.body;
      console.log(addBlog);
      const result = await blogCollection.insertOne(addBlog);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ message: "Blog Not Found" });
      }
    });

    // delete Blog
    app.delete("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const blogInfo = await blogCollection.deleteOne(query);
      if (blogInfo) {
        res.status(200).send(blogInfo);
      } else {
        res.status(404).send({ message: "Blog Not Found" });
      }
    });

    // Contact   api route  ==========================

    app.get("/contact", async (req, res) => {
      const contactList = await contactCollection.find().toArray();
      res.send(contactList);

      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const contactList = await contactCollection.find().toArray();
      //     res.send(contactList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access' });
      // }
    });

    // POST Blog
    app.post("/addContact", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addContact = req.body;
      console.log(addContact);
      const result = await contactCollection.insertOne(addContact);
      res.send(result);
      console.log(result);
    });

    // delete Blog
    app.delete("/contact/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const contactInfo = await contactCollection.deleteOne(query);
      if (contactInfo) {
        res.status(200).send(contactInfo);
      } else {
        res.status(404).send({ message: "contact Not Found" });
      }
    });

    // Podcast   api route  ================================
    app.get("/podcast", async (req, res) => {
      const podcastList = await podcastCollection.find().toArray();
      res.send(podcastList);

      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const contactList = await contactCollection.find().toArray();
      //     res.send(contactList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access' });
      // }
    });

    // POST Blog
    app.post("/addPodcast", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addPodcast = req.body;
      console.log(addPodcast);
      const result = await podcastCollection.insertOne(addPodcast);
      res.send(result);
      console.log(result);
    });

    // delete Blog
    app.delete("/podcast/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const podcastInfo = await podcastCollection.deleteOne(query);
      if (podcastInfo) {
        res.status(200).send(podcastInfo);
      } else {
        res.status(404).send({ message: "Podcast Not Found" });
      }
    });

    // Gallery   api route  ================================
    app.get("/gallery", async (req, res) => {
      const galleryList = await galleryCollection.find().toArray();
      res.send(galleryList);

      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const contactList = await contactCollection.find().toArray();
      //     res.send(contactList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access' });
      // }
    });

    // POST Blog
    app.post("/addGallery", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addGallery = req.body;
      console.log(addGallery);
      const result = await galleryCollection.insertOne(addGallery);
      res.send(result);
      console.log(result);
    });

    // delete Blog
    app.delete("/gallery/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const galleryInfo = await galleryCollection.deleteOne(query);
      if (galleryInfo) {
        res.status(200).send(galleryInfo);
      } else {
        res.status(404).send({ message: "Gallery Not Found" });
      }
    });

    // Book   api route  ================================
    app.get("/book", async (req, res) => {
      const bookList = await bookCollection.find().toArray();
      res.send(bookList);

      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);
      // if (defultEmail === decodedEmail) {
      //     const contactList = await contactCollection.find().toArray();
      //     res.send(contactList);
      // }
      // else {
      //     return res.status(403).send({ message: 'forbidden access' });
      // }
    });

    // POST Blog
    app.post("/addBook", async (req, res) => {
      // const defultEmail = "sohag@gmail.com";
      // const decodedEmail = req.headers.authorization;
      // console.log(decodedEmail);

      const addBook = req.body;
      console.log(addBook);
      const result = await bookCollection.insertOne(addBook);
      res.send(result);
      console.log(result);
    });

    // delete Blog
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const bookInfo = await bookCollection.deleteOne(query);
      if (bookInfo) {
        res.status(200).send(bookInfo);
      } else {
        res.status(404).send({ message: "Book Not Found" });
      }
    });

    // Contact   api route END ..............................
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
  // finally {

  // }
}
run().catch(console.dir);
//

// Your API route
app.get("/", (req, res) => {
  res.json({ message: "Hello, Welcome to Express Js Server 5000 Port" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
