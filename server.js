const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Conected to MongoDB${mongoose.connection.name}`);
});

app.get('/test', (req,res) => {
  res.send('hello not world!');
})

app.listen(port, () => {
  console.log("WELCOME TO THE LAB");
})