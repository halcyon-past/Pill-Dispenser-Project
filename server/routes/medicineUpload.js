const express = require('express');
const Medicine = require('../models/medicine');

const router = express.Router();

// Route for uploading medicine data
router.post('/', async (req, res) => {
  const data = req.body;
  console.log(data);

  const newMedicine = new Medicine({ data });

  try {
    const savedMedicine = await newMedicine.save();
    res.send(`Data saved successfully: ${JSON.stringify(savedMedicine)}`);
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data');
  }
});

module.exports = router;
