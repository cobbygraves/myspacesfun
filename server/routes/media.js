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

mediaRouter.get("/media", readMedia);
mediaRouter.get("/media/:id", showMedia);
mediaRouter.delete("/media/:id", verifyToken, deleteMedia);
mediaRouter.post(
  "/media/create",
  verifyToken,
  upload.single("image"),
  addMedia
);
mediaRouter.put(
  "/media/update",
  verifyToken,
  upload.single("image"),
  updateMedia
);

module.exports = mediaRouter;
