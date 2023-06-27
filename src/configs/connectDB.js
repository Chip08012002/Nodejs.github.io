import mysql from 'mysql2/promise';

const pool = mysql.createPool ({
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  charset: 'utf8mb4',
})

export default pool;