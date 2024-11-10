const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require('./review.js');

const foodSchema = new Schema(
    {
      name: { 
        type: String, 
        required: true 
      },
      description: { 
        type: String 
      },
      price: { 
        type: Number, 
        required: true, 
        min: 0 
      },
      category: { 
        type: String, 
        required: true,
        enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage'], // Example categories
      },
      image: { 
        type: String 
      },
      available: { 
        type: Boolean, 
        default: true 
      },
      discount: { 
        type: Number, 
        min: 0,
        max: 100, // Assuming discount is in percentage
      },
      vegNonVeg: { 
        type: String, 
        enum: ['veg', 'non-veg'], 
        required: true 
      },
      review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review',
      },
    ],
    }, 
    { 
      timestamps: true 
    }
  );


module.exports = mongoose.model('Food',foodSchema);