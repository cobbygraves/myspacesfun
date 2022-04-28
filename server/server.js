const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

dotenv.config();

const server = express();

server.use(express.json({ limit: "200mb", extended: true }));
server.use(express.urlencoded({ limit: "200mb", extended: true }));
server.use(cors());

server.use("/images", express.static(path.join(__dirname, "assets")));

server.use(userRouter);
server.use(postRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
  if (!err) {
    mongoose.connect(
      process.env.MONGO_URL,
      { useUnifiedTopology: true, useNewUrlParser: true },
      (err) => {
        if (!err) {
          console.log("Connections Successful");
        } else {
          console.log("Error Connecting To Database");
        }
      }
    );
  } else {
    console.log("Error Connecting To Server");
  }
});
