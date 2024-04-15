const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema({
  pokemon: Schema.Types.ObjectId,
});

const Favorite = model("Favorite", favoriteSchema);
module.exports = Favorite;
