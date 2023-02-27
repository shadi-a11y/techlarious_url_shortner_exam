const express = require('express');
const shortid = require('shortid');
const router = express.Router();
const Url = require('../models/urlModel');

// Define the shorten endpoint
// This route handles incoming POST requests to shorten a given URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

// Find or create a URL document
  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      res.json(url);
    } else {
      const urlCode = shortid.generate();
      const shortUrl = `https://yourdomain.com/${urlCode}`;
      
      url = new Url({
        originalUrl,
        urlCode,
        shortUrl
      });

      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
