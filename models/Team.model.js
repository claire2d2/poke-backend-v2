const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: String,
  members: { type: [Types.Schema.ObjectId], maximum: 6, minimum: 6 },
  archived: Boolean,
  isShiny: Boolean,
});

const Team = model("Team", teamSchema);
module.exports = Team;
