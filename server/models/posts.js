const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "Required",
  },
  author: {
    type: String,
    required: "Required",
  },
  date: {
    type: Object,
    required: "Required",
  },
  category: {
    type: String,
  },
  title: {
    type: String,
    required: "Required",
  },
  content: {
    type: String,
    required: "Required",
  },
  image: {
    type: String,
  },
  published: {
    type: Boolean,
    required: "Required",
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
