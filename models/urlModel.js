const mongoose = require('mongoose');
const shortid = require('shortid');


//Creating the url schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true,
    // generate a unique short ID
    default: shortid.generate
  },
  shortUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Url', urlSchema);
