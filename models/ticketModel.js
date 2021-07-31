const mongoose = require("mongoose");
const { Schema } = mongoose;
const ticketSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  import: {
    type: Number,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  id_client: {
    type: String,
    required: true,
  },
  id_project: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("ticket", ticketSchema);
