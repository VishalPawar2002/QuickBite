const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const pngItemSchema = new Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    }
},{ 
    timestamps: true 
  });

module.exports = mongoose.model('PNG',pngItemSchema);