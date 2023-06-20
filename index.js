const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = 8080;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
