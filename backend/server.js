const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

const PORT = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nancy@1466",
  database: "revspire_db",
});

app.use(cors());

app.get("/api/data", (req, res) => {
  connection.query("SELECT * FROM content", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ data: results });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
