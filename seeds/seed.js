const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const MONGO_URI =
  process.env.MONGDB_URI || "mongodb://127.0.0.1:27017/lab-movies-celebrities";

const celebrity = [
  {
    celebrity: "zefanja",
    occupation: "moviestar",
    catchphrase: "haha joke",
  },
];

mongoose.connect(MONGO_URI);
Celebrity.insertMany(celebrity);

// mongoose.connect(MONGO_URI).then(() => {
//   return Celebrity.create(Celebrity);
// });
