const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritSchema = new Schema({

  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  img: String,
  level: String,
});

// This creates our model from the above schema, using mongoose's model method
const FavoritModel = mongoose.model("Favorite", FavoritSchema);

// Export the Article model
module.exports = FavoritModel;