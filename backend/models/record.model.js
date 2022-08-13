const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;