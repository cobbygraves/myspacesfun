const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "Required",
  },
  media: {
    type: String,
    required: "Required",
  },
  title: {
    type: String,
    required: "Required",
  },
});

const MediaModel = mongoose.model("media", MediaSchema);

module.exports = MediaModel;
