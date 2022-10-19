const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(8000, () => console.log("Backend running"));
