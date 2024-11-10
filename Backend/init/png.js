const mongoose = require('mongoose');
const data = require('./pngData.js');
const PNG = require('../models/pngData.js');

const URL = "mongodb://127.0.0.1:27017/QuickBite";

main().
then(()=>console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
}



const initData = async() =>{
    await PNG.deleteMany({});
    data.pngData = data.pngData.map((obj)=>({...obj}));
    await PNG.insertMany(data.pngData);
    console.log('PNG data was initilized');
}

initData();