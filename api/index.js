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

app.get('/records/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { rows } = await db.query('SELECT * FROM records WHERE id = $1', [userId]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/healthz', (req, res) => {
  res.send('OK');
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running on port ${PORT}`);
});
