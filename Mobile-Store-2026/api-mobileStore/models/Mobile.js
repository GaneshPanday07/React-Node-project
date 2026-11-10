
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  mobileBrand: {
    type: String,
    required: true
  },
  mobileModel: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  rom: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Mobile", mobileSchema);

