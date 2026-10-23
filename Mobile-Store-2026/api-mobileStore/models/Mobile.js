const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  mobileName: { type: String },
  brandName: { type: String },
  Price: { type: String },
  RAM: { type: String },
  ROM: { type: String },
});
module.exports = mongoose.model("Mobile", mobileSchema);
