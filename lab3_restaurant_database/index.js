const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lab3_restaurant_db';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.get('/restaurants', async (req, res) => {
  try {
    const { sortBy } = req.query;
    if (sortBy && (sortBy.toUpperCase() === 'ASC' || sortBy.toUpperCase() === 'DESC')) {
      const order = sortBy.toUpperCase() === 'ASC' ? 1 : -1;
      const restaurants = await Restaurant.find()
        .select('_id cuisine name borough restaurant_id')
        .sort({ restaurant_id: order })
        .lean();
      const mapped = restaurants.map((r) => ({
        id: r._id,
        cuisines: r.cuisine,
        name: r.name,
        city: r.borough,
        restaurant_id: r.restaurant_id
      }));
      return res.json(mapped);
    }
    const restaurants = await Restaurant.find().lean();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine }).lean();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/restaurants/:cuisineName', async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName;
    const restaurants = await Restaurant.find({
      cuisine: cuisineName,
      borough: { $ne: 'Brooklyn' }
    })
      .select('cuisine name borough')
      .sort({ name: 1 })
      .lean();
    const mapped = restaurants.map((r) => ({
      cuisines: r.cuisine,
      name: r.name,
      city: r.borough
    }));
    res.json(mapped);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
