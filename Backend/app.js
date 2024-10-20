const express = require("express");
const mongoose = require("mongoose");
const Food = require("./models/food.js");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const methodOverride = require("method-override");

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

// app.post("/QuickBite/menu/:id/show", async (req, res) => {
//   let { id } = req.params;
//   console.log("ID from URL:", id); // Logging the id from the URL
//   res.json({ message: `ID received: ${id}` }); // Responding to client for verification
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
