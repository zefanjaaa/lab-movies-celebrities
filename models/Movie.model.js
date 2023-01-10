const { Schema, model } = require("mongoose");

const movieModel = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast_id: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = model("Movies", movieModel);
