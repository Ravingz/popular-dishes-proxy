const mongoose = require('mongoose');

// mongoose.connect('mongodb://mongo:27017/turntable', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/turntable', {useNewUrlParser: true, useUnifiedTopology:true});

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  _id: Number,
  name: String,
  dates: [String],
  timeslots: [String],
  partySize: [Number],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;



