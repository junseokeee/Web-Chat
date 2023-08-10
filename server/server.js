const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const { Pool } = require('pg');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cake',
    password: '1234',
    port: 5432,
  });

app.set('db', pool);

console.log("Database connection successful!");

app.get('/bots', async (req, res) => {
    try {
      const db = req.app.get('db');
      const result = await db.query('SELECT * FROM bots');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });