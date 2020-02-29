const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  title: String,

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", schema);
