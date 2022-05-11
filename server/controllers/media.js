const MediaModel = require("../models/media");
const createError = require("http-errors");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

//logic to add media to the database
const addMedia = (req, res, next) => {
  let fileName = "";
  if (req.file) {
    fileName = req.file.filename;
  }
  const media = {
    id: uuid.v4(),
    media: fileName,
    ...req.body,
  };
  const mediaDocument = new MediaModel(media);
  mediaDocument.save((err) => {
    if (err) {
      return next(createError(400, error));
    }
    res.status(200).json({ message: "successful" });
  });
};

//logic to read all media from database
const readMedia = (req, res, next) => {
  MediaModel.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: "Media can't be retrieved" });
      next(err);
    }
  });
};

//read a single media from database
const showMedia = (req, res) => {
  const mediaId = req.params.id;
  MediaModel.findOne({ id: mediaId }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: "Something went wrong" });
    }
  });
};

//update media in the database
const updateMedia = (req, res, next) => {
  let fileName = "";
  if (req.file) {
    fileName = req.file.filename;
  }
  const updatedMedia = { media: fileName, ...req.body };
  const { id } = updatedMedia;
  MediaModel.findOneAndUpdate(
    { id: id },
    updatedMedia,
    {
      new: true,
    },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "media update failed" });
        next(err);
      }
    }
  );
};

// method to delete media in the database
const deleteMedia = (req, res, next) => {
  const mediaId = req.params.id;
  MediaModel.findOne({ id: mediaId }, (err, doc) => {
    if (!err) {
      const mediaName = doc.media;
      if (fs.existsSync(path.join(__dirname, "..", "assets", mediaName))) {
        fs.unlink(path.join(__dirname, "..", "assets", mediaName), (err) => {
          if (err) throw err;
          console.log("media image was deleted");
        });
      }
      MediaModel.deleteOne({ id: mediaId }, (err) => {
        if (err) {
          res.status(500).json(err);
          next(err);
        } else {
          res.status(200).json({ message: "Media deleted successfully..." });
        }
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  updateMedia,
  addMedia,
  readMedia,
  showMedia,
  deleteMedia,
};
