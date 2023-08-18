const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = process.env.PORT || 4000;
const { Pool } = require("pg");

app.use(express.json());
app.use(fileUpload());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoURI = "mongodb://localhost:27017/";
const dbName = "cake";

MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db(dbName);
  const botDataCollection = db.collection("botdata");

  console.log("Connected to MongoDB");

  app.set("db", botDataCollection);
});

app.get("/", (req, res) => {
  res.send("Hello, this is the server.");
});

app.post("/uploadInteraction", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }

    const botDataCollection = req.app.get("db");
    const uploadedFile = req.files.file;
    const fileName = uploadedFile.name;
    const jsonData = JSON.parse(uploadedFile.data.toString());

    const itemName = fileName;
    const itemFeature = JSON.stringify(jsonData);
    await botDataCollection.insertOne({ name: itemName, feature: itemFeature });

    res.json({ message: "File uploaded and data inserted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const corsOptions = {
  origin: "*",
  methods: "GET,POST",
};

app.use(cors(corsOptions));
