const mongoose = require('mongoose');

const spaceshipSchema = new mongoose.Schema({
  name: String,
  img: String,
  desc: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const spaceshipModel = mongoose.model('Spaceship', spaceshipSchema)

module.exports = spaceshipModel
