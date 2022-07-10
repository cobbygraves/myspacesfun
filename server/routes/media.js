const {
  updateMedia,
  addMedia,
  readMedia,
  showMedia,
  deleteMedia,
} = require("../controllers/media");
const express = require("express");
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/verifyToken");

const mediaRouter = express.Router();

mediaRouter.get("/", readMedia);
mediaRouter.get("/:id", showMedia);
mediaRouter.delete("/:id", verifyToken, deleteMedia);
mediaRouter.post("/create", verifyToken, upload.single("image"), addMedia);
mediaRouter.put(
  "/update/:id",
  verifyToken,
  upload.single("image"),
  updateMedia
);

module.exports = mediaRouter;
