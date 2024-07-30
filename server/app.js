// require("./models/userModel")
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./routes/router");
const PORT = 4001;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


mongoose.connect('mongodb://127.0.0.1:27017/Otp').then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});