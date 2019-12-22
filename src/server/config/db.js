import mysql from 'mysql2';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
const connection = mysql.createConnection(DATABASE_URL);

export default connection;
