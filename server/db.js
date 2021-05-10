const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "furkan286",
    host: "localhost",
    port: 5432,
    database: "kitaplar"
});

module.exports = pool;
