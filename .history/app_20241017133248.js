const express = require("express");
const {
  convertAndValidateNumsArray,
  calculateMean,
  calculateMedian,
  calculateMode,
} = require("./helpers");
const app = express();

//routes

//Mean route
app.get("/mean", (req, res) => {
  try {
    if (!req.query.nums) {
      throw new Error("nums are required.");
    }
    const nums = convertAndValidateNumsArray(req.query.nums);
    const mean = calculateMean(nums);
    return res.json({ operation: "mean", value: mean });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

//Median route
app.get("/median", (req, res) => {
  try {
    if (!req.query.nums) {
      throw new Error("nums are required.");
    }
    const nums = convertAndValidateNumsArray(req.query.nums);
    const median = calculateMedian(nums);
    return res.json({ operation: "median", value: median });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

//Mode route
app.get("/mode", (req, res) => {
  try {
    if (!req.query.nums) {
      throw new Error("nums are required.");
    }
    const nums = convertAndValidateNumsArray(req.query.nums);
    const mode = calculateMode(nums);
    return res.json({ operation: "mode", value: mode });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
