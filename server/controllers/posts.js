const PostModel = require("../models/posts");
const createError = require("http-errors");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

const addPost = (req, res, next) => {
  //logic to add post to the database

  const postDate = new Date();
  const year = postDate.getFullYear();
  const monthIndex = postDate.getMonth() + 1;
  let month = "";
  switch (monthIndex) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  const date = { month, year };
  let fileName = "";
  if (req.file) {
    fileName = req.file.filename;
  }
  const post = {
    id: uuid.v4(),
    image: fileName,
    published: true,
    date,
    ...req.body,
  };
  const postDocument = new PostModel(post);
  postDocument.save((err) => {
    if (err) {
      return next(createError(400, error));
    }
    res.status(200).json({ message: "successful" });
  });
};

//logic to read all posts from database
const readPosts = (req, res, next) => {
  PostModel.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: "Posts can't be retrieved" });
      next(err);
    }
  });
};

//read a single post from database
const showPost = (req, res) => {
  const postId = req.params.id;
  PostModel.findOne({ id: postId }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: "Something went wrong" });
    }
  });
};

//update post in the database
const updatePost = (req, res, next) => {
  let fileName = "";
  if (req.file) {
    fileName = req.file.filename;
  }
  const updatedPost = { image: fileName, ...req.body };
  const { id } = updatedPost;
  PostModel.findOneAndUpdate(
    { id: id },
    updatedPost,
    {
      new: true,
    },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "Post update failed" });
        next(err);
      }
    }
  );
};

// method to delete post in the database
const deletePost = (req, res, next) => {
  const postId = req.params.id;
  PostModel.findOne({ id: postId }, (err, doc) => {
    if (!err) {
      const imageName = doc.image;
      if (fs.existsSync(path.join(__dirname, "..", "assets", imageName))) {
        fs.unlink(path.join(__dirname, "..", "assets", imageName), (err) => {
          if (err) throw err;
          console.log("post image was deleted");
        });
      }
      PostModel.deleteOne({ id: postId }, (err) => {
        if (err) {
          res.status(500).json(err);
          next(err);
        } else {
          res.status(200).json({ message: "Post deleted successfully..." });
        }
      });
    } else {
      console.log(err);
    }
  });
};

const togglePublish = (req, res, next) => {
  const updatedPost = req.body;
  const { id } = updatedPost;
  PostModel.findOneAndUpdate(
    { id: id },
    updatedPost,
    {
      new: true,
    },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.status(404).json({ message: `Error with server` });
        next(err);
      }
    }
  );
};

module.exports = {
  updatePost,
  addPost,
  readPosts,
  showPost,
  deletePost,
  togglePublish,
};
