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

postRouter.get("/", readPosts);
postRouter.get("/category/:postCat", readCat);
postRouter.get("/:id", showPost);
postRouter.delete("/:id", verifyToken, deletePost);
postRouter.post("/create", verifyToken, upload.single("image"), addPost);
postRouter.put("/update", verifyToken, upload.single("image"), updatePost);
postRouter.put("/publish", verifyToken, togglePublish);

module.exports = postRouter;
