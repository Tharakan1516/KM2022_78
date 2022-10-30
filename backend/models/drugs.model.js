const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drugsSchema = new Schema({
  name: String,
  amount: String,
  price: String,
  purpose: String,
  date: String,
});

const drugs = mongoose.model("drugs", drugsSchema);
module.exports = drugs;
