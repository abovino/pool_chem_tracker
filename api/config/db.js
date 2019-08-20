require('dotenv').config();

const db = require('knex')({
  client: 'mssql',
  connection: {
		host : process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'pool_chem_tracker'
  }
});

module.exports = db;
