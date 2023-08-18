const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoURI = 'mongodb://localhost:27017/';
const dbName = 'cake';


MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db(dbName);
  const botDataCollection = db.collection('botdata');

  console.log('Connected to MongoDB');

  app.set('db', botDataCollection);
});

app.get('/', (req, res) => {
  console.log('GET request received on /');
  res.send('Hello, this is the server.');
});

app.post('/uploadInteraction', async (req, res) => {
  try {
    console.log('POST request received on /uploadInteraction');
    
    const botDataCollection = req.app.get('db');
    if (!botDataCollection) {
      console.log('Database connection not established.');
      return res.status(500).json({ error: 'Database connection not established.' });
    }

    const data = req.body;
    console.log('Received data:', data);

    const itemName = data.character.name;
    const itemFeature = JSON.stringify(data.interactions);
    await botDataCollection.insertOne({ name: itemName, feature: itemFeature });

    console.log('Data inserted successfully.');

    res.json({ message: 'Data inserted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const corsOptions = {
  origin: '*',
  methods: 'GET,POST',
};

app.use(cors(corsOptions));
