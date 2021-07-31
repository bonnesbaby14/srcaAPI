const mongoose = require("mongoose");
const { Schema } = mongoose;
const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: false,
  },
  web: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("client", clientSchema);
