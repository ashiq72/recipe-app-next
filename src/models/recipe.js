// import mongoose, { Schema } from "mongoose";

// const recipeSchema = new Schema(
//   {
//     title: {
//       type: String,
//       // required: true,
//     },
//     description: {
//       type: String,
//       // required: true,
//     },
//     photourl: {
//       type: String,
//       // required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Recipe = mongoose.model("Recipe", recipeSchema);

// export default Recipe;
// models/Recipe.js
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photourl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

if (mongoose.models && mongoose.models.Recipe) {
  module.exports = mongoose.models.Recipe;
} else {
  // Define the Recipe model
  const Recipe = mongoose.model("Recipe", recipeSchema);
  module.exports = Recipe;
}
