// connect our server with our database
//indirdiğimiz db kütüphanesi server ve database bağlantısını gerçekleştiriyor. ve bu bağlantıyı db.js dosyasında gerçekleştiriyoruz.

const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "omercan01",
    host: "localhost",
    port: 5432,
    database: "jwttutorial"
});

module.exports = pool;