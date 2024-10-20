const mongoose = require('mongoose');
const sampleFoods = require('./data.js');
const Food = require('../models/food.js');

const URL = "mongodb://127.0.0.1:27017/QuickBite";

main().
then(()=>console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
}


const  initDB = async() =>{
    await Food.deleteMany({});
    sampleFoods.data = sampleFoods.data.map((obj)=>({...obj}));
    await Food.insertMany(sampleFoods.data);
    console.log("data was initilize...");
}


initDB();