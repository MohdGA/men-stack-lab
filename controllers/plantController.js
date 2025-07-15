const express = require('express');
const router = express.Router();
const Plants = require('../models/plant');
const Plant = require('../models/plant');


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

router.get('/:plantId', async (req,res) => {
  const foundPlant = await Plant.findById(req.params.plantId);
  res.render('plants/show.ejs', {foundPlant});
});

router.delete('/:plantId', async (req,res) => {
  await Plant.findByIdAndDelete(req.params.plantId);
  res.redirect('/plants')
});

router.get('/:plantId/edit', async (req,res) => {
  const foundPlant = await Plant.findById(req.params.plantId);
  res.render('plants/edit.ejs',{foundPlant});
});


router.put('/:plantId', async (req, res) => {
	if (req.body.isVerified === 'on') {
		req.body.isVerified = true
	} else {
		req.body.isVerified = false
	}
	await Plant.findByIdAndUpdate(req.params.plantId, req.body)
	res.redirect(`/plants/${req.params.plantId}`);
})

module.exports = router;

