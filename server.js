const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req,res) => {
  res.render('index.ejs')
})

app.get('/test', (req,res) => {
  res.send('hello not world!');
})

app.listen(port, () => {
  console.log("WELCOME TO THE LAB");
})