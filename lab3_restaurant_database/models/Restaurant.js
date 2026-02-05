const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  date: Date,
  grade: String,
  score: Number
}, { _id: false });

const addressSchema = new mongoose.Schema({
  building: String,
  street: String,
  zipcode: String,
  coord: [Number]
}, { _id: false });

const restaurantSchema = new mongoose.Schema({
  address: addressSchema,
  borough: String,
  cuisine: String,
  grades: [gradeSchema],
  name: String,
  restaurant_id: String
}, { collection: 'Restaurants' });

restaurantSchema.index({ cuisine: 1 });
restaurantSchema.index({ restaurant_id: 1 });
restaurantSchema.index({ name: 1 });

module.exports = mongoose.model('Restaurant', restaurantSchema);
