const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const morgan = require('morgan');

// Controllers
 const plantController = require('./controllers/plantController')

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB' + mongoose.connection.name);
});

// MiDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));


app.get('/', (req,res) => {
  res.render('index.ejs')
});



app.use('/plants', plantController)

app.listen(port, () => {
  console.log("WELCOME TO THE LAB");
})