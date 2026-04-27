const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock quantity is required'],
      min: [0, 'Stock cannot be negative'],
    },
    taxRate: {
      type: Number,
      required: [true, 'Tax Rate is required'],
      min: [0, 'Rate cannot be negative'],
      max: [100, 'Rate cannot be more than 100'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
