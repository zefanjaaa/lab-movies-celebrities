//  Add your code here
const { Schema, model } = require("mongoose");

const celebrityModel = new Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

module.exports = model("Celebrity", celebrityModel);
