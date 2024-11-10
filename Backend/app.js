const express = require("express");
const mongoose = require("mongoose");
const Food = require("./models/food.js");
const Review = require("./models/review.js");
const PNG = require('./models/pngData.js');
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const methodOverride = require("method-override");
const review = require("./models/review.js");

mongoose
  .connect("mongodb://localhost:27017/QuickBite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/QuickBite", (req, res) => {
  res.send("I am Home Route");
});

app.get("/QuickBite/menu", async (req, res) => {
  const data = await Food.find();
  res.send(data);
});

app.get("/QuickBite/menu/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Food.findById(id);
  res.send(item);
});

//Post review
app.post("/QuickBite/menu/:id/review", async (req, res) => {
  const { rating, comment } = req.body;
  const { id } = req.params;

  try {
    const item = await Food.findById(id);
    if (!item) {
      return res.status(404).send({ message: "Food item not found" });
    }

    const review = new Review({ rating, comment });
    await review.save();
    console.log(review);
    item.review.push(review);
    await item.save();

    res.status(200).send({ message: 'Review added successfully', item });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Failed to add review', error });
  }
});


//Png Get request
app.get('/QuickBite/png',async(req, res) =>{
  const data = await PNG.find();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
