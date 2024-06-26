const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  _id: Number,
  name: String,
  image: String,
  generation: String,
  type: [String],
  height: Number,
  weight: Number,
  color: String,
});

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;
