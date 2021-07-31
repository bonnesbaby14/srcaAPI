const mongoose = require("mongoose");
const { Schema } = mongoose;
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  date_start: {
    type: Date,
    required: false,
  },
  date_finish: {
    type: Date,
    required: false,
  },

  id_client: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("project", projectSchema);
