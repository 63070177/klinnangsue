const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '172.105.112.246',
  user: 'klinnangsue',
  password: 'passdb2022',
  database: 'klinnangsue',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
