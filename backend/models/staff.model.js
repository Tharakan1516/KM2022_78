const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: String,
  telephone: String,
  address: String,
  salary: String,
  date: String,
});

const staff = mongoose.model("staff", staffSchema);
module.exports = staff;
