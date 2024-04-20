const express = require('express');
const Medicine = require('../models/medicine');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const latestData = await Medicine.find().sort({ _id: -1 }).limit(1);
  
      if (latestData.length > 0) {
        res.json(latestData[0]['data']);
      } else {
        res.json({ message: 'No data found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;