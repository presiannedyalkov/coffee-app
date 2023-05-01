const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// name, type, grindEspresso, grindFilterCoffee, temperatureEspresso, temperatureFilterCoffee, inputEspresso, outputEspresso, ratio, rating, image, price, notes

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    enum: ['filter coffee', 'espresso'],
    trim: true,
  },
  grindEspresso: {
    type: String,
    trim: true,
  },
  grindFilterCoffee: {
    type: String,
    trim: true,
  },
  temperatureEspresso: {
    type: Number,
  },
  temperatureFilterCoffee: {
    type: Number,
  },
  inputEspresso: {
    type: Number,
  },
  outputEspresso: {
    type: Number,
  },
  ratio: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  image: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  notes: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Coffee", coffeeSchema);
