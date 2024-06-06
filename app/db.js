const pg = require('pg');
const { Pool } = pg;
const sql = new Pool({
    connectionString: process.env
})