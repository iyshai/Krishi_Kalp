const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  Commodity: String,
  Variety: String,
  '2023-24': Number,
});

const Commodity = mongoose.model('Commodity', commoditySchema);
module.exports = Commodity;
