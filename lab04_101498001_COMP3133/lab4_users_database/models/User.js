const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [4, 'Username must be at least 4 characters'],
      maxlength: [100, 'Username must not exceed 100 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: (props) => 'City must contain only alphabets and spaces',
      },
    },
    website: {
      type: String,
      required: [true, 'Website URL is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/.test(v);
        },
        message: (props) => 'Website must be a valid http or https URL',
      },
    },
    zipCode: {
      type: String,
      required: [true, 'Zip code is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{5}-\d{4}$/.test(v);
        },
        message: (props) =>
          'Zip code must be in format DDDDD-DDDD (e.g. 12345-1234)',
      },
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
        },
        message: (props) =>
          'Phone must be in format D-DDD-DDD-DDDD (e.g. 1-123-123-1234)',
      },
    },
  },
  { collection: 'users', timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
