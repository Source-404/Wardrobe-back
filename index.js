const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/userdata", async (req, res) => {
  const data = await pool.query("SELECT * FROM users");
  res.json(data.rows);
});

app.get("/productdata", async (req, res) => {
  const data = await pool.query("SELECT * FROM product");
  res.json(data.rows);
});

app.listen(5000, () => {
  console.log("Server is running");
});
