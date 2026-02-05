const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lab3_restaurant_db';

const sampleRestaurants = [
  {
    address: { building: '1007', street: 'Morris Park Ave', zipcode: '10462', coord: [-73.856077, 40.848447] },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [{ date: new Date(), grade: 'A', score: 2 }],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    address: { building: '469', street: 'Flatbush Avenue', zipcode: '11225', coord: [-73.961704, 40.662942] },
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    grades: [{ date: new Date(), grade: 'A', score: 8 }],
    name: 'Wendy\'s',
    restaurant_id: '30112340'
  },
  {
    address: { building: '351', street: 'West 57 Street', zipcode: '10019', coord: [-73.976332, 40.764781] },
    borough: 'Manhattan',
    cuisine: 'Japanese',
    grades: [{ date: new Date(), grade: 'A', score: 13 }],
    name: 'Sushi Seki',
    restaurant_id: '4038294'
  },
  {
    address: { building: '278', street: 'Columbus Avenue', zipcode: '10023', coord: [-73.966958, 40.778872] },
    borough: 'Manhattan',
    cuisine: 'Italian',
    grades: [{ date: new Date(), grade: 'A', score: 11 }],
    name: 'Patsy\'s Pizzeria',
    restaurant_id: '40384334'
  },
  {
    address: { building: '97', street: 'Horatio Street', zipcode: '10014', coord: [-74.005288, 40.737355] },
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    grades: [{ date: new Date(), grade: 'A', score: 10 }],
    name: 'Murray\'s Bagels',
    restaurant_id: '40385100'
  },
  {
    address: { building: '771', street: '9 Avenue', zipcode: '10019', coord: [-73.990371, 40.765394] },
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    grades: [{ date: new Date(), grade: 'B', score: 18 }],
    name: 'Brooklyn Deli',
    restaurant_id: '40385101'
  }
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(sampleRestaurants);
  console.log('Seed data inserted. Total documents:', await Restaurant.countDocuments());
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
