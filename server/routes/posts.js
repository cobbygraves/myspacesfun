const {
  readCat,
  updatePost,
  addPost,
  readPosts,
  showPost,
  deletePost,
  togglePublish,
} = require("../controllers/posts");
const express = require("express");
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/verifyToken");

const postRouter = express.Router();

postRouter.get("/posts", readPosts);
postRouter.get("/posts/category/:postCat", readCat);
postRouter.get("/posts/:id", showPost);
postRouter.delete("/posts/:id", verifyToken, deletePost);
postRouter.post("/posts/create", verifyToken, upload.single("image"), addPost);
postRouter.put(
  "/posts/update",
  verifyToken,
  upload.single("image"),
  updatePost
);
postRouter.put("/posts/publish", verifyToken, togglePublish);

module.exports = postRouter;
