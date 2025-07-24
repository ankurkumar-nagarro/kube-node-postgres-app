const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'db-service',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'recordsdb',
});

module.exports = pool;
