require("dotenv").config();
// require("./models/userModel")
const express = require("express");
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


mongoose.connect('mongodb://127.0.0.1:27017/Otp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});