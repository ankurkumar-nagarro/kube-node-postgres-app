const express = require('express');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/records', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM records');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
