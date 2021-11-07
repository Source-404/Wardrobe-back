const Pool = require("pg").Pool;

// const pool = new Pool ({
//     user: "postgres",
//     password: "ujjwal",
//     host : "localhost",
//     port : 5432,
//     database : "bug_tracking"
// });

const pool = new Pool({
  connectionString:
    "postgresql://uoxhlwogxay5v5apuy56:VRz8IpV2CsZPXxySlGLK@bmsoc22spurxnysqdrf8-postgresql.services.clever-cloud.com:5432/bmsoc22spurxnysqdrf8",
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect();

module.exports = pool;
