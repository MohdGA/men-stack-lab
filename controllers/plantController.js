const express = require('express');
const router = express.Router();
const Plants = require('../models/plant');


// All in this going to plants

router.get('/', async (req,res) => {
  const allPlants = await Plants.find();
  console.log(allPlants)
  res.render('plants/index.ejs', {allPlants})
})




router.get('/new', (req,res) => {
  res.render('plants/new.ejs')
});

router.post('/', async (req,res) => {
  if(req.body.isVerified === "on"){
    req.body.isVerified = true;
  }else{
    req.body.isVerified = false
  };
  await Plants.create(req.body);
  res.redirect('plants/new')
});



module.exports = router;

